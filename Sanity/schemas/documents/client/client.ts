export default {
  name: 'client',
  title: 'Client',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'lastname',
      title: 'Last Name',
      type: 'string',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'age',
      title: 'Age',
      type: 'date',
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
      name: 'role',
      title: 'Role',
      type: 'string',
      initialValue: 'normal',
      options: {
        list: [
          { title: 'NORMAL', value: 'normal' },
          { title: 'ADMIN', value: 'admin' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'marital',
      title: 'Marital Status',
      type: 'string',
      options: {
        list: [
          { title: 'Single', value: 'single' },
          { title: 'Married', value: 'married' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    },
    {
      name: 'field_of_study',
      title: 'Field Of Study',
      type: 'string',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'degree',
      title: 'Degree',
      type: 'string',
      options: {
        list: [
          { title: 'Diploma', value: 'diploma' },
          { title: "Bachelor's degree", value: "bachelor's degree" },
          { title: 'Master degree', value: 'master degree' },
          { title: 'Doctorate', value: 'doctorate' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    },
    {
      name: 'current_job',
      title: 'Current Job',
      type: 'string',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'work_experience',
      title: 'Work Experience',
      type: 'string',
      options: {
        list: [
          { title: 'Below 1 year', value: 'below 1 year' },
          { title: '1 to 3 years', value: '1 to 3 years' },
          { title: '3 to 5 years', value: '3 to 5 years' },
          { title: '5 to 8 years', value: '5 to 8 years' },
          { title: 'More than 8 years', value: 'more than 8 years' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    },
    {
      name: 'australian_work_experience',
      title: 'Australian Work Experience',
      type: 'string',
      options: {
        list: [
          {
            title: 'none - less than 1 year',
            value: 'none - less than 1 year',
          },
          { title: 'Below 1 year', value: 'below 1 year' },
          { title: '1 to 3 years', value: '1 to 3 years' },
          { title: '3 to 5 years', value: '3 to 5 years' },
          { title: '5 to 8 years', value: '5 to 8 years' },
          { title: 'More than 8 years', value: 'more than 8 years' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    },
    {
      name: 'ielts_score',
      title: 'IELTS Score',
      type: 'string',
      options: {
        list: [
          { title: '6', value: '6' },
          { title: '7', value: '7' },
          { title: '8', value: '8' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    },
    {
      name: 'is_sharable',
      title: 'is Sharable',
      type: 'boolean',
    },
    {
      name: 'uni_section',
      title: 'Uni Section',
      type: 'string',
      options: {
        list: [
          { title: 'Section 1', value: 'section 1' },
          { title: 'Section 2', value: 'section 2' },
          { title: "I don't know", value: 'i dont know' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    },
    {
      name: 'completed_forms',
      title: 'Completed Forms',
      type: 'array',
      of: [{ type: 'client_completed_forms_obj' }],
    },
  ],
};