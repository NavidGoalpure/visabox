// getUserId function remains unchanged.

import { NextPage } from 'next';
import PageLayout from 'Components/Layouts/PageContainer';
import styled from 'styled-components';
import Content from 'PagesComponents/Payment/Success';
import Seo from 'Components/Seo';
import { useRouter } from 'next/router';
import axios from 'axios';
import ErrorToast from 'Elements/Toast/Error';
import { useQuery } from 'react-query';
import { ContentOrError } from 'Components/contentOrError';
import { useSession } from 'next-auth/react';
import { getQueryKeyForUserId } from 'PagesComponents/Payment/Success/utils';
import { getUserId } from 'Queries/user';
import { checkSessionAndActivePlanAfterPayment } from 'Queries/Payment';
import { useEffect, useState } from 'react';

const SuccessPayment: NextPage = () => {
  const router = useRouter();
  const sessionId = router.query?.session_id;
  const { data: session } = useSession();
  const userEmail = session?.user?.email;
  const queryKey = getQueryKeyForUserId(userEmail);

  const { data: fetchedUserId, isError: userIdError } = useQuery(
    queryKey as string[],
    () => getUserId(userEmail),
    {
      enabled: !!userEmail && !!queryKey,
    }
  );

  const { isLoading, isError } = useQuery(
    ['checkPaymentStatus', sessionId],
    () =>
      checkSessionAndActivePlanAfterPayment({
        sessionId: sessionId?.toString(),
        userId: fetchedUserId as unknown as string,
      }),
    {
      enabled: !!sessionId && !!fetchedUserId,
      onError: (error) => {
        if (axios.isAxiosError(error)) {
          const errors = error.response?.data?.errors;
          errors?.forEach((error: { raw: { message: any } }) => {
            ErrorToast(error?.raw?.message || 'Something went wrong');
          });
        } else {
          console.error('Unknown API Error:', error);
        }
      },
    }
  );

  return (
    <StyledPageLayout>
      <Seo isNoIndex={true} />
      <ContentOrError
        isLoading={!router || isLoading || !sessionId}
        isError={userIdError || isError}
        errorTitle={'Payment Failed'}
        errorSubTitle={`The Stripe SessionId is not valid. Contact support to follow up on this issue.`}
        content={<Content />}
      />
    </StyledPageLayout>
  );
};

export default SuccessPayment;

const StyledPageLayout = styled(PageLayout)`
  max-width: none;
  #PageContainer-content {
    padding: 0;
  }
`;
