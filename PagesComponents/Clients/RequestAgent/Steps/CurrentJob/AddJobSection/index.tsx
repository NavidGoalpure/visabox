import styled, { css } from "styled-components";
import { layer3_TextStyle } from "Styles/Theme/Layers/layer3/style";
// import "swiper/swiper-bundle.css";
// import "swiper/css";
// import "swiper/css/navigation";
import { SwiperSlide } from "swiper/react";
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
import { getWorkExperienceLabel } from "Utils/clients";
import { useDynamicTranslation } from "Hooks/useDynamicTraslation";

const CurrentJobsSection = () => {
  const { client } = useContext(FormDataContext);
  const { locale } = useLocale();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedJobIndex, setSelectedJobIndex] = useState<number | undefined>(
    undefined
  );
  const { t } = useStaticTranslation(componentStatements);
  const { dt } = useDynamicTranslation();
  return (
    <>
      <AddJobModal
        clickedJobIndex={selectedJobIndex}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <MaraSwiper updateSwiperVariables={client}>
        <SwiperSlide>
          <AddCard
            onClick={() => {
              setIsModalOpen(true);
              setSelectedJobIndex(undefined);
            }}
          >
            <AddTitle>{t(LanguageKeys.AddJobSwiper)} </AddTitle>
            <PlusIcon />
          </AddCard>
        </SwiperSlide>
        {client?.all_jobs?.map((job, index) => {
          if (!!job.title) {
            return (
              <SwiperSlide key={index}>
                <JobCard
                  onClick={() => {
                    setIsModalOpen(true);
                    setSelectedJobIndex(index);
                  }}
                >
                  <CardTitle>{job.title}</CardTitle>
                  <WorkExperience>
                    {dt(
                      getWorkExperienceLabel({
                        workExperience: job.work_experience || "",
                      })
                    )}
                  </WorkExperience>

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
              </SwiperSlide>
            );
          }
        })}
      </MaraSwiper>
    </>
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
const AddCardTheme = theme("mode", {
  light: css`
    border-color: var(--color-gray7);
    background: rgba(221, 226, 235, 0.8);
  `,
  dark: css`
    border-color: var(--color-gray4);
    background: rgba(61, 61, 61, 0.8);
  `,
});
const AddCardHoverTheme = theme("mode", {
  light: css`
    border: 3px solid var(--color-gray10);
    background: var(--color-gray13);
  `,
  dark: css`
    border: 3px solid var(--color-gray4);
    background: var(--color-gray3);
  `,
});
const AddCard = styled.div`
  border: 3px dashed;
  ${AddCardTheme};
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
  backdrop-filter: blur(20px);
  :hover {
    ${AddCardHoverTheme}
  }
  @media ${deviceMin.tabletS} {
    padding: 2.5rem 4rem;
    max-width: unset;
  }
`;
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
