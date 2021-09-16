import styled from "styled-components";
import ToDoListItems from "../components/ToDoListItems";
import { GetServerSideProps } from "next";

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
  width: 70vw;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  box-shadow: 10px 10px -20px rgba(0, 0, 0, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Home() {
  return (
    <Container>
      <Box>
        <ToDoListItems />
      </Box>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const cookies = context.req.headers.cookie;
  if (!cookies) {
    return {
      redirect: {
        destination: "/signup",
        permanent: false
      }
    };
  } else if (cookies) {
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    };
  }
  return {
    props: {}
  };
};
