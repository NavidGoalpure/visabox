import AnimationComponent from 'Components/AnimationComponent';
import { PrimaryButton } from 'Elements/Button/Primary';
import PageLayout from 'Components/Layouts/PageContainer';
import Head from 'next/head';
import React from 'react';
import styled from 'styled-components/macro';

import Link from 'next/link';
import Seo from 'Components/Seo';
import { Layer1_TextStyle } from 'Styles/Theme/Layers/layer1/style';
import {
  layer1_TextColor,
  layer1_SubtitleColor,
} from 'Styles/Theme/Layers/layer1/theme';

export default function NotFound() {
  return (
    <PageLayout>
      <Seo
        title={'Not Found'}
        canonical={`https://www.marabox.com/404`}
        isNoIndex={true}
      />
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
          <Desc>Maybe you need to use a proxy</Desc>
          <Desc>{`You can go to the Homepage if you feel you're lost`}</Desc>
          <Link href='/occupations'>
            <PrimaryButton>Home</PrimaryButton>
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
  padding: 4.5rem 0;
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
  ${layer1_TextColor}
`;
const Subtitle = styled.h2`
  ${layer1_SubtitleColor}
`;
const Desc = styled.h3`
  ${Layer1_TextStyle}
`;
