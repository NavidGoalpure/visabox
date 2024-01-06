//import { PrimaryButton } from 'Elements/Button/Primary';
import styled from 'styled-components';
import axios from 'axios';
import { PrimaryButton } from 'Elements/Button/Primary';
import { IPriceIds } from 'Interfaces/Payment';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import LoginButton from 'Components/LoginButton';
import { Languages } from 'Interfaces';
import { useLocale } from 'Hooks/useLocale';
import { SupportedCountry } from 'Interfaces/Database';
import { componentStatements, LanguageKeys } from './const';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';

interface Props {
  label: string;
  priceId: IPriceIds;
  isLogin: boolean;
  userCountry: SupportedCountry;
  iranPrice: string;
  setIranPrice: Dispatch<SetStateAction<string>>;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}
const SmartStripeButton: React.FC<Props> = ({
  label,
  priceId,
  isLogin,
  userCountry,
  iranPrice,
  setIranPrice,
  setIsModalOpen,
}) => {
  const { locale } = useLocale();
  const { t } = useStaticTranslation(componentStatements);

  //اگه لاگین نکرده بود لاگین کنه
  // اگه ایران بود بهش مودال پرداخت در ایران رو نشون بدیم
  if (!isLogin) return <CustomLoginBTN />;

  ///////چک کردن موقعیت جغرافیایی کاربر/////////
  const isIranPayment =
    locale === Languages.fa || userCountry === SupportedCountry.Iran;

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
