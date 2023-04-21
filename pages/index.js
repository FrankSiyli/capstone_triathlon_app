import Days from "../src/components/Days";
import Link from "next/link";
import useStore from "../src/store";
import { useState } from "react";
import useSWR from "swr";
import EventDistances from "../src/components/EventDistances";

export default function HomePage() {
  const { days, toggleDay } = useStore();
  const addedDays = days && days.filter((day) => day.added);
  const [selectedType, setSelectedType] = useState("short");

  const { data: sessions, error } = useSWR("/api/sessions", async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (error) {
      throw new Error("Error loading sessions");
    }
  });

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
      {error ? (
        <p>Error loading sessions data</p>
      ) : !sessions ? (
        <p>Loading sessions data...</p>
      ) : (
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
      )}
    </div>
  );
}
