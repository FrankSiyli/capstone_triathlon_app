import Days from "../src/components/Days";
import Link from "next/link";
import useStore from "../src/store";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [selectedType, setSelectedType] = useState("short");
  const { days, toggleDay, sessions } = useStore();
  const addedDays = days.filter((day) => day.added);
  useEffect(() => {
    generateSessionsForDays(addedDays, sessions);
  });

  useEffect(() => {
    addedDays.forEach((day) => {
      if (!day.sessions.length) {
        toggleDay(day.id);
      }
    });
  }, [addedDays, toggleDay]);
  function handleCreatePlanClick() {
    generateSessionsForDays(addedDays, sessions);
  }
  function handleTypeChange(e) {
    setSelectedType(e.target.value);
  }

  function generateSessionsForDays(days, sessions) {
    days.forEach((day) => {
      if (!day.added) {
        day.sessions = [];
      } else {
        const remainingSessions = sessions.filter(
          (session) =>
            session.type !== day.type && !day.sessions.includes(session)
        );

        const selectedSessions = [];
        for (let i = 0; i < 2; i++) {
          const randomIndex = Math.floor(
            Math.random() * remainingSessions.length
          );
          const session = remainingSessions[randomIndex];
          selectedSessions.push(session);
          remainingSessions.splice(randomIndex, 1);
        }

        day.sessions = selectedSessions;
      }
    });
  }

  return (
    <>
      <div>
        <label>
          <input
            type="radio"
            name="type"
            value="short"
            checked={selectedType === "short"}
            onChange={handleTypeChange}
          />
          Short
        </label>
        <label>
          <input
            type="radio"
            name="type"
            value="mid"
            checked={selectedType === "mid"}
            onChange={handleTypeChange}
          />
          Mid
        </label>
        <label>
          <input
            type="radio"
            name="type"
            value="long"
            checked={selectedType === "long"}
            onChange={handleTypeChange}
          />
          Long
        </label>
      </div>
      <div>
        <h2>Choose your training days</h2>
        <Days />
        <Link
          href="/addedDaysPage"
          title="Create Plan"
          onClick={handleCreatePlanClick}
        >
          Create Plan
        </Link>
      </div>
    </>
  );
}
