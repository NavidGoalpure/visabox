import {
  AssessingAuthorityAbv,
  Occupation,
} from 'Interfaces/Occupation/occupation';
import { ParsedUrlQuery } from 'querystring';
import {
  MLTSSL_LIST,
  multiAssessingAuthority,
  ROL_LIST,
  STSOL_LIST,
} from './const';

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
/**
 *مشخص میکنه که آیا این کد در لیست آر او ال وجود داره یا نه
 * @export
 * @param {number} code
 * @return {*}  {boolean}
 */

export function isCodeIn_ROL(code: number): boolean {
  return ROL_LIST.includes(code);
}
/////////
/**
 *مشخص میکنه که آیا این کد در لیست اس تی اس او ال وجود داره یا نه
 * @export
 * @param {number} code
 * @return {*}  {boolean}
 */

export function isCodeIn_STSOL(code: number): boolean {
  return STSOL_LIST.includes(code);
}

////////////
/**
 *مشخص میکنه که آیا این کد در لیست ام ال تی اس اس ال وجود داره یا نه
 * @export
 * @param {number} code
 * @return {*}  {boolean}
 */
export function isCodeIn_MLTSSL(code: number): boolean {
  return MLTSSL_LIST.includes(code);
}
///////
/**
 *مشخص میکنه که آیا ویزای ۱۸۹ ایالتی برای این آکیوپیشن تعریف شده یا نه
 * @export
 * @param {number} code
 * @return {*}  {boolean}
 */
export function has189Visa(code: number): boolean {
  return isCodeIn_MLTSSL(code);
}

/**
 *مشخص میکنه که آیا ویزای ۱۹۰ ایالتی برای این آکیوپیشن تعریف شده یا نه
 * @export
 * @param {number} code
 * @return {*}  {boolean}
 */
export function has190Visa(code: number): boolean {
  return isCodeIn_MLTSSL(code) || isCodeIn_STSOL(code);
}

/**
 *مشخص میکنه که آیا ویزای ۴۹۱ ایالتی برای این آکیوپیشن تعریف شده یا نه
 * @export
 * @param {number} code
 * @return {*}  {boolean}
 */
export function has491StateVisa(code: number): boolean {
  return isCodeIn_MLTSSL(code) || isCodeIn_STSOL(code) || isCodeIn_ROL(code);
}

/**
 *مشخص میکنه که آیا ویزای ۴۹۱ فامیلی برای این آکیوپیشن تعریف شده یا نه
 * @export
 * @param {number} code
 * @return {*}  {boolean}
 */
export function has491FamilyVisa(code: number): boolean {
  return isCodeIn_MLTSSL(code);
}

/**
 *مشخص میکنه که هیچکدام از ۴ نوع ویزای اسکیل ورکر برای این کد تعریف شده یا نه
 * @export
 * @param {Occupation} occupation
 * @return {*}  {boolean}
 */
export function hasAnyVisaOption(occupation: Occupation): boolean {
  if (
    occupation?.backlog_section === undefined ||
    (!has189Visa(occupation.code) &&
      !has190Visa(occupation.code) &&
      !has491StateVisa(occupation.code) &&
      !has491FamilyVisa(occupation.code))
  )
    return false;
  return true;
}
export function getSmartAssessingAuthorities({
  code,
  assessing_authority,
}: {
  code: number;
  assessing_authority: AssessingAuthorityAbv;
}): AssessingAuthorityAbv[] {
  let res = [assessing_authority];
  multiAssessingAuthority.map((assess) => {
    if (assess?.code === code) res = [...assess?.assessingAuthority_abv];
  });
  return res;
}
