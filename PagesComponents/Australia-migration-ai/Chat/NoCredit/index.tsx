import React from 'react';
import styled from 'styled-components';
import { PrimaryButton } from 'Elements/Button/Primary';
import { FaShoppingCart } from 'react-icons/fa';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from './const';
import { deviceMin } from 'Consts/device';
import Link from 'next/link';

function NoCredit() {
  const { t } = useStaticTranslation(componentStatements);
  return (
    <Container>
      <Wrapper>
        <Alarm>{t(LanguageKeys.OutOfChargeMessage)}</Alarm>
        <Link href={`/australia-migration-ai/marcya`}>
          <SendButton>
            {t(LanguageKeys.Buy)}
            <FaShoppingCart />
          </SendButton>
        </Link>
      </Wrapper>
    </Container>
  );
}

export default NoCredit;
const Container = styled.section`
  width: 100%;
  padding: 0 1rem 1rem;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: auto;
  transition: all 0.3s ease;
  max-width: 100%;
  background: var(--color-secondary4);
  border-radius: 7px;
  padding: 1rem;
  @media ${deviceMin.tabletS} {
    flex-direction: row;
  }
`;
const Alarm = styled.h4`
  color: var(--color-gray5);
  margin-bottom: 1rem;
  @media ${deviceMin.tabletS} {
    margin-bottom: 0;
  }
`;
const SendButton = styled(PrimaryButton)`
  border-radius: 0.5rem;
  height: 3rem;
  flex-shrink: 0;
  margin-top: auto;
`;
