export default {
  name: 'occupation_head',
  title: 'Occupation Head',
  type: 'document',

  fields: [
    {
      name: 'code',
      title: 'Code',
      type: 'number',

      validation: (Rule) => [
        Rule.required().min(121111).max(639211).error('این کد موجود نیست'),
      ],
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      localize: true,
      validation: (Rule: { required: () => any }) => Rule.required(),
    },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule: { required: () => any }) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
