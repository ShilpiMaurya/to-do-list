import styled from "styled-components";
import SignupComponent from "../components/SignupComponent";
import LoginComponent from "../components/LoginComponent";
import cookie from "cookie";
import { GetServerSideProps } from "next";

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

const ComponentLayout = styled.div`
  display: flex;
  flex-direction: row;
`;

const ComponentContainer = styled.div`
  padding: 20px;
`;

export const Signup = () => {
  return (
    <>
      <Layout>
        <H1>Welcome to to-do list app</H1>
        <ComponentLayout>
          <ComponentContainer>
            <SignupComponent />
          </ComponentContainer>
          <ComponentContainer>
            <LoginComponent />
          </ComponentContainer>
        </ComponentLayout>
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  if (context.req) {
    const cookies = context.req.headers.cookie;
    const path = context.resolvedUrl;
    if (cookies) {
      const parsedCookies = cookie.parse(cookies);
      if (parsedCookies.uid && path === "/signup") {
        return {
          redirect: {
            destination: "/",
            permanent: false
          }
        };
      }
    }
  }
  return {
    props: {}
  };
};

export default Signup;
