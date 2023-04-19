// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import occupation from './documents/occupations/occupation';
import visaType from './documents/occupations/visaType';
import territory from './documents/occupations/territory';
import unitGroup from './documents/occupations/unitGroup';
import survey from './documents/survey';
import client from './documents/client/client';

//Objects-section
import visaOptionObj from './objects/occupations/visaOptionObj';
import territoryObj from './objects/occupations/territoryObj';
import anzscoObj from './objects/occupations/anzscoObj';
import priorityList from './objects/occupations/anzscoObj/priorityList';
import backlogObj from './objects/occupations/backlogObj';
import backlogNumbersObj from './objects/occupations/backlogObj/backlogNumbersObj';
import territoryBacklogObj from './objects/occupations/backlogObj/territoryBacklogObj';
import surveyChoiceObj from './objects/survey/choice';
//Objects-other
import { translateFields } from './objects/fieldTranslation';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes
    .concat([
      ////Occupations Related////
      visaOptionObj,
      territoryObj,
      backlogObj,
      priorityList,
      backlogNumbersObj,
      territoryBacklogObj,
      /////Survey Related ////
    ])
    .concat(
      translateFields([
        // The following are document types which will appear
        // in the studio.

        ////Occupations Related////
        surveyChoiceObj,
        unitGroup,
        anzscoObj,
        occupation,
        visaType,
        territory,
        /////Survey Related ////
        survey,
        /////client Related ////
        client,
      ])
    ),
});
