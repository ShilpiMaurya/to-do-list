import styled from "styled-components";
import SignupComponent from "../components/SignupComponent";

const Layout = styled.div`
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
      <Layout>
        <H1>Welcome to to-do list app</H1>
        <SignupComponent />
      </Layout>
    </>
  );
};

export default Signup;
