import * as Dialog from '@radix-ui/react-dialog';

import styled, { keyframes } from 'styled-components';
import { Headline5Style, Headline6Style } from 'Styles/Typo';

import { deviceMin } from 'Consts/device';
import { Dispatch, ReactNode, SetStateAction } from 'react';
interface Props extends Dialog.DialogProps {
  trigger?: ReactNode;
  DialogTitleText?: string;
  doesModalCloseOnOutsideInteraction?: boolean;
  open: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
}
const ModalComponent: React.FC<Props> = ({
  children,
  DialogTitleText,
  trigger,
  doesModalCloseOnOutsideInteraction = false,
  open,
  setOpen,
  ...props
}) => {
  if (doesModalCloseOnOutsideInteraction && !setOpen) {
    throw new Error(
      'setOpen is required when doesModalCloseOnOutsideInteraction is provided'
    );
  }
  return (
    <Dialog.Root open={open} {...props}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>

      <Dialog.Portal>
        <DialogOverlay className='DialogOverlay' />
        <DialogContent
          onPointerDownOutside={() => {
            if (doesModalCloseOnOutsideInteraction && setOpen) {
              setOpen(false);
            }
          }}
          className='DialogContent'
        >
          <MobileLine />
          <Wrapper>
            {!!DialogTitleText && (
              <DialogTitle className='DialogTitle'>
                {DialogTitleText}
              </DialogTitle>
            )}
            {children}
          </Wrapper>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
export default ModalComponent;
const OverlayShow = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;
const DesktopContentShow = keyframes`
from {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;
const MobileContentShow = keyframes`
from {
    opacity: 0;
    transform: translate(0, 100%) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(0, 0) scale(1);
  }
`;
const DialogOverlay = styled(Dialog.Overlay)`
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2.5px);
  position: fixed;
  inset: 0;
  z-index: 10;
  animation: ${OverlayShow} 300ms cubic-bezier(0.16, 1, 0.3, 1);
`;
const DialogContent = styled(Dialog.Content)`
  z-index: 10;
  max-height: 80vh;
  width: 100%;
  display: flex;
  border-radius: 30px 30px 0px 0px;
  background-color: var(--color-gray13);
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 3rem 0 1rem;
  animation: ${MobileContentShow} 300ms cubic-bezier(0.16, 1, 0.3, 1);
  @media ${deviceMin.tabletS} {
    padding: 2rem;
    height: fit-content;
    border-radius: 15px;
    width: auto;
    max-width: 31.5rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ${DesktopContentShow} 300ms cubic-bezier(0.16, 1, 0.3, 1);
  }
`;
const MobileLine = styled.hr`
  position: absolute;
  display: flex;
  height: max-content;
  top: 1rem;
  width: 4.25rem;
  height: 5px;
  background: var(--color-gray8);
  left: 50%;
  border-radius: 15px;
  transform: translateX(-50%);
  @media ${deviceMin.tabletS} {
    display: none;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  postion: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: auto;
  gap: 2rem;
  padding: 0 2rem;
  @media ${deviceMin.tabletS} {
    padding: 0;
    // overflow: unset;
    height: auto;
  }
`;
const DialogTitle = styled(Dialog.Title)`
  ${Headline5Style};
  text-align: center;
`;
