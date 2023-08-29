import React, { ReactElement } from 'react';
import { ComponentError } from 'Elements/Error/componentContent';

interface Props {
  isError: boolean;
  content: ReactElement;
  errorTitle?: string;
  errorSubTitle?: string;
}
export const ContentOrError: React.FC<Props> = ({
  isError,
  content,
  errorTitle,
  errorSubTitle,
}) => {
  if (isError)
    return (
      <ComponentError errorTitle={errorTitle} errorSubTitle={errorSubTitle} />
    );
  return content;
};
