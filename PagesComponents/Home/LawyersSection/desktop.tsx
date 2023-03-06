import VIPLawyerCard from 'Components/Business/Lawyer/VIPCard';
import { Lawyers } from 'Consts/Businesses/Lawyers';
import { useLocale } from 'Hooks/useLocale';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import Link from 'next/link';
import styled from 'styled-components';
import { componentStatements, LanguageKeys } from './const';
import { Container, Hr, Subtitle, Title, ViewAll } from './styledComponents';
import Image from 'next/image';

const DesktopIndex: React.FC = () => {
  const { t } = useStaticTranslation(componentStatements);
  const { locale } = useLocale();
  const vipLawyer = Lawyers.find((agent) => agent.isFeatured);

  return (
    <>
      <Container>
        <Side>
          {vipLawyer && (
            <StyledCard
              name={vipLawyer?.name}
              desc={vipLawyer?.desc}
              slug={vipLawyer?.slug}
            />
          )}
        </Side>
        <Side>
          <Title>{t(LanguageKeys.Title)}</Title>
          <Subtitle>{t(LanguageKeys.Subtitle)}</Subtitle>

          <Link href={`${locale}/businesses/lowyers`}>
            <ViewAll>{t(LanguageKeys.CTA)}</ViewAll>
          </Link>
        </Side>
      </Container>
      <Hr />
    </>
  );
};
export default DesktopIndex;
const Side = styled.div`
  flex: 1;
`;
const StyledCard = styled(VIPLawyerCard)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
