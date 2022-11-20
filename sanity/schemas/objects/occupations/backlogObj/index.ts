export default {
  name: 'backlog_obj',
  title: 'Backlog',
  type: 'object',
  fields: [
    ////////////////////////////
    //////189 Visa//////////////
    ////////////SUBMITED////////
    {
      name: 'submited_189',
      title: 'Submited 189 ',
      type: 'backlog_numbers_obj',
    },
    ////////////INVITED////////
    {
      name: 'invited_189',
      title: 'Invited 189 ',
      type: 'backlog_numbers_obj',
    },

    ///////////////////////////////////

    ////////////////////////////
    //////190 Visa//////////////
    ////////////SUBMITED////////
    {
      name: 'submited_190',
      title: 'Submited 190 ',
      type: 'backlog_numbers_obj',
    },
    ////////////INVITED////////
    {
      name: 'invited_190',
      title: 'Invited 190 ',
      type: 'backlog_numbers_obj',
    },
    ////////////////////////////
    //////491 Visa//////////////
    ////////////SUBMITED////////
    {
      name: 'submited_491',
      title: 'Submited 491 ',
      type: 'backlog_numbers_obj',
    },
    ////////////INVITED////////
    {
      name: 'invited_491',
      title: 'Invited 491 ',
      type: 'backlog_numbers_obj',
    },
    ////////////////////////////
    //////491_family Visa//////////////
    ////////////SUBMITED////////
    {
      name: 'submited_491_family',
      title: 'Submited 491_family ',
      type: 'backlog_numbers_obj',
    },
    ////////////INVITED////////
    {
      name: 'invited_491_family',
      title: 'Invited 491_family ',
      type: 'backlog_numbers_obj',
    },
    ///////////////////////////
    /////By State/////////////
    //////////////////////////
    {
      name: 'submited_by_state',
      title: 'Submited By State ',
      type: 'array',
      of: [{ type: 'territory_backlog_obj' }],
    },
    ////////////INVITED////////
    {
      name: 'invited_by_state',
      title: 'Invited By State ',
      type: 'array',
      of: [{ type: 'territory_backlog_obj' }],
    },
  ],
  //   preview: {
  //     select: {
  //       title: 'submited_190',
  //     },
  //   },
};
