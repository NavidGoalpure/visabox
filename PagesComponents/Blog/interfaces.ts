import { Locations } from 'Interfaces';

export interface ArticleMetaData {
  title: string;
  // must be slugify(title).it can not have persian charecters
  slug: string;
  tags?: ArticleTags[];
  summary: string;
  // bannerUrl: string;
  date: Date;
  //must be hash of slug in MD5
  id: string;
  locale: Locations;
}
export enum ArticleTags {
  ///step of getting visa
  INVESTIGATE = 'INVESTIGATE',
  LANGUAGE_TEST = 'LANGUAGE_TEST',
  ASSESSMENT = 'ASSESSMENT',
  EOI_FORM = 'EOI_FORM',
  INVITATION = 'INVITATION',
  LODGE = 'LODGE',
  MEDICAL = 'MEDICAL',
  POLICE_CERTIFICATE = 'POLICE_CERTIFICATE',
  BIOMETRIC_TEST = 'BIOMETRIC_TEST',
  VISA = 'VISA',
  //////////////
}
