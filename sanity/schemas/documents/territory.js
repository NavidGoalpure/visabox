export default {
  name: 'territory',
  title: 'States / Territory',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      localize: true,
    },
    {
      name: 'abv',
      title: 'ABV Name',
      type: 'string',
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
