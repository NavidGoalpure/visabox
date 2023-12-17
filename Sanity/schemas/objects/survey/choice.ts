// این آبجکت برای نظرسنجی های چند گزینه ای استفاده میشه
export default {
  name: 'survey_choice_obj',
  title: 'Choice',
  type: 'object',
  fields: [
    {
      name: 'title_en',
      title: 'English Choice',
      type: 'multi_lang',

      // validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'title_fa',
      title: 'Farsi Choice',
      type: 'multi_lang',

      // validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'responders',
      title: 'Responders',
      type: 'array',
      hidden: true,
      of: [{ type: 'string' }],
    },
  ],
  preview: {
    select: {
      title: 'choice',
    },
  },
};
