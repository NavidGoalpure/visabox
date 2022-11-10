export default {
  name: 'unit_group',
  title: 'Unit Group',
  type: 'document',

  fields: [
    {
      name: 'code',
      title: 'Code',
      type: 'number',

      validation: (Rule) => [
        Rule.required().min(121111).max(639211).error('این کد موجود نیست'),
      ],
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      localize: true,
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      localize: true,
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule: { required: () => any }) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: true,
      },
    },
    {
      name: 'skill_level',
      title: 'Skill Level',
      type: 'string',
      validation: (Rule: { required: () => any }) => Rule.required(),

      options: {
        list: ['1', '2', '3', '4', '5'],
        layout: 'radio',
        direction: 'horizontal',
      },
    },
    {
      name: 'tasks',
      title: 'Tasks',
      type: 'array',
      of: [{ type: 'string' }],
      localize: true,
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'subgroups',
      title: 'Subgroups',
      type: 'array',
      of: [{ type: 'occupation' }],
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
