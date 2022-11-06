export default {
  name: 'visa_option_obj',
  title: 'Visa Option',
  type: 'object',
  fields: [
    {
      name: 'visa',
      title: 'Visa',
      type: 'reference',
      to: [{ type: 'visa_type' }],
    },
    {
      name: 'eligibility',
      title: 'eligibility',
      type: 'string',

      options: {
        list: [
          { title: 'May Not', value: 'MAY_NOT' },
          { title: 'May Be', value: 'MAY_BE' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    },

    {
      name: 'mltssl',
      title: 'MLTSSL',
      type: 'shallow_boolean_status',
    },
    {
      name: 'stslo',
      title: 'STSLO',
      type: 'shallow_boolean_status',
    },
    {
      name: 'rol',
      title: 'ROL',
      type: 'shallow_boolean_status',
    },
  ],
  //   preview: {
  //     select: {
  //       title: 'title',
  //     },
  //   },
};
