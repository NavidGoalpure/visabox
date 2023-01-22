import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import React, { ReactNode } from 'react';
import { IoMdClose } from 'react-icons/io';
import styled from 'styled-components/macro';
import { getSmartBgBaseOnLevel } from 'Styles/utils';
import { componentStatements, LanguageKeys } from './const';

interface Props {
  messageComponent?: ReactNode;
  icon?: ReactNode;
  hasIcon?: boolean;
  themeLayer?: '1' | '2A' | '2B' | '3';
}
const NoData: React.FC<Props> = ({
  icon = <XLogo />,
  messageComponent,
  hasIcon = true,
  themeLayer = '1',
}) => {
  const { t } = useStaticTranslation(componentStatements);

  const smartMessageComponent = messageComponent ? (
    messageComponent
  ) : (
    <p>{t(LanguageKeys.NoData)}</p>
  );
  return (
    <Container themeLayer={themeLayer}>
      {hasIcon ? icon : null}
      {smartMessageComponent}
    </Container>
  );
};

export default NoData;

const Container = styled.div<{ themeLayer: '1' | '2A' | '2B' | '3' }>`
  ${({ themeLayer }) => getSmartBgBaseOnLevel(themeLayer)}
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
