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
      name: 'eligibility190',
      title: 'Eligibility 190',
      type: 'string',

      options: {
        list: statuses,
        layout: 'radio',
        direction: 'horizontal',
      },
    },
    {
      name: 'eligibility491',
      title: 'Eligibility 491',
      type: 'string',

      options: {
        list: statuses,
        layout: 'radio',
        direction: 'horizontal',
      },
    },
  ],
  //   preview: {
  //     select: {
  //       title: 'title',
  //     },
  //   },
};
