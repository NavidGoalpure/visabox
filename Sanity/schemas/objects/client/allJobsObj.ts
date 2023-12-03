export default {
  name: "all_jobs",
  title: "All jobs",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "work_experience",
      title: "Work Experience",
      type: "string",
      options: {
        list: [
          { title: "Below 1 year", value: "below 1 year" },
          { title: "1 to 3 years", value: "1 to 3 years" },
          { title: "3 to 5 years", value: "3 to 5 years" },
          { title: "5 to 8 years", value: "5 to 8 years" },
          { title: "More than 8 years", value: "more than 8 years" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
    },
    {
      name: "is_able_to_provide_legal_proof",
      title: "is able to provide legal proof",
      type: "boolean",
    },
    {
      name: "was_job_in_australia",
      title: "was job in australia",
      type: "boolean",
    },
  ],
};
