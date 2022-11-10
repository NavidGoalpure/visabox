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
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'abv',
      title: 'ABV Name',
      type: 'string',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      localize: true,
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
