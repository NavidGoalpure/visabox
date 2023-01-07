import styled, { css } from 'styled-components/macro';
import { componentSubtitleStyle } from 'Styles/Theme/Component';
import { deviceMin } from 'Consts/device';
import { PriorityList, Territories } from 'Interfaces/Documents/occupation';
import { getShortageStatusBaseOnAlias } from './utils';
import ShortageTag from './shortageTag';
import theme from 'styled-theming';

interface Props {
  priorityList: PriorityList | undefined;
}
const SkillPriorityLists: React.FC<Props> = ({ priorityList }) => {
  return (
    <Container>
      <Tags>
        <StyledShortageTag
          contentKey={'National'}
          contentValue={getShortageStatusBaseOnAlias({
            alias: priorityList?.national,
          })}
        />
        <StyledShortageTag
          contentKey={'ACT'}
          contentValue={getShortageStatusBaseOnAlias({
            alias: priorityList?.[Territories.ACT],
          })}
        />
        <StyledShortageTag
          contentKey={'NSW'}
          contentValue={getShortageStatusBaseOnAlias({
            alias: priorityList?.[Territories.NSW],
          })}
        />
        <StyledShortageTag
          contentKey={'NT'}
          contentValue={getShortageStatusBaseOnAlias({
            alias: priorityList?.[Territories.NT],
          })}
        />
        <StyledShortageTag
          contentKey={'QLD'}
          contentValue={getShortageStatusBaseOnAlias({
            alias: priorityList?.[Territories.QLD],
          })}
        />
        <StyledShortageTag
          contentKey={'SA'}
          contentValue={getShortageStatusBaseOnAlias({
            alias: priorityList?.[Territories.SA],
          })}
        />
        <StyledShortageTag
          contentKey={'TAS'}
          contentValue={getShortageStatusBaseOnAlias({
            alias: priorityList?.[Territories.TAS],
          })}
        />
        <StyledShortageTag
          contentKey={'VIC'}
          contentValue={getShortageStatusBaseOnAlias({
            alias: priorityList?.[Territories.VIC],
          })}
        />
        <StyledShortageTag
          contentKey={'WA'}
          contentValue={getShortageStatusBaseOnAlias({
            alias: priorityList?.[Territories.WA],
          })}
        />
      </Tags>
      <Text>
        <FutureDemand>
          National Future Demand :{' '}
          <Demand>{priorityList?.future_demend}</Demand>
        </FutureDemand>
      </Text>
    </Container>
  );
};

export default SkillPriorityLists;

const Container = styled.div``;
const Tags = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${deviceMin.tabletL} {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

const StyledShortageTag = styled(ShortageTag)`
  width: 100%;
  @media ${deviceMin.tabletL} {
    width: 31%;
    height: max-content;
  }
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
`;

const FutureDemand = styled.h3`
  ${componentSubtitleStyle}
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
////////////////
const DemandColor = theme('mode', {
  light: css`
    color: var(--color-primary2);
  `,
  dark: css`
    color: var(--color-primary5);
  `,
});
const Demand = styled.h3`
  ${componentSubtitleStyle}
  ${DemandColor}
  align-text: center;
`;
