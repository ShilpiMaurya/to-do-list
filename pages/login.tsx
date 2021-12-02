import LoginComponent from "../components/LoginComponent";
import styled from "styled-components";
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

const Login = () => {
  return (
    <>
      <Layout>
        <H1>Welcome back to to-do list app</H1>
        <H2>Login to your account</H2>
        <LoginComponent />
        <LinkContainer>
          <H2>Do not have an account</H2>
          <Link href="/signup">
            <a
              style={{
                textDecoration: "underline",
                color: "white",
                fontSize: "20px"
              }}
            >
              Signup
            </a>
          </Link>
        </LinkContainer>
      </Layout>
    </>
  );
};

export default Login;
