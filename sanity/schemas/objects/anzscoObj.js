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
  ],
  //   preview: {
  //     select: {
  //       title: 'title',
  //     },
  //   },
};
