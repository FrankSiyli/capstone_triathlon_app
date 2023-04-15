import FooterButton from "../src/components/FooterButton";
import Days from "../src/components/Days";
import { useState } from "react";
import { sessions } from "../src/sessionsDb";

export default function HomePage() {
  const [activeButton, setActiveButton] = useState("");
  const [selectedSessions, setSelectedSessions] = useState([]);

  const handleButtonClick = (event) => {
    const value = event.target.value;
    setActiveButton(value);
  };

  const getTwoRandomSessions = () => {
    const randomSessions = sessions.map(
      () => sessions[Math.floor(Math.random() * sessions.length)]
    );
    const firstSession = { ...randomSessions[0] };
    const remainingSessions = randomSessions.filter(
      (session) => session.type !== firstSession.type
    );
    const secondSession = {
      ...remainingSessions[
        Math.floor(Math.random() * remainingSessions.length)
      ],
    };
    return [firstSession, secondSession];
  };

  const handleCreatePlan = () => {
    const [firstSession, secondSession] = getTwoRandomSessions();
    console.log("create plan");
    localStorage.setItem("firstSession", JSON.stringify(firstSession));
    localStorage.setItem("secondSession", JSON.stringify(secondSession));
  };

  return (
    <div>
      <h2>Choose your event distance</h2>
      {/* <h3>Short Distance Tri</h3>
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
      </button> */}
      <h2>Choose your training days</h2>
      <Days />
      <button
        
        href="/addedDaysPage"
        title="Create Plan"
        rel="noopener noreferrer"
        onClick={handleCreatePlan}
      ><a href="/addedDaysPage">Create Plan</a>
        
      </button>
    </div>
  );
}
