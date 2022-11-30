import * as RdxSwitch from '@radix-ui/react-switch';
import React from 'react';
import styled from 'styled-components/macro';

const Switch = () => {
  return (
    <SwitchRoot>
      <SwitchThumb />
    </SwitchRoot>
  );
};

export default Switch;
const SwitchRoot = styled(RdxSwitch.Root)`
  width: 42px;
  height: 25px;
  background-color: yellow;
  border-radius: 9999px;
  position: relative;
  box-shadow: 0 2px 10px red;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &[data-state='checked'] {
    background-color: black;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px black;
  }
`;
const SwitchThumb = styled(RdxSwitch.Thumb)`
  display: block;
  width: 21px;
  height: 21px;
  background-color: white;
  border-radius: 9999px;
  box-shadow: 0 2px 2px blue;
  transition: transform 100ms;
  transform: translateX(2px);
  will-change: transform;
  &[data-state='checked'] {
    transform: translateX(19px);
  }
`;
