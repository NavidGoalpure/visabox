import { useLocale } from 'Hooks/useLocale';
import {
  EnLanguage,
  EnLanguageArray,
  En_FaLanguageArray,
  MultiLanguageText,
  MultiLanguageTextArray,
} from 'Interfaces/Database';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDynamicTranslation } from 'Hooks/useDynamicTraslation';
import PopupContent from './popupContent';
import { Container, Wrapper, Code, Title } from '../StyledComponents';
import Popup from '../popup';
import styled from 'styled-components';
import { layer2A_TextStyle } from 'Styles/Theme/Layers/layer2/style';
import { getGsapTimeLine_FadeUp } from 'Utils';
import { Slug } from 'Interfaces/Database/Fields';

interface Props {
  code: number;
  title?: EnLanguage;
  description?: EnLanguage;
  slug?: Slug;
  tasks: EnLanguageArray;
  hasAnimation?: boolean;
}

function OccupationCard({
  code,
  title,
  description,
  slug,
  tasks,
  hasAnimation = true,
}: Props) {
  const { dt } = useDynamicTranslation();
  const { locale } = useLocale();
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  useEffect(() => {
    if (hasAnimation) getGsapTimeLine_FadeUp(`c${code}`);
  }, []);
  return (
    <Container className={`c${code}`}>
      <Link
        target='_blank'
        rel='noopener noreferrer'
        style={{ height: '100%' }}
        key={code}
        href={{ pathname: `/${locale}/occupations/${slug?.current}` }}
        prefetch={false}
      >
        <Wrapper>
          <Code>{code}</Code>
          <Title>{dt(title)}</Title>
          <Description dangerouslySetInnerHTML={{ __html: dt(description) }} />
        </Wrapper>
      </Link>

      <Popup
        content={<PopupContent slug={slug} tasks={tasks} />}
        isPopupOpen={isPopupOpen}
        setIsPopupOpen={setIsPopupOpen}
      />
    </Container>
  );
}

export default OccupationCard;
const Description = styled.p`
  ${layer2A_TextStyle}
  direction: ltr;
  text-align: center;
  margin: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-align: start;
`;
