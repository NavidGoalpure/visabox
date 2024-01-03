import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import {
  layer2A_SubtitleStyle,
  layer2A_TextStyle,
} from 'Styles/Theme/Layers/layer2/style';
import { layer2A_TextColor } from 'Styles/Theme/Layers/layer2/theme';
import { Layer1_TitleStyle } from 'Styles/Theme/Layers/layer1/style';
import { Headline7Style } from 'Styles/Typo';
import { FaPhone } from 'react-icons/fa';
import { deviceMin } from 'Consts/device';
import { SiGmail } from 'react-icons/si';
import { copyContent } from 'Utils';
import {
  Client,
  ClientCompletedForms,
  ClientDegree,
} from 'Interfaces/Database/Client';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { useLocale } from 'Hooks/useLocale';
import { BsCheck } from 'react-icons/bs';
import { IoCloseOutline } from 'react-icons/io5';
import TooltipTag from 'Elements/TooltipTag';
import { FiInfo } from 'react-icons/fi';
import { MdOutlineEdit } from 'react-icons/md';
import useDevice from 'Hooks/useDevice';
import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { getMultiLanguageLabels } from '../utils';
import EditModal from '../EditModal';
import {
  componentStatements,
  LanguageKeys,
  EditModalContentKeys,
} from '../const';
import { useSession } from 'next-auth/react';
import { EditButton, EditIcon } from '../StyledComponents';
import AddDegreesSection from './AddDegreeSection';
import CurrentJobsSection from './AddJobSection';

interface Props {
  client: Client;
  isMobile: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  setEditModalContentKey: Dispatch<SetStateAction<EditModalContentKeys | null>>;
}
function DescriptionSection({
  client,
  isMobile,
  setIsModalOpen,
  setEditModalContentKey,
}: Props) {
  const { t } = useStaticTranslation(componentStatements);
  const data = getMultiLanguageLabels(client);
  const { data: session } = useSession();
  const isViewerOwner = client?.email === session?.user?.email;
  const { locale } = useLocale();
  const phoneToastMessage = t(LanguageKeys.copyPhoneToastMessage);
  const gmailToastMessage = t(LanguageKeys.copyEmailToastMessage);
  function EditClickHandler(key: EditModalContentKeys) {
    setIsModalOpen(true);
    setEditModalContentKey(key);
  }
  return (
    <FormData>
      <Title>{t(LanguageKeys.AboutLabel)}</Title>
      <Wrapper>
        <DataWrapper
          $isViewerOwner={isViewerOwner}
          onClick={() =>
            isViewerOwner && EditClickHandler(EditModalContentKeys.BIRTH_DATE)
          }
        >
          <Label>{t(LanguageKeys.BirthDateLabel)}</Label>{' '}
          <Value>
            {data?.birthday
              ? data?.birthday?.slice(0, 10)
              : data?.age?.slice(0, 10)}
          </Value>
          {isViewerOwner && (
            <EditButton>{isMobile ? <EditIcon /> : '[edit]'}</EditButton>
          )}
        </DataWrapper>
        <DataWrapper
          $isViewerOwner={isViewerOwner}
          onClick={() =>
            isViewerOwner &&
            EditClickHandler(EditModalContentKeys.ENGLISH_SKILL)
          }
        >
          <Label>{t(LanguageKeys.EnglishSkillsLabel)}</Label>{' '}
          <Value>{data?.IELTSScore}</Value>
          {isViewerOwner && (
            <EditButton>{isMobile ? <EditIcon /> : '[edit]'}</EditButton>
          )}
        </DataWrapper>
        <DataWrapper $isViewerOwner={isViewerOwner} $isCursorAuto={true}>
          <Label
            onClick={() =>
              isViewerOwner &&
              EditClickHandler(EditModalContentKeys.MARRIAGE_STATUS)
            }
          >
            {t(LanguageKeys.MarriageStatusLabel)}
          </Label>{' '}
          <Value>
            {data?.marital?.[locale]}{' '}
            {data?.marital?.en === 'Married' && (
              <TooltipTag
                popupContent={
                  <>
                    {data?.is_partner_competent_english_speaker !==
                      undefined && (
                      <PartnerPopupContent>
                        <PartnerPopupLabel>
                          {t(LanguageKeys.PartnerAssesmentLabel)}
                        </PartnerPopupLabel>
                        {data?.does_partner_have_assessment ? (
                          <Checkmark />
                        ) : (
                          <CloseIcon />
                        )}
                      </PartnerPopupContent>
                    )}
                    <PartnerPopupContent>
                      <PartnerPopupLabel>
                        {' '}
                        {t(LanguageKeys.PartnerEnglishLabel)}
                      </PartnerPopupLabel>
                      {data?.is_partner_competent_english_speaker ? (
                        <Checkmark />
                      ) : (
                        <CloseIcon />
                      )}
                    </PartnerPopupContent>
                  </>
                }
                content={
                  <>
                    <InformationIcon />
                  </>
                }
              />
            )}
          </Value>
          {isViewerOwner && (
            <EditButton
              onClick={() =>
                isViewerOwner &&
                EditClickHandler(EditModalContentKeys.MARRIAGE_STATUS)
              }
            >
              {isMobile ? <EditIcon /> : '[edit]'}
            </EditButton>
          )}
        </DataWrapper>
        {client?.country && (
          <DataWrapper
            $isViewerOwner={isViewerOwner}
            onClick={() =>
              isViewerOwner && EditClickHandler(EditModalContentKeys.COUNTRY)
            }
          >
            <Label>{t(LanguageKeys.CountryLabel)}</Label>{' '}
            <Value>{data?.country?.[locale]}</Value>
            {isViewerOwner && (
              <EditButton>{isMobile ? <EditIcon /> : '[edit]'}</EditButton>
            )}
          </DataWrapper>
        )}
        <DataWrapper
          $isViewerOwner={isViewerOwner}
          onClick={() =>
            isViewerOwner &&
            EditClickHandler(EditModalContentKeys.FIELD_OF_STUDY)
          }
        >
          <Label>{t(LanguageKeys.FieldOfStudyLabel)}</Label>{' '}
          <Value>{data?.fieldOfStudy}</Value>
          {isViewerOwner && (
            <EditButton>{isMobile ? <EditIcon /> : '[edit]'}</EditButton>
          )}
        </DataWrapper>
        {client?.degree !== ClientDegree.IDontHaveAny &&
        client?.all_degrees?.length !== 0 ? (
          <NoLineDataWrapper
            $isViewerOwner={isViewerOwner}
            onClick={() =>
              isViewerOwner && EditClickHandler(EditModalContentKeys.DEGREE)
            }
          >
            <Label>{t(LanguageKeys.DegreeLabel)}</Label>{' '}
            <Value>{data?.degree?.[locale]}</Value>
            {isViewerOwner && (
              <EditButton>{isMobile ? <EditIcon /> : '[edit]'}</EditButton>
            )}
          </NoLineDataWrapper>
        ) : (
          <DataWrapper
            $isViewerOwner={isViewerOwner}
            onClick={() =>
              isViewerOwner && EditClickHandler(EditModalContentKeys.DEGREE)
            }
          >
            <Label>{t(LanguageKeys.DegreeLabel)}</Label>{' '}
            <Value>{data?.degree?.[locale]}</Value>
            {isViewerOwner && (
              <EditButton>{isMobile ? <EditIcon /> : '[edit]'}</EditButton>
            )}
          </DataWrapper>
        )}
        {client?.completed_forms?.filter(
          (form) => form.forms === ClientCompletedForms.AgentForm
        ).length === 1 &&
          client?.degree !== ClientDegree.IDontHaveAny &&
          client?.all_degrees?.length !== 0 && (
            <AddDegreesSection labeledData={data} client={client} />
          )}
        <NoLineDataWrapper
          $isViewerOwner={isViewerOwner}
          onClick={() =>
            isViewerOwner &&
            EditClickHandler(
              EditModalContentKeys.AUSTRALIAN_EDUCATIONAL_QUALIFICATION_RELATED
            )
          }
        >
          <Label>
            {t(LanguageKeys.AustralianEducationalQualificationLabel)}
          </Label>{' '}
          <Value>
            {data?.australian_educational_qualification ? (
              <Checkmark />
            ) : (
              <CloseIcon />
            )}
          </Value>
        </NoLineDataWrapper>
        <NoLineDataWrapper
          $isViewerOwner={isViewerOwner}
          onClick={() =>
            isViewerOwner &&
            EditClickHandler(
              EditModalContentKeys.AUSTRALIAN_EDUCATIONAL_QUALIFICATION_RELATED
            )
          }
        >
          <Label>{t(LanguageKeys.DesignatedRegionalAreaStudyLabel)}</Label>{' '}
          <Value>
            {data?.designated_regional_area_study ? (
              <Checkmark />
            ) : (
              <CloseIcon />
            )}
          </Value>
          {isViewerOwner && (
            <EditButton>{isMobile ? <EditIcon /> : '[edit]'}</EditButton>
          )}
        </NoLineDataWrapper>
        <DataWrapper
          $isViewerOwner={isViewerOwner}
          onClick={() =>
            isViewerOwner &&
            EditClickHandler(
              EditModalContentKeys.AUSTRALIAN_EDUCATIONAL_QUALIFICATION_RELATED
            )
          }
        >
          <Label>
            {t(LanguageKeys.SpecialistEducationalQualificationLabel)}
          </Label>{' '}
          <Value>
            {data?.specialist_educational_qualification ? (
              <Checkmark />
            ) : (
              <CloseIcon />
            )}
          </Value>
        </DataWrapper>
        <DataWrapper
          $isViewerOwner={isViewerOwner}
          onClick={() =>
            isViewerOwner &&
            EditClickHandler(
              EditModalContentKeys.PROFESSIONAL_YEAR_IN_AUSTRALIA
            )
          }
        >
          <Label>{t(LanguageKeys.ProfessionalYearInAustraliaLabel)}</Label>{' '}
          <Value>
            {data?.professional_year_in_australia ? (
              <Checkmark />
            ) : (
              <CloseIcon />
            )}
          </Value>
          {isViewerOwner && (
            <EditButton>{isMobile ? <EditIcon /> : '[edit]'}</EditButton>
          )}
        </DataWrapper>
        <DataWrapper
          $isViewerOwner={isViewerOwner}
          onClick={() =>
            isViewerOwner &&
            EditClickHandler(EditModalContentKeys.ACCREDITED_COMMUNITY_LANGUAGE)
          }
        >
          <Label>{t(LanguageKeys.AccreditedCommunityLanguageLabel)}</Label>{' '}
          <Value>
            {data?.accredited_community_language ? (
              <Checkmark />
            ) : (
              <CloseIcon />
            )}
          </Value>
          {isViewerOwner && (
            <EditButton>{isMobile ? <EditIcon /> : '[edit]'}</EditButton>
          )}
        </DataWrapper>
        {client?.all_jobs?.length !== 0 ? (
          <NoLineDataWrapper
            $isViewerOwner={isViewerOwner}
            onClick={() =>
              isViewerOwner &&
              EditClickHandler(EditModalContentKeys.UNIVERSITY_SECTION)
            }
          >
            <Label>{t(LanguageKeys.UniversitySectionLabel)}</Label>{' '}
            <Value>{data?.uniSection?.[locale]}</Value>
            {isViewerOwner && (
              <EditButton>{isMobile ? <EditIcon /> : '[edit]'}</EditButton>
            )}
          </NoLineDataWrapper>
        ) : (
          <DataWrapper
            $isViewerOwner={isViewerOwner}
            onClick={() =>
              isViewerOwner &&
              EditClickHandler(EditModalContentKeys.UNIVERSITY_SECTION)
            }
          >
            <Label>{t(LanguageKeys.UniversitySectionLabel)}</Label>{' '}
            <Value>{data?.uniSection?.[locale]}</Value>
            {isViewerOwner && (
              <EditButton>{isMobile ? <EditIcon /> : '[edit]'}</EditButton>
            )}
          </DataWrapper>
        )}
        {client?.completed_forms?.filter(
          (form) => form.forms === ClientCompletedForms.AgentForm
        ).length === 1 &&
          client?.all_jobs?.length !== 0 && (
            <CurrentJobsSection labeledData={data} client={client} />
          )}
        <DataWrapper
          $isViewerOwner={isViewerOwner}
          onClick={() =>
            isViewerOwner &&
            EditClickHandler(EditModalContentKeys.WORK_EXPERIENCE_OVERSEAS)
          }
        >
          <Label>{t(LanguageKeys.WorkExperienceLabel)}</Label>{' '}
          <Value>{data?.workExperience?.[locale]}</Value>
          {isViewerOwner && (
            <EditButton>{isMobile ? <EditIcon /> : '[edit]'}</EditButton>
          )}
        </DataWrapper>
        <DataWrapper
          $isViewerOwner={isViewerOwner}
          onClick={() =>
            isViewerOwner &&
            EditClickHandler(EditModalContentKeys.AUSTRALIAN_WORK_EXPERIENCE)
          }
        >
          <Label>{t(LanguageKeys.AustralianWorkExperienceLabel)}</Label>{' '}
          <Value>{data?.australianWorkExperience?.[locale]}</Value>
          {isViewerOwner && (
            <EditButton>{isMobile ? <EditIcon /> : '[edit]'}</EditButton>
          )}
        </DataWrapper>
        {!!client?.phone && (
          <StyledDataWrapper
            $isViewerOwner={isViewerOwner}
            onClick={() =>
              isViewerOwner
                ? EditClickHandler(EditModalContentKeys.PHONE_NUMBER)
                : copyContent({
                    text: data.phoneNumber || '',
                    toastMessage: phoneToastMessage,
                  })
            }
          >
            <Label>{t(LanguageKeys.PhoneNumberTitle)}</Label>{' '}
            <Value>{data?.phoneNumber}</Value>
            {isViewerOwner && (
              <EditButton>{isMobile ? <EditIcon /> : '[edit]'}</EditButton>
            )}
          </StyledDataWrapper>
        )}

        <StyledDataWrapper
          $isViewerOwner={isViewerOwner}
          onClick={() =>
            isViewerOwner
              ? EditClickHandler(EditModalContentKeys.EMAIL)
              : copyContent({
                  text: data.email || '',
                  toastMessage: gmailToastMessage,
                })
          }
        >
          <Label>{t(LanguageKeys.EmailTitle)}</Label>{' '}
          <Value>{data?.email}</Value>
          {isViewerOwner && (
            <EditButton>{isMobile ? <EditIcon /> : '[edit]'}</EditButton>
          )}
        </StyledDataWrapper>
      </Wrapper>
    </FormData>
  );
}
export default DescriptionSection;

const FormDataTheme = theme('mode', {
  light: css`
    background: var(--color-gray13);
  `,
  dark: css`
    background: var(--color-gray6);
  `,
});
const BorderColor = theme('mode', {
  light: css`
    border-color: var(--color-gray11);
  `,
  dark: css`
    border-color: var(--color-gray7);
  `,
});
const FormDataDropshadow = theme('mode', {
  light: css`
    filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.5));
  `,
  dark: css``,
});
const LabelTheme = theme('mode', {
  light: css`
    color: var(--color-gray8);
  `,
  dark: css`
    color: var(--color-gray10);
  `,
});

const IconTheme = theme('mode', {
  light: css`
    color: var(--color-primary13);
  `,
  dark: css`
    color: var(--color-primary1);
  `,
});

const FormData = styled.div`
  ${FormDataTheme};
  ${FormDataDropshadow};
  border-radius: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem 1.5rem;
  position: relative;
  @media ${deviceMin.tabletS} {
    padding: 2rem 3rem;
    width: 34.25rem;
  }
`;
const Title = styled.h3`
  ${Layer1_TitleStyle}
  margin-bottom:1.5rem;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;
const DataWrapper = styled.div<{
  $isViewerOwner: boolean;
  $isCursorAuto?: boolean;
}>`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  align-items: center;
  width: 100%;
  padding: 1.5rem 0;
  border-bottom: 1px solid;
  ${BorderColor};
  :last-child {
    border: none;
  }
  ${({ $isViewerOwner }) =>
    $isViewerOwner &&
    css`
      cursor: pointer;
    `}
  ${({ $isCursorAuto }) =>
    $isCursorAuto &&
    css`
      cursor: auto;
    `}
`;
const NoLineDataWrapper = styled(DataWrapper)`
  border: unset;
`;
const StyledDataWrapper = styled(DataWrapper)`
  cursor: pointer;
`;
const Label = styled.h4`
  ${LabelTheme};
  ${Headline7Style};
  line-height: 20px;
`;
const Value = styled.h4`
  ${layer2A_TextStyle};
  line-height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const PartnerPopupContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;
const PartnerPopupLabel = styled.div`
  ${Headline7Style};
`;

const Checkmark = styled(BsCheck)`
  color: var(--color-primary3);
  height: auto;
  width: 2rem;
`;
const CloseIcon = styled(IoCloseOutline)`
  color: var(--color-fail1);
  width: 1.5rem;
  height: auto;
`;
const InformationIcon = styled(FiInfo)`
  ${IconTheme};
  height: 1.5rem;
  width: auto;
  cursor: pointer;
  margin: 0;
`;
