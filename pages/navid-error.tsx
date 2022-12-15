import AnimationComponent from 'Components/AnimationComponent';
import PageLayout from 'Components/Layouts/PageContainer';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import styled from 'styled-components/macro';
import {
  billboardTitleStyle,
  billboardSubtitleStyle,
  billboardTextStyle,
} from 'Styles/Theme/billboard';

interface Props {
  statusCode?: number;
}
const Error: NextPage<Props> = ({ statusCode }) => {
  console.log(statusCode);
  return (
    <PageLayout>
      <Head>
        <title>Error</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container>
        <AnimationComponent />
        <Title>Error</Title>
        <Subtitle>Oops...</Subtitle>
        <Desc>We have some error {statusCode}</Desc>
      </Container>
    </PageLayout>
  );
};
export default Error;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 9.5rem 0;
  position: relative;
`;
const Title = styled.h1`
  ${billboardTitleStyle}
`;
const Subtitle = styled.h2`
  ${billboardSubtitleStyle}
`;
const Desc = styled.h3`
  ${billboardTextStyle}
`;
