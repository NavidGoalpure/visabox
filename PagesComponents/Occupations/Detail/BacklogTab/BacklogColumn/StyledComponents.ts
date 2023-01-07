import { deviceMin } from 'Consts/device';
import styled, { css } from 'styled-components/macro';
import * as Tab from 'Elements/Tab';
import {
  componentTextStyle,
  componentBorderColor,
} from 'Styles/Theme/Component';
import theme from 'styled-theming';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  @media ${deviceMin.tabletS} {
    flex: 1;
    max-width: 48%;
  }
`;
///////////////
 const TextColor = theme('mode', {
   light: css`
     color: var(--color-gray9);
     border: 2px solid var(--color-gray12);
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
  width: 100%;
  height: 8rem;
  text-align: center;
  padding: 1.5rem 0.5rem;
  border-radius: 10px;
  margin-bottom: 0.5rem;
  font-weight: bold;
  span {
    border-radius: 50%;
    padding: 0.25rem;
    margin: 0.25rem;
    font-weight: bold;
  }
`;
export const TabRoot = styled(Tab.Root)`
  width: 100%;
  div {
    &[aria-label='tabs'] {
      border-radius: 15px;
    }
  }
  #contents-container {
    margin: 0.5rem 0 1rem 0;
  }
`;
export const TabItem = styled(Tab.Item)`
  width: 50%;
`;
