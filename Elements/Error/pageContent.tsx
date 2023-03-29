import MaraBgAnimation from 'Components/MaraBgAnimation';
import { PrimaryButton } from 'Elements/Button/Primary';
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import {
  Layer1_SubtitleStyle,
  Layer1_TextStyle,
  Layer1_TitleStyle,
} from 'Styles/Theme/Layers/layer1/style';
import PageLayout from 'Components/Layouts/PageContainer';

export default function PageErrorContent() {
  return (
    <PageLayout>
      <Container>
        <MaraBgAnimation>
          <BlurContainer>
            <Title>Someone stepped on the wire</Title>

            <Subtitle>Please check your connection</Subtitle>

            <Desc>{`there most be some problems in the servers please try again later`}</Desc>

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
  text-align: center !important;
`;
const Desc = styled.h3`
  ${Layer1_TextStyle}
`;
