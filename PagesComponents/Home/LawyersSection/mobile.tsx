import VIPLawyerCard from 'Components/Business/Lawyer/VIPCard';
import { Lawyers } from 'Consts/Businesses/Lawyers';
import { useLocale } from 'Hooks/useLocale';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import Link from 'next/link';
import { componentStatements, LanguageKeys } from './const';
import { Container, Hr, Subtitle, Title, ViewAll } from './styledComponents';

const MobileIndex: React.FC = () => {
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

      <Link href={`${locale}/businesses/lawyers`}>
        <ViewAll>{t(LanguageKeys.CTA)}</ViewAll>
      </Link>
      <Hr />
    </Container>
  );
};
export default MobileIndex;
