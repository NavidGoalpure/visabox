import TooltipTag from 'elements/TooltipTag';
import { PageTitleStyle } from 'components/Layouts/StyledComponents';
import { Occupation } from 'pages/interfaces/Documents/Occupation';
import React from 'react';
import ToggleTag from 'elements/ToggleTag';
import styled from 'styled-components';
import { SidebarPage } from './SideBar';

interface Props {
  occupation: Occupation;
}
const Content: React.FC<Props> = ({ occupation }) => {
  return (
    <>
      <Title>data</Title>
      <TooltipTag
        content={
          occupation?.anzsco_section?.priority_list
            ? occupation?.anzsco_section?.priority_list[0]?.future_demend || ''
            : ''
        }
        popupContent={'occupation.'}
      />
      <ToggleTag content={'190'} isOn={true} />
      <ToggleTag content={'189'} isOn={false} />
      <SidebarPage occupation={occupation} />
    </>
  );
};

export default Content;

const Title = styled.h1`
  ${PageTitleStyle}
`;