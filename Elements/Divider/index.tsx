import React from 'react';
import styled from 'styled-components';

export default function Divider() {
  return <SectionDivider />;
}

const SectionDivider = styled.hr`
  width: 50%;
  height: 4px;
  margin: 0 auto;
  background: var(--color-gray9);
  margin: 4rem 0;
  border-radius: 4px;
`;
