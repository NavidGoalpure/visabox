// import { createHash } from 'crypto';
import MD5 from 'crypto-js/md5';

export function convertToMd5(text: string) {
  // return createHash('md5').update(text).digest('hex');
  return MD5(text).toString();
}
