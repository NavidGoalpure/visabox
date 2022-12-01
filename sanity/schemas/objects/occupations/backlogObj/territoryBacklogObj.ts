export default {
  name: 'territory_backlog_obj',
  title: 'Submited/Invited by Territory',
  type: 'object',
  fields: [
    {
      name: 'territory',
      title: 'State/Territory',
      type: 'reference',
      to: [{ type: 'territory' }],
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'eoi_count',
      title: 'Eoi Count',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'territory.title.en',
    },
  },
};
