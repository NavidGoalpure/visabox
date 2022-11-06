export default {
  name: 'shallow_boolean_eligibility',
  title: 'Shallow Boolean Eligibility',

  type: 'string',

  options: {
    list: [
      { title: 'May Be / Program Open', value: '1' },
      { title: 'IN Combined List', value: '2' },
      { title: 'May Not', value: '3' },
      { title: 'NOT applicable ', value: '4' },
      { title: 'May Be / Program Closed', value: '5' },
      { title: 'May Be / Program Closed', value: '6' },
    ],
    layout: 'radio',
    direction: 'horizontal',
  },
};
