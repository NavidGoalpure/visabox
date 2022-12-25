import { Occupation, Territories } from 'Interfaces/Documents/occupation';
import React from 'react';
import * as RadixTab from '@radix-ui/react-tabs';
import * as Tab from 'Elements/Tab';
import { getTerritories } from 'Utils/occupations';
import { ScrollBox } from 'Elements/ScrollBox';
import { getHtml_decsBaseOnAbv } from './utils';
import styled, { css } from 'styled-components/macro';
import {
  componentBorderColor,
  componentHeaderBackground,
  componentSubtitleColor,
  componentSubtitleStyle,
  componentTextColor,
  componentTextStyle,
  componentTitleColor,
  componentTitleStyle,
} from 'Styles/Theme/Component';
import Head from 'next/head';
import useDevice from 'Hooks/useDevice';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from './const';
import theme from 'styled-theming';

interface Props {
  occupation: Occupation;
}

const DetailComponent: React.FC<Props> = ({ occupation }) => {
  const { isMobile } = useDevice();
  const { t } = useStaticTranslation(componentStatements);
  return (
    <>
      {!isMobile ? (
        <Head>
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.7.2/css/solid.css'
            crossOrigin='anonymous'
          />
        </Head>
      ) : null}
      <Tab.Root
        defaultValue={Territories.ACT}
        heads={
          <>
            {getTerritories().map((territory) => (
              <Tab.Item key={territory} title={territory} value={territory} />
            ))}
          </>
        }
        bodies={
          isMobile ? (
            <NoMobile>{t(LanguageKeys.NoMobile)}</NoMobile>
          ) : (
            <ScrollBox heightToRem={40}>
              {getTerritories().map((territory) => {
                const html = getHtml_decsBaseOnAbv({
                  territorySection: occupation.territory_section,
                  currentTerritoryAbv: territory,
                });
                return (
                  <RadixTab.Content key={territory} value={territory}>
                    <Details dangerouslySetInnerHTML={{ __html: html }} />
                    {/* <Details dangerouslySetInnerHTML={{ __html: actDetail }} /> */}
                  </RadixTab.Content>
                );
              })}
            </ScrollBox>
          )
        }
      />
    </>
  );
};

export default DetailComponent;

const NoMobile = styled.div`
  ${componentTextStyle}
  padding: 0.5rem;
  display: flex;
  align-items: center;
  min-height: 8rem;
  text-align: center;
`;
///////
const th_a_Color = theme('mode', {
  light: css`
    color: var(--color-gray4) !important;
  `,
  dark: css`
    color: var(--color-gray13) !important;
  `,
});
const Details = styled.div`
  flex-direction: column;
  gap: 1rem;
  padding-top: 1rem;
  ${componentTitleStyle}
  ${componentTitleColor}
    h4 {
    ${componentSubtitleStyle}
    a {
      ${componentSubtitleColor}
    }
  }
  h5 {
    ${componentTextStyle}
    ${componentTextColor}
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 7px;
  }

  /////
  a {
    color: var(--color-primary2) !important;
    text-decoration: underline;
  }
  u {
    text-decoration: auto;
    font-weight: 700;
  }
  table {
    ${componentBorderColor};
    border-radius: 64px;
    overflow: hidden;
    margin-bottom: 1rem;
  }

  tbody {
    margin: 0 0 20px;
    padding: 0;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    overflow: hidden;
  }
  tr {
    width: auto;
    height: 4rem;
  }
  td {
    text-align: center;
    ${componentTextStyle}
    height: 2rem;
    padding: 0.5rem;
    line-height: 1.5rem;
  }

  th {
    ${componentHeaderBackground}
    ${componentTextStyle}
    text-align: center;
    border-left: medium none;
    border-style: none solid solid none;
    border-top: medium none;
    border-width: medium 1px 1px medium;
    font-weight: 500;
    padding: 16px;
    line-height: 1.5rem;

    border-color: #ececec;
    :last-child {
      border-right: none;
    }
    a {
      ${th_a_Color}
    }
  }
  ul li {
    list-style: disc;
    list-style-position: outside;
    font-style: normal;
    line-height: 1.5rem;

    ::marker {
      unicode-bidi: isolate;
      font-variant-numeric: tabular-nums;
      text-transform: none;
      text-indent: 0px !important;
      text-align: start !important;
      text-align-last: start !important;
    }
  }

  i {
    font-style: normal;
  }
  div {
    p {
      ${componentTextStyle}
      ${componentTextColor}
       padding-bottom: 10px;
      display: block;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      line-height: 1.5rem;
    }
    ul {
      ${componentTextStyle}
      ${componentTextColor}
    }
  }
  ftab p {
    padding-bottom: 10px;
  }
  .ftab ul {
    margin-bottom: 15px;
  }
  ul {
    margin-left: 30px;
    margin-bottom: 30px;
  }

  ol,
  ul {
    list-style: none;
  }

  h5 {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 14px;
    line-height: 25px;
    font-weight: 700;
    ${componentSubtitleStyle}
  }
  //////////////////////////////////

  .fa-check:before {
    content: '\f00c';
  }
  .fa-times:before {
    content: '\f00d';
  }
  .ui-tabs-panel {
    padding: 1.5em 1.5em 2em 1.5em;
    border-width: 0;
    background: none;
  }

  .ui-corner-all,
  .ui-corner-bottom,
  .ui-corner-right,
  .ui-corner-br {
    border-bottom-right-radius: 3px;
  }

  .vc_row-fluid .wpb_column {
    box-shadow: none;
  }
  .wpb_column.boxed > .vc_column-inner {
    ${componentBorderColor}
    border-radius: 15px;
    box-shadow: 0 1px 1px rgb(0 0 0 / 10%);
    padding: 25px 15px 15px;
    position: relative;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    top: 0;
  }
  .vc_column_container > .vc_column-inner {
    position: relative;
  }
  .clr:after,
  .col:after,
  .group:after,
  .row:after {
    content: '';
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  .vc_row-fluid > .span_12 .wpb_column,
  body[data-col-gap='default']
    .vc_row-fluid[data-column-margin='default']:not(.full-width-content)
    .full-page-inner
    > .container
    > .span_12
    .wpb_column:not(.child_column) {
    padding-left: 1%;
    padding-right: 1%;
  }
  .wpb_column[data-shadow='small_depth']
    > .vc_column-inner
    > .column-bg-overlay-wrap {
    box-shadow: rgb(0 0 0 / 4%) 0 1px 0, rgb(0 0 0 / 5%) 0 2px 7px,
      rgb(0 0 0 / 6%) 0 12px 22px;
  }

  .wpb_column[data-border-radius*='px']
    > .vc_column-inner
    > .column-bg-overlay-wrap {
    overflow: hidden;
  }
  .wpb_column .column-bg-overlay-wrap {
    opacity: 1;
  }
  .wpb_column .column-bg-overlay,
  .wpb_column .column-bg-overlay-wrap {
    pointer-events: none;
    position: absolute;
    z-index: -1;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    content: ' ';
    display: block;
    opacity: 0;
    transition: background-color 0.45s cubic-bezier(0.25, 1, 0.33, 1),
      opacity 0.45s cubic-bezier(0.25, 1, 0.33, 1);
  }
  // //////
  .wpb_column .column-bg-overlay,
  .wpb_column .column-bg-overlay-wrap {
    pointer-events: none;
    position: absolute;
    z-index: -1;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    content: ' ';
    display: block;
    opacity: 0;
    transition: background-color 0.45s cubic-bezier(0.25, 1, 0.33, 1),
      opacity 0.45s cubic-bezier(0.25, 1, 0.33, 1);
  }
  ///////////
  .wpb_wrapper > div:last-child {
    margin-bottom: 0;
  }
  .wpb_wrapper > div {
    margin-bottom: 24px;
  }

  .iwithtext {
    position: relative;

    .iwt-icon {
      position: absolute;
      left: 0;
      top: 0;
    }
    .iwt-text {
      padding-left: 55px;
    }
  }
  // //////////
  [class^='icon-'].icon-tiny {
    color: var(--color-primary2);
  }
  [class^='icon-'].icon-tiny {
    line-height: 15px;
    height: 13px;
    width: 15px;
    margin-right: 5px;
    font-size: 13px;
    background-color: transparent;
  }

  [class^='icon-'],
  [class*=' icon-'] {
    display: inline;
    width: auto;
    height: auto;
    line-height: normal;
    vertical-align: baseline;
    background-image: none;
    background-position: 0% 0%;
    background-repeat: repeat;
    margin-top: 0;
  }
  i[class^='icon-'] {
    display: inline-block;
    text-align: center;
    vertical-align: middle;
  }
  i[class*='fa-'],
  span[class*='fa-'] {
    display: inline-block;
    word-spacing: 1px;
    position: relative;
    text-align: center;
    top: -2px;
    vertical-align: middle;
    max-width: 100%;
  }
  i[class^='icon-'],
  [class*=' icon-'],
  i[class*='fa-'],
  span[class*='fa-'] {
    font-family: 'Font Awesome 5 Free';
    font-weight: normal;
    font-style: normal;
    text-decoration: inherit;
    -webkit-font-smoothing: antialiased;
    *margin-right: 0.3em;
  }
  .fa {
    display: inline-block;
    font: normal normal normal 14px/1 'Font Awesome 5 Free';
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .icon-default-style.extra-color-1 {
    color: var(--color-secondary3) !important;
  }
  .fa-info-circle:before {
    content: '\f05a';
  }

  .fa-external-link:before {
    content: '\f35d';
  }
  [class^='icon-']:before,
  [class*=' icon-']:before {
    text-decoration: inherit;
    speak: none;
  }
  /////grid-system/////////////

  .col:last-child {
    margin-right: 0;
  }
  .wpb_column {
    background-position: center;
  }
  .col {
    position: relative;
    float: left;
  }
  @media (min-width: 690px) .vc_col-sm-12 {
    width: 100%;
  }
  @media (min-width: 690px) .col {
    margin-right: 2%;
  }
  .col {
    position: relative;
    display: block;
    width: 100%;
  }
`;
