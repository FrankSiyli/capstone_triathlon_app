import Footer from "../src/components/Footer";
import useStore from "../src/store";
import { useState } from "react";
import { uid } from "uid";
import HeadingH3 from "../src/components/HeadingH3";
import HeadingH4 from "../src/components/HeadingH4";

function AddedDaysPage() {
  const { days } = useStore();
  const addedDays = days.filter((day) => day.added);
  const [showSessions, setShowSessions] = useState({});
  const [showSessionDetails, setShowSessionDetails] = useState({});

  const toggleSessions = (dayId) => {
    setShowSessions((previousState) => ({
      ...previousState,
      [dayId]: !previousState[dayId],
    }));
  };

  const toggleSessionDetails = (dayId, sessionIndex) => {
    setShowSessionDetails((previousState) => ({
      ...previousState,
      [dayId]: {
        ...previousState[dayId],
        [sessionIndex]: !previousState[dayId]?.[sessionIndex],
      },
    }));
  };

  return (
    <>
      <main>
        <HeadingH3 headingH3Title={"Your Training Days"} />
        <article className="article-container">
          {addedDays.map((day) => (
            <section className="section-container" key={day.id}>
              <HeadingH4 headingH4Title={day.title} />
              <button onClick={() => toggleSessions(day.id)}>
                {showSessions[day.id] ? "❌" : "❎"}
              </button>
              <section className="details-list">
                {day.sessions && showSessions[day.id] && (
                  <ul className="details-list">
                    {day.sessions.map((session, index) => (
                      <li key={uid()}>
                        <span>
                          {session.icon}
                          {session.title}
                        </span>
                        <button
                          onClick={() => toggleSessionDetails(day.id, index)}
                        >
                          {showSessionDetails[day.id]?.[index] ? "❌" : "❎"}
                        </button>
                        {showSessionDetails[day.id]?.[index] && (
                          <div className="session-details">
                            <p>{session.details}</p>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            </section>
          ))}
        </article>
      </main>
      <Footer href="/" title="Back" />
    </>
  );
}

export default AddedDaysPage;
