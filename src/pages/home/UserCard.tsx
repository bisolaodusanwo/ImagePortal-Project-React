import styled from "styled-components"
import { CiHeart } from "react-icons/ci";

const Wrapper = styled.div`
border: 1px solid #687477;
border-radius: 8px;
padding: 24px;
height: 400px;
display: flex;
flex-direction: column;

 .profilePicture {
        height: 60%;
        width: 100%;
        border-radius: 8px 8px 0 0;
        
        img {
          height: 100%;
          width: 100%;
          border-radius: 8px 8px 0 0;
          object-fit: cover;
      }
      }

        .content {
      padding:b 16px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      
      .contentItem {
      display: flex;
      gap: 16px;
      
      .userName {
      font-size: 20px;
      font-weight: 500;
      font-style: italic;
      }
      }

      .likeContainer {
      width: 40px;
      height: 30px;

      svg {
      width: 100%;
      height: 100%;
      }
      }
}
`;
const UserCard = () => {
  return (
    <Wrapper>
        <div className="profilePicture">
          <img src="https://images.unsplash.com/photo-1719937050446-a121748d4ba0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D" alt=""/>
        </div>

        <div className="content">
          <div className="contentItem">
            <p className="userName">Anonymous</p>
          </div>
          <div className="contentItem">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, provident eaque aliquam at adipisci veritatis similique officia totam voluptatibus expedita nihil assumenda, vel omnis error porro? Fugit explicabo repudiandae sequi.</p>
          </div>

         <div className="likeContainer">
         <CiHeart />
         </div>
        </div>
    </Wrapper>
  )
}

export default UserCard