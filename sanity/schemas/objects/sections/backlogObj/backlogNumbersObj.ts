export default {
  name: 'backlog_numbers_obj',
  title: 'Backlog Numbers',
  type: 'object',
  options: {
    collapsible: true, // Makes the whole fieldset collapsible
    collapsed: false, // Defines if the fieldset should be collapsed by default or not
    columns: 6, // Defines a grid for the fields and how many columns it should have
  },
  fields: [
    ////////////////////////////
    //////189 Visa//////////////
    ////////////SUBMITED////////
    {
      name: 'upper_than_65',
      title: '> 65 ',
      type: 'number',
    },
    {
      name: 'upper_than_70',
      title: '> 70 ',
      type: 'number',
    },
    {
      name: 'upper_than_75',
      title: '> 75 ',
      type: 'number',
    },
    {
      name: 'upper_than_80',
      title: '> 80 ',
      type: 'number',
    },
    {
      name: 'upper_than_85',
      title: '> 85 ',
      type: 'number',
    },
    {
      name: 'upper_than_90',
      title: '> 90 ',
      type: 'number',
    },
    {
      name: 'upper_than_95',
      title: '> 95 ',
      type: 'number',
    },
    {
      name: 'upper_than_100',
      title: '> 100 ',
      type: 'number',
    },
    {
      name: 'upper_than_105',
      title: '> 105 ',
      type: 'number',
    },
  ],
  //   preview: {
  //     select: {
  //       title: 'submited_190',
  //     },
  //   },
};
