import styled, { css } from 'styled-components/macro';
import Accordion from 'Elements/Accordion';
import ToggleTag from 'Elements/ToggleTag';
import { componentSubtitleStyle } from 'Styles/Theme/Component';
import { deviceMin } from 'Consts/device';


interface Props {
    occupation: undefined;
}
const SkillPriorityLists: React.FC<Props> = () => {
    return (
        <Container>
            <Tags>
                <StyledToggleTag contentKey={'National'} contentValue="No shortage" isOn={true} backgroundTheme='COMPONENT' />
                <StyledToggleTag contentKey={'ACT'} contentValue="No shortage" isOn={true} backgroundTheme='COMPONENT' />
                <StyledToggleTag contentKey={'NSW'} contentValue="Shortage" isOn={true} backgroundTheme='COMPONENT' />
                <StyledToggleTag contentKey={'NT'} contentValue="No shortage" isOn={true} backgroundTheme='COMPONENT' />
                <StyledToggleTag contentKey={'QLD'} contentValue="No shortage" isOn={true} backgroundTheme='COMPONENT' />
                <StyledToggleTag contentKey={'SA'} contentValue="No shortage" isOn={true} backgroundTheme='COMPONENT' />
                <StyledToggleTag contentKey={'TAS'} contentValue="No shortage" isOn={true} backgroundTheme='COMPONENT' />
                <StyledToggleTag contentKey={'VIC'} contentValue="Metropolitan shortage" isOn={true} backgroundTheme='COMPONENT' />
                <StyledToggleTag contentKey={'WA'} contentValue="No shortage" isOn={true} backgroundTheme='COMPONENT' />
            </Tags>
            <Text>
                <FutureDe>Future demand (national) : <Demand>Moderate</Demand></FutureDe>
            </Text>
        </Container>
    )
}


export default SkillPriorityLists


const Container = styled.div`

`
const Tags = styled.div`
display: flex;
flex-direction: column;
align-items: center;
@media ${deviceMin.tabletL} {
flex-direction: row;
justify-content: space-between;
flex-wrap: wrap;
}
`

const StyledToggleTag = styled(ToggleTag)`
width: 100%;
@media ${deviceMin.tabletL} {
width: 33%;
}
h3 {
    display: flex;
    width: 50%;
    justify-content: center;
}
`

const Text = styled.div`
display: flex;
justify-content: center;
`

const FutureDe = styled.h3`
  ${componentSubtitleStyle}
  display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Demand = styled.h3`
  ${componentSubtitleStyle}
  align-text: center;
  color: var(--color-primary4)
`;