import crypto from 'crypto';

export function convertToMd5(text: string) {
  return crypto.createHash('md5').update(text).digest('hex');
}
