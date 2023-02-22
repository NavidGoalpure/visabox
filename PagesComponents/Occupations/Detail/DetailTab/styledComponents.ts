import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { borderTheme, warningTheme } from 'Styles/Theme';
import {
  layer2A_SubtitleStyle,
  layer2A_TextStyle,
  layer2A_TitleStyle,
} from 'Styles/Theme/Layers/layer2/style';
import {
  layer2A_BorderColor,
  layer2A_HeaderBG,
  layer2A_TextColor,
  layer2A_TitleColor,
} from 'Styles/Theme/Layers/layer2/theme';

export const NoMobile = styled.div`
  ${warningTheme}
  ${layer2A_TextStyle}
  padding: 0.5rem;
  display: flex;
  align-items: center;
  min-height: 8rem;
  text-align: center;
`;

///////
export const th_a_Color = theme('mode', {
  light: css`
    color: var(--color-gray4) !important;
  `,
  dark: css`
    color: var(--color-gray13) !important;
  `,
});
const vcColumnInner_Color = theme('mode', {
  light: css`
    background: var(--color-gray12);
  `,
  dark: css`
    background: var(--color-gray5);
  `,
});

export const Details = styled.div`
  padding: 0 1rem 2rem;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1rem;
  ${layer2A_TitleStyle}
  direction: ltr;
  h4 {
    ${layer2A_SubtitleStyle}
    direction: ltr;
    // a {
    //   ${layer2A_TitleColor}
    // }
  }
  h5 {
    ${layer2A_TextStyle}
    ${layer2A_TextColor}
    direction: ltr;
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
    ${borderTheme}
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
    ${layer2A_TextStyle}
    direction: ltr;
    height: 2rem;
    padding: 0.5rem;
    line-height: 1.5rem;
  }

  th {
    ${layer2A_HeaderBG}
    ${layer2A_TextStyle}
    direction: ltr;
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
      ${layer2A_TextStyle}
      ${layer2A_TextColor}
      direction: ltr;
      padding-bottom: 10px;
      display: block;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      line-height: 1.5rem;
    }
    ul {
      ${layer2A_TextStyle}
      ${layer2A_TextColor}
      direction: ltr;
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
    ${layer2A_SubtitleStyle}
    direction: ltr;
  }
  //////////////////////////////////
  .fa-check {
    color: teal !important;
  }
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
    ${layer2A_BorderColor}
    ${borderTheme}
    border-radius: 15px;
    box-shadow: 0 1px 1px rgb(0 0 0 / 10%);
    padding: 25px 15px 15px;
    position: relative;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    top: 0;
    ${vcColumnInner_Color}
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
    font-family: 'FontAwesome';
    font-weight: normal;
    font-style: normal;
    text-decoration: inherit;
    -webkit-font-smoothing: antialiased;
    *margin-right: 0.3em;
  }
  .fa {
    display: inline-block;
    font: normal normal normal 14px/1 'FontAwesome';
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .fa-info-circle {
    color: var(--color-secondary3) !important;
  }
  .badge {
    border-radius: 20px;
    padding: 4px 10px;
    font-size: 12px;
    color: ${layer2A_TextColor} !important;
    border: 1px solid ${layer2A_TextColor} !important;
    padding: 2px 10px;
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
  ///////////////////
`;
