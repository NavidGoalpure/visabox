import theme from 'styled-theming';
import type { NextPage } from 'next';
import Head from 'next/head';
import styled, { css } from 'styled-components';
import * as Tabs from '@radix-ui/react-tabs';

import { Headline4Style, Headline5Style } from 'styles/Typo';
import PageLayout from 'components/Layouts/PageContainer';
import * as SideBar from 'components/Sidebar';
import { boxShadow, componentBackground, pageBackground } from 'styles/Theme';
import { TbListDetails } from 'react-icons/tb';
import { GiPoolTriangle } from 'react-icons/gi';
import { TbNumbers } from 'react-icons/tb';
const Home: NextPage = () => {
  return (
    <PageLayout>
      <Head>
        <title>Visa Box</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <SideBar.Root
        items={
          <>
            <SideBar.Item
              title='Details'
              value='Details'
              icon={<TbListDetails style={{ marginRight: '1rem' }} />}
            />
            <SideBar.Item
              title='Anzsco'
              value='Anzsco'
              icon={<TbNumbers style={{ marginRight: '1rem' }} />}
            />
            <SideBar.Item
              title='Backlog'
              value='Backlog'
              icon={<GiPoolTriangle style={{ marginRight: '1rem' }} />}
            />
          </>
        }
        bodies={
          <>
            <Tabs.Content value='Details'>Details1</Tabs.Content>
            <Tabs.Content value='Anzsco'>Anzsco</Tabs.Content>
          </>
        }
      />
    </PageLayout>
  );
};
export default Home;

///////////////
