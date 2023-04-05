import GlobalStyle from "../styles";
import useSWR from "swr";
import Header from "../src/components/Header/Header";

/* const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error } = useSWR("/api/db", fetcher);

  if (error) return <div>Failed to load data</div>;
  if (!data) return <div>Loading training days</div>; */
  export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Header/>
       
      <Component {...pageProps} />
    </>
  );
}