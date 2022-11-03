export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'approved',
      title: 'Approved',
      type: 'boolean',
    },
    {
      name: 'email',
      type: 'string',
    },
    {
      name: 'comment',
      type: 'string',
    },
    {
      name: 'post',
      type: 'reference',
      to: { type: 'post' },
    },
  ],
};
