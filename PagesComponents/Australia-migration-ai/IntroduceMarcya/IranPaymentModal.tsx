import ModalComponent from 'Components/ModalComponent';
import { deviceMin } from 'Consts/device';
import { PrimaryButton } from 'Elements/Button/Primary';

import { SecondaryButton, SecondaryButtonCss } from 'Elements/Button/Secondary';
import { Dispatch, SetStateAction } from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import { LuMail } from 'react-icons/lu';
import styled from 'styled-components';
import { Headline7Style } from 'Styles/Typo';
import { copyContent } from 'Utils';

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  price: string;
}
const IranPaymentModal: React.FC<Props> = ({ isOpen, setIsOpen, price }) => {
  return (
    <ModalComponent
      open={isOpen}
      DialogTitleText='پرداخت در ایران'
      setOpen={setIsOpen}
      doesModalCloseOnOutsideInteraction={true}
    >
      <ContentContainer>
        <p>
          برای فعال سازی این پلن، لطفا مبلغ
          <span> {price} </span> را به
          <br />
          شماره کارت: <span>3446-0746-2913-5022</span>
          <br />
          بانک: <span>پاسارگاد</span>
          <br />
          به نام: <span>سید شایان شریف الحسینی </span>
          <br />
          کارت به کارت کنید و رسید آن را <span>به همراه آدرس ایمیلی </span> که
          با آن در سایت ثبت نام کردید به ایمیل یا تلگرام زیر ارسال نمایید. حساب
          شما، ظرف ۲۴ ساعت شارژ خواهد شد.
        </p>

        <ContactsWrapper>
          <GmailContainer
            onClick={() =>
              copyContent({
                text: 'maraboxmigration@gmail.com',
                toastMessage: 'آدرس ایمیل در حافظه کپی شد',
              })
            }
          >
            <GmailIcon />
            <GmailLink>maraboxmigration@gmail.com</GmailLink>
          </GmailContainer>
          <TelegramContainer
            href={'https://t.me/maraboxmigration'}
            target={'_blank'}
          >
            <TelegramIcon />
            <TelegramLink>@maraboxmigration</TelegramLink>
          </TelegramContainer>
        </ContactsWrapper>
        <BtnContainer>
          <CTA onClick={() => setIsOpen(false)}>فهمیدم</CTA>
          <SupportBtn href={'https://t.me/maraboxmigration'} target={'_blank'}>
            پشتیبانی
          </SupportBtn>
        </BtnContainer>
      </ContentContainer>
    </ModalComponent>
  );
};
export default IranPaymentModal;

const ContentContainer = styled.div`
  direction: rtl;
  span {
    color: var(--color-primary2);
    font-weight: bold;
  }
`;
const ContactsWrapper = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;
const GmailIcon = styled(LuMail)`
  color: var(--color-primary4);
  width: 1.5rem;
  height: auto;
`;
const GmailLink = styled.h3`
  ${Headline7Style};
  text-align: center;
  word-break: break-all;
  direction: ltr;
  color: var(--color-primary4);
  margin: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
`;
const TelegramIcon = styled(FaTelegramPlane)`
  color: var(--color-primary4);
  width: 1.5rem;
  height: auto;
`;
const TelegramLink = styled(GmailLink)``;
const TelegramContainer = styled.a`
  display: flex;
  gap: 1rem;
  justify-content: left;
  align-items: center;
  direction: ltr;
  cursor: pointer;
`;
const GmailContainer = styled.button`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  direction: ltr;
  cursor: pointer;
  margin-right: auto;
`;
const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1rem;
  @media ${deviceMin.tabletS} {
    flex-direction: row;
  }
`;
const CTA = styled(PrimaryButton)``;
const SupportBtn = styled.a`
  ${SecondaryButtonCss}
`;
