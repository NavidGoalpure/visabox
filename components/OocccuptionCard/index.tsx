import { useLocale } from 'hooks/useLocale';
import { MultiLanguageText, MultiLanguageTextArray } from 'interfaces';
import { Slug } from 'interfaces/Fields';
import Link from 'next/link';
import styled, { css } from 'styled-components/macro';
import theme from 'styled-theming';
import {
  componentTheme,
  componentSubtitleStyle,
  componentTextStyle,
  componentTitleColor,
} from 'Styles/Theme/Component';
import { useState } from 'react';
import { device } from 'consts/device';
import { useDynamicTranslation } from 'hooks/useDynamicTraslation';
import PopupContent from './popupContent';

interface Props {
  code?: number;
  title?: MultiLanguageText;
  description?: MultiLanguageText;
  slug?: Slug;
  tasks: MultiLanguageTextArray;
}
function OccupationCard({ code, title, description, slug, tasks }: Props) {
  // const { t } = useStaticTranslation(componentStatements);
  const { dt } = useDynamicTranslation();
  const { locale } = useLocale();
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  return (
    <Container>
      <Link
        key={code}
        href={{ pathname: `/${locale}/occupations/${slug?.current}` }}
        prefetch={false}
      >
        <Wrapper>
          <Code>{code}</Code>
          <Title>{dt(title)}</Title>
          <Description>{dt(description)}</Description>
        </Wrapper>
      </Link>

      <PopupContent
        slug={slug}
        tasks={tasks}
        isPopupOpen={isPopupOpen}
        setIsPopupOpen={setIsPopupOpen}
      />
    </Container>
  );
}

export default OccupationCard;

const Container = styled.div`
  ${componentTheme}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 20rem;
  height: 20rem;
  border-radius: 15px;
  cursor: pointer;
  max-width: 31%;
  position: relative;
  padding: 1.5rem 1rem 3.75rem 1rem;
  @media ${device.tabletL} {
    max-width: unset;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // overflow: hidden;
`;
export const codeColor = theme('mode', {
  light: css`
    background: white;
    color: var(--color-gray8);
    border: 2px solid var(--color-primary5);
  `,
  dark: css`
    color: var(--color-primary6);
    border: 2px solid var(--color-primary4);
  `,
});

const Code = styled.h3`
  ${componentSubtitleStyle}
  ${codeColor}
  width:min-content;
  margin-bottom: 1rem;
  padding: 0.5rem;
  align-items: center;
  border-radius: 55px;
`;

const Title = styled.h2`
  ${componentSubtitleStyle}
  ${componentTitleColor}
  margin-bottom:1rem;
`;

const Description = styled.p`
  ${componentTextStyle}
  text-align: center;
  margin: 0;
  overflow: hidden;
`;
