import { useState } from "react";
import FooterButton from "../src/components/FooterButton/";
import useStore from "../src/store";
import { useEffect } from "react";

function AddedDaysPage() {
  const { days } = useStore();
  const addedDays = days.filter((day) => day.added);
  const [daySessions, setDaySessions] = useState({});
  const [showSessions, setShowSessions] = useState({});
  const [showDetails, setShowDetails] = useState({});
  const toggleSessions = (dayId) => {
    if (!daySessions[dayId]) {
      setDaySessions((prevState) => ({
        ...prevState,
        [dayId]: [firstSession, secondSession],
      }));
    }
    setShowSessions((previousState) => ({
      ...previousState,
      [dayId]: !previousState[dayId],
    }));
  };

  const [firstSession, setFirstSession] = useState({});
  const [secondSession, setSecondSession] = useState({});

  useEffect(() => {
    const storedFirstSession = JSON.parse(localStorage.getItem("firstSession"));
    const storedSecondSession = JSON.parse(localStorage.getItem("secondSession"));
    setFirstSession(storedFirstSession);
    setSecondSession(storedSecondSession);
  }, []);
  const toggleDetails = (dayId, sessionTitle) => {
    setShowDetails((previousState) => ({
      ...previousState,
      [dayId + sessionTitle]: !previousState[dayId + sessionTitle],
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
                    <button
                      onClick={() => toggleDetails(day.id, session.title)}
                    >
                      {showDetails[day.id + session.title] ? "x" : "☰"}
                    </button>
                    {showDetails[day.id + session.title] && (
                      <p>{session.details}</p>
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
