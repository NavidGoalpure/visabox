export default {
  name: 'unit_group',
  title: 'Unit Group',
  type: 'document',
  fields: [
    {
      name: 'code',
      title: 'Code',
      type: 'number',

      validation: (Rule: { required: () => any }) => [
        Rule.required().min(1211).max(6392).error('این کد موجود نیست'),
      ],
    },
    {
      name: 'title',
      title: 'Title',
      type: 'multi_lang',
      // validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'multi_lang',
      // validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      // validation: (Rule: { required: () => any }) => Rule.required(),
      options: {
        source: 'title.en',
        maxLength: 96,
        // isUnique: true,
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
      type: 'multi_lang_arr',
    },
  ],
  preview: {
    select: {
      title: 'title.en',
    },
  },
};
