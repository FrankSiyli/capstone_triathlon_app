import useSWR from "swr";

export default function DatabaseTestPage() {
  const { data: sessions, error } = useSWR("/api/sessions", (url) =>
    fetch(url).then((res) => res.json())
  );

  if (error) return <div>Error loading sessions</div>;
  if (!sessions) return <div>Loading sessions...</div>;

  return (
    <>
      <h1>Database Test Page</h1>

      <div>
        {sessions.map((session) => (
          <div key={session._id}>
            <h2>{session.title}</h2>
            <p>{session.details}</p>
          </div>
        ))}
      </div>
    </>
  );
}
