import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";
import { BsCheck } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { layer3_TextStyle } from "Styles/Theme/Layers/layer3/style";

const MaraSwiper = () => {
  
  return (
    <StyledSwiper
      navigation={true}
      modules={[Navigation, EffectCoverflow]}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      slidesPerView={"1"}
      className="mySwiper"
    >
      <SwiperSlide>
        <DegreeCard>
          <InsuranceSection>
            <HasInsuranceField>
              {" "}
              گواهی بیمه
              <Checkmark />
            </HasInsuranceField>
            <Dash />
            <InsuranceCompanyField>بیمه دانا</InsuranceCompanyField>
          </InsuranceSection>
        </DegreeCard>
      </SwiperSlide>
      <SwiperSlide>
        <DegreeCard>
          <InsuranceSection>
            <HasInsuranceField>
              {" "}
              گواهی بیمه
              <Checkmark />
            </HasInsuranceField>
            <Dash />
            <InsuranceCompanyField>بیمه دانا</InsuranceCompanyField>
          </InsuranceSection>
        </DegreeCard>
      </SwiperSlide>
      <SwiperSlide>
        <DegreeCard>
          <InsuranceSection>
            <HasInsuranceField>
              {" "}
              گواهی بیمه
              <Checkmark />
            </HasInsuranceField>
            <Dash />
            <InsuranceCompanyField>بیمه دانا</InsuranceCompanyField>
          </InsuranceSection>
        </DegreeCard>
      </SwiperSlide>
      <SwiperSlide>
        <DegreeCard>
          <InsuranceSection>
            <HasInsuranceField>
              {" "}
              گواهی بیمه
              <Checkmark />
            </HasInsuranceField>
            <Dash />
            <InsuranceCompanyField>بیمه دانا</InsuranceCompanyField>
          </InsuranceSection>
        </DegreeCard>
      </SwiperSlide>
      <SwiperSlide>
        <DegreeCard>
          <InsuranceSection>
            <HasInsuranceField>
              {" "}
              گواهی بیمه
              <Checkmark />
            </HasInsuranceField>
            <Dash />
            <InsuranceCompanyField>بیمه دانا</InsuranceCompanyField>
          </InsuranceSection>
        </DegreeCard>
      </SwiperSlide>
      <SwiperSlide>
        <DegreeCard>
          <InsuranceSection>
            <HasInsuranceField>
              {" "}
              گواهی بیمه
              <Checkmark />
            </HasInsuranceField>
            <Dash />
            <InsuranceCompanyField>بیمه دانا</InsuranceCompanyField>
          </InsuranceSection>
        </DegreeCard>
      </SwiperSlide>
      <SwiperSlide>
        <DegreeCard>
          <InsuranceSection>
            <HasInsuranceField>
              {" "}
              گواهی بیمه
              <Checkmark />
            </HasInsuranceField>
            <Dash />
            <InsuranceCompanyField>بیمه دانا</InsuranceCompanyField>
          </InsuranceSection>
        </DegreeCard>
      </SwiperSlide>
      <SwiperSlide>
        <DegreeCard>
          <InsuranceSection>
            <HasInsuranceField>
              {" "}
              گواهی بیمه
              <Checkmark />
            </HasInsuranceField>
            <Dash />
            <InsuranceCompanyField>بیمه دانا</InsuranceCompanyField>
          </InsuranceSection>
        </DegreeCard>
      </SwiperSlide>
      <SwiperSlide>
        <DegreeCard>
          <InsuranceSection>
            <HasInsuranceField>
              {" "}
              گواهی بیمه
              <Checkmark />
            </HasInsuranceField>
            <Dash />
            <InsuranceCompanyField>بیمه دانا</InsuranceCompanyField>
          </InsuranceSection>
        </DegreeCard>
      </SwiperSlide>
    </StyledSwiper>
  );
};
export default MaraSwiper;
const StyledSwiper = styled(Swiper)`
  width: 100%;
  position: relative;
  .swiper-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
  }
  .swiper-slide {
    display: flex;

    justify-content: center;
    align-items: center;
  }
  .swiper-button-prev {
    color: red;
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
  }
`;
const DegreeCard = styled.div`
  background: var(--color-gray5);
  padding: 1rem;
  width: max-content;
`;
const InsuranceSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
const HasInsuranceField = styled.h3`
  ${layer3_TextStyle}
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
const InsuranceCompanyField = styled.h3`
  ${layer3_TextStyle}
`;
const Dash = styled.span`
  border: 1px solid var(--color-gray9);
  width: 0.5rem;
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
