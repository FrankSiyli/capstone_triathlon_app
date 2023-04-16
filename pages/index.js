import Days from "../src/components/Days";
import Link from "next/link";
import useStore from "../src/store";
import { useState, useEffect } from "react";

export default function HomePage() {
  const { days, toggleDay, sessions, selectedSession } = useStore();
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

  function generateSessionsForDays(days, sessions) {
    days.forEach((day) => {
      if (!day.added) {
        day.sessions = [];
      } else {
        const remainingSessions = sessions.filter(
          (session) =>
            session.eventDistance === selectedType &&
            session.type !== day.type &&
            !day.sessions.includes(session)
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

  const [selectedType, setSelectedType] = useState("short");

  function handleTypeChange(event) {
    setSelectedType(event.target.value);
    const selectedSession = sessions.find(
      (session) => session.eventDistance === event.target.value
    );
    selectedSession;
  }

  return (
    <div>
      <h2>Choose your training days</h2>
      <Days />
      <form>
        <label>
          Short
          <input
            type="checkbox"
            value="short"
            checked={selectedType === "short"}
            onChange={handleTypeChange}
          />
        </label>
        <label>
          Mid
          <input
            type="checkbox"
            value="mid"
            checked={selectedType === "mid"}
            onChange={handleTypeChange}
          />
        </label>
        <label>
          Long
          <input
            type="checkbox"
            value="long"
            checked={selectedType === "long"}
            onChange={handleTypeChange}
          />
        </label>
      </form>
      <Link
        href="/addedDaysPage"
        title="Create Plan"
        onClick={handleCreatePlanClick}
      >
        Create Plan
      </Link>
    </div>
  );
}
