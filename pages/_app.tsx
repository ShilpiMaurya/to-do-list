import "../styles/globals.css";
import { AppProps, AppContext } from "next/app";
import store from "../store";
import { Provider } from "react-redux";
import cookie from "cookie";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps}></Component>
    </Provider>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  if (appContext.ctx.req && appContext.ctx.res) {
    const cookies = appContext.ctx.req.headers.cookie;
    const path = appContext.ctx.pathname;
    const response = appContext.ctx.res;
    let uidCookie: string | null = null;

    if (cookies) {
      uidCookie = cookie.parse(cookies).uid;
      if (uidCookie && (path === "/login" || path === "/signup")) {
        response.writeHead(302, {
          Location: "/"
        });
        response.end();
      }
    }

    if (!uidCookie && path === "/") {
      response.writeHead(302, {
        Location: "/login"
      });
      response.end();
    }
  }
  return {};
};

export default MyApp;
