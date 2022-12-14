import { MAJOR_GROUP, Minor_GROUP, SUB_MAJOR_GROUP } from "consts/anszco";
import { MultiLanguageText } from "interfaces";
import { LanguageKeys } from "./const";

export const ConvertAnzscoCodeToTitle = (
  anzscoCode: number
): MultiLanguageText | undefined => {
  const anzscoCodeLength = anzscoCode.toString().length;
  switch (anzscoCodeLength) {
    case 1:
      const majorGroupTitle = MAJOR_GROUP.find(
        (element) => element?.code > anzscoCode
      );
      return majorGroupTitle?.title;
    case 2:
      const subMajorGroupTitle = SUB_MAJOR_GROUP.find(
        (element) => element?.code === anzscoCode
      );
      return subMajorGroupTitle?.title;
    case 3:
      const minorGroupTitle = Minor_GROUP.find(
        (element) => element?.code === anzscoCode
      );
      return minorGroupTitle?.title;
    default:
      return { en: "", fa: "" };
  }
};
export const SkillLevelDescription = (skillLevel: string) => {
  switch (skillLevel) {
    case "1":
      return LanguageKeys.IndicativeSkillLevel_1;
    case "2":
      return LanguageKeys.IndicativeSkillLevel_2;
    case "3":
      LanguageKeys.IndicativeSkillLevel_3;
    case "4":
      return LanguageKeys.IndicativeSkillLevel_4;

    default:
      return "";
  }
};
