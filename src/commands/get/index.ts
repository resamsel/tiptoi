import {Command} from '@oclif/core';
import {flags} from '@oclif/core/lib/parser';
import {Axios} from 'axios';
import ux from 'cli-ux';
import {Answers, DistinctChoice, prompt} from 'inquirer';
import * as os from 'node:os';
import {SearchResponse} from '../../model';
import {download, parseResponse} from '../../util';

const baseUrl = 'https://www.ravensburger.de';
const path = '/produkte/kinderbuecher/tiptoi/tiptoi-entdecke-die-tiere-afrikas-32909/searchSuggest.form';
const formPath = '/TiptoiDownload.form';
const linkRegex = /href="(https:\/\/cdn\.ravensburger\.de\/db\/applications\/(.+\.gme))"/;

const getProducts = (axios: Axios, answers: Answers): Promise<DistinctChoice[]> => {
  return axios.get(path, {params: {query: answers.Search}})
    .then(searchRes => {
      const response: SearchResponse = parseResponse(searchRes.data);
      return response.produkte.map(p => ({
        name: p.label,
        value: p,
      }));
    });
};

export default class GetCommand extends Command {
  static description = 'Get tiptoi® .gme files'

  static flags = {
    'target': flags.string({
      char: 't',
      description: 'Download .gme file to this directory',
      default: os.homedir() + '/Downloads/',
    }),
  }

  async run(): Promise<void> {
    const {flags} = await this.parse(GetCommand);

    const axios = new Axios({baseURL: baseUrl});

    prompt([
      {type: 'input', name: 'Search'},
      {type: 'list', name: 'Product', choices: answers => getProducts(axios, answers)},
    ])
      .then((answers: Answers) => {
        ux.action.start('Retrieving download link');
        axios.get(formPath, {params: {itemId: answers.Product.artikelNr}})
          .then(formRes => {
            ux.action.stop();
            const match = formRes.data.match(linkRegex);
            if (match) {
              const link = match[1];
              const filename = match[2];
              const dest = flags.target + filename;

              ux.action.start('Downloading');
              download(link, dest, (err) => {
                ux.action.stop();
                if (err) {
                  return this.log(`Could not download ${link} (${err})`);
                }

                this.log('Downloaded to ' + dest);
              });
            }
          });
      });
  }
}
