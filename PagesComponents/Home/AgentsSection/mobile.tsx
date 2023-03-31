import VIPAgentCard from "Components/Lists/Card/Agent/VIPCard";
import { Agents } from "Consts/Lists/agents";
import { useLocale } from "Hooks/useLocale";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import Link from "next/link";
import { HTMLAttributes } from "react";
import { componentStatements, LanguageKeys } from "./const";
import { Container,  StyledLink,  Subtitle, Title, ViewAll } from "./styledComponents";

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

      <StyledLink href={`${locale}/boxes/agents`}>
        <ViewAll id={`home_all-agents_${locale}`}>
          {t(LanguageKeys.CTA)}
        </ViewAll>
      </StyledLink>
    </Container>
  );
};
export default MobileIndex;
