import { deviceMin } from 'Consts/device';
import { useDynamicTranslation } from 'Hooks/useDynamicTraslation';
import { useLocale } from 'Hooks/useLocale';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { MultiLanguageText } from 'Interfaces';
import React, { HTMLAttributes, ReactNode, useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import styled, { keyframes } from 'styled-components';
import { directionStyles } from 'Styles/Theme';
import { Module_Theme, Module_TitleColor } from 'Styles/Theme/Modals/theme';

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title: MultiLanguageText;
  children: ReactNode;
}

const Root: React.FC<Props> = ({ children, title, ...props }) => {
  const { dt } = useDynamicTranslation();
  //navid use localstorage for saving user desision
  const [isShow, setIsShow] = useState<boolean>(true);
  return (
    <Container {...props} isShow={isShow}>
      <Wrapper>
        <Trigger role='button' onClick={() => setIsShow((prev) => !prev)}>
          <ArrowContainer isShow={isShow}>
            <BsChevronDown />
          </ArrowContainer>
        </Trigger>
        <>
          <Title>{dt(title)}</Title>
          <Content>{children}</Content>
        </>
      </Wrapper>
    </Container>
  );
};
export { Root };
const Container = styled.section<{ isShow: boolean }>`
  ${Module_Theme}
  ${directionStyles}
border-radius: 8px 8px 0 0;
  position: fixed;
  bottom: 0;
  margin: auto;
  z-index: 10000;
  width: 80%;
  right: 0;
  left: 0;
  transform: ${({ isShow }) => (isShow ? "translateY(100%)" : "translateY(0%)")};
  @media ${deviceMin.tabletL}
  { 
  width: 30%;
  padding-left: 1rem;
  padding-right: 1rem;
  right: 3rem;
  left: unset;
}
`;
const Wrapper = styled.form`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  // height: auto;
  position: relative;
`;
const Trigger = styled.div`
  ${Module_Theme}
  text-align: center;
  position: absolute;
  top: -24px;
  right: 20px;
  width: 56px;
  height: 24px;
  padding-top: 2px;
  cursor: pointer;
  border: none;
  box-shadow: 0 0 7px 0 rgb(0 0 0 / 30%);
  z-index: 2147483640;
  border-radius: 5px 5px 0 0;
  align-items: center;
  display: flex;
  justify-content: center;
}
`;

const ArrowContainer = styled.div<{ isShow: boolean }>`
  display: flex;
  transform: ${({ isShow }) => (isShow ? "rotate(180deg)" : "rotate(1deg)")};
`


const Title = styled.div`
  ${Module_TitleColor}
  font-weight: bold;
  text-align: center;
  padding: 12px;
  margin: 0;
  line-height: 17px;
  min-height: 17px;
  word-break: break-word;
  word-wrap: break-word;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
`;






// <Trigger role='button' onClick={() => setIsShow((prev) => !prev)}>
//           <BsChevronDown />
//         </Trigger>
//         {isShow && (
//           <>
//             <Title>{dt(title)}</Title>
//             <Content>{children}</Content>
//           </>
//         )}