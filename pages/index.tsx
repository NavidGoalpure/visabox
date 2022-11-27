import theme from 'styled-theming';
import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import * as Tabs from '@radix-ui/react-tabs';

import { Headline4Style, Headline5Style } from 'styles/Typo';
import PageLayout from 'components/Layouts/PageContainer';
import TooltipTag from 'elements/TooltipTag';
import { SideBar } from 'components/Sidebar';
import { boxShadow, componentBackground, pageBackground } from 'styles/Theme';

const Home: NextPage = () => {
  return (
    <PageLayout>
      <Head>
        <title>Mara Box</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <SideBar
        tabsList={
          <TabsList aria-label='Manage your account'>
            <TabsTrigger value='tab1'>Account</TabsTrigger>
            <TabsTrigger value='tab2'>Password</TabsTrigger>
          </TabsList>
        }
      />
    </PageLayout>
  );
};
export default Home;

const TabsList = styled(Tabs.TabsList)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0px;
  gap: 8px;
  //
  position: relative;
  width: max-content;
  padding: 24px 0px;
  //color
  ${componentBackground}
  ${boxShadow}
  //
  border-radius: 10px;
  overflow: hidden;
  list-style: none;
`;
const TabsTrigger = styled(Tabs.Trigger)`
  padding: 1rem;
  position: relative;
  list-style: none;
  width: 100%;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  cursor: pointer;
`;
