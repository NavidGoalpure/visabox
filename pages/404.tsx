import MaraBgAnimation from 'Components/MaraBgAnimation';
import { PrimaryButton } from 'Elements/Button/Primary';
import PageLayout from 'Components/Layouts/PageContainer';
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Seo from 'Components/Seo';
import {
  Layer1_SubtitleStyle,
  Layer1_TextStyle,
  Layer1_TitleStyle,
} from 'Styles/Theme/Layers/layer1/style';

export default function NotFound() {
  return (
    <PageLayout>
      <Seo
        title={'Not Found'}
        canonical={`https://www.marabox.com/404`}
        isNoIndex={true}
      />

      <Container>
        <MaraBgAnimation>
          <BlurContainer>
            <Title>404</Title>
            <Subtitle>Oops...</Subtitle>
            <Desc>You weren't supposed to be here</Desc>
            <Desc>Maybe you need to use a proxy</Desc>
            <Desc>{`You can go to the Homepage if you feel you're lost`}</Desc>
            <Link href='/occupations'>
              <PrimaryButton>Home</PrimaryButton>
            </Link>
          </BlurContainer>
        </MaraBgAnimation>
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

const BlurContainer = styled.div`
  padding: 32px 24px;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  ${Layer1_TitleStyle}
`;
const Subtitle = styled.h2`
  ${Layer1_SubtitleStyle}
`;
const Desc = styled.h3`
  ${Layer1_TextStyle}
`;
