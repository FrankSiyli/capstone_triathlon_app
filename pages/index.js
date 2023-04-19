import Days from "../src/components/Days";
import Link from "next/link";
import useStore from "../src/store";
import { useState, useEffect, useCallback } from "react";
import { sessions } from "../src/sessionsDb";
import DistanceButtons from "../src/components/Buttons/DistanceButtons";

export default function HomePage() {
  const { days, toggleDay } = useStore();
  const addedDays = days && days.filter((day) => day.added);
  const [selectedType, setSelectedType] = useState("short");
  const [isLoading, setIsLoading] = useState(true);
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

  useEffect(() => {
    if (!isLoading && addedDays) {
      generateSessionsForDays(addedDays);
    }
  }, [isLoading, addedDays, generateSessionsForDays]);

  useEffect(() => {
    if (days) {
      setIsLoading(false);
    }
  }, [days]);

  function handleCreatePlanClick() {
    generateSessionsForDays(addedDays);
  }

  function handleDayToggle(day) {
    toggleDay(day.id);
    generateSessionsForDays(addedDays);
  }

  return (
    <div>
      <DistanceButtons
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
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
