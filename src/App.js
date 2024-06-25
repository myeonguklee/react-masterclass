import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const Emoji = styled.sapn`
    font-size: 36px;
`;

const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    transform: rotate(360deg);
    border-radius: 100px;
  }
  100%{
    transform: rotate(0deg);
    border-radius: 0px;
  }
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite;
  ${Emoji} {
    &:hover{
      font-size: 98px;
    }
    &:active{
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>🤩</Emoji>
      </Box>
    </Wrapper>
  );
}

export default App;

/* <Box bgColor="teal"/>
<Circle bgColor="tomato"/> */
