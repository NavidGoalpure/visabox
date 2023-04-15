export default {
  name: "user",
  title: "User",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "last-name",
      title: "Last Name",
      type: "string",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "phone",
      title: "Phone Number",
      type: "string",
    },
    {
      name: "age",
      title: "Age",
      type: "",
      options: {
        list: [
          { title: "18-24", value: "18-24" },
          { title: "25-32", value: "25-32" },
          { title: "33-39", value: "33-39" },
          { title: "40-44", value: "40-44" },
          { title: "45+", value: "45+" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
    },
    {
      name: "marital",
      title: "Marital Status",
      type: "string",
      options: {
        list: [
          { title: "Single", value: "single" },
          { title: "Married", value: "married" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
    },
    {
      name: "field-of-study",
      title: "Field Of Study",
      type: "string",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "degree",
      title: "Degree",
      type: "",
      options: {
        list: [
          { title: "Diploma", value: "Diploma" },
          { title: "Bachelor's degree", value: "Bachelor's degree" },
          { title: "Doctorate", value: "Doctorate" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
    },
    {
      name: "currentjob",
      title: "Current Job",
      type: "string",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "work-experience",
      title: "Work Experience",
      type: "",
      options: {
        list: [
          { title: "Below 1 year", value: "Below 1 year" },
          { title: "1 to 3 years", value: "1 to 3 years" },
          { title: "3 to 5 years", value: "3 to 5 years" },
          { title: "5 to 8 years", value: "5 to 8 years" },
          { title: "More than 8 years", value: "More than 8 years" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
    },
    {
      name: "australian-work-experience",
      title: "Australian Work Experience",
      type: "",
      options: {
        list: [
          {
            title: "none - less than 1 year",
            value: "none - less than 1 year",
          },
          { title: "Below 1 year", value: "Below 1 year" },
          { title: "1 to 3 years", value: "1 to 3 years" },
          { title: "3 to 5 years", value: "3 to 5 years" },
          { title: "5 to 8 years", value: "5 to 8 years" },
          { title: "More than 8 years", value: "More than 8 years" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
    },
    {
      name: "english-level",
      title: "English Level",
      type: "",
      options: {
        list: [
          { title: "More than 8 years", value: "More than 8 years" },
          { title: "Low", value: "Low" },
          { title: "Normal", value: "Normal" },
          { title: "Good", value: "Good" },
          { title: "Perfect", value: "Perfect" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
