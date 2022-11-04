export default {
  name: 'occupation',
  title: 'Occupation',
  type: 'document',
  fields: [
    {
      name: 'code',
      title: 'Code',
      type: 'number',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
  ],
};
