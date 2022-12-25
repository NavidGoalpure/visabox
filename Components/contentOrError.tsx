import React, { ReactElement } from 'react';
import { ComponentError } from 'Elements/Error/componentContent';

interface Props {
  isError: boolean;
  content: ReactElement;
}
export const ContentOrError: React.FC<Props> = ({ isError, content }) => {
  if (isError) return <ComponentError />;
  return content;
};
