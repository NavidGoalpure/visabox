import styled, { css } from 'styled-components/macro';
import Accordion from 'Elements/Accordion';
import ToggleTag from 'Elements/ToggleTag';
import { componentSubtitleStyle } from 'Styles/Theme/Component';


interface Props {
    occupation: undefined;
}
const SkillPriorityLists: React.FC<Props> = () => {
    return (
        <Container>
            <ToggleTag contentKey={'National'} contentValue="No shortage" isOn={true} backgroundTheme='COMPONENT' />
            <ToggleTag contentKey={'ACT'} contentValue="No shortage" isOn={true} backgroundTheme='COMPONENT' />
            <ToggleTag contentKey={'NSW'} contentValue="No shortage" isOn={true} backgroundTheme='COMPONENT' />
            <ToggleTag contentKey={'NT'} contentValue="No shortage" isOn={true} backgroundTheme='COMPONENT' />
            <ToggleTag contentKey={'QLD'} contentValue="No shortage" isOn={true} backgroundTheme='COMPONENT' />
            <ToggleTag contentKey={'SA'} contentValue="No shortage" isOn={true} backgroundTheme='COMPONENT' />
            <ToggleTag contentKey={'TAS'} contentValue="No shortage" isOn={true} backgroundTheme='COMPONENT' />
            <ToggleTag contentKey={'VIC'} contentValue="No shortage" isOn={true} backgroundTheme='COMPONENT' />
            <ToggleTag contentKey={'WA'} contentValue="No shortage" isOn={true} backgroundTheme='COMPONENT' />
            <FutureDe>Future demand (national) : <Demand>Moderate</Demand></FutureDe>
        </Container>
    )
}


export default SkillPriorityLists


const Container = styled.div`

`
const FutureDe = styled.h3`
  ${componentSubtitleStyle}
  align-text: center;
  display: flex;
`;

const Demand = styled.h3`
  ${componentSubtitleStyle}
  align-text: center;
  color: var(--color-primary4)
`;