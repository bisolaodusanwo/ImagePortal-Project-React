import styled from "styled-components";
import AppHeader from "./AppHeader";
import Content from "./Content";
import ActionCenter from "./ActionCenter";
import CreateModal from "./CreateModal";
import { useState } from "react";

const Wrapper = styled.div`
background: #F7F3F5;
width: 25%;
height: 100vh;
margin: 0  auto;
position: relative;
overflow-y: scroll;


.header {
position: sticky;
top: 0;
background-color: #F7F1F0;
}

@media screen and (max-width: 768px) {
width: 100%
}


`;
const Home = () => {

  const[openCreateModal, setOpenCreateModal] = useState<boolean>(false);
  return (
    <Wrapper>
      <div className="header">
      <AppHeader />
      <ActionCenter setOpenCreateModal={setOpenCreateModal}/>
      </div>
      <Content />
     {openCreateModal && (
      <CreateModal setOpenCreateModal={setOpenCreateModal}/>
      )}
    
    </Wrapper>
  )
}

export default Home;