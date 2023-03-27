import { deviceMin } from 'Consts/device';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';

export const Container = styled.div`
  width: 100%;
  margin: 1rem 0;

  @media ${deviceMin.tabletS} {
    flex: 1;
    max-width: 48%;
    min-width: 40%;
  }
  @media ${deviceMin.laptopXS} {
    min-width: 23%;
  }
`;
///////////////
const TextColor = theme('mode', {
  light: css`
    color: var(--color-gray9);
    border: 2px solid var(--color-gray12);
    background: white;
    span {
      color: var(--color-primary3);
    }
  `,
  dark: css`
    color: var(--color-gray11);
    background: var(--color-gray5);
    span {
      color: var(--color-primary5);
    }
  `,
});
export const Title = styled.h2`
  ${TextColor}
  width: auto;
  height: 8rem;
  text-align: center;
  padding: 1.5rem 0.5rem;
  border-radius: 10px;
  margin-bottom: 0.5rem;
  font-weight: bold;
  margin-left: 1rem;
  margin-right: 1rem;
  @media ${deviceMin.tabletS} {
    margin-left: 0;
    margin-right: 0;
  }
  span {
    border-radius: 50%;
    padding: 0.25rem;
    margin: 0.25rem;
    font-weight: bold;
  }
`;
