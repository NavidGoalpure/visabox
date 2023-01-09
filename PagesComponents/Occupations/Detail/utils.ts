import { AssessingAuthorityAbv } from 'Interfaces/Documents/occupation';
import { ParsedUrlQuery } from 'querystring';

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
