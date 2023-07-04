import * as Tooltip from "@radix-ui/react-tooltip";
import { deviceMin } from "Consts/device";
import useDevice from "Hooks/useDevice";
import {
  HTMLAttributes,
  ReactNode,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import styled, { css, keyframes } from "styled-components";
import theme from "styled-theming";
import { TagTheme } from "Styles/Theme";
import { BorderSvg } from "./BorderSvg";
import { Montserrat } from "@next/font/google";

interface Props extends HTMLAttributes<HTMLDivElement> {
  content: string | ReactNode;
  popupContent?: ReactNode | string;
  delayDuration?: number;
}
const montserrat = Montserrat({ subsets: ["latin"] });
const TooltipTag: React.FC<Props> = ({
  content,
  popupContent,
  delayDuration = 0,
  ...props
}) => {
  const { isLaptop } = useDevice();
  const [isTriggerClicked, setIsTriggerClicked] = useState<boolean>(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (isLaptop) {
      if (triggerRef?.current) {
        triggerRef?.current?.addEventListener("mouseover", () =>
          setIsTriggerClicked(true)
        );
      }
      if (triggerRef?.current) {
        triggerRef?.current?.addEventListener("mouseout", () =>
          setIsTriggerClicked(false)
        );
      }
    }
  }, [triggerRef]);
  const handleClick = (event: MouseEvent) => {
    if (
      triggerRef.current &&
      !triggerRef.current.contains(event?.target as Node)
    ) {
      setIsTriggerClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
  return (
    <Tooltip.Provider delayDuration={delayDuration}>
      <Tooltip.Root open={isTriggerClicked}>
        <Tooltip.Trigger
          ref={triggerRef}
          asChild
          onClick={() => setIsTriggerClicked((prevState) => !prevState)}
        >
          <ButtonContainer {...props}>
            <LeftBorder aria-hidden={true} />
            <Button id={"trigger_button"}>{content}</Button>
            <RightBorder aria-hidden={true} />
          </ButtonContainer>
        </Tooltip.Trigger>
        {popupContent ? (
          <Tooltip.Portal>
            <TooltipContent>
              {popupContent}
              <Tooltip.Arrow />
            </TooltipContent>
          </Tooltip.Portal>
        ) : null}
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};
export default TooltipTag;

const FadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ButtonBorderTheme = theme("mode", {
  light: css`
    fill: var(--color-primary4);
  `,
  dark: css`
    fill: var(--color-primary6);
  `,
});
export const TooltipContentTheme = theme("mode", {
  light: css`
    color: white;
    background-color: var(--color-gray2);
    span {
      fill: var(--color-gray2);
    }
  `,
  dark: css`
    color: var(--color-gray4);
    background-color: white;
    span {
      fill: white;
    }
  `,
});

const DirectionStyle = theme("languageDirection", {
  ltr: css``,
  rtl: css`
    flex-direction: row-reverse;
  `,
});
const ButtonContainer = styled.div`
  ${DirectionStyle}
  display: flex;
  align-items: center;
  width: max-content;
`;
const Button = styled.button`
  ${TagTheme};
  padding: 0.5rem 1rem;
  width: max-content;
  border-radius: 30px;
  position: relative;
  z-index: 2;
`;
const LeftBorder = styled(BorderSvg)`
  ${ButtonBorderTheme}
`;
const RightBorder = styled(LeftBorder)`
  transform: rotate(180deg);
`;
const TooltipContent = styled(Tooltip.Content)`
  ${TooltipContentTheme};
  z-index: 1000;
  white-space: break-spaces;
  padding: 0.75em 1em;
  transition: all 0.3s linear;
  border-radius: 10px;
  max-width: 19rem;
  @media ${deviceMin.tabletS} {
    max-width: unset;
  }
  &[data-state="delayed-open"] {
    animation: ${FadeInAnimation} 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
  &[data-state="instant-open"] {
    animation: ${FadeInAnimation} 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
`;
