export default {
  name: 'occupation',
  title: 'Occupation',
  type: 'document',
  groups: [
    {
      name: 'visa_options',
      title: 'Visa Options',
    },
    {
      name: 'state/territory',
      title: 'State/Territory',
    },
  ],
  fields: [
    {
      name: 'code',
      title: 'Code',
      type: 'number',

      validation: (Rule) => [
        Rule.required().min(121111).max(639211).error('این کد موجود نیست'),
      ],
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      localize: true,
    },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',

      options: {
        source: 'title',
        maxLength: 96,
        isUnique: true,
      },
    },
    {
      name: 'skill_level',
      title: 'Skill Level',
      type: 'string',

      options: {
        list: ['1', '2', '3', '4', '5'], // <-- predefined values
        layout: 'radio', // <-- defaults to 'dropdown'
        direction: 'horizontal',
      },
    },
    {
      name: 'assessing_authority',
      title: 'Assessing Authority',
      type: 'string',

      options: {
        list: [
          { title: 'AACA', value: 'AACA' },
          { title: 'AASW', value: 'AASW' },
          { title: 'ACECQA', value: 'ACECQA' },
          { title: 'ACS', value: 'ACS' },
          { title: 'ACWA', value: 'ACWA' },
          { title: 'ADC', value: 'ADC' },
          { title: 'AIMS', value: 'AIMS' },
          { title: 'AIQS', value: 'AIQS' },
          { title: 'AITSL', value: 'AITSL' },
          { title: 'ANMAC', value: 'ANMAC' },
          { title: 'ANZSNM', value: 'ANZSNM' },
          { title: 'AOAC', value: 'AOAC' },
          { title: 'AOPA', value: 'AOPA' },
          { title: 'APC', value: 'APC' },
          { title: 'APharmC', value: 'APharmC' },
          { title: 'APS', value: 'APS' },
          { title: 'ASMIRT', value: 'ASMIRT' },
          { title: 'AVBC', value: 'AVBC' },
          { title: 'CASA', value: 'CASA' },
          { title: 'CCEA', value: 'CCEA' },
          { title: 'CMBA', value: 'CMBA' },
          { title: 'CPAA', value: 'CPAA' },
          { title: 'CAANZ', value: 'CAANZ' },
          { title: 'IPA', value: 'IPA' },
          { title: 'DDA', value: 'DDA' },
          { title: 'EA', value: 'EA' },
          { title: 'IML', value: 'IML' },
          { title: 'MedBA', value: 'MedBA' },
          { title: 'NAATI', value: 'NAATI' },
          { title: 'OCANZ', value: 'OCANZ' },
          { title: 'OTC', value: 'OTC' },
          { title: 'PodBA', value: 'PodBA' },
          { title: 'SLAA', value: 'SLAA' },
          { title: 'SPA', value: 'SPA' },
          { title: 'SSSI', value: 'SSSI' },
          { title: 'TRA', value: 'TRA' },
          { title: 'VETASSESS', value: 'VETASSESS' },
          { title: 'ACPSEM', value: 'ACPSEM' },
        ], // <-- predefined values
        layout: 'radio', // <-- defaults to 'dropdown'
        direction: 'horizontal',
      },
    },
    {
      name: 'visa_option_section',
      title: 'Visa Options',
      type: 'visa_option_obj',
      group: 'visa_options',
    },
    {
      name: 'territory_section',
      title: 'State/Territory',
      type: 'territory_obj',
      group: 'state/territory',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
