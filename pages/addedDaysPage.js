import { useState } from "react";
import FooterButton from "../src/components/Button/FooterButton";
import useStore from "../src/store";

const getTwoRandomSessions = (sessions) => {
  const randomSessions = sessions.map(
    () => sessions[Math.floor(Math.random() * sessions.length)]
  );
  const firstSession = { ...randomSessions[0], visible: false };
  const remainingSessions = randomSessions.filter(
    (session) => session.type !== firstSession.type
  );
  const secondSession = {
    ...remainingSessions[Math.floor(Math.random() * remainingSessions.length)],
    visible: false,
  };
  return [firstSession, secondSession];
};

function AddedDaysPage() {
  const { days, sessions } = useStore();
  const addedDays = days.filter((day) => day.added);
  const [daySessions, setDaySessions] = useState({});
  const [showSessions, setShowSessions] = useState({});
  const toggleSessions = (dayId) => {
    if (!daySessions[dayId]) {
      const [firstSession, secondSession] = getTwoRandomSessions(sessions);
      setDaySessions((prevState) => ({
        ...prevState,
        [dayId]: [firstSession, secondSession],
      }));
    }
    setShowSessions((prevState) => ({
      ...prevState,
      [dayId]: !prevState[dayId],
    }));
  };

  return (
    <>
      <div>
        <h2>Your Training Days</h2>
        {addedDays.map((day) => (
          <div key={day.id}>
            <h3>
              {day.title}
              <button onClick={() => toggleSessions(day.id)}>
                {showSessions[day.id] ? "x" : "☰"}
              </button>
            </h3>
            {showSessions[day.id] && (
              <ul>
                {daySessions[day.id]?.map((session) => (
                  <li key={session.title}>
                    <span>{session.icon}</span>
                    {session.title}
                    <button>☰</button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
        <FooterButton href="/" title="Back" />
      </div>
    </>
  );
}

export default AddedDaysPage;
