import React, { useState } from "react";
import FooterButton from "../src/components/Button/FooterButton";
import useStore from "./dayStore";

function AddedDaysPage() {
  const { days } = useStore();
  const addedDays = days.filter((day) => day.added);
  const [randomTitle, setRandomTitle] = useState("");
  const handleRandomTitleClick = () => {
    const sessions = useStore.getState().sessions;
    const randomSession = sessions[Math.floor(Math.random() * sessions.length)];
    setRandomTitle(randomSession.title);
  };

  return (
    <>
      <button id="lalala" onClick={handleRandomTitleClick}>
        lalala
      </button>
      {randomTitle && <p>{randomTitle}</p>}
      <div>
        <h2>Your Training Days</h2>
        {addedDays.map((day) => (
          <div key={day.id}>
            <h3>{day.title}</h3>
          </div>
        ))}
        <FooterButton href="/" title="Back" />
      </div>
    </>
  );
}

export default AddedDaysPage;
