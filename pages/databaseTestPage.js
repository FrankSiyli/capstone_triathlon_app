import { dbConnect } from "../lib/dbConnect";
import data from "./api/index.js";

export default function DatabaseTestPage({ sessions }) {
  console.log("sessions:", sessions); // Add this line

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Database Test Page</h1>

        <div className={styles.grid}>
          {sessions.map((session) => (
            <div className={styles.card} key={session._id}>
              <h2>{session.title}</h2>
              <p>{session.details}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const sessions = await data();
  console.log("sessions:", sessions); // Add this line
  return {
    props: {
      sessions: sessions,
    },
  };
}
