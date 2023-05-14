import MaraBgAnimation from 'Components/MaraBgAnimation';
import PageLayout from 'Components/Layouts/PageContainer';
import React from 'react';
import styled from 'styled-components';
import {
  Layer1_SubtitleStyle,
  Layer1_TextStyle,
  Layer1_TitleStyle,
} from 'Styles/Theme/Layers/layer1/style';

export default function NotFound() {
  return (
    <PageLayout>
      <Container>
        <MaraBgAnimation>
          <BlurContainer>
            <Title>لیست مقاله ها باید اینجا نشون داده بشه</Title>
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
