export default {
  name: 'backlog_obj',
  title: 'Backlog',
  type: 'object',
  fields: [
    {
      name: 'visa',
      title: 'Visa',
      type: 'reference',
      to: [{ type: 'visa_type' }],
    },
  ],
  //   preview: {
  //     select: {
  //       title: 'title',
  //     },
  //   },
};
