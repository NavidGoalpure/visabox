import VIPLawyerCard from 'Components/Business/Lawyer/VIPCard';
import { Lawyers } from 'Consts/Businesses/Lawyers';
import { PrimaryButton } from 'Elements/Button/Primary';
import { useLocale } from 'Hooks/useLocale';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import {
  Layer1_HrStyle,
  Layer1_SubtitleStyle,
  Layer1_TitleStyle,
} from 'Styles/Theme/Layers/layer1/style';
import { componentStatements, LanguageKeys } from './const';

const index: React.FC = () => {
  const { t } = useStaticTranslation(componentStatements);
  const { locale } = useLocale();
  const vipLawyer = Lawyers.find((agent) => agent.isFeatured);

  return (
    <Container>
      <Title>{t(LanguageKeys.Title)}</Title>
      {vipLawyer && (
        <VIPLawyerCard
          name={vipLawyer?.name}
          desc={vipLawyer?.desc}
          slug={vipLawyer?.slug}
        />
      )}
      <Subtitle>{t(LanguageKeys.Subtitle)}</Subtitle>

      <Link href={`${locale}/businesses/lowyers`}>
        <ViewAll>{t(LanguageKeys.CTA)}</ViewAll>
      </Link>
      <Hr />
    </Container>
  );
};
export default index;

///////////////
const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding: 2rem 1rem 0;
`;

const Title = styled.h2`
  ${Layer1_TitleStyle}
`;
const Subtitle = styled.h2`
  ${Layer1_SubtitleStyle}
  padding-top: 2rem;
`;
const ViewAll = styled(PrimaryButton)`
  width: auto;
`;
const Hr = styled.hr`
  ${Layer1_HrStyle}
`;
