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
      title: 'Submitted 189 ',
      type: 'backlog_numbers_obj',
    },
    ////////////INVITED////////
    {
      name: 'invited_189',
      title: 'Invited 189 ',
      type: 'backlog_numbers_obj',
    },

    //////Total Submitted////////////////
    {
      name: 'total_submited_189',
      title: 'Total Submitted 189',
      type: 'string',
    },
    /////// Total INVITED////////
    {
      name: 'total_invited_189',
      title: 'Total Invited 189',
      type: 'string',
    },
    ////////////////////////////
    //////190 Visa//////////////
    ////////////SUBMITED////////
    {
      name: 'submited_190',
      title: 'Submitted 190 ',
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
      title: 'Submitted 491 ',
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
      title: 'Submitted 491_family ',
      type: 'backlog_numbers_obj',
    },
    ////////////INVITED////////
    {
      name: 'invited_491_family',
      title: 'Invited 491_family ',
      type: 'backlog_numbers_obj',
    },
    //////Total Submitted////////////////
    {
      name: 'total_submited_491_family',
      title: 'Total Submitted 491_family',
      type: 'string',
    },
    /////// Total INVITED////////
    {
      name: 'total_invited_491_family',
      title: 'Total Invited 491_family',
      type: 'string',
    },
    ///////////////////////////
    /////By State/////////////
    //////////////////////////
    ////////////SUBMITED////////

    {
      name: 'submited_by_state_190',
      title: 'Submitted By State 190',
      type: 'array',
      of: [{ type: 'territory_backlog_obj' }],
    },
    ////////////INVITED////////
    {
      name: 'invited_by_state_190',
      title: 'Invited By State 190',
      type: 'array',
      of: [{ type: 'territory_backlog_obj' }],
    },
    ////////////SUBMITED////////

    {
      name: 'submited_by_state_491',
      title: 'Submitted By State ',
      type: 'array',
      of: [{ type: 'territory_backlog_obj' }],
    },
    ////////////INVITED////////
    {
      name: 'invited_by_state_491',
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
