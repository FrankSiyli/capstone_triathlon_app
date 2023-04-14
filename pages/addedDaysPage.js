import { useState } from "react";
import FooterButton from "../src/components/FooterButton/";
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
  const unequalSessions = randomSessions.filter(
    (session) => session.title !== firstSession.title,
    (session) => session.title !== secondSession.title
  );
  return [firstSession, secondSession];
};

function AddedDaysPage() {
  const { days, sessions } = useStore();

  const addedDays = days.filter((day) => day.added);

  const [daySessions, setDaySessions] = useState({});
  const [showSessions, setShowSessions] = useState({});
  const [showDetails, setShowDetails] = useState({});
  const [activeButton, setActiveButton] = useState("");

  const toggleSessions = (dayId) => {
    if (!daySessions[dayId]) {
      const [firstSession, secondSession] = getTwoRandomSessions(sessions);
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

  const toggleDetails = (dayId, sessionTitle) => {
    setShowDetails((previousState) => ({
      ...previousState,
      [dayId + sessionTitle]: !previousState[dayId + sessionTitle],
    }));
  };

  const handleButtonClick = (event) => {
    const value = event.target.value;
    setActiveButton(value);
  };

  return (
    <>
      <h2>Choose your event distance</h2>
      <h3>Short Distance Tri</h3>
      <button value="short" onClick={handleButtonClick}>
        {activeButton === "short" ? "active" : "not active"}
      </button>
      <h3>Middle Distance Tri</h3>
      <button value="mid" onClick={handleButtonClick}>
        {activeButton === "mid" ? "active" : "not active"}
      </button>
      <h3> Long Distance Tri</h3>
      <button value="long" onClick={handleButtonClick}>
        {activeButton === "long" ? "active" : "not active"}
      </button>
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
                      id="detailsButton"
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
