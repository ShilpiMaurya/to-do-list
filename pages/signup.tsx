import styled from "styled-components";
import SignupComponent from "../components/SignupComponent";
import Link from "next/link";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, #fc446b, #3f5efb);
  height: 100vh;
  width: 100vw;
  @media (max-width: 480px) {
    padding: 20px;
  }
`;

const H1 = styled.div`
  color: white;
  font-size: 40px;
  padding-bottom: 50px;
  text-align: center;
  font-weight: 550;
  @media (max-width: 480px) {
    font-size: 35px;
  }
`;

const H2 = styled.div`
  color: white;
  padding-right: 10px;
  padding-bottom: 30px;
  font-size: 25px;
  @media (max-width: 480px) {
    padding-bottom: 20px;
    font-size: 20px;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-display: row;
  padding-top: 60px;
  font-size: 25px;
  @media (max-width: 480px) {
    padding-top: 50px;
    font-size: 20px;
  }
`;

const Signup = () => {
  return (
    <>
      <Layout>
        <H1>Welcome to to-do list app</H1>
        <H2>Create new account</H2>
        <SignupComponent />
        <LinkContainer>
          <H2>Already have an account</H2>
          <Link href="/login">
            <a
              style={{
                textDecoration: "underline",
                color: "white"
              }}
            >
              Login
            </a>
          </Link>
        </LinkContainer>
      </Layout>
    </>
  );
};

export default Signup;
