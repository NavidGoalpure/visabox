import { Occupation, Territories } from 'Interfaces/Documents/occupation';
import React from 'react';
import * as RadixTab from '@radix-ui/react-tabs';
import * as Tab from 'Elements/Tab';
import { getTerritories } from 'Utils/occupations';
import { ScrollBox } from 'Elements/ScrollBox';
import { getHtml_decsBaseOnAbv } from './utils';
import styled from 'styled-components/macro';
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

interface Props {
  occupation: Occupation;
}

const DetailComponent: React.FC<Props> = ({ occupation }) => {
  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.7.2/css/solid.css'
          crossOrigin='anonymous'
        />
      </Head>
      <Tab.Root
        defaultValue={Territories.ACT}
        items={
          <>
            {getTerritories().map((territory) => (
              <Tab.Item key={territory} title={territory} value={territory} />
            ))}
          </>
        }
        bodies={
          <ScrollBox heightToRem={40}>
            {getTerritories().map((territory) => {
              const html = getHtml_decsBaseOnAbv({
                territorySection: occupation.territory_section,
                currentTerritoryAbv: territory,
              });
              console.log('navid html=', html);
              return (
                <RadixTab.Content key={territory} value={territory}>
                  <Details dangerouslySetInnerHTML={{ __html: html }} />
                  {/* <Details dangerouslySetInnerHTML={{ __html: actDetail }} /> */}
                </RadixTab.Content>
              );
            })}
          </ScrollBox>
        }
      />
    </>
  );
};

export default DetailComponent;

const Details = styled.div`
  flex-direction: column;
  gap: 1rem ${componentTitleStyle} ${componentTitleColor} h4 {
    ${componentSubtitleStyle}
    a {
      ${componentSubtitleColor}
    }
  }
  h5 {
    ${componentTextStyle}
    ${componentTextColor}
  }
  div {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    p {
      ${componentTextStyle}
      ${componentTextColor}
    }
    ul {
      ${componentTextStyle}
      ${componentTextColor}
    }
  }
  /////
  a {
    color: var(--color-primary2);
  }
  table {
    ${componentBorderColor};
    border-radius: 64px;
    overflow: hidden;
  }
  .fa-check:before {
    content: '\f00c';
  }
  .fa-times:before {
    content: '\f00d';
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
    // background-color: red;
    // border: none !important;
  }
  td {
    text-align: center;
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
    padding: 10px;
    border-color: #ececec;
    :last-child {
      border-right: none;
    }
  }
  ul li {
    list-style: disc;
    list-style-position: outside;
    font-style: normal;

    ::marker {
      unicode-bidi: isolate;
      font-variant-numeric: tabular-nums;
      text-transform: none;
      text-indent: 0px !important;
      text-align: start !important;
      text-align-last: start !important;
    }
  }
  p {
    padding-bottom: 10px;
  }
  .ui-tabs-panel {
    padding: 1.5em 1.5em 2em 1.5em;
    border-width: 0;
    background: none;
  }
  i {
    font-style: normal;
  }
  .ui-corner-all,
  .ui-corner-bottom,
  .ui-corner-right,
  .ui-corner-br {
    border-bottom-right-radius: 3px;
  }
`;
