import React, { ReactElement } from 'react';
import { ComponentError } from 'Elements/Error/componentContent';

interface Props {
  isError: boolean;
  content: ReactElement;
}
export const ContentOrError: React.FC<Props> = ({ isError, content }) => {
  return <ComponentError />;
  if (isError) return content;
};
