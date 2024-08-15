import styled from "styled-components"
import Home from "./pages/home/Home";

const Wrapper = styled.div `
background-color: #E2C2B3;
width: 100vw;
height: 100vh;


`;

const App = () => {
  return (
    <Wrapper>
      
      <Home />
    </Wrapper>
  )

}

export default App