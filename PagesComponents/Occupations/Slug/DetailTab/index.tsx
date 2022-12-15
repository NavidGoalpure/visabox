import { useDynamicTranslation } from 'Hooks/useDynamicTraslation';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import {
  Occupation,
  Territories,
  TerritoryObj,
  TerritorySection,
} from 'Interfaces/Documents/occupation';
import { UnitGroup } from 'Interfaces/Documents/unitGroup';
import React from 'react';
import * as RadixTab from '@radix-ui/react-tabs';
import * as Tab from 'Elements/Tab';
import { getTerritories } from 'Utils/occupations';
import { ScrollBox } from 'Elements/ScrollBox';

interface Props {
  occupation: Occupation;
}
// navid find html
function getHtml_decsBaseOnAbv({
  TerritorySection,
  abv,
}: {
  TerritorySection: TerritorySection[];
  abv: string;
}): string {
  console.log('navid obj=', TerritorySection);
  return '';
}
const DetailComponent: React.FC<Props> = ({ occupation }) => {
  // console.log('navid territory_section=', territory_section);

  // getHtml_decsBaseOnAbv({
  //   TerritorySection: occupation.territory_section[0],
  //   abv: 'foo',
  // });
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
        <ScrollBox heightToRem={40}>
          {getTerritories().map((territory) => (
            <RadixTab.Content key={territory} value={territory}>
              {territory}
            </RadixTab.Content>
          ))}
        </ScrollBox>
      }
    />
  );
};

export default DetailComponent;
