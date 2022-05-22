import { createWriteStream, unlink } from 'fs';
import { get } from 'https';
import ErrnoException = NodeJS.ErrnoException;

export const parseResponse = <T>(s: string): T => {
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

