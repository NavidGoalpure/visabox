import React from 'react';
import styled from 'styled-components';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import {
  ToggleGroupMultipleProps,
  ToggleGroupSingleProps,
} from '@radix-ui/react-toggle-group';
import { directionStyles } from 'Styles/Theme';

export const Root: React.FC<
  ToggleGroupSingleProps | ToggleGroupMultipleProps
> = ({ ...props }) => {
  return <ToggleGroupRoot {...props}></ToggleGroupRoot>;
};
const ToggleGroupRoot = styled(ToggleGroup.Root)`
  ${directionStyles}
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
