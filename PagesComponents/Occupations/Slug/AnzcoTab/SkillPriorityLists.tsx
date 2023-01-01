import styled, { css } from 'styled-components/macro';
import Accordion from 'Elements/Accordion';
import ToggleTag from 'Elements/ToggleTag';
import { componentSubtitleStyle } from 'Styles/Theme/Component';
import { deviceMin } from 'Consts/device';
import { PriorityList, Territories } from 'Interfaces/Documents/occupation';
import { getValueBaseOnAlias } from './utils';
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
          contentValue={getValueBaseOnAlias({
            alias: priorityList?.national,
          })}
          shortageStatus={priorityList?.national || ''}
        />
        <StyledShortageTag
          contentKey={'ACT'}
          contentValue={getValueBaseOnAlias({
            alias: priorityList?.[Territories.ACT],
          })}
          shortageStatus={priorityList?.[Territories.ACT] || ''}
        />
        <StyledShortageTag
          contentKey={'NSW'}
          contentValue={getValueBaseOnAlias({
            alias: priorityList?.[Territories.NSW],
          })}
          shortageStatus={priorityList?.[Territories.NSW] || ''}
        />
        <StyledShortageTag
          contentKey={'NT'}
          contentValue={getValueBaseOnAlias({
            alias: priorityList?.[Territories.NT],
          })}
          shortageStatus={priorityList?.[Territories.NT] || ''}
        />
        <StyledShortageTag
          contentKey={'QLD'}
          contentValue={getValueBaseOnAlias({
            alias: priorityList?.[Territories.QLD],
          })}
          shortageStatus={priorityList?.[Territories.QLD] || ''}
        />
        <StyledShortageTag
          contentKey={'SA'}
          contentValue={getValueBaseOnAlias({
            alias: priorityList?.[Territories.SA],
          })}
          shortageStatus={priorityList?.[Territories.SA] || ''}
        />
        <StyledShortageTag
          contentKey={'TAS'}
          contentValue={getValueBaseOnAlias({
            alias: priorityList?.[Territories.TAS],
          })}
          shortageStatus={priorityList?.[Territories.TAS] || ''}
        />
        <StyledShortageTag
          contentKey={'VIC'}
          contentValue={getValueBaseOnAlias({
            alias: priorityList?.[Territories.VIC],
          })}
          shortageStatus={priorityList?.[Territories.VIC] || ''}
        />
        <StyledShortageTag
          contentKey={'WA'}
          contentValue={getValueBaseOnAlias({
            alias: priorityList?.[Territories.WA],
          })}
          shortageStatus={priorityList?.[Territories.VIC] || ''}
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
