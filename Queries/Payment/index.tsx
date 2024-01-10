import axios, { AxiosResponse, AxiosError } from 'axios';
import { Client } from 'Interfaces/Database/Client';
import { IPriceIds } from 'Interfaces/Payment';
import { sanityClient } from 'Utils/sanity';

interface PaymentResponse {
  // Define the expected shape of your response if needed
  // For now, we are assuming it returns any data
  data: any;
}

interface ErrorResponse {
  // Define the shape of error response if needed
  errors: string[]; // or any other shape
}

export async function checkSessionAndActivePlanAfterPayment({
  sessionId,
  userId,
}: {
  sessionId: string | undefined;
  userId: string | undefined;
}): Promise<any> {
  if (!sessionId) {
    throw new Error('Session ID is missing or invalid.');
  }
  if (!userId) {
    throw new Error('userId is missing or invalid.');
  }
  //
  try {
    const response: AxiosResponse<PaymentResponse> = await axios.post(
      '/api/payment/check-payment-and-active-plan',
      {
        sessionId,
        userId,
      }
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError<ErrorResponse> = error;
      const errors = axiosError?.response?.data?.errors;

      if (errors) {
        // Handle errors here (e.g., logging, throwing custom errors, etc.)
        console.error('Payment Error:', errors);
        throw new Error(errors.join(', ')); // You can throw this or handle as you see fit
      }
    }
    // Handle other types of errors or rethrow the error
    throw error;
  }
}
////////////////////////////////////////
////////activeBoughtItems///////////
/////////////////////////////////////////
interface ActiveBoughtItemsParams {
  userId: string;
  boughtItemId: string;
}

export async function activeBoughtItems({
  userId,
  boughtItemId,
}: ActiveBoughtItemsParams) {
  try {
    let mustAddQuestion = 0;

    // Determine the number of questions based on the boughtItemId
    if (boughtItemId === IPriceIds.BasicPlan) mustAddQuestion = 10;
    if (boughtItemId === IPriceIds.ProPlan) mustAddQuestion = 100;

    if (userId && boughtItemId) {
      // Update the user's credit in Sanity
      await sanityClient
        .patch(userId)
        .setIfMissing({ credit: [] })
        .inc({ credit: mustAddQuestion }) // Ensure that this matches your Sanity schema
        .commit()
        .then(() => {
          console.log('Successfully updated user credit.');
        })
        .catch((err) => {
          console.error('Error while updating user credit:', err.message);
          throw new Error('Failed to update user credit.');
        });
    } else {
      console.log('Error: userId or boughtItemId is undefined.');
      throw new Error('userId or boughtItemId is undefined.');
    }
  } catch (error: any) {
    console.error('Error in activeBoughtItems:', error?.message);
    throw new Error('Failed to process the request.');
  }
}
