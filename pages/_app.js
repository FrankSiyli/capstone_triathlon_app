import StyledFooter from "../src/components/Footer/Footer.styled";
import StyledHeader from "../src/components/Header";
import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <StyledHeader />
      <StyledFooter />
      <Component {...pageProps} />
    </>
  );
}
