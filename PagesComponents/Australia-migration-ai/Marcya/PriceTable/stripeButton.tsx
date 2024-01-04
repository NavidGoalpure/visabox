//import { PrimaryButton } from 'Elements/Button/Primary';
import styled from 'styled-components';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import { PrimaryButton } from 'Elements/Button/Primary';
import { IPriceIds } from 'Interfaces/Payment';

interface Props {
  label: string;
}
const StripeButton: React.FC<Props> = ({ label }) => {
  const stripeHandler = async (e: any) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        '/api/payment/create-checkout-session',
        {
          priceId: IPriceIds.BasicPlan,
        }
      );
      if (data?.url) window.location.href = data?.url;
    } catch (error) {
      console.log(error);
    }
  };
  ///////////////////
  return (
    <CustomButton
      // onClick={() => {
      //   setIranPrice(componentStatements.TestPlan_Price.fa);
      //   setIsModalOpen(true);
      // }}
      onClick={stripeHandler}
    >
      {label}
    </CustomButton>
  );
};
export default StripeButton;
const CustomButton = styled(PrimaryButton)`
  position: absolute;
  left: 50%;
  bottom: 1rem;
  transform: translateX(-50%);
  background: var(--color-primary4);
  color: #fff;
  height: 3rem;
  padding: 0 1rem;
  margin: auto;
`;
