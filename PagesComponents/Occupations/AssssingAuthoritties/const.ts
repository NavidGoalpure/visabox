import { MultiLanguageText } from 'Interfaces';
import { AssessingAuthorityAbv } from 'Interfaces/Documents/occupation';
import { AssssingAuthority } from './interfaces';

export enum LanguageKeys {
  SeoTitle = 'SeoTitle',
  SeoDesc = 'SeoDesc',
  //
  PageTitle = 'PageTitle',
}
export const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  SeoTitle: {
    en: 'Skills Assessment And Assessing Authorities | Mara Box',
    fa: 'لیست موسسات ارزیابی مدارک و مهارت های استرالیا | مارا باکس',
  },
  SeoDesc: {
    fa: 'فهرست کامل مشاغل موسسات ارزیابی مدارک و مهارت های استرالیا به همراه آدرس و اطلاعات تماس',
    en: 'See the full skills assessment and assessing authorities List & find their address, email, website and etc.',
  },
  //
  PageTitle: {
    fa: 'لیست موسسات ارزیابی مدارک و مهارت های استرالیا',
    en: 'Assessing authorities',
  },
};

////////////
export const assessingAuthorities: AssssingAuthority[] = [
  {
    title: { en: 'Architects Accreditation Council of Australia' },
    abv: AssessingAuthorityAbv.AACA,
    address: `Architects Accreditation Council of Australia
PO Box 236
Civic. Square
Canberra ACT 2608
Australia`,
    email: 'mail@aaca.org.au',
    website: 'http://www.aaca.org.au',
  },
  {
    title: { en: 'Australian Association of Social Workers' },
    abv: AssessingAuthorityAbv.AASW,
    address: `Australian Association of Social Workers
Overseas Qualifications Assessment
PO Box 4956
Civic Square
Kingston ACT 2604
Australia`,
    email: 'aaswiqa@aasw.asn.au',
    website: 'https://www.aasw.asn.au',
  },
  {
    title: {
      en: 'Australian Children’s Education and Care Quality Authority',
    },
    abv: AssessingAuthorityAbv.ACECQA,
    address: `6/175 Liverpool St
     Sydney NSW 2000
    Australia`,
    email: 'info@acecqa.gov.au',
    website: 'https://www.acecqa.gov.au',
  },
  {
    title: {
      en: 'Australasian College of Physical Scientists and Engineers in Medicine',
    },
    abv: AssessingAuthorityAbv.ACPSEM,
    address: `Australasian College of Physical
Scientists and Engineers in Medicine
Suite 7.12
247 Coward Street
Mascot NSW 2020
Australia`,
    email: 'admin.support@acpsem.org.au',
    website: 'http://www.acpsem.org.au',
  },
  {
    title: {
      en: 'Australian Association of Social Workers',
    },
    abv: AssessingAuthorityAbv.AASW,
    address: `Australian Association of Social Workers
Overseas Qualifications Assessment
PO Box 4956
Civic Square
Kingston ACT 2604
Australia`,
    email: 'aaswiqa@aasw.asn.au',
    website: 'http://www.aasw.asn.au',
  },
  {
    title: {
      en: 'Australian Computer Society',
    },
    abv: AssessingAuthorityAbv.ACS,
    address: `Australian Computer Society
PO Box Q534
Queen Victoria Building
Sydney NSW 1230
Australia`,
    email: 'assessment@acs.org.au',
    website: 'http://www.acs.org.au',
  },
  {
    title: {
      en: 'Australian Dental Council',
    },
    abv: AssessingAuthorityAbv.ADC,
    address: `Australian Dental Council
Level 2
99 King Street
Melbourne Vic. 3000
Australia`,
    email: 'info@adc.org.au',
    website: 'http://www.adc.org.au',
  },
  {
    title: {
      en: 'Australian Institute of Management',
    },
    abv: AssessingAuthorityAbv.AIM,
    address: `Australasian College of Physical
Scientists and Engineers in Medicine
Suite 7.12
247 Coward Street
Mascot NSW 2020
Australia`,
    email: 'admin.support@acpsem.org.au',
    website: 'http://www.acpsem.org.au',
  },
  {
    title: {
      en: 'Australian Institute of Medical Scientists',
    },
    abv: AssessingAuthorityAbv.AIMS,
    address: `Australian Institute of Medical Scientists
PO Box 1911
MILFORD Qld 4064
Australia`,
    email: 'aimsnat@aims.org.au',
    website: 'http://www.aims.org.au',
  },
  {
    title: {
      en: 'Australian Institute of Quantity Surveyors',
    },
    abv: AssessingAuthorityAbv.AIQS,
    address: `Australian Institute of Quantity Surveyors
Level 2
70 Pitt Street
Sydney NSW 2000
Australia`,
    email: 'skilledmigration@aiqs.com.au',
    website: 'http://www.aiqs.com.au',
  },
  {
    title: {
      en: 'Australian Institute of Radiography',
    },
    abv: AssessingAuthorityAbv.AIR,
    address: `Australian Institute of Radiography
PO Box 16234
Collins Street West
Melbourne Vic. 8007
Australia`,
    email: 'standards@air.asn.au',
    website: 'http://www.air.asn.au',
  },
  {
    title: {
      en: 'Australian Institute of Teaching and School Leadership',
    },
    abv: AssessingAuthorityAbv.AITSL,
    address: `Australian Institute of Teaching and School Leadership
Assessment for Migration
PO Box 347
Curtin ACT 2605
Australia`,
    email: 'overseasquals@aitsl.edu.au',
    website: 'http://www.aitsl.edu.au',
  },
  {
    title: {
      en: 'Australian Community Workers Association',
    },
    abv: AssessingAuthorityAbv.ACWA,
    address: `Australian Community Workers Association
PO Box 42
Flinders Lane Post Office
Melbourne Vic. 8009
Australia`,
    email: 'info@acwa.org.au',
    website: 'http://www.acwa.org.au',
  },
  {
    title: {
      en: 'Australian Maritime Safety Authority',
    },
    abv: AssessingAuthorityAbv.AMSA,
    address: `Architects Accreditation Council of Australia
Ship Operators and Qualifications
Maritime Operations
Australian Maritime Safety Authority
GPO Box 2181
Canberra ACT 2601
Australia`,
    email: 'maritime.qualifications@amsa.gov.au',
    website: 'https://www.amsa.gov.au',
  },
  {
    title: {
      en: 'Australian Nursing and Midwifery Accreditation Council',
    },
    abv: AssessingAuthorityAbv.ANMAC,
    address: `Australian Nursing and Midwifery Accreditation Council
PO Box 400
Canberra City ACT 2601
Australia`,
    email: 'anmac@anmac.org.au',
    website: 'http://www.anmac.org.au',
  },

  {
    title: {
      en: 'Australasian Osteopathic Accreditation Council',
    },
    abv: AssessingAuthorityAbv.AOAC,
    address: `Australasian Osteopathic Accreditation Council (AOAC)
GPO Box 400
Canberra City ACT 2601`,
    email: 'admin@osteopathiccouncil.org.au',
    website: 'www.osteopathiccouncil.org.au',
  },
  {
    title: {
      en: 'Australian and New Zealand Podiatry Accreditation Council',
    },
    abv: AssessingAuthorityAbv.ANZPAC,
    address: `Australian and New Zealand Podiatry Accreditation Council
12-16 Parker Street
Williamstown Vic. 3016
Australia`,
    email: 'admin@anzpac.org.au',
    website: 'http://www.anzpac.org.au',
  },
  {
    title: {
      en: 'Australian and New Zealand Society of Nuclear Medicine',
    },
    abv: AssessingAuthorityAbv.ANZSNM,
    address: `Australian and New Zealand Society of Nuclear Medicine Secretariat
PO Box 2195
Wellington Point Qld 4160
Australia`,
    email: 'secretariat@anzsnm.org.au',
    website: 'http://www.anzsnm.org.au',
  },
  {
    title: {
      en: 'Australian Pharmacy Council',
    },
    abv: AssessingAuthorityAbv.APharmC,
    address: `Australian Pharmacy Council
PO Box 269
Civic Square ACT 2608
Australia`,
    email: 'admin@pharmacycouncil.org.au',
    website: 'https://www.pharmacycouncil.org.au',
  },
  {
    title: {
      en: 'Australian Physiotherapy Council',
    },
    abv: AssessingAuthorityAbv.APC,
    address: `Australian Physiotherapy Council
Suite 933
1 Queens Road
Melbourne Vic. 3004
Australia`,
    email: 'enquiries@physiocouncil.com.au',
    website: 'http://www.physiocouncil.com.au',
  },
  {
    title: {
      en: 'Australian Psychological Society',
    },
    abv: AssessingAuthorityAbv.APS,
    address: `Australian Psychological Society
PO Box 38
Flinders Lane Post Office
Melbourne Vic. 8009
Australia`,
    email: 'contactus@psychology.org.au',
    website: 'http://www.psychology.org.au',
  },
  {
    title: {
      en: 'Australasian Veterinary Boards Council',
    },
    abv: AssessingAuthorityAbv.AVBC,
    address: `Australasian Veterinary Boards Council
Level 8, 470 Collins Street
Melbourne Vic. 3000
Australia`,
    email: 'admin@avbc.asn.au',
    website: 'http://www.avbc.asn.au',
  },
  {
    title: {
      en: 'Certified Practising Accountants of Australia',
    },
    abv: AssessingAuthorityAbv.CPAA,
    address: `Qualifications Assessment Unit CPA Australia
GPO Box 2820
Civic Square
Melbourne Vic. 3001
Australia`,
    email: 'memberservice@cpaaustralia.com.au',
    website: 'https://www.cpaaustralia.com.au',
  },
  {
    title: {
      en: 'Chinese Medical Board of Australia',
    },
    abv: AssessingAuthorityAbv.CMBA,
    address: `Chinese Medicine Board of Australia
G.P.O. Box 9958
Melbourne Vic. 3001
Australia`,
    email: '',
    website: 'http://www.chinesemedicineboard.gov.au',
  },
  {
    title: {
      en: 'Council on Chiropractic Education Australasia',
    },
    abv: AssessingAuthorityAbv.CCEA,
    address: `Council on Chiropractic Education Australasia
PO Box 268
Civic Square ACT 2601
Australia`,
    email: 'admin@ccea.com.au',
    website: 'http://www.ccea.com.au',
  },
  {
    title: {
      en: 'Civil Aviation Safety Authority',
    },
    abv: AssessingAuthorityAbv.CASA,
    address: `Civil Aviation Safety Authority
GPO Box 2005
Canberra ACT 2601
Australia`,
    email: 'clarc@casa.gov.au',
    website: 'https://www.casa.gov.au',
  },
  {
    title: {
      en: 'Dieticians Association of Australia',
    },
    abv: AssessingAuthorityAbv.DAA,
    address: `Dietitians Association of Australia
1/8 Phipps Close
Deakin ACT 2600
Australia`,
    email: 'nationaloffice@daa.asn.au',
    website: 'https://daa.asn.au',
  },
  {
    title: {
      en: 'Engineers Australia',
    },
    abv: AssessingAuthorityAbv.EA,
    address: `Engineers Australia
Engineering House
11 National Circuit
Barton ACT 2600
Australia`,
    email: 'msa@engineersaustralia.org.au',
    website: 'https://www.engineersaustralia.org.au',
  },
  {
    title: {
      en: 'Chartered Accountants Australia and New Zealand',
    },
    abv: AssessingAuthorityAbv.CAANZ,
    address: `Eora Country
33 Erskine Street
Sydney
NSW 2000
`,
    email: 'service@charteredaccountantsanz.com',
    website: 'https://www.charteredaccountantsanz.com',
  },
  {
    title: {
      en: 'Medical Board of Australia',
    },
    abv: AssessingAuthorityAbv.MedBA,
    address: `AHPRA
G.P.O. Box 9958
Canberra ACT 2601
Australia`,
    email: '',
    website: 'https://www.ahpra.gov.au',
  },
  {
    title: {
      en: 'National Accreditation Authority for Translators and Interpreters',
    },
    abv: AssessingAuthorityAbv.NAATI,
    address: `National Accreditation Authority for Translators and Interpreters(NAATI)
PO Box 223
Deakin West ACT 2600
Australia`,
    email: 'info@naati.com.au',
    website: 'https://www.naati.com.au',
  },
  {
    title: {
      en: 'Occupational Therapy Council',
    },
    abv: AssessingAuthorityAbv.OTC,
    address: `Occupational Therapy Council (Australia and NZ)
PO Box 959
South Perth WA 6951
Australia`,
    email: 'admin@otcouncil.com.au',
    website: 'https://www.otcouncil.com.au',
  },
  {
    title: {
      en: 'Optometry Council of Australia and New Zealand',
    },
    abv: AssessingAuthorityAbv.OCANZ,
    address: `Optometry Council of Australia and New Zealand
PO Box 16179
Collins Street West Vic. 8007 
Australia`,
    email: 'enquiries@ocanz.org',
    website: 'http://www.ocanz.org',
  },
  {
    title: {
      en: 'Institute of Public Accountants',
    },
    abv: AssessingAuthorityAbv.IPA,
    address: `Institute of Public Accountants
GPO Box 1637
Melbourne Vic. 3001
Australia`,
    email: 'headoffice@publicaccountants.org.au',
    website: 'https://www.publicaccountants.org.au',
  },
  {
    title: {
      en: 'Speech Pathology Association of Australia',
    },
    abv: AssessingAuthorityAbv.SPA,
    address: `Speech Pathology Association of Australia
1/114 William Street
Melbourne Vic. 3000
Australia`,
    email: 'office@speechpatologyaustralia.org.au',
    website: 'https://www.speechpathologyaustralia.org.au',
  },
  {
    title: {
      en: 'Surveying and Spatial Sciences Institute',
    },
    abv: AssessingAuthorityAbv.SSSI,
    address: `Surveying and Spatial Sciences Institute
PO Box 307
Deakin West ACT 2600
Australia`,
    email: 'support@sssi.org.au',
    website: 'https://sssi.org.au',
  },
  {
    title: {
      en: 'Trades Recognition Australia',
    },
    abv: AssessingAuthorityAbv.TRA,
    address: `Trades Recognition Australia
Department of Education and Training
GPO Box 3022
Canberra ACT 2601
Australia`,
    email: 'traenquiries@education.gov.au',
    website: 'https://www.tradesrecognitionaustralia.gov.au',
  },
  {
    title: {
      en: 'Vocational Education and Training Assessment Services',
    },
    abv: AssessingAuthorityAbv.VETASSESS,
    address: `Qualifications Assessment Unit
Level 4
478 Albert Street
East Melbourne Vic. 3002

VETASSESS
GPO Box 2752
Melbourne Vic. 3001
Australia`,
    email: 'vetassess@vetassess.com.au',
    website: 'https://www.vetassess.com.au',
  },
  {
    title: {
      en: 'Australian Society of Medical Imagery and Radiation Therapy',
    },
    abv: AssessingAuthorityAbv.ASMIRT,
    address: `Suite 1040-1044 (Level 10)
     1 Queens Road 
     Melbourne VIC 3004
     Australia

`,
    email: 'info@asmirt.org',
    website: 'http://www.asmirt.org',
  },
];
