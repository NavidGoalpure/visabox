export default {
  name: 'client_completed_forms_obj',
  title: 'Completed Forms Obj',
  type: 'object',
  fields: [
    {
      name: 'forms',
      title: 'Forms',
      type: 'string',
      options: {
        list: [
          { title: 'Basic Form', value: 'basic form' },
          { title: 'Extended From', value: 'extended from' },
        ],
      },
      layout: 'radio',
      direction: 'horizontal',
    },
  ],
};
