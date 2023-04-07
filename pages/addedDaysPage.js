import React, { useState } from "react";
import FooterButton from "../src/components/Button/FooterButton";
import useStore from "../store/store";

export default function AddedDaysPage() {
  const { days, sessions } = useStore();
  const addedDays = days.filter((day) => day.added);
  const [randomTitles, setRandomTitles] = useState({});

  const handleRandomTitles = () => {
    const newRandomTitles = {};
    const usedIndexes = []; // to prevent duplicate titles for a day
    addedDays.forEach((day) => {
      let randomIndex1, randomIndex2;
      do {
        randomIndex1 = Math.floor(Math.random() * sessions.length);
      } while (usedIndexes.includes(randomIndex1));
      usedIndexes.push(randomIndex1);

      do {
        randomIndex2 = Math.floor(Math.random() * sessions.length);
      } while (usedIndexes.includes(randomIndex2));
      usedIndexes.push(randomIndex2);

      newRandomTitles[day.id] = [
        sessions[randomIndex1].title,
        sessions[randomIndex2].title,
      ];
    });
    setRandomTitles(newRandomTitles);
  };

  return (
    <>
      <button id="lalala" onClick={handleRandomTitles}>
        lalala
      </button>

      <div>
        {addedDays.map((day) => (
          <div key={day.id}>
            <h3>{day.title}</h3>
            <p>{randomTitles[day.id][0]}</p>
            <p>{randomTitles[day.id][1]}</p>
          </div>
        ))}
        <FooterButton href="/" title="Back" />
      </div>
    </>
  );
}
