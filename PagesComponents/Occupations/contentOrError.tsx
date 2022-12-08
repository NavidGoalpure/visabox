import React, { ReactElement } from 'react';

interface Props {
  isError: boolean;
  content: ReactElement;
}
export const ContentOrError: React.FC<Props> = ({ isError, content }) => {
  if (isError) return <p>navid error</p>;
  return content;
};
