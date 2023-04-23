import { useState } from "react";
import Link from "next/link";
import useStore from "../src/store";
import Days from "../src/components/Days";
import EventDistances from "../src/components/EventDistances";
import fetch from "node-fetch";

export default function HomePage() {
  const { days, toggleDay } = useStore();
  const addedDays = days && days.filter((day) => day.added);
  const [selectedType, setSelectedType] = useState("short");
  const [sessionsData, setSessionsData] = useState(null);

  function generateSessionsForDays() {
    if (sessionsData && addedDays) {
      addedDays.forEach((day) => {
        if (!day.added) {
          day.sessions = [];
        } else {
          const remainingSessions = sessionsData.filter(
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

  if (!sessionsData) {
    fetch("/api/sessions")
      .then((response) => response.json())
      .then((data) => setSessionsData(data.sessions));
    return <p>Loading sessions data...</p>;
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
