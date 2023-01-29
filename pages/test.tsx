import { PrimaryButton } from 'Elements/Button/Primary';
import React from 'react';
import { isItOnLive } from 'Utils';

function test() {
  console.log('navid live =', isItOnLive());
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
