import { Point_Calculator_Fragment } from "./GroqFragments";
//  this is for when lawyers want to see a printable version of form-wall
// this is the params value which needs to be shown 
// in order to present to printable version
export const PAGE_PARAMS_VERSION_PRINTABLE_VALUE = "printable"
export const listOfBasicForm_ResParams = `
${Point_Calculator_Fragment}
      _id,
      _createdAt,
      _updatedAt,
      name,
      lastname,
      current_job,
      uni_section,
      form_updated,
      `;

////////////
