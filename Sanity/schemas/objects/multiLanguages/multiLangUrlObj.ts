export default {
  name: 'multi_lang_url',
  title: 'MultiLangUrl',
  type: 'object',
  fields: [
    {
      name: 'en',
      title: 'English',
      type: 'url',
    },
    {
      name: 'zh',
      title: 'Chinese',
      type: 'url',
    },
    {
      name: 'fa',
      title: 'Persian',
      type: 'url',
    },
  ],
  preview: {
    select: {
      title: 'en',
    },
  },
};
