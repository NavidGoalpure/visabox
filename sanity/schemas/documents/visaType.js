export default {
  name: 'visa_type',
  title: 'Visa Type',
  type: 'document',
  readOnly: true,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      localize: true,
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      localize: true,
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      localize: true,
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
