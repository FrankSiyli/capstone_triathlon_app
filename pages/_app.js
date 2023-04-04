import GlobalStyle from "../styles";
import Header from "../src/components/Header/Header";


export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  );
}
