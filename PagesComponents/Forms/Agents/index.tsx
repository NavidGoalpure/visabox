import { Input } from "Components/Input";
import Slider from "Components/SliderComponent";
import styled from "styled-components";
import * as ToggleGroup from "./ToggleGroup";
function Content() {
  const ages = [
    { en: "15-20", fa: "15-20" },
    { en: "13-20", fa: "15-20" },
    { en: "16-20", fa: "15-20" },
  ];
  return (
    <Container>
      <Slider currentStep={5} end={9} />
      <Input required label="Name:" inputName="name" placeholder="Name" />
      <Input
        required
        label="Last Name:"
        inputName="lname"
        placeholder="Last Name"
      />
      <ToggleGroup.Root type="single">
        {
          <>
            {ages.map((age) => (
              <ToggleGroup.Item text={age} value={age.en}></ToggleGroup.Item>
            ))}
          </>
        }
      </ToggleGroup.Root>
    </Container>
  );
}
export default Content;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 1rem 0 3rem;
`;
