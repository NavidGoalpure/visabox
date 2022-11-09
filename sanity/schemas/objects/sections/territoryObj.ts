export default {
  name: 'territory_obj',
  title: 'State/Territory',
  type: 'object',
  fields: [
    {
      name: 'territory',
      title: 'State/Territory',
      type: 'reference',
      to: [{ type: 'territory' }],
    },
    {
      name: 'desc',
      title: 'Description',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'table',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'territory.title.en',
    },
  },
};
