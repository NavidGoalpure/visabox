import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { PageSubtitle } from 'PagesComponents/Occupations/List/PageSubtitle';
import React, { ReactNode } from 'react';
import { IoMdClose } from 'react-icons/io';
import styled from 'styled-components/macro';
import { componentTheme } from 'Styles/Theme/Component';
import { PageSubtitleStyle } from 'Styles/Theme/Page';
import { componentStatements, LanguageKeys } from './const';

interface Props {
  messageComponent?: ReactNode;
  icon?: ReactNode;
  hasIcon?: boolean;
  context?: 'PAGE' | 'COMP';
}
const NoData: React.FC<Props> = ({
  icon = <XLogo />,
  messageComponent,
  hasIcon = true,
  context = 'COMP',
}) => {
  const { t } = useStaticTranslation(componentStatements);

  const smartMessageComponent = messageComponent ? (
    messageComponent
  ) : (
    <p>{t(LanguageKeys.NoData)}</p>
  );
  return (
    <Container context={context}>
      {hasIcon ? icon : null}
      {smartMessageComponent}
    </Container>
  );
};

export default NoData;

const Container = styled.div<{ context: 'PAGE' | 'COMP' }>`
  ${({ context }) => (context === 'COMP' ? componentTheme : PageSubtitleStyle)}
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
  color: var(--color-disable-light);
  text-align: center;
  border none;
`;
const XLogo = styled(IoMdClose)`
  background: var(--color-disable-light);
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  color: var(--color-fail3);
  padding: 0.4rem;
  margin-inline-end: 0.5rem;
`;
