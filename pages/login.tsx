import LoginComponent from "../components/LoginComponent";
import styled from "styled-components";
import Link from "next/link";
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
                fontSize: "25px"
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

export const getServerSideProps: GetServerSideProps = async context => {
  if (context.req) {
    const cookies = context.req.headers.cookie;
    const path = context.resolvedUrl;
    if (cookies) {
      const parsedCookies = cookie.parse(cookies);
      if (parsedCookies.uid && path === "/login") {
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

export default Login;
