import FooterButton from "../src/components/FooterButton/";
import useStore from "../src/store";
import { useState } from "react";

function AddedDaysPage() {
  const { days } = useStore();
  const addedDays = days.filter((day) => day.added);
  const [showSessions, setShowSessions] = useState({});

  const toggleSessions = (dayId) => {
    setShowSessions((previousState) => ({
      ...previousState,
      [dayId]: !previousState[dayId],
    }));
  };

  const toggleDay = (dayId) => {
    setShowSessions((previousState) => ({
      ...previousState,
      [dayId]: false,
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
                {showSessions[day.id] ? "Hide Sessions" : "Show Sessions"}
              </button>
            </h3>
            {showSessions[day.id] && (
              <ul>
                {day.sessions.map((session) => (
                  <li key={session.id}>
                    {session.icon}
                    {session.title}
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
