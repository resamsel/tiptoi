import {expect, test} from '@oclif/test';
import GetCommand from '../../../src/commands/get';

describe(GetCommand.name, () => {
  test
    .stdout()
    .command(['get', '--target=/tmp/'])
    .it('runs get cmd', ctx => {
      expect(ctx.stdout).to.contain('Search:');
    });
});
