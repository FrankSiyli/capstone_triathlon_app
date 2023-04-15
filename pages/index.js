import Days from "../src/components/Days";
import Link from "next/link";
import useStore from "../src/store";
import { useEffect } from "react";

export default function HomePage() {
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
  );
}
