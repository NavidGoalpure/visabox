//import { PrimaryButton } from 'Elements/Button/Primary';
import styled from 'styled-components';
import axios from 'axios';
import { PrimaryButton } from 'Elements/Button/Primary';
import { IPriceIds } from 'Interfaces/Payment';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import LoginButton from 'Components/LoginButton';
import { componentStatements, LanguageKeys } from './const';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { useSession } from 'next-auth/react';
import { getUserCountry, isUserLiveInIran } from 'Utils/country-state-city';

interface Props {
  label: string;
  priceId: IPriceIds;
  iranPrice: string;
  setIranPrice: Dispatch<SetStateAction<string>>;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}
const SmartStripeButton: React.FC<Props> = ({
  label,
  priceId,
  iranPrice,
  setIranPrice,
  setIsModalOpen,
}) => {
  const { t } = useStaticTranslation(componentStatements);
  const { data: session } = useSession();

  //اگه لاگین نکرده بود لاگین کنه
  if (!session) return <CustomLoginBTN />;

  ///////چک کردن موقعیت جغرافیایی کاربر/////////
  // اگه ایران بود بهش مودال پرداخت در ایران رو نشون بدیم
  const isIranPayment = isUserLiveInIran();

  if (isIranPayment)
    return (
      <CustomButton
        onClick={() => {
          setIranPrice(iranPrice);
          setIsModalOpen(true);
        }}
      >
        {t(LanguageKeys.CTA)}
      </CustomButton>
    );
  ///////////////////////
  /// وگرنه دکمه پرداخت استرایپ
  const stripeHandler = async (e: any) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        '/api/payment/create-checkout-session',
        {
          priceId,
        }
      );
      if (data?.url) window.location.href = data?.url;
    } catch (error) {
      console.log(error);
    }
  };
  return <CustomButton onClick={stripeHandler}>{label}</CustomButton>;
};

export default SmartStripeButton;
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
  width: 8rem;
  border-radius: 50px;
`;
const CustomLoginBTN = styled(LoginButton)`
  position: absolute;
  left: 50%;
  bottom: 1rem;
  transform: translateX(-50%);
  background: var(--color-primary4);
  color: #fff;
  height: 3rem;
  padding: 0 1rem;
  margin: auto;
  border-radius: 50px;
`;
