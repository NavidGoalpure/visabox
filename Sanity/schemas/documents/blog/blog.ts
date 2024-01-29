export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      name: 'language',
      title: 'Language',
      type: 'string',
      validation: (Rule: { required: () => any }) => Rule.required(),
      options: {
        list: [
          { title: 'Chinese', value: 'zh' },
          { title: 'Farsi', value: 'fa' },
          { title: 'English', value: 'en' },
        ],

        layout: 'radio', // <-- defaults to 'dropdown'
        direction: 'horizontal',
      },
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
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      initialValue: 'active',
      options: {
        list: [
          { title: 'ACTIVE', value: 'active' },
          { title: 'DEACTIVE', value: 'deactive' },
          { title: 'DELETED', value: 'deleted' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'hashtag',
      title: 'Hashtags',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent_obj',
    },
    {
      name: 'qa',
      title: 'Question/Answer',
      type: 'array',
      of: [
        {
          name: 'qa-obj',
          title: 'QA-Object',
          type: 'object',
          fields: [
            { name: 'question', title: 'Question', type: 'string' },
            { name: 'answer', title: 'Answer', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'otherArticles',
      title: 'Other Articles',
      type: 'array',
      of: [
        {
          name: 'reference',
          type: 'reference',
          title: 'Reference',
          to: [
            { type: 'blog' },
            // other types you may want to link to
          ],
        },
      ],
    },
  ],

  preview: {
    select: {
      title: 'title',
      language: 'language',
      media: 'mainImage',
    },
    prepare(selection: any) {
      const { language } = selection;
      return { ...selection, subtitle: language && `in ${language}` };
    },
  },
};
