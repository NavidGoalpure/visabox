export default {
  name: 'territory',
  title: 'States / Territory',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'multi_lang',
      // validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'abv',
      title: 'ABV Name',
      type: 'string',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'multi_lang_url',
    },
  ],
  preview: {
    select: {
      title: 'title.en',
    },
  },
};
