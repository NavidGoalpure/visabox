import AnimationComponent from 'Components/AnimationComponent';
import { Button } from 'Elements/Button';
import PageLayout from 'Components/Layouts/PageContainer';
import Head from 'next/head';
import React from 'react';
import styled from 'styled-components/macro';
import {
  billboardTitleStyle,
  billboardSubtitleStyle,
  billboardTextStyle,
} from 'Styles/Theme/billboard';
import Link from 'next/link';

export default function Error() {
  return (
    <PageLayout>
      <Head>
        <title>Error</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container>
        <AnimationComponent />
        <TxtContainer>
          <Title>Someone stepped on the wire</Title>
          <Subtitle>Please check your vpn connection</Subtitle>
          <Desc>{`there most be some problems in the servers please try again later`}</Desc>
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
