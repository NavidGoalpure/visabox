export default {
  name: 'multi_lang_arr',
  title: 'MultiLangArray',
  type: 'object',
  fields: [
    {
      name: 'en',
      title: 'English',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'zh',
      title: 'Chinese',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'fa',
      title: 'Persian',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
  preview: {
    select: {
      title: 'en',
    },
  },
};
