import { useDynamicTranslation } from 'Hooks/useDynamicTraslation';
import { useLocale } from 'Hooks/useLocale';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { MultiLanguageText } from 'Interfaces';
import React, { HTMLAttributes, ReactNode, useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import styled from 'styled-components';
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
    <Container {...props}>
      <Wrapper>
        <Trigger role='button'>
          <BsChevronDown onClick={() => setIsShow((prev) => !prev)} />
        </Trigger>
        {isShow && (
          <>
            <Title>{dt(title)}</Title>
            <Content>{children}</Content>
          </>
        )}
      </Wrapper>
    </Container>
  );
};
export { Root };
const Container = styled.section`
  ${Module_Theme}
  ${directionStyles}
border-radius: 8px 8px 0 0;
  position: fixed;
  bottom: 0;
  margin: auto;
  z-index: 10000;
  width: 80%;
  transform: translate(10%);
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
  top: -18px;
  right: 20px;
  width: 40px;
  height: 18px;
  padding-top: 2px;
  cursor: pointer;
  border: none;
  box-shadow: 0 0 7px 0 rgb(0 0 0 / 30%);
  z-index: 2147483640;
  border-radius: 5px 5px 0 0;
`;
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
