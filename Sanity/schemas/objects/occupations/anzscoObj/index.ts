export default {
  name: 'anzsco_obj',
  title: 'Anzsco',
  type: 'object',
  fields: [
    {
      name: 'major_group',
      title: 'Major Group',
      type: 'number',
    },
    {
      name: 'submajor_group',
      title: 'Sub-Major Group',
      type: 'number',
    },
    {
      name: 'minor_group',
      title: 'Minor Group',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'multi_lang',
    },
    {
      name: 'alternative_title',
      title: 'Alternative_title',
      type: 'multi_lang_arr',
    },
    {
      name: 'specialisations',
      title: 'Specialisations',
      type: 'multi_lang_arr',
    },
    {
      name: 'nec_occupation',
      title: 'Occupation in NEC category',
      type: 'multi_lang_arr',
    },
    {
      name: 'priority_list',
      title: 'Skill Priority List',
      type: 'array',
      of: [{ type: 'priority_list_obj' }],
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'unit_group',
      title: 'Unit Group',
      type: 'reference',
      to: [{ type: 'unit_group' }],
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
  ],
  //   preview: {
  //     select: {
  //       title: 'title',
  //     },
  //   },
};
