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
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'types.title.en',
    },
  },
};
