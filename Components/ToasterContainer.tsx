import React from 'react';
import { Toaster } from 'react-hot-toast';

const ToasterContainer: React.FC = () => {
  return (
    <Toaster
      position='bottom-center'
      toastOptions={{
        error: {
          style: {
            background: '#161515',
            color: 'var(--color-text-dark-soft)',
          },
        },
      }}
    />
  );
};
export default ToasterContainer;
