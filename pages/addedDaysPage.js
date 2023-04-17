import FooterButton from "../src/components/FooterButton/";
import useStore from "../src/store";
import { useState } from "react";

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
                {day.sessions.map((session, index) => (
                  <li key={session.id}>
                    <button onClick={() => toggleSessionDetails(day.id, index)}>
                      {showSessionDetails[day.id]?.[index]
                        ? "Hide Details"
                        : "Show Details"}
                    </button>
                    <p>
                      {session.icon} {session.title}
                    </p>
                    {showSessionDetails[day.id]?.[index] && (
                      <div>
                        <p>{session.details}</p>
                      </div>
                    )}
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
