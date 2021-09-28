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
`;

const H1 = styled.div`
  color: white;
  font-size: 40px;
  padding-bottom: 50px;
`;

const H2 = styled.div`
  font-size: 25px;
  color: white;
  padding-right: 10px;
  padding-bottom: 30px;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-display: row;
  padding-top: 60px;
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
                color: "white",
                fontSize: "25px"
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
