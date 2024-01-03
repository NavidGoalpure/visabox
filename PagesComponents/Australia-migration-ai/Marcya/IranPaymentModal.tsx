import ModalComponent from 'Components/ModalComponent';

import { SecondaryButton } from 'Elements/Button/Secondary';
import { Dispatch, SetStateAction, useState } from 'react';
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
          کارت به کارت کنید و رسید آن را به آدرس ایمیل یا تلگرام زیر ارسال
          نمایید.
          <br />
          برای دریافت هرگونه پشتیبانی، می‌توانید از طریق همان روش ها با ما در
          ارتباط باشید.
        </p>

        <ContactsWrapper>
          <GmailContainer
            onClick={() =>
              copyContent({
                text: 'marketing@marabox.com.au',
                toastMessage: 'آدرس ایمیل در حافظه کپی شد',
              })
            }
          >
            <GmailIcon />
            <GmailLink>marketing@marabox.com.au</GmailLink>
          </GmailContainer>
          <TelegramContainer
            href={'https://t.me/maraboxmigration'}
            target={'_blank'}
          >
            <TelegramIcon />
            <TelegramLink>@maraboxmigration</TelegramLink>
          </TelegramContainer>
        </ContactsWrapper>
        <CTA onClick={() => setIsOpen(false)}>فهمیدم</CTA>
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
const CTA = styled(SecondaryButton)`
  margin: 0 auto;
`;
