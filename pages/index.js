import Days from "../src/components/Days";
import Link from "next/link";
import useStore from "../src/store";
import { useState, useEffect } from "react";

export default function HomePage() {
  const { days, toggleDay, sessions } = useStore();
  const addedDays = days.filter((day) => day.added);
  const [selectedType, setSelectedType] = useState("short");

  useEffect(() => {
    generateSessionsForDays(addedDays);
  }, [addedDays, selectedType]);

  function generateSessionsForDays(days) {
    days.forEach((day) => {
      if (!day.added) {
        day.sessions = [];
      } else {
        const remainingSessions = sessions.filter(
          (session) => session.eventDistance === selectedType && session.type
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

  function handleCreatePlanClick() {
    generateSessionsForDays(addedDays);
  }

  function handleDayToggle(day) {
    toggleDay(day.id);
    generateSessionsForDays(addedDays);
  }

  return (
    <div>
      <h2>Choose your event distance</h2>
      <form>
        <label>
          Short Distance Triathlon
          <button
            type="button"
            className={selectedType === "short" ? "selected" : ""}
            onClick={() => setSelectedType("short")}
          >
            {selectedType === "short" ? "Selected" : "Select"}
          </button>
        </label>
        <br />
        <br />
        <label>
          Middle Distance Triathlon
          <button
            type="button"
            className={selectedType === "mid" ? "selected" : ""}
            onClick={() => setSelectedType("mid")}
          >
            {selectedType === "mid" ? "Selected" : "Select"}
          </button>
        </label>
        <br />
        <br />
        <label>
          Long Distance Triathlon
          <button
            type="button"
            className={selectedType === "long" ? "selected" : ""}
            onClick={() => setSelectedType("long")}
          >
            {selectedType === "long" ? "Selected" : "Select"}
          </button>
        </label>
      </form>
      <h2>Choose your training days</h2>
      <Days onToggle={handleDayToggle} />

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
