import styled, { css } from 'styled-components';
import {
  Desc,
  Section,
  SectionDivider,
  TitleSpanTheme,
} from '../styledComponents';
import { Layer1_TitleStyle } from 'Styles/Theme/Layers/layer1/style';
import { deviceMin } from 'Consts/device';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { LanguageKeys, componentStatements } from '../const';
import { GiSilverBullet } from 'react-icons/gi';
import { AiTwotoneGold } from 'react-icons/ai';

import { MdDiamond } from 'react-icons/md';
import { FiBox } from 'react-icons/fi';

const PriceList: React.FC = () => {
  const { t } = useStaticTranslation(componentStatements);

  return (
    <Section>
      <Title>{t(LanguageKeys.PriceTable_Title)}</Title>
      <Desc
        style={{ marginBottom: '2rem' }}
        dangerouslySetInnerHTML={{
          __html: t(LanguageKeys.PriceTable_Subtitle),
        }}
      />
      <Grid>
        <MyCard
          style={{ background: 'linear-gradient(-45deg, #f403d1, #64b5f6)' }}
        >
          <CardTitle>
            <StyledSilverIcon />
            <h2>{t(LanguageKeys.SilverPlan)}</h2>
          </CardTitle>
          <Price>
            <h4>$199</h4> <h5>/mo</h5>
          </Price>
          <Option>
            <ul>
              <Li>
                {t(LanguageKeys.BetterSeenInAgentPages_Title)
                  .replace('<span>', '')
                  .replace('</span>', '')}
              </Li>
              <Li disabled>
                {t(LanguageKeys.PromoteInOccupationsPages_Title)
                  .replace('<span>', '')
                  .replace('</span>', '')}
              </Li>
              <Li disabled>
                {t(LanguageKeys.AccessToFormsWall_Title)
                  .replace('<span>', '')
                  .replace('</span>', '')}
              </Li>
            </ul>
          </Option>
          {/* <a
            className='btn btn-light btn-block'
            href='https://codepen.io/collection/XdWJOQ/'
          >
            Order Now
          </a> */}
        </MyCard>
        <MyCard
          style={{ background: 'linear-gradient(-45deg,  #f321d7,#ffec61)' }}
        >
          <CardTitle>
            <StyledGoldIcon />

            <h2>{t(LanguageKeys.GoldPlan)}</h2>
          </CardTitle>
          <Price>
            <h4>$299</h4> <h5>/mo</h5>
          </Price>
          <Option>
            <ul>
              <Li>
                {t(LanguageKeys.BetterSeenInAgentPages_Title)
                  .replace('<span>', '')
                  .replace('</span>', '')}
              </Li>
              <Li>
                {t(LanguageKeys.PromoteInOccupationsPages_Title)
                  .replace('<span>', '')
                  .replace('</span>', '')}
              </Li>
              <Li disabled>
                {t(LanguageKeys.AccessToFormsWall_Title)
                  .replace('<span>', '')
                  .replace('</span>', '')}
              </Li>
            </ul>
          </Option>
          {/* <a
            className='btn btn-light btn-block'
            href='https://codepen.io/collection/XdWJOQ/'
          >
            Order Now
          </a> */}
        </MyCard>
        <MyCard
          style={{ background: 'linear-gradient(-45deg, #24ff72, #9a4eff)' }}
        >
          <CardTitle>
            <VIPBoxContainer aria-hidden={true}>
              <VIPBox aria-hidden={true} />
            </VIPBoxContainer>
            <StyledDiamondIcon />

            <h2>{t(LanguageKeys.DiamondPlan)}</h2>
          </CardTitle>
          <Price>
            <h4>$399</h4> <h5>/mo</h5>
          </Price>
          <Option>
            <ul>
              <Li>
                {t(LanguageKeys.BetterSeenInAgentPages_Title)
                  .replace('<span>', '')
                  .replace('</span>', '')}
              </Li>
              <hr />
              <Li>
                {t(LanguageKeys.PromoteInOccupationsPages_Title)
                  .replace('<span>', '')
                  .replace('</span>', '')}
              </Li>
              <Li>
                {t(LanguageKeys.AccessToFormsWall_Title)
                  .replace('<span>', '')
                  .replace('</span>', '')}
              </Li>
            </ul>
          </Option>
        </MyCard>
      </Grid>
      <Desc
        style={{ margin: '4rem 0' }}
        dangerouslySetInnerHTML={{
          __html: t(LanguageKeys.PriceTable_Desc),
        }}
      />
      <SectionDivider />
    </Section>
  );
};
export default PriceList;

const Title = styled.h2`
  ${Layer1_TitleStyle};
  margin: 0;
  text-align: center;
  margin-bottom: 1.5rem;
  text-align: center;
  @media ${deviceMin.tabletS} {
    text-align: start;
  }
  span {
    ${TitleSpanTheme}
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 1rem;
  align-items: stretch;
  width: 100%;
  margin: 1rem auto;
`;
const MyCard = styled.div`
  text-align: center;
  position: relative;
  border-radius: 15px;
  padding: 40px 20px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
  overflow: hidden;
  :hover {
    transform: scale(1.1);
  }
  :before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 38%;
    background: rgba(73, 73, 73, 0.25);
    z-index: 1;
    transform: skewY(-5deg) scale(1.5);
  }
  a {
    position: relative;
    z-index: 2;
    border-radius: 8px;
    margin: 30px auto 8px;
    text-decoration: none;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    font-weight: bold;
  }
`;
const CardTitle = styled.div`
  .fa {
    color: #fff;
    font-size: 40px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    text-align: center;
    line-height: 100px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  }
  h2 {
    position: relative;
    margin: 20px 0 0;
    color: #fff;
    font-size: 20px;
    z-index: 2;
  }
`;
const StyledIcon = css`
  color: #fff;
  font-size: 40px;
  width: 4rem;
  height: auto;
  border-radius: 50%;
  text-align: center;
  line-height: 100px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  //
  padding: 16px;
`;
const StyledSilverIcon = styled(GiSilverBullet)`
  ${StyledIcon}
  background: linear-gradient(-45deg, #c0c0c0, #d3d3d3);
`;
const StyledGoldIcon = styled(AiTwotoneGold)`
  ${StyledIcon}
  background: linear-gradient(-45deg, #ffd700, #ffdb58);
`;

const VIPBoxContainer = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-gray5);
  border-radius: 0 0 50% 50%;
  position: absolute;
  top: 0;
  right: 5%;
`;
const VIPBox = styled(FiBox)`
  color: var(--color-secondary4);
  width: 50%;
  height: auto;
`;

const StyledDiamondIcon = styled(MdDiamond)`
  ${StyledIcon}
  background: linear-gradient(-45deg, #ffffff, #b3e0ff);
  fill: var(--color-primary1);
`;
const Price = styled.div`
  position: relative;
  z-index: 2;
  padding: 32px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  h4 {
    margin: 0;
    color: #fff;
    font-size: 30px;
  }
  h5 {
    margin: 0;
    color: #fff;
    font-size: 16px;
    color: var(--color-gray12);
  }
`;
const Option = styled.div`
  position: relative;
  z-index: 2;
  ul {
    margin: 0;
    padding: 0;
  }
`;
const Li = styled.li<{ disabled?: boolean }>`
  margin: 0 0 10px;
  padding: 0;
  list-style: none;
  color: ${({ disabled }) => (disabled ? 'var(--color-gray10)' : 'white')};
  text-decoration: ${({ disabled }) => (disabled ? 'line-through' : 'none')};
  font-size: 16px;
  font-weight: bold;
  text-align: start;
`;
