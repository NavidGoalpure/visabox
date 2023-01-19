import { css } from "styled-components/macro";

export const Headline1Style = css<{
  weight?: number | string;
}>`
  font-style: normal;
  font-weight: ${({ weight }) => weight || "500"};
  font-size: 97px;
  line-height: 118px;
`;

export const Headline2Style = css<{
  weight?: number | string;
}>`
  font-style: normal;
  font-weight: ${({ weight }) => weight || "500"};
  font-size: 61px;
  line-height: 74px;
`;

//-----------------
export const Headline3Style = css<{
  weight?: number | string;
}>`
  font-style: normal;
  font-weight: ${({ weight }) => weight || "500"};
  font-size: 48px;
  line-height: 59px;
`;

//-----------------
export const Headline4Style = css<{
  weight?: number | string;
}>`
  font-style: normal;
  font-weight: ${({ weight }) => weight || "500"};
  font-size: 34px;
  line-height: 41px;
`;

//------------------
export const Headline5Style = css<{
  weight?: number | string;
}>`
  font-style: normal;
  font-weight: ${({ weight }) => weight || "500"};
  font-size: 24px;
  line-height: 32.3px;
`;

//-----------------
export const Headline6Style = css<{
  weight?: number | string;
}>`
  font-style: normal;
  font-weight: ${({ weight }) => weight || "500"};
  font-size: 20px;
  line-height: 32px;
`;
//-----------------
export const Headline7Style = css<{
  weight?: number | string;
}>`
  font-style: normal;
  font-weight: ${({ weight }) => weight || "500"};
  font-size: 16px;
  line-height: 19.5px;
`;
