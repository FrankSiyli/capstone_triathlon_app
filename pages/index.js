import Days from "../src/components/Days";
import Link from "next/link";
import useStore from "../src/store";
import { useState, useCallback } from "react";
import { sessions } from "../src/sessionsDb";
import EventDistances from "../src/components/EventDistances";

export default function HomePage() {
  const { days, toggleDay } = useStore();
  const addedDays = days && days.filter((day) => day.added);
  const [selectedType, setSelectedType] = useState("short");
  const generateSessionsForDays = useCallback(
    (days) => {
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
    },
    [selectedType]
  );

  function handleCreatePlanClick() {
    generateSessionsForDays(addedDays);
  }

  function handleDayToggle(day) {
    toggleDay(day.id);
    generateSessionsForDays(addedDays);
  }

  return (
    <div>
      <EventDistances
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      <Days onToggle={handleDayToggle} />
      <Link
        href="/addedDaysPage"
        title="Create Plan"
        onClick={handleCreatePlanClick}
      >
        <h2>Create Plan</h2>
      </Link>
    </div>
  );
}
