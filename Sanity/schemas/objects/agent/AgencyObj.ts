export default {
  name: 'agency_obj',
  title: 'Agency Obj',
  type: 'object',
  fields: [
    {
      name: 'mara_number_ref',
      title: 'Mara Number Ref',
      type: 'string',

      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      localize: true,
    },
    {
      name: 'country',
      title: 'Country',
      type: 'string',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'state',
      title: 'State',
      type: 'string',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'city',
      title: 'City',
      type: 'string',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'contact',
      title: 'Contact',
      type: 'object',
      fields: [
        { name: 'email', type: 'string', title: 'Email' },
        { name: 'phone', type: 'string', title: 'Phone' },
        { name: 'full_address', type: 'string', title: 'Full Address' },
      ],
    },
  ],
};
