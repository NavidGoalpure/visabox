export default {
  name: 'anzsco_obj',
  title: 'Anzsco',
  type: 'object',
  fields: [
    {
      name: 'description',
      title: 'Description',
      localize: true,
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'alternative_title',
      title: 'Alternative_title',
      type: 'array',
      of: [{ type: 'string' }],
      localize: true,
    },
    {
      name: 'specialisations',
      title: 'Specialisations',
      type: 'array',
      of: [{ type: 'string' }],
      localize: true,
    },
    {
      name: 'nec_occupation',
      title: 'Occupation in NEC category',
      type: 'array',
      of: [{ type: 'string' }],
      localize: true,
    },
    {
      name: 'priority_list',
      title: 'Skill Priority List',
      type: 'array',
      of: [{ type: 'priority_list_obj' }],
    },
  ],
  //   preview: {
  //     select: {
  //       title: 'title',
  //     },
  //   },
};
