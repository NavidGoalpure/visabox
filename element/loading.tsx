import styled, { keyframes } from 'styled-components/macro';

const Loading = () => {
  return (
    <Container>
      <Wrapper>
        <div className='square-holder'>
          <Square />
        </div>
      </Wrapper>
    </Container>
  );
};
export { Loading };

const Container = styled.div`
  float: left;
  width: 100px;
  height: 100px;
  margin: 0 10px 10px 0;
  padding: 20px 20px 20px;
  border-radius: 5px;
  text-align: center;
  background-color: #d8d8d8;
`;
const Wrapper = styled.div``;
const rotate = keyframes`
0% {
    transform: translate(0, 0) rotate(0deg);
}
50% {
    transform: translate(70px, 0) rotate(360deg);
}

100% {
    transform: translate(0, 0) rotate(0deg);
}
`;
const Square = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 4px;
  background-color: #4b9cdb;
  animation: ${rotate} 1.5s cubic-bezier(0.17, 0.37, 0.43, 0.67) infinite;
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;
