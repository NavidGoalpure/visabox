import {
  EnLanguage,
  EnLanguageArray,
  En_FaLanguage,
  En_FaLanguageArray,
  MultiLanguageText,
  MultiLanguageTextArray,
} from "Interfaces/Database";
import {
  isMultiLanguageTextArrayIsEmpty,
  translatedObject,
  translateDynamicArray,
} from "./Utils";

////////////////
/**
 *  متدی که به کمک آن میتوانیم براساس زبان انتخابی کاربر، عبارت مناسبی که از سمت سرور می‌آید را نشان بدهیم.
 * اگر عبارت در آن زبان خالی بود، زبان انگلیسی را به عنوان دیفالت برمیگردانیم
 
 * @return      جمله نهایی به زبان کاربر- که از یوآرال گرفته شده- 
 */
export const useDynamicTranslation = () => {
  return {
    dt: (statementObj: MultiLanguageText | EnLanguage | En_FaLanguage | undefined) =>
      translatedObject({ statementObj }),
    dtArray: (
      statementObj:
        | MultiLanguageTextArray
        | EnLanguageArray
        | En_FaLanguageArray
        | undefined
    ) => translateDynamicArray(statementObj),
    isMultiLanguageTextArrayIsEmpty,
  };
};
