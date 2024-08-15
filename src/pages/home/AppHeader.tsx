import styled from "styled-components"
import { colors } from "../../utils/colors";

const Wrapper = styled.div `
height: 100px;
border-bottom: 1px solid #687477;
padding: 24px;
display: flex;
align-items: center;
gap: 24px;
width: 100%;
overflow-x: auto;
scrollbar-width: none;
scrollbar-height:none;
scrollbar-color: transparent;
-ms-overflow-style: none;

`;
const ImageWrapper = styled.div `
height: 48px;
min-height: 48px;
width: 48px;
min-width:48px;
border-radius: 50%;
border: ${(props) => `3px solid ${props.color}`};

img {
height: 100%;
width: 100%;
border-radius: 50%;
object-fit: cover;
}
`;
const AppHeader = () => {
  return (
    <Wrapper>
        {[...Array(15)].map((_, index: number) => (
            <ImageWrapper color={colors[index]} key={index}>
            <img src="https://images.unsplash.com/photo-1720048169707-a32d6dfca0b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8" alt="" />
        </ImageWrapper>
        ))}
        
    </Wrapper>
  )
}

export default AppHeader