import VIPAgentCard from "Components/Boxes/Card/Agent/VIPCard";
import { Agents } from "Consts/Businesses/agents";
import { useLocale } from "Hooks/useLocale";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import Link from "next/link";
import { HTMLAttributes } from "react";
import { componentStatements, LanguageKeys } from "./const";
import { Container, Hr, Subtitle, Title, ViewAll } from "./styledComponents";

const MobileIndex: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  const { t } = useStaticTranslation(componentStatements);
  const { locale } = useLocale();
  const vipAgent = Agents.find((agent) => agent.isFeatured);

  return (
    <Container {...props}>
      <Title>{t(LanguageKeys.Title)}</Title>
      {vipAgent && (
        <VIPAgentCard
          name={vipAgent?.name}
          desc={vipAgent?.desc}
          slug={vipAgent?.slug}
        />
      )}
      <Subtitle>{t(LanguageKeys.Subtitle)}</Subtitle>

      <Link href={`${locale}/boxes/agents`}>
        <ViewAll>{t(LanguageKeys.CTA)}</ViewAll>
      </Link>
      <Hr />
    </Container>
  );
};
export default MobileIndex;
