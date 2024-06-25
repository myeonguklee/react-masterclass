import styled, { keyframes } from "styled-components";
import Circle from "./Circle";

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

function App() {
  return (
    <div>
      <Circle bgColor="teal" borderColor="yellow" />
      <Circle bgColor="tomato" text="im here" />
    </div>
  );
}

export default App;
