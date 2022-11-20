const priorityEnum = [
  { title: 'S', value: 'S' },
  { title: 'NS', value: 'NS' },
  { title: 'M', value: 'M' },
  { title: 'R', value: 'R' },
];
const futureDemandEnum = [
  { title: 'Strong', value: 'Strong' },
  { title: 'Modarate', value: 'Modarate' },
  { title: 'Soft', value: 'Soft' },
];
export default {
  name: 'priority_list_obj',
  title: 'Priority List',
  type: 'object',
  fields: [
    {
      name: 'year',
      title: 'Year',
      type: 'date',
      options: {
        dateFormat: 'YYYY',
        calendarTodayLabel: 'Today',
      },
    },
    {
      name: 'national',
      title: 'National',
      type: 'string',
      options: {
        list: priorityEnum,
        layout: 'radio',
        direction: 'horizontal',
      },
    },
    {
      name: 'act',
      title: 'ACT',
      type: 'string',
      options: {
        list: priorityEnum,
        layout: 'radio',
        direction: 'horizontal',
      },
    },
    {
      name: 'nsw',
      title: 'NSW',
      type: 'string',
      options: {
        list: priorityEnum,
        layout: 'radio',
        direction: 'horizontal',
      },
    },
    {
      name: 'nt',
      title: 'NT',
      type: 'string',
      options: {
        list: priorityEnum,
        layout: 'radio',
        direction: 'horizontal',
      },
    },
    {
      name: 'qld',
      title: 'QLD',
      type: 'string',
      options: {
        list: priorityEnum,
        layout: 'radio',
        direction: 'horizontal',
      },
    },
    {
      name: 'sa',
      title: 'SA',
      type: 'string',
      options: {
        list: priorityEnum,
        layout: 'radio',
        direction: 'horizontal',
      },
    },
    {
      name: 'tas',
      title: 'TAC',
      type: 'string',
      options: {
        list: priorityEnum,
        layout: 'radio',
        direction: 'horizontal',
      },
    },
    {
      name: 'vic',
      title: 'VIC',
      type: 'string',
      options: {
        list: priorityEnum,
        layout: 'radio',
        direction: 'horizontal',
      },
    },
    {
      name: 'wa',
      title: 'WA',
      type: 'string',
      options: {
        list: priorityEnum,
        layout: 'radio',
        direction: 'horizontal',
      },
    },
    {
      name: 'future_demend',
      title: 'Future Demend',
      type: 'string',
      options: {
        list: futureDemandEnum,
        layout: 'radio',
        direction: 'horizontal',
      },
    },
  ],
  preview: {
    select: {
      title: 'year',
    },
  },
};
