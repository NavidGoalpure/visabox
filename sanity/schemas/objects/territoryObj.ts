const statuses = [
  { title: 'May Be / Program Open', value: '1' },
  { title: 'IN Combined List', value: '2' },
  { title: 'May Not', value: '3' },
  { title: 'NOT applicable ', value: '4' },
  { title: 'May Be / Program Closed', value: '5' },
  { title: 'May Be / Program Closed', value: '6' },
];
/////////////////
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
