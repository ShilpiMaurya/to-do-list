import styled from "styled-components";
import ToDoListItems from "../components/ToDoListItems";
import Head from "next/head";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px;
  background: linear-gradient(45deg, #fc446b, #3f5efb);
  height: 100vh;
  width: 100vw;
`;

const Box = styled.div`
  height: 70%;
  width: 60vw;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  box-shadow: 10px 10px -20px rgba(0, 0, 0, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 1024px) {
    height: 78%;
    width: 70vw;
  }
  @media (max-width: 768px) {
    height: 80%;
    width: 95vw;
  }
  @media (max-width: 480px) {
    height: 90%;
  }
`;

const Home = () => {
  return (
    <>
      <Head>
        <title>to-do-list-app</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container>
        <Box>
          <ToDoListItems />
        </Box>
      </Container>
    </>
  );
};

export default Home;
