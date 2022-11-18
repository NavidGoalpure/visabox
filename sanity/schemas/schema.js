// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import occupation from './documents/occupation';
import visaType from './documents/visaType';
import territory from './documents/territory';
import unitGroup from './documents/unitGroup';

//Objects-section
import visaOptionObj from './objects/sections/visaOptionObj';
import territoryObj from './objects/sections/territoryObj';
import anzscoObj from './objects/sections/anzscoObj';
import priorityList from './objects/sections/anzscoObj/priorityList';
import backlogObj from './objects/sections/backlogObj';
import backlogNumbersObj from './objects/sections/backlogObj/backlogNumbersObj';
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
      visaOptionObj,
      territoryObj,
      backlogObj,
      priorityList,
      backlogNumbersObj,
    ])
    .concat(
      translateFields([
        // The following are document types which will appear
        // in the studio.
        // translateFields([occupation]),
        unitGroup,
        anzscoObj,
        occupation,
        visaType,
        territory,
      ])
    ),
});
