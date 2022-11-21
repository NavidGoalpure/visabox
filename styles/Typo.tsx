import styled, { css } from 'styled-components/macro';
import { device } from '../consts/device';
import { pageColorBody, subtitleColor, titleColor } from './Theme';

export const Headline1Style = css<{
  weight?: number | string;
  color?: string;
}>`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: ${({ weight }) => weight || '500'};
  font-size: 97px;
  line-height: 118px;

  letter-spacing: 1.5px;
  ${titleColor}
  ${({ color }) => color && color};
  margin-bottom: 2.5rem;
`;

export const Headline2Style = css<{
  weight?: number | string;
  color?: string;
}>`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: ${({ weight }) => weight || '500'};
  font-size: 61px;
  line-height: 74px;

  letter-spacing: 1.5px;
  ${titleColor}
  ${({ color }) => color && color};
  margin-bottom: 2.5rem;
`;

//-----------------
export const Headline3Style = css<{
  weight?: number | string;
  color?: string;
}>`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: ${({ weight }) => weight || '500'};
  font-size: 48px;
  line-height: 59px;

  letter-spacing: 1.5px;
  ${titleColor}
  ${({ color }) => color && color};
  margin-bottom: 2.5rem;
`;

//-----------------
export const Headline4Style = css<{
  weight?: number | string;
  color?: string;
}>`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: ${({ weight }) => weight || '500'};
  font-size: 34px;
  line-height: 41px;

  letter-spacing: 1.5px;
  ${titleColor}
  ${({ color }) => color && color};
  margin-bottom: 2.5rem;
`;

//------------------
export const Headline5Style = css<{
  weight?: number | string;
  color?: string;
}>`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: ${({ weight }) => weight || '500'};
  font-size: 24px;
  line-height: 29px;

  letter-spacing: 1.5px;
  ${pageColorBody}
  ${({ color }) => color && color};
  margin-bottom: 2.5rem;
`;

//-----------------
export const Headline6Style = css<{
  weight?: number | string;
  color?: string;
}>`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: ${({ weight }) => weight || '500'};
  font-size: 20px;
  line-height: 24px;

  letter-spacing: 1.5px;
  ${pageColorBody}
  ${({ color }) => color && color};
  margin-bottom: 2.5rem;
`;
