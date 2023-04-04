import GlobalStyle from "../styles";
import Header from "../src/components/Header/Header";
import useSWR from "swr";
import WeekCard from "../src/components/WeekCard/WeekCard";

const fetcher = async url => {
  const res = await fetch(url)
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.') 
    error.info = await res.json()
    error.status = res.status
    throw error
  }
  return res.json()
}

export default function App({ Component, pageProps }) {

  const { data, error } = useSWR("/api/db", fetcher);

  if (error) return <div>Failed to load data</div>;
  if (!data) return <div>loading training days...</div>;

  return (
    <>
      <GlobalStyle />
      <Header />
      <WeekCard days={data[0].days} />
      <Component {...pageProps}  />
    </>
  );
}