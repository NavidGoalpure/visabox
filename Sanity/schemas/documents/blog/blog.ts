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
  ],

  preview: {
    select: {
      title: 'title',
      language: 'language',
      media: 'mainImage',
    },
    prepare(selection) {
      const { language } = selection;
      return { ...selection, subtitle: language && `in ${language}` };
    },
  },
};
