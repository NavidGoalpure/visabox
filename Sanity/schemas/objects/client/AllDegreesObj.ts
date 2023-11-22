export default {
  name: "all_degrees",
  title: "All degrees",
  type: "object",
  fields: [
    {
      name: "label",
      title: "Label",
      type: "string",
      options: {
        list: [
          { title: "I Dont Have Any", value: "I dont have any" },
          { title: "Diploma", value: "diploma" },
          { title: "Bachelor's degree", value: "bachelor's degree" },
          { title: "Master degree", value: "master degree" },
          { title: "Doctorate", value: "doctorate" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
    },
    {
      name: "uni_section",
      title: "Uni Section",
      type: "string",
      options: {
        list: [
          { title: "Section 1", value: "section 1" },
          { title: "Section 2", value: "section 2" },
          { title: "I don't know", value: "i dont know" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
    },
    {
      name: "graduation_date",
      title: "Graduation Date",
      type: "string",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "field_of_study",
      title: "Field Of Study",
      type: "string",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
  ],
};
