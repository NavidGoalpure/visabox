import { Occupation } from 'interfaces/Documents/occupation';
import React from 'react';
import styled, { css } from 'styled-components';
import * as Tabs from '@radix-ui/react-tabs';
import * as SideBar from 'components/Sidebar';
import { TbListDetails } from 'react-icons/tb';
import { TbStack2 } from 'react-icons/tb';
import { TbNumbers } from 'react-icons/tb';
import { ScrollBox } from 'elements/ScrollBox';
import { useStaticTranslation } from 'hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from './Const';
import { deviceMin } from 'consts/device';
import AccordionElement from 'elements/Accordion';

interface Props {
  occupation: Occupation;
}
const SidebarPage: React.FC<Props> = ({ occupation }) => {
  const TAGS = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  );
  const { t } = useStaticTranslation(componentStatements);
  return (
    <SideBar.Root
      defaultValue='details'
      items={
        <>
          <SideBar.Item
            title={t(LanguageKeys.Details)}
            value='details'
            icon={<DetailsIcon />}
          />
          <SideBar.Item
            title={t(LanguageKeys.Anzsco)}
            value='anzsco'
            icon={<AnszcoIcon />}
          />
          <SideBar.Item
            title={t(LanguageKeys.Backlog)}
            value='backlog'
            icon={<Backlog />}
          />
        </>
      }
      bodies={
        <>
          <Tabs.Content value='details'>
            <ScrollBox heightToRem={40}>
              <div style={{ padding: '15px 20px' }}>
                <div className='Text'>Tags</div>
                {TAGS.map((tag) => (
                  <div className='Tag' key={tag}>
                    {tag}
                  </div>
                ))}
              </div>
              <AccordionElement
                content={
                  <ul>
                    <li>
                      Interpreting architectural drawings and specifications
                    </li>
                    <li>
                      Interpreting architectural drawings and specifications
                    </li>
                    <li>
                      Interpreting architectural drawings and specifications
                    </li>
                  </ul>
                }
                triggerContent={'Tasks'}
              />
            </ScrollBox>
          </Tabs.Content>
          <Tabs.Content value='anzsco'>Anzsco</Tabs.Content>
        </>
      }
    />
  );
};

export { SidebarPage };

const Icon = css`
  width: 2.5rem;
  height: 2.5rem;
  margin-bottom: 0.25rem;
  stroke-width: 1;
  @media ${deviceMin.tabletS} {
    margin-inline-end: 1rem;
    width: 1.5rem;
    height: 1.5rem;
    stroke-width: 2;
  }
`;
const DetailsIcon = styled(TbListDetails)`
  ${Icon}
`;
const AnszcoIcon = styled(TbNumbers)`
  ${Icon}
`;
const Backlog = styled(TbStack2)`
  ${Icon}
`;
