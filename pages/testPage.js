import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function TestPage() {
  const { data: sessions, error } = useSWR("/api/sessions", fetcher);

  if (error) return <div>Error loading sessions data</div>;
  if (!sessions) return <div>Loading sessions data...</div>;

  return (
    <div>
      <h1>Session Titles:</h1>
      <ul>
        {sessions.map((session) => (
          <li key={session._id}>{session.title}</li>
        ))}
      </ul>
    </div>
  );
}
