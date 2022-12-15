import { useDynamicTranslation } from 'Hooks/useDynamicTraslation';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import {
  Occupation,
  Territories,
  TerritoryObj,
} from 'Interfaces/Documents/occupation';
import { UnitGroup } from 'Interfaces/Documents/unitGroup';
import React from 'react';
import * as RadixTab from '@radix-ui/react-tabs';
import * as Tab from 'Elements/Tab';
import { getTerritories } from 'Utils/occupations';

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
