import * as Tooltip from "@radix-ui/react-tooltip";
import styled, { keyframes } from "styled-components/macro";

interface Props {
  content:string;
  popupContent:string;
  delayDuration?:number;
}

const TooltipTag:React.FC<Props> = ({content,popupContent,delayDuration=0}) => {
  return (
    <Tooltip.Provider delayDuration={delayDuration}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Button>{content}</Button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content>{popupContent}</Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};
export default TooltipTag;
const Button = styled.button`
  padding: 0.5rem 1rem;
  width: max-content;
  border-radius: 30px;
  color: var(--color-gray4);
  background-color: var(--color-primary5);
  position: relative;
  z-index: 2;
  :before {
    content: "";
    border: 5px solid var(--color-primary5);
    width: 100%;
    height: 100%;
    transform: scaleX(1.3);
    position: absolute;
    top: 0;
    border-radius: 30px;
    left: 0;
    border-top: none;
    border-bottom: none;
    transition: all 0.3s ease;
  }
`;

