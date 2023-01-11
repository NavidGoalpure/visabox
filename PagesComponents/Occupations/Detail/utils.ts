import { AssessingAuthorityAbv } from 'Interfaces/Documents/occupation';
import { ParsedUrlQuery } from 'querystring';
import { MLTSSL_LIST, ROL_LIST, STSOL_LIST } from './const';

/**
 *این فاننکشن پارامز ها رو از یوآرال میگیره و بر اساس اون فیلتر کوئری رو میسازه
 *اگه پاارامز یک عدد باشه، فیلتر رو بر اساس کد و اگه استرینگ باشه فیلتر رو بر اساس اسلاگ برمیگردونه
 * @export
 * @param {(ParsedUrlQuery | undefined)} params
 * @return {*}  {{
 *   slug?: string;
 *   code?: number;
 * }}
 */
export function getSmartparam(params: ParsedUrlQuery | undefined): {
  slug?: string;
  code?: number;
} {
  const numberParam = Number(params?.slugOrCode);
  return isNaN(numberParam) === true
    ? { slug: params?.slugOrCode?.toString() || '' }
    : { code: Number(params?.slugOrCode) };
}
///////////////////
export function isCodeIn_ROL(code: number): boolean {
  return ROL_LIST.includes(code);
}
/////////
export function isCodeIn_STSOL(code: number): boolean {
  return STSOL_LIST.includes(code);
}
////////////
export function isCodeIn_MLTSSL(code: number): boolean {
  return MLTSSL_LIST.includes(code);
}
