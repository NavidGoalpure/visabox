export default {
  name: 'survey',
  title: 'Survey',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'multi_lang',
      // validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'variant',
      title: 'Variant',
      type: 'string',
      initialValue: 'MultiChoices',
      validation: (Rule: { required: () => any }) => Rule.required(),
      options: {
        list: [{ title: 'MultiChoices', value: 'MultiChoices' }], // <-- predefined values
        layout: 'radio', // <-- defaults to 'dropdown'
        direction: 'horizontal',
      },
    },
    {
      name: 'multichoices_choices',
      title: 'Choices',
      type: 'array',
      of: [{ type: 'survey_choice_obj' }],
      // validation: (Rule: { required: () => any }) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title.en',
    },
  },
};
