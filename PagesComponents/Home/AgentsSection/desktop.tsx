import VIPAgentCard from 'Components/Lists/Card/Agent/VIPCard';
import { Agents } from 'Consts/Businesses/agents';
import { useLocale } from 'Hooks/useLocale';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import Link from 'next/link';
import styled from 'styled-components';
import { componentStatements, LanguageKeys } from './const';
import { Container, Hr, Subtitle, Title, ViewAll } from './styledComponents';
import Image from 'next/image';
import { HTMLAttributes } from 'react';

const DesktopIndex: React.FC<HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
  const { t } = useStaticTranslation(componentStatements);
  const { locale } = useLocale();
  const vipAgent = Agents.find((agent) => agent.isFeatured);

  return (
    <>
      <Container {...props}>
        <Side>
          {vipAgent && (
            <StyledCard
              name={vipAgent?.name}
              desc={vipAgent?.desc}
              slug={vipAgent?.slug}
            />
          )}
        </Side>
        <Side>
          <Title>{t(LanguageKeys.Title)}</Title>
          <Subtitle>{t(LanguageKeys.Subtitle)}</Subtitle>

          <Link href={`${locale}/lists/agents`}>
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
const StyledCard = styled(VIPAgentCard)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
