import Days from "../src/components/Days";
import Link from "next/link";
import useStore from "../src/store";
import { useState } from "react";
import EventDistances from "../src/components/EventDistances";
import sessions from "./api/sessions";

export default function HomePage() {
  const { days, toggleDay } = useStore();
  const addedDays = days && days.filter((day) => day.added);
  const [selectedType, setSelectedType] = useState("short");

  function generateSessionsForDays() {
    if (sessions && addedDays) {
      addedDays.forEach((day) => {
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
  }

  function handleCreatePlanClick() {
    generateSessionsForDays();
  }

  function handleDayToggle(day) {
    toggleDay(day.id);
    generateSessionsForDays();
  }

  return (
    <div>
      <EventDistances
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      {sessions ? (
        <>
          <Days onToggle={handleDayToggle} />
          <Link
            href="/addedDaysPage"
            title="Create Plan"
            onClick={handleCreatePlanClick}
          >
            <h2>Create Plan</h2>
          </Link>
        </>
      ) : (
        <p>Loading sessions data...</p>
      )}
    </div>
  );
}
