export default {
  name: 'backlog_obj',
  title: 'Backlog',
  type: 'object',
  fields: [
    {
      name: 'visa_type',
      title: 'Visa Type',
      type: 'reference',
      to: [{ type: 'visa_type' }],
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
  ],
  //   preview: {
  //     select: {
  //       title: 'title',
  //     },
  //   },
};
