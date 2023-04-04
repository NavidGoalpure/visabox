import React from 'react';
import styled from 'styled-components';
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { ToggleGroupItemProps, ToggleGroupMultipleProps, ToggleGroupSingleProps } from "@radix-ui/react-toggle-group";

export const Root: React.FC<(ToggleGroupSingleProps | ToggleGroupMultipleProps)> = ({ ...props }) => {
  return <ToggleGroupRoot {...props}></ToggleGroupRoot>;
};
const ToggleGroupRoot = styled(ToggleGroup.Root)`
  display: flex;
  flex-direction: column;
`;
