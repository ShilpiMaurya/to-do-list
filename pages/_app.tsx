import "../styles/globals.css";
import { AppProps } from "next/app";
import store from "../store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps}></Component>
    </Provider>
  );
}
export default MyApp;
