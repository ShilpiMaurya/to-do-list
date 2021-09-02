import styled from "styled-components";
import SignupPage from "../components/SignupPage";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, #fc446b, #3f5efb);
  height: 100vh;
  width: 100vw;
`;

const H1 = styled.div`
  color: white;
  font-size: 30px;
  padding-bottom: 30px;
`;

const Signup = () => {
  return (
    <>
      <Container>
        <H1>Welcome to to-do list app</H1>
        <SignupPage />
      </Container>
    </>
  );
};

export default Signup;
