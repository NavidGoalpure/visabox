import { NextPage } from 'next';
import styled from 'styled-components';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from './const';
import {
  Layer1_SubtitleStyle,
  Layer1_TitleStyle,
} from 'Styles/Theme/Layers/layer1/style';
import { deviceMin } from 'Consts/device';
import { PrimaryButton } from 'Elements/Button/Primary';
import { SecondaryButton } from 'Elements/Button/Secondary';
import Link from 'next/link';
import { AiFillLike } from 'react-icons/ai';

const Content: NextPage = () => {
  const { t } = useStaticTranslation(componentStatements);

  return (
    <Container>
      <SuccessIcon />
      <h1>{t(LanguageKeys.Title)}</h1>
      <h2>{t(LanguageKeys.Subtitle)}</h2>
      <ButtonContainer>
        <Link href={'/australia-migration-ai/chat'}>
          <PrimaryButton style={{ width: '11rem' }}>
            Chat With Marcya
          </PrimaryButton>
        </Link>
        {/* // */}
        <Link href={'/'}>
          <SecondaryButton style={{ width: '11rem' }}>
            Goto Home Page
          </SecondaryButton>
        </Link>
      </ButtonContainer>
    </Container>
  );
};
export default Content;

const SuccessIcon = styled(AiFillLike)`
  color: var(--color-success2);
  width: 3rem;
  height: 3rem;
  margin-inline-end: 1rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 4rem;
  h1 {
    ${Layer1_TitleStyle}
    margin-bottom: 1rem;
  }
  h2 {
    ${Layer1_SubtitleStyle}
    text-align: center;
    @media ${deviceMin.tabletS} {
      text-align: center;
    }
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media ${deviceMin.tabletS} {
    flex-direction: row;
  }
`;
