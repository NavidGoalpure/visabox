import { useDynamicTranslation } from 'hooks/useDynamicTraslation';
import { useStaticTranslation } from 'hooks/useStaticTraslation';
import { Occupation } from 'interfaces/Documents/occupation';
import { UnitGroup } from 'interfaces/Documents/unitGroup';
import React from 'react';
import * as RadixTab from '@radix-ui/react-tabs';
import * as Tab from 'elements/Tab';
import { LanguageKeys, componentStatements } from './const';

interface Props {
  occupation: Occupation;
}
const DetailComponent: React.FC<Props> = ({ occupation }) => {
  const { t } = useStaticTranslation(componentStatements);
  const { dt, dtArray } = useDynamicTranslation();
  return (
    <Tab.Root
      defaultValue='details'
      items={
        <>
          <Tab.Item title={'TAS'} value='TAS1' />
          <Tab.Item title={'NSW'} value='NSW2' />
          <Tab.Item title={'VIC'} value='VIC3' />
          <Tab.Item title={'TAS'} value='TAS4' />
          <Tab.Item title={'NSW'} value='NSW5' />
          <Tab.Item title={'VIC'} value='VIC6' />
          <Tab.Item title={'TAS'} value='TAS7' />
          <Tab.Item title={'NSW'} value='NSW8' />
          <Tab.Item title={'VIC'} value='VIC9' />
        </>
      }
      bodies={
        <>
          <RadixTab.Content value='TAS1'>NSW1</RadixTab.Content>
          <RadixTab.Content value='NSW2'>TAS2</RadixTab.Content>
          <RadixTab.Content value='VIC3'>VIC3</RadixTab.Content>
          <RadixTab.Content value='TAS4'>TAS4</RadixTab.Content>
          <RadixTab.Content value='NSW5'>NSW5</RadixTab.Content>
          <RadixTab.Content value='VIC6'>VIC6</RadixTab.Content>
          <RadixTab.Content value='TAS7'>TAS7</RadixTab.Content>
          <RadixTab.Content value='NSW8'>NSW8</RadixTab.Content>
          <RadixTab.Content value='VIC9'>VIC9</RadixTab.Content>
        </>
      }
    />
  );
};

export default DetailComponent;
