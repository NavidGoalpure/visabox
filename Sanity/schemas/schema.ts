////////////////////////////////
/////////Documents-section///////
///////////////////////////////
import occupation from './documents/occupations/occupation';
import agent from './documents/agent/agent';
import visaType from './documents/occupations/visaType';
import territory from './documents/occupations/territory';
import unitGroup from './documents/occupations/unitGroup';
//
import survey from './documents/survey';
//
import client from './documents/client/client';
import agency from './documents/agency/agency';
////////////////////////////////
/////////Objects-section///////
///////////////////////////////

//occupation
import visaOptionObj from './objects/occupations/visaOptionObj';
import territoryObj from './objects/occupations/territoryObj';
import anzscoObj from './objects/occupations/anzscoObj';
import priorityList from './objects/occupations/anzscoObj/priorityList';
import backlogObj from './objects/occupations/backlogObj';
import backlogNumbersObj from './objects/occupations/backlogObj/backlogNumbersObj';
import territoryBacklogObj from './objects/occupations/backlogObj/territoryBacklogObj';
//agent
import agencyObj from './objects/agent/AgencyObj';

//survey
import surveyChoiceObj from './objects/survey/choice';
//
import AllDegrees from './objects/client/AllDegreesObj';
import AllJobs from './objects/client/allJobsObj';
import ClientCompletedFormsObj from './objects/client/CompletedFormsObj';
//Objects-other
import MultiLangObj from './objects/multiLanguages/multiLangObj';
import MultiLangArrObj from './objects/multiLanguages/multiLangArrObj';
import MultiLangUrlObj from './objects/multiLanguages/multiLangUrlObj';
import EnLangObj from './objects/multiLanguages/enLangObj';

// Then we give our schema to the builder and provide the result to Sanity
export default [
  /////////////////////////
  ///////Objects/////////
  ////////////////////////
  visaOptionObj,
  territoryObj,
  backlogObj,
  priorityList,
  backlogNumbersObj,
  territoryBacklogObj,
  //
  surveyChoiceObj,
  agencyObj,
  //
  MultiLangObj,
  MultiLangArrObj,
  EnLangObj,
  MultiLangUrlObj,
  /////////////////////////
  ///////Documents/////////
  ////////////////////////

  ////Occupations Related////
  occupation,
  unitGroup,
  anzscoObj,
  visaType,
  territory,
  /////Survey Related ////
  survey,
  /////client Related ////
  client,
  AllJobs,
  AllDegrees,
  ClientCompletedFormsObj,
  /////agencyRelated/////
  agency,
  /////agentRelated/////
  agent,
];
