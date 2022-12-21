import { Occupation, Territories } from 'Interfaces/Documents/occupation';
import React from 'react';
import * as RadixTab from '@radix-ui/react-tabs';
import * as Tab from 'Elements/Tab';
import { getTerritories } from 'Utils/occupations';
import { ScrollBox } from 'Elements/ScrollBox';
import { getHtml_decsBaseOnAbv } from './utils';
import styled from 'styled-components/macro';
import {
  componentSubtitleStyle,
  componentTextColor,
  componentTextStyle,
  componentTitleColor,
  componentTitleStyle,
} from 'Styles/Theme/Component';

interface Props {
  occupation: Occupation;
}

const DetailComponent: React.FC<Props> = ({ occupation }) => {
  return (
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
  );
};

export default DetailComponent;

const Details = styled.div`
gap: 1rem
margin-top: 1rem;
  ${componentTitleStyle}
  ${componentTitleColor}
h4 {
  ${componentSubtitleStyle}
}
h5 {
  ${componentTextStyle}
  ${componentTextColor}
}
div {
  gap: 1rem;
}
/////
a {
    color: var(--color-primary2);
}
tbody{
      margin: 0 0 20px;
    padding: 0;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    background-color: #fff;
    border-top: 1px solid #ececec;
}
tr {
  background-color: red;
  border: none !important;
}
th{
      text-align: center;
  :first-child {
    border-left-style: solid;
    border-left-width: 1px;
    border-color: blue;
    border-style: none solid solid none;
    border-top: medium none;
    border-width: medium 1px 1px medium;
    font-weight: 700;
    padding: 10px;
}
}
ul li {
    list-style: disc;
    list-style-position: outside;
 
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
.ui-corner-all, .ui-corner-bottom, .ui-corner-right, .ui-corner-br {
    border-bottom-right-radius: 3px;
}

`;
