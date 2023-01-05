import { MAJOR_GROUP, Minor_GROUP, SUB_MAJOR_GROUP } from 'Consts/anszco';
import { MultiLanguageText, MultiLanguageTextArray } from 'Interfaces';
import { LanguageKeys } from '../const';

export const ConvertAnzscoCodeToTitle = (
  anzscoCode: number
): MultiLanguageText | undefined => {
  const anzscoCodeLength = anzscoCode.toString().length;
  switch (anzscoCodeLength) {
    case 1:
      const majorGroupTitle = MAJOR_GROUP.find(
        (element) => element?.code === anzscoCode
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
      return { en: '', fa: '' };
  }
};
export const SkillLevelDescription = (skillLevel: string) => {
  switch (skillLevel) {
    case '1':
      return LanguageKeys.IndicativeSkillLevel_1;
    case '2':
      return LanguageKeys.IndicativeSkillLevel_2;
    case '3':
      LanguageKeys.IndicativeSkillLevel_3;
    case '4':
      return LanguageKeys.IndicativeSkillLevel_4;

    default:
      return '';
  }
};
export function getValueBaseOnAlias({
  alias,
}: {
  alias: string | undefined;
}): string {
  switch (alias) {
    case 'S':
      return 'Shortage';
    case 'NS':
      return 'No Shortage';
    case 'M':
      return 'Metropolitan Shortage';
    case 'R':
      return 'Regional Shortage';
  }
  return '';
}
//////////

export function mustShowNecAccupationSection({
  nec_occupation,
  dtArray,
}: {
  nec_occupation: any;
  dtArray: (statementObj: MultiLanguageTextArray | undefined) => string[];
}): boolean {
  if (!nec_occupation) return false;
  if (dtArray(nec_occupation).length === 0) return false;
  if (dtArray(nec_occupation)[0] === '') return false;
  return true;
}
