import React, { ReactElement } from 'react';
import { ComponentError } from 'Elements/Error/componentContent';
import { Loading } from 'Elements/Loading';

interface Props {
  isError: boolean;
  content: ReactElement;
  errorTitle?: string;
  errorSubTitle?: string;
  isLoading?: boolean;
}
export const ContentOrError: React.FC<Props> = ({
  isError,
  content,
  errorTitle,
  errorSubTitle,
  isLoading,
}) => {
  if (isLoading) return <Loading style={{ margin: '4rem auto 0' }} />;
  if (isError)
    return (
      <ComponentError
        errorTitle={errorTitle}
        errorSubTitle={errorSubTitle}
        style={{ marginTop: '4rem' }}
      />
    );
  return content;
};
