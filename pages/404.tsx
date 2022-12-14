import AnimationComponent from 'components/AnimationComponent';
import { Button } from 'elements/Button';
import PageLayout from 'components/Layouts/PageContainer';
import Head from 'next/head';
import React from 'react';
import styled from 'styled-components/macro';
import {
  billboardTitleStyle,
  billboardSubtitleStyle,
  billboardTextStyle,
} from 'Styles/Theme/billboard';
import Link from 'next/link';

export default function NotFound() {
  return (
    <PageLayout>
      <Head>
        <title>Not Found</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container>
        <AnimationComponent />
        <TxtContainer>
          <Title>404</Title>
          <Subtitle>Oops...</Subtitle>
          <Desc>You weren't supposed to be here</Desc>
          <Desc>{`You can go to the Homepage if you feel you're lost`}</Desc>
          <Link href='/occupations'>
            <Button>Home</Button>
          </Link>
        </TxtContainer>
      </Container>
    </PageLayout>
  );
}
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 9.5rem 0;
  position: relative;
`;

const TxtContainer = styled.div`
  padding: 32px 24px;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  flex-direction: column;
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
