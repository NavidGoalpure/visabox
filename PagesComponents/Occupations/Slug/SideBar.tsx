import { Occupation } from 'pages/interfaces/Documents/Occupation';
import React from 'react';
import styled, { css } from 'styled-components';
import * as Tabs from '@radix-ui/react-tabs';
import * as SideBar from 'components/Sidebar';
import { TbListDetails } from 'react-icons/tb';
import { TbStack2 } from 'react-icons/tb';
import { TbNumbers } from 'react-icons/tb';
import { ScrollBox } from 'elements/Scroll‌Box';
import { useTranslation } from 'hooks/useTraslation';
import { componentStatements, PageKeys } from './Const';

interface Props {
  occupation: Occupation;
}
const SidebarPage: React.FC<Props> = ({ occupation }) => {
  const TAGS = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  );
  const { t } = useTranslation(componentStatements);
  return (
    <SideBar.Root
      defaultValue='details'
      items={
        <>
          <SideBar.Item
            title={t(PageKeys.Details)}
            value='details'
            icon={<DetailsIcon />}
          />
          <SideBar.Item
            title={t(PageKeys.Anzsco)}
            value='Anzsco'
            icon={<AnszcoIcon />}
          />
          <SideBar.Item
            title={t(PageKeys.Backlog)}
            value='Backlog'
            icon={<Backlog />}
          />
        </>
      }
      bodies={
        <>
          <Tabs.Content value='details'>
            <ScrollBox>
              <div style={{ padding: '15px 20px' }}>
                <div className='Text'>Tags</div>
                {TAGS.map((tag) => (
                  <div className='Tag' key={tag}>
                    {tag}
                  </div>
                ))}
              </div>
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
  margin-inline-end: 1rem;
  width: 1.5rem;
  height: 1.5rem;
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
