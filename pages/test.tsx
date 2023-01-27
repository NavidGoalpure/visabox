import { PrimaryButton } from 'Elements/Button/Primary';
import React from 'react';

function test() {
  return (
    <PrimaryButton
      onClick={() => {
        throw new Error('Sentry Frontend Error');
      }}
    >
      Throw error
    </PrimaryButton>
  );
}

export default test;
