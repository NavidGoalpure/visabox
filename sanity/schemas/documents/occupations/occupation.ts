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
    {
      name: 'anzsco_section',
      title: 'Anzsco Section',
    },
    {
      name: 'backlog_section',
      title: 'Backlog Section',
    },
  ],
  fields: [
    {
      name: 'code',
      title: 'Code',
      type: 'number',

      validation: (Rule: { required: () => any }) => [
        Rule.required().min(121111).max(639211).error('این کد موجود نیست'),
      ],
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',

      localize: true,
      // validation: (Rule: { required: () => any }) => Rule.required(),
    },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',

      // validation: (Rule: { required: () => any }) => Rule.required(),
      options: {
        source: 'title.en',
        maxLength: 96,
        // isUnique: true,
      },
    },

    {
      name: 'assessing_authority',
      title: 'Assessing Authority',
      type: 'string',
      validation: (Rule: { required: () => any }) => Rule.required(),
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
          { title: 'ACPSEM', value: 'ACPSEM' },
          { title: 'VETASSESS_A', value: 'VETASSESS_A' },
          { title: 'VETASSESS_B', value: 'VETASSESS_B' },
          { title: 'VETASSESS_C', value: 'VETASSESS_C' },
          { title: 'VETASSESS_D', value: 'VETASSESS_D' },
          { title: 'VETASSESS_E', value: 'VETASSESS_E' },
          { title: 'VETASSESS_F', value: 'VETASSESS_F' },
        ], // <-- predefined values
        layout: 'radio', // <-- defaults to 'dropdown'
        direction: 'horizontal',
      },
    },
    {
      name: 'visa_option_section',
      title: 'Visa Options',
      type: 'array',
      of: [{ type: 'visa_option_obj' }],
      group: 'visa_options',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'territory_section',
      title: 'State/Territory',
      type: 'array',
      of: [{ type: 'territory_obj' }],
      group: 'state/territory',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'anzsco_section',
      title: 'Anzsco Section',
      type: 'anzsco_obj',
      group: 'anzsco_section',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'backlog_section',
      title: 'Backlog Section',
      type: 'backlog_obj',
      group: 'backlog_section',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
