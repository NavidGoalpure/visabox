import styled, { css } from "styled-components";
import { layer3_TextStyle } from "Styles/Theme/Layers/layer3/style";
// import "swiper/swiper-bundle.css";
// import "swiper/css";
// import "swiper/css/navigation";
import { useContext, useEffect, useState } from "react";
import { Headline7Style } from "Styles/Typo";
import { MdOutlineEdit } from "react-icons/md";
import theme from "styled-theming";
import { AiOutlinePlus } from "react-icons/ai";
import AddJobModal from "./AddJobModal";
import { FormDataContext } from "PagesComponents/Clients/RequestAgent/Contexts/FormDataContext/Context";
import { useLocale } from "Hooks/useLocale";
import { deviceMin } from "Consts/device";
import MaraSwiper from "Components/MaraSwiper";
import { componentStatements, LanguageKeys } from "../const";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { BsCheck } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";

const CurrentJobsSection = () => {
  const { client } = useContext(FormDataContext);
  const { locale } = useLocale();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedJobIndex, setSelectedJobIndex] = useState<number | undefined>(
    undefined
  );
  const { t } = useStaticTranslation(componentStatements);
  return (
    <MaraSwiper updateSwiperVariables={client}>
      <AddJobModal
        clickedJobIndex={selectedJobIndex}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <AddJobCard
        onClick={() => {
          setIsModalOpen(true);
          setSelectedJobIndex(undefined);
        }}
        className="swiper-slide"
      >
        <AddTitle>{t(LanguageKeys.AddJobSwiper)} </AddTitle>
        <PlusIcon />
      </AddJobCard>
      {client?.all_jobs?.map((job, index) => {
        if (!!job.title) {
          return (
            <JobCard
              onClick={() => {
                setIsModalOpen(true);
                setSelectedJobIndex(index);
              }}
              className="swiper-slide"
            >
              <CardTitle>{job.title}</CardTitle>
              <WorkExperience>{job.work_experience}</WorkExperience>

              <TrueOrFalseField>
                {" "}
                {t(LanguageKeys.WasTheJobInAustralia)}{" "}
                {job.was_job_in_australia ? <Checkmark /> : <CloseIcon />}
              </TrueOrFalseField>
              <TrueOrFalseField>
                {t(LanguageKeys.CanProvideLegalProofForExperience)}
                {job.is_able_to_provide_legal_proof ? (
                  <Checkmark />
                ) : (
                  <CloseIcon />
                )}
              </TrueOrFalseField>
              <EditIcon />
            </JobCard>
          );
        }
      })}
    </MaraSwiper>
  );
};
export default CurrentJobsSection;

const JobCardTheme = theme("mode", {
  light: css`
    background: var(--color-gray13);
  `,
  dark: css`
    background: var(--color-gray5);
  `,
});
const TitleTheme = theme("mode", {
  light: css`
    color: var(--color-primary4);
  `,
  dark: css`
    color: var(--color-primary6);
  `,
});
const AddTitleTheme = theme("mode", {
  light: css`
    color: var(--color-primary3);
  `,
  dark: css`
    color: var(--color-primary6);
  `,
});
const AddCardBorderTheme = theme("mode", {
  light: css`
    border-color: var(--color-gray7);
  `,
  dark: css`
    border-color: var(--color-gray4);
  `,
});

const PrevArrowDir = theme("languageDirection", {
  ltr: css`
    transform: rotate(90deg);
  `,
  rtl: css`
    transform: rotate(-90deg);
  `,
});
const NextArrowDir = theme("languageDirection", {
  ltr: css`
    transform: rotate(-90deg);
  `,
  rtl: css`
    transform: rotate(90deg);
  `,
});

const JobCard = styled.div`
  ${JobCardTheme};
  cursor: pointer;
  padding: 1rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  height: 100%;
  max-width: 12.5rem;

  width: max-content;
  @media ${deviceMin.tabletS} {
    max-width: unset;
  }
`;
const CardTitle = styled.h3`
  ${Headline7Style};
  ${TitleTheme};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
`;
const WorkExperience = styled.h3`
  ${layer3_TextStyle}
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  flex-shrink: 0;
`;

const TrueOrFalseField = styled.h3`
  ${layer3_TextStyle};
  display: flex;
  jusitfy-content: center;
  gap: 0.5rem;
`;
const EditIcon = styled(MdOutlineEdit)`
  border-radius: 50px;
  color: var(--color-gray13);
  padding: 0.5rem;
  box-sizing: content-box;
  background: var(--color-primary4);
`;
const AddJobCard = styled.div`
  border: 3px dashed;
  ${AddCardBorderTheme};
  cursor: pointer;
  max-width: 12.5rem;
  width: max-content;
  text-align: center;
  height: auto;
  padding: 1rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  @media ${deviceMin.tabletS} {
    max-width: unset;
  }
`;
const AddTitle = styled.h3`
  ${layer3_TextStyle};
  span {
    ${AddTitleTheme};
  }
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
const PlusIcon = styled(AiOutlinePlus)`
  color: white;
  padding: 0.4rem;
  width: 1rem;
  height: auto;
  box-sizing: content-box;
  background-color: var(--color-primary4);
  border-radius: 50%;
`;
