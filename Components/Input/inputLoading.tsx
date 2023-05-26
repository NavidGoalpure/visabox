import React from 'react';
import { LoadingBackgroundCircle, LoadingMovingCircle } from './styles';

export function InputLoading() {
  return (
    <svg width='50' height='50' viewBox='0 0 100 100'>
      <LoadingBackgroundCircle
        strokeWidth={7}
        r='30'
        cx={50}
        cy={50}
        x={0}
        y={0}
      />
      <LoadingMovingCircle strokeWidth={7} r='30' cx={50} cy={50} x={0} y={0} />
    </svg>
  );
}
