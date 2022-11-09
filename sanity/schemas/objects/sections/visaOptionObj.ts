export default {
  name: 'visa_option_obj',
  title: 'Visa Option',
  type: 'object',
  fields: [
    {
      name: 'types',
      title: 'Types',
      type: 'reference',
      to: [{ type: 'visa_type' }],
    },
  ],
  preview: {
    select: {
      title: 'types.title.en',
    },
  },
};
