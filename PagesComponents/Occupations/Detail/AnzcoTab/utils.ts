import {
  MAJOR_GROUP,
  Minor_GROUP,
  SUB_MAJOR_GROUP,
} from 'Consts/Occupations/anszco';
import { MultiLanguageText, MultiLanguageTextArray } from 'Interfaces/Database';
import { LanguageKeys } from '../const';
import { ShortageStatus } from './interfaces';

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
      return LanguageKeys.IndicativeSkillLevel_3;
    case '4':
      return LanguageKeys.IndicativeSkillLevel_4;
    case '5':
      return LanguageKeys.IndicativeSkillLevel_5;

    default:
      return '';
  }
};
export function getShortageStatusBaseOnAlias({
  alias,
}: {
  alias: string | undefined;
}): ShortageStatus {
  switch (alias) {
    case 'S':
      return ShortageStatus.Shortage;
    case 'NS':
      return ShortageStatus.NoShortage;
    case 'M':
      return ShortageStatus.MetropolitanShortage;
    case 'R':
      return ShortageStatus.RegionalShortage;
  }
  return ShortageStatus.Unknown;
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
