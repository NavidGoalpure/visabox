import theme from 'styled-theming';
import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';

import { Headline4Style, Headline5Style } from 'styles/Typo';
import PageLayout from 'components/Layouts/PageContainer';
import TooltipTag from 'elements/TooltipTag';

const Home: NextPage = () => {
  return (
    <PageLayout>
      <Head>
        <title>Mara Box</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <PageTitle>Skill Occupation List</PageTitle>
      <PageSubtitle>
        Below is the complete list of eligible skilled occupations or combined
        list as prescribed in Legislative Instrument LIN 19/051
      </PageSubtitle>
      <TooltipTag
        content={'No Shortage / Strong'}
        popupContent={'mobin is the designer'}
      />
    </PageLayout>
  );
};
export default Home;

const PageTitle = styled.h1`
  ${Headline4Style}
`;
const PageSubtitle = styled.h2`
  ${Headline5Style}
`;
