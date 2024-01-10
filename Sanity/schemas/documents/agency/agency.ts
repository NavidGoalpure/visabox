export default {
  name: 'agency',
  title: 'Agency',
  type: 'document',
  fields: [
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'string',
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
    // تعداد سوالاتی که میتواند از هوش مصنوعی بپرسد
    { name: 'credit', title: 'Credit', type: 'number', initialValue: 0 },
  ],
};
