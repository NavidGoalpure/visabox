import ModalComponent from 'Components/ModalComponent';

import { SecondaryButton } from 'Elements/Button/Secondary';
import { useState } from 'react';
import { copyContent } from 'Utils';
import { componentStatements } from './const';
import {
  ContactsDesc,
  ContactsWrapper,
  GmailContainer,
  GmailIcon,
  GmailLink,
  TelegramContainer,
  TelegramIcon,
  TelegramLink,
} from './styledComponents';

const IranPaymentModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <ModalComponent
      open={isOpen}
      DialogTitleText='پرداخت در ایران'
      setOpen={setIsOpen}
    >
      <p>
        برای فعال سازی این پلن، لطفا مبلغ فولان را به شماره کارت 5022-2913-0746-
        3446 بانک پاسارگاد، به نام سید شایان شریف الحسینی کارت به کارت کنید و
        رسید آن را از طریق ایمیل یا تلگرام برای ما ارسال نمایید. برای دریافت
        هرگونه پشتیبانی، می‌توانید از طریق همان روش ها با ما در ارتباط باشید
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
      <SecondaryButton>فهمیدم</SecondaryButton>
    </ModalComponent>
  );
};
export default IranPaymentModal;
