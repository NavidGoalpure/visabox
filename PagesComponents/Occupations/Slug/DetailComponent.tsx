import { useDynamicTranslation } from 'hooks/useDynamicTraslation';
import { useStaticTranslation } from 'hooks/useStaticTraslation';
import {
  Occupation,
  Territories,
  TerritoryObj,
} from 'interfaces/Documents/occupation';
import { UnitGroup } from 'interfaces/Documents/unitGroup';
import React from 'react';
import * as RadixTab from '@radix-ui/react-tabs';
import * as Tab from 'elements/Tab';
import { getTerritories } from 'utils/occupations';

interface Props {
  occupation: Occupation;
}
// navid find html
// function getHtml_decsBaseOnAbv=({territoryObj,abv}:{territoryObj:TerritoryObj;abv:string}):string=>{
// }
const DetailComponent: React.FC<Props> = ({ occupation }) => {
  return (
    <Tab.Root
      defaultValue={Territories.ACT}
      items={
        <>
          {getTerritories().map((territory) => (
            <Tab.Item key={territory} title={territory} value={territory} />
          ))}
        </>
      }
      bodies={
        <>
          {getTerritories().map((territory) => (
            <RadixTab.Content key={territory} value={territory}>
              {territory}
            </RadixTab.Content>
          ))}
        </>
      }
    />
  );
};

export default DetailComponent;
