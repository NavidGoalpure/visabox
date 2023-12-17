export default {
  name: 'visa_type',
  title: 'Visa Type',
  type: 'document',
  // readOnly: true,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'multi_lang',
      // validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'multi_lang',
    },
    //
    // صفحه توضیحات این نوع ویزا
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
