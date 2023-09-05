export default {
  name: 'agent',
  title: 'Agent',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      localize: true,
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',

      // validation: (Rule: { required: () => any }) => Rule.required(),
      options: {
        source: 'name.en',
        maxLength: 96,
        // isUnique: true,
      },
    },

    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'desc',
      title: 'Description',
      type: 'string',

      localize: true,
      // validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'plan',
      title: 'Plan',
      type: 'string',
      initialValue: 'simple',
      options: {
        list: [
          { title: 'Simple', value: 'simple' },
          { title: 'Full Data', value: 'fulldata' },
          { title: 'VIP', value: 'vip' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'string',
    },

    {
      name: 'status',
      title: 'Status',
      type: 'string',
      initialValue: 'active',
      options: {
        list: [
          { title: 'ACTIVE', value: 'active' },
          { title: 'DEACTIVE', value: 'deactive' },
          { title: 'DELETED', value: 'deleted' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      validation: (Rule: { required: () => any }) => Rule.required(),
    },

    {
      name: 'mara_number',
      title: 'Mara Number',
      type: 'string',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },

    {
      name: 'reg_date',
      title: 'Current Registration Date',
      type: 'date',

      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'website',
      title: 'Website',
      type: 'string',
    },

    {
      name: 'agencies',
      title: 'Agencies',
      type: 'array',
      of: [{ type: 'agency_obj' }],
    },
  ],
};
