import React from 'react';
import styled, { css } from 'styled-components';
import {
  layer2A_TextStyle,
  layer2A_TitleStyle,
} from 'Styles/Theme/Layers/layer2/style';
import theme from 'styled-theming';
import { En_FaLanguage } from 'Interfaces/Database';
import { useDynamicTranslation } from 'Hooks/useDynamicTraslation';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from '../const';
interface Props {
  desc?: En_FaLanguage;
}
const AboutComponent = ({ desc }: Props) => {
  const { dt } = useDynamicTranslation();
  const { t } = useStaticTranslation(componentStatements);
  return (
    <Container>
      <Title>{t(LanguageKeys.About)}</Title>
      <Desc
        dangerouslySetInnerHTML={{
          __html: dt(desc),
        }}
      />
    </Container>
  );
};

export { AboutComponent };

const DescBackground = theme('mode', {
  light: css`
    background: var(--color-gray13);
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  `,
  dark: css`
    background: var(--color-gray6);
  `,
});
const Container = styled.div`
  ${DescBackground}
  border-radius: 15px;
  // width: 100%;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;
const Title = styled.h3`
  ${layer2A_TitleStyle}
`;
const Desc = styled.p`
  ${layer2A_TextStyle}
`;
