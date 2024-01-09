import styled, { css } from 'styled-components';

import { deviceMin } from 'Consts/device';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { LanguageKeys, componentStatements } from './const';
import { GiSilverBullet } from 'react-icons/gi';
import { AiTwotoneGold } from 'react-icons/ai';
import { PrimaryButton } from 'Elements/Button/Primary';

import { MdDiamond } from 'react-icons/md';
import { FiBox } from 'react-icons/fi';
import { Languages } from 'Interfaces';
import { useLocale } from 'Hooks/useLocale';
import IranPaymentModal from '../IranPaymentModal';
import { useState } from 'react';
import { IPriceIds } from 'Interfaces/Payment';
import SmartStripeButton from './stripeButton';
import { useSession } from 'next-auth/react';

const PriceList: React.FC = () => {
  const { t } = useStaticTranslation(componentStatements);
  const { locale } = useLocale();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [iranPrice, setIranPrice] = useState<string>(
    componentStatements.GoldPlan_Price.fa
  );

  return (
    <>
      <IranPaymentModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        price={iranPrice}
      />
      <Grid>
        {/* ///////////Card1/////////// */}
        <MyCard
          $locale={locale}
          style={{
            background:
              'linear-gradient(-45deg, rgb(236, 143, 95), rgb(113 113 104))',
          }}
        >
          <CardTitle>
            <StyledSilverIcon />
            <h2>{t(LanguageKeys.SilverPlan_Title)}</h2>
          </CardTitle>
          <Price>
            <h4>{t(LanguageKeys.SilverPlan_Price)}</h4>
            <h5>{t(LanguageKeys.SilverPlan_ABV)}</h5>
          </Price>
          <Option>
            <ul>
              <Li>{t(LanguageKeys.PlanDescription1)}</Li>
              <Li>{t(LanguageKeys.PlanDescription2)}</Li>
              <Li>{t(LanguageKeys.PlanDescription3)}</Li>
            </ul>
          </Option>
          {/* ///////دکمه پرداخت یا لاگین/////////// */}
          <SmartStripeButton
            label={t(LanguageKeys.CTA)}
            priceId={IPriceIds.BasicPlan}
            iranPrice={componentStatements.SilverPlan_Price.fa}
            setIranPrice={setIranPrice}
            setIsModalOpen={setIsModalOpen}
          />
        </MyCard>

        {/* ///////////Card2/////////// */}
        <MyCard
          $locale={locale}
          style={{
            background:
              'linear-gradient(-45deg, rgb(241, 159, 159), rgb(164 0 143))',
          }}
        >
          <CardTitle>
            <VIPBoxContainer aria-hidden={true}>
              <VIPBox aria-hidden={true} />
            </VIPBoxContainer>
            <StyledGoldIcon />
            <h2>{t(LanguageKeys.GoldPlan_Title)}</h2>
          </CardTitle>
          <Price>
            <h4>{t(LanguageKeys.GoldPlan_Price)}</h4>
            <h5>{t(LanguageKeys.GoldPlan_ABV)}</h5>
          </Price>
          <Option>
            <ul>
              <Li>{t(LanguageKeys.PlanDescription1)}</Li>
              <Li>{t(LanguageKeys.PlanDescription2)}</Li>
              <Li>{t(LanguageKeys.PlanDescription3)}</Li>
            </ul>
          </Option>
          {/* ///////دکمه پرداخت یا لاگین/////////// */}
          <SmartStripeButton
            label={t(LanguageKeys.CTA)}
            priceId={IPriceIds.ProPlan}
            iranPrice={componentStatements.GoldPlan_Price.fa}
            setIranPrice={setIranPrice}
            setIsModalOpen={setIsModalOpen}
          />
        </MyCard>
        {/* ///////////Card3/////////// */}
        <MyCard
          $locale={locale}
          style={{
            background:
              'linear-gradient(-45deg, rgb(133, 156, 255), rgb(21 48 145))',
          }}
        >
          <CardTitle>
            <StyledDiamondIcon />

            <h2>{t(LanguageKeys.UnlimitedPlan)}</h2>
          </CardTitle>
          <Price>
            <h4>{t(LanguageKeys.UnlimitedPlan_Price)}</h4>
            <h5>{t(LanguageKeys.UnlimitedPlan_ABV)}</h5>
          </Price>
          <Option>
            <ul>
              <Li>{t(LanguageKeys.PlanDescription1)}</Li>
              <hr />
              <Li>{t(LanguageKeys.PlanDescription2)}</Li>
              <Li>{t(LanguageKeys.UnlimitedPlan_DescItem)}</Li>
            </ul>
          </Option>
          <CustomButton>{t(LanguageKeys.UnlimitedPlan_Button)}</CustomButton>
        </MyCard>
      </Grid>
    </>
  );
};
export default PriceList;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 1rem;
  align-items: stretch;
  width: 100%;
  margin: 1rem auto;
`;
const MyCard = styled.div<{ $locale?: Languages }>`
  text-align: center;
  position: relative;
  border-radius: 15px;
  padding: 40px 20px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
  overflow: hidden;
  min-height: ${({ $locale }) =>
    $locale === Languages.fa ? '29rem' : '25rem'};
  @media ${deviceMin.tabletS} {
    min-height: 29rem;
  }
  :hover {
    transform: scale(1.1);
  }
  a {
    position: relative;
    z-index: 2;
    border-radius: 8px;
    margin: 30px auto 8px;
    text-decoration: none;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    font-weight: bold;
  }
`;
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
const CardTitle = styled.div`
  .fa {
    color: #fff;
    font-size: 40px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    text-align: center;
    line-height: 100px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  }
  h2 {
    position: relative;
    margin: 20px 0 0;
    color: #fff;
    font-size: 20px;
    z-index: 2;
    margin-bottom: 1rem;
  }
`;
const StyledIcon = css`
  color: #fff;
  font-size: 40px;
  width: 4rem;
  height: auto;
  border-radius: 50%;
  text-align: center;
  line-height: 100px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  //
  padding: 16px;
`;
const StyledSilverIcon = styled(GiSilverBullet)`
  ${StyledIcon}
  background: linear-gradient(-45deg, #c0c0c0, #d3d3d3);
`;
const StyledGoldIcon = styled(AiTwotoneGold)`
  ${StyledIcon}
  background: linear-gradient(-45deg, #ffd700, #ffdb58);
`;

const VIPBoxContainer = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-gray5);
  border-radius: 0 0 50% 50%;
  position: absolute;
  top: 0;
  right: 5%;
`;
const VIPBox = styled(FiBox)`
  color: var(--color-secondary4);
  width: 50%;
  height: auto;
`;

const StyledDiamondIcon = styled(MdDiamond)`
  ${StyledIcon}
  background: linear-gradient(-45deg, #ffffff, #b3e0ff);
  fill: var(--color-primary1);
`;
const Price = styled.div`
  position: relative;
  z-index: 2;
  padding-bottom: 1rem;

  gap: 0.2rem;
  flex-wrap: wrap;
  h5 {
    margin: 0;
    color: var(--color-primary6);
    font-size: 22px;
  }
  h4 {
    margin: 0;
    color: #fff;
    font-size: 18px;
    color: var(--color-primary6);
  }
`;
const Option = styled.div`
  position: relative;
  z-index: 2;
  padding-bottom: 1rem;
  ul {
    margin: 0;
    padding: 0;
  }
`;
const Li = styled.li<{ disabled?: boolean }>`
  margin: 0 0 10px;
  padding: 0;
  list-style: none;
  color: ${({ disabled }) => (disabled ? 'var(--color-gray10)' : 'white')};
  text-decoration: ${({ disabled }) => (disabled ? 'line-through' : 'none')};
  font-size: 16px;
  font-weight: bold;
  text-align: start;

  &::before {
    content: '• ';
    margin-initial-start: -1rem;
  }
`;
