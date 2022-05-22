import {createWriteStream, unlink} from 'node:fs';
import {get} from 'node:https';
import ErrnoException = NodeJS.ErrnoException

export const parseResponse = <T>(s: string): T => {
  // eslint-disable-next-line no-eval
  return eval('(' + s + ')');
};

export const download = (url: string, dest: string, cb: (err?: ErrnoException | null | undefined) => void): void => {
  const file = createWriteStream(dest);
  get(url, (response) => {
    response.pipe(file);
    file.on('finish', () => file.close(cb));
  })
    .on('error', () => unlink(dest, cb));
};

