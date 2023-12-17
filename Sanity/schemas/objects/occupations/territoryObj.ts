export default {
  name: 'territory_obj',
  title: 'State/Territory',
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
      name: 'desc',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
      // validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'html_desc',
      title: 'HTmL Description',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'territory.title.en',
    },
  },
};
