import { Agents } from "Consts/Lists/agents";
import { VipSocialMedias } from "Consts/Lists/Socials";
import { useLocale } from "Hooks/useLocale";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import Link from "next/link";
import { HTMLAttributes } from "react";
import { componentStatements, LanguageKeys } from "./const";
import {
  Container,
  StyledLink,
  Subtitle,
  Title,
  ViewAll,
} from "./styledComponents";
import SmartSocialCard from "Components/Lists/Card/SocialCard";
const MobileIndex: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  const { t } = useStaticTranslation(componentStatements);
  const { locale } = useLocale();
  const vipAgent = Agents.find((agent) => agent.isFeatured);

  return (
    <Container {...props}>
      <Title>{t(LanguageKeys.Title)}</Title>
      <SmartSocialCard
        id={VipSocialMedias[0].id}
        isFeatured={VipSocialMedias[0].isFeatured}
        desc={VipSocialMedias[0].desc}
        name={VipSocialMedias[0].name}
        link={VipSocialMedias[0].link}
        socialmediaType={VipSocialMedias[0].socialmediaType}
        locations={VipSocialMedias[0].locations}
        slug={VipSocialMedias[0].slug}
      />
      <Subtitle>{t(LanguageKeys.Subtitle)}</Subtitle>

      <StyledLink href={`${locale}/boxes/social-pages`}>
        <ViewAll id={`home_all-socials_${locale}`}>{t(LanguageKeys.CTA)}</ViewAll>
      </StyledLink>
    </Container>
  );
};
export default MobileIndex;
