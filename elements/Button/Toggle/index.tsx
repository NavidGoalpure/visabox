import * as Tooltip from "@radix-ui/react-tooltip";
import styled, { css, keyframes } from "styled-components/macro";
import theme from "styled-theming";
import border from "./LeftBorder.svg";

interface Props {
  content: string;
  popupContent: string;
  delayDuration?: number;
}

const TooltipTag: React.FC<Props> = ({
  content,
  popupContent,
  delayDuration = 0,
}) => {
  return (
    <Tooltip.Provider delayDuration={delayDuration}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <ButtonContainer>
            <LeftBorder
              src={border}
              alt={"left border image"}
              aria-hidden={true}
            />
            <Button>{content}</Button>
            <RightBorder
              src={border}
              alt={"right border image"}
              aria-hidden={true}
            />
          </ButtonContainer>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <TooltipContent>
            {popupContent}
            <Tooltip.Arrow />
          </TooltipContent>
        </Tooltip.Portal>
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

export const ButtonTheme = theme("mode", {
  light: css`
    background: var(--color-primary4);
    color: var(--color-gray13);
  `,
  dark: css`
    background: var(--color-primary5);
    color: var(--color-gray4);
  `,
});
export const ButtonBorderTheme = theme("mode", {
  light: css`
    border: 5px solid var(--color-primary4);
  `,
  dark: css`
    border: 5px solid var(--color-primary5);
  `,
});
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
`;
const Button = styled.button`
  ${ButtonTheme};
  padding: 0.5rem 1rem;
  width: max-content;
  border-radius: 30px;
  position: relative;
  z-index: 2;
`;
const LeftBorder = styled.img``;
const RightBorder = styled(LeftBorder)`
  transform: rotate(180deg);
`;
const TooltipContent = styled(Tooltip.Content)`
  // navid change when dark design is ready
  color: white;
  background-color: var(--color-gray2);
  padding: 0.75em 1em;
  transition: all 0.3s linear;
  border-radius: 10px;
  &[data-state="delayed-open"] {
    animation: ${FadeInAnimation} 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
  &[data-state="instant-open"] {
    animation: ${FadeInAnimation} 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
`;
