export default {
  name: 'multi_lang',
  title: 'MultiLang',
  type: 'object',
  fields: [
    {
      name: 'en',
      title: 'English',
      type: 'string',
    },
    {
      name: 'zh',
      title: 'Chinese',
      type: 'string',
    },
    {
      name: 'fa',
      title: 'Persian',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'en',
    },
  },
};
