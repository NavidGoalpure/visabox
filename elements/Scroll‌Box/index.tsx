import React, { HTMLAttributes, ReactNode } from 'react';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import styled from 'styled-components';
import { boxShadow, componentTheme } from 'styles/Theme';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
const ScrollBox: React.FC<Props> = ({ className, children }) => {
  return (
    <ScrollAreaRoot className={className}>
      <ScrollAreaViewport>{children}</ScrollAreaViewport>
      <ScrollAreaScrollbar orientation='vertical'>
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaScrollbar orientation='horizontal'>
        <ScrollArea.Thumb />
      </ScrollAreaScrollbar>
      <ScrollAreaCorner />
    </ScrollAreaRoot>
  );
};

export { ScrollBox };

const ScrollAreaRoot = styled(ScrollArea.Root)`
  ${boxShadow}
  ${componentTheme}
  width: 100%;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
  --scrollbar-size: 10px;
`;
const ScrollAreaViewport = styled(ScrollArea.Viewport)`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  height: 10rem;
`;
const ScrollAreaScrollbar = styled(ScrollArea.Scrollbar)`
  display: flex;
  /* ensures no selection */
  user-select: none;
  /* disable browser handling of all panning and zooming gestures on touch devices */
  touch-action: none;
  padding: 2px;
  background: lightgray;
  transition: background 160ms ease-out;
  ${ScrollAreaRoot}:hover & {
    background: lightgray;
  }
  &[data-orientation='vertical'] {
    width: var(--scrollbar-size);
  }
  &[data-orientation='horizontal'] {
    flex-direction: column;
    height: var(--scrollbar-size);
  }
`;
const ScrollAreaThumb = styled(ScrollArea.Thumb)`
  flex: 1;
  background: gray;
  border-radius: 10px;
  position: relative;
  :before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    min-width: 44px;
    min-height: 44px;
  }
`;
const ScrollAreaCorner = styled(ScrollArea.Corner)`
  background: lightgray;
`;
