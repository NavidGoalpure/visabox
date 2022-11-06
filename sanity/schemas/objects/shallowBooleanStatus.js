export default {
  name: 'shallow_boolean_status',
  title: 'Shallow Boolean Status',

  type: 'string',

  options: {
    list: [
      { title: 'Not Included', value: '1' },
      { title: 'Included', value: '2' },
      { title: 'Not Applicable', value: '3' },
    ],
    layout: 'radio',
    direction: 'horizontal',
  },
};
