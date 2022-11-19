export default {
  name: 'visa_type',
  title: 'Visa Type',
  type: 'document',
  // readOnly: true,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      localize: true,
      // validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      localize: true,
      // validation: (Rule: { required: () => any }) => Rule.required(),
    },
    // صفحه توضیحات این نوع ویزا
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      localize: true,
      // validation: (Rule: { required: () => any }) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
