import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useTheme from "Hooks/useTheme";
import { ThemeModes } from "Interfaces";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { signOut, useSession } from "next-auth/react";
import SwitchTheme from "../switchTheme";
import { Headline6Style, Headline7Style } from "Styles/Typo";
import PopOver from "Elements/PopOver";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { componentStatements, LanguageKeys } from "./const";
import { directionStyles } from "Styles/Theme";
import MaraSwitch from "Elements/MaraSwitch";
import { CiLogout } from "react-icons/ci";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getClientDetail } from "Queries/client";
import { ClientQueryKeys } from "Utils/query/keys";
import { ClientCompletedForms } from "Interfaces/Database/Client";
import SuccessToast from "Elements/Toast/Success";
import ErrorToast from "Elements/Toast/Error";
import { deviceMin } from "Consts/device";
import { listOfBasicForm_ResParams } from "Consts/agents";

function DesktopProfileOptions() {
  const { t } = useStaticTranslation(componentStatements);
  const { theme, setTheme } = useTheme();
  const { data: session } = useSession();
  const [isSharableChecked, setIsSharableChecked] = useState<
    boolean | undefined
  >(undefined);
  const queryClient = useQueryClient();
  const showDataMessage = t(LanguageKeys.ShowDataToast);
  const hideDataMessage = t(LanguageKeys.HideDataToast);
  const FailedToastMessage = t(LanguageKeys.FailedToastMessage);
  const reqParams = `email == "${session?.user?.email || "defensive"}"`;
  const resParams = `is_sharable,completed_forms,_id`;
  ///////////////
  const { data, isLoading: isSharableLoading } = useQuery(
    ClientQueryKeys.detail({
      reqParams,
      resParams,
    }),
    () => {
      return getClientDetail({
        reqParams,
        resParams,
      });
    }
  );
  ///////////// mutation on is-sharable clicked ///////
  const mutation = useMutation({
    mutationFn: () => {
      return fetch("/api/clients/is-sharable", {
        method: "POST",
        body: JSON.stringify({
          is_sharable: !isSharableChecked,
          _id: data?.client?.[0]?._id,
        }),
      });
    },
    onSuccess: (res) => {
      if (!res.ok) {
        throw new Error("couldnt patch the user");
      }
      setIsSharableChecked((prevState) => !prevState);
      if (isSharableChecked === true) {
        SuccessToast(hideDataMessage);
      } else {
        SuccessToast(showDataMessage);
      }
      queryClient.removeQueries(
        ClientQueryKeys.detail({
          reqParams: `email == "${session?.user?.email || "defensive"}"`,
        })
      );
       queryClient.removeQueries(
         ClientQueryKeys.listOfBasicForm({
           resParams: listOfBasicForm_ResParams,
         })
       );
    },
    onError: () => {
      ErrorToast(FailedToastMessage);
    },
  });
  /////////////
  useEffect(() => {
    setIsSharableChecked(data?.client?.[0]?.is_sharable);
  }, [data]);
  return (
    <StyledNavigationMenuItem>
      <PopOver
        trigger={
          <Avatar
            src={session?.user?.image || "/Images/placeholder.jpeg"}
            alt={"user-profile"}
          />
        }
        content={
          <PopOverContentContainer>
            {
              // this condition is to see if the user has completed the basic form
              // we don't want to show this item if the user haven't completed the basic form yet
              data?.client?.[0]?.completed_forms?.filter(
                (forms) => forms.forms === ClientCompletedForms.BasicForm
              ).length === 1 && (
                <PopOverItemContainer
                  onClick={() => {
                    mutation.mutate();
                  }}
                >
                  <MaraItemTitle>
                    {t(LanguageKeys.IsBasicFormShowable)}
                  </MaraItemTitle>
                  <MaraSwitch
                    isChecked={isSharableChecked}
                    isLoading={mutation?.isLoading}
                  />
                </PopOverItemContainer>
              )
            }
            <PopOverItemContainer
              onClick={() => {
                theme === ThemeModes.DARK
                  ? setTheme(ThemeModes.LIGHT)
                  : setTheme(ThemeModes.DARK);
              }}
            >
              <MaraItemTitle>{t(LanguageKeys.ChangeTheme)}</MaraItemTitle>
              <SwitchTheme />
            </PopOverItemContainer>
            <RedLine />
            <PopOverItemContainer
              onClick={() => {
                signOut();
              }}
            >
              <LogoutTitle>{t(LanguageKeys.LogOut)}</LogoutTitle>
              <LogoutIcon />
            </PopOverItemContainer>
          </PopOverContentContainer>
        }
      />
    </StyledNavigationMenuItem>
  );
}

export default DesktopProfileOptions;
const StyledNavigationMenuItem = styled(NavigationMenu.Item)`
  list-style-type: none;
  display: flex;
`;
///////////////
const Avatar = styled.img`
  border-radius: 50%;
  width: 2rem;
  outline: 2px solid var(--color-gray7);
  cursor: pointer;
  @media ${deviceMin.tabletS} {
    width: 3rem;
  }
`;
const PopOverContentContainer = styled.div``;
const PopOverItemContainer = styled.div`
  ${directionStyles}
  width:100%;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem;
  @media ${deviceMin.tabletS} {
    padding: 1rem;
    gap: 1rem;
  }
`;
const MaraItemTitle = styled.h4`
  ${Headline7Style};
  color: var(--color-gray4);
  @media ${deviceMin.tabletS} {
    ${Headline6Style};
  }
`;
const RedLine = styled.hr`
  width: 20%;
  border-radius: 15px;
  height: 1.5px;
  background: var(--color-fail1);
  margin: auto;
`;
const LogoutTitle = styled(MaraItemTitle)`
  color: var(--color-fail1);
`;
const LogoutIcon = styled(CiLogout)`
  color: var(--color-fail1);
  width: 2rem;
  height: auto;
`;
