import { AppProps } from "next/app";
import GlobalStyled from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import Header from "./components/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyled />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
