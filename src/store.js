import { create } from "zustand";
import { persist } from "zustand/middleware";
import { days } from "./daysDb";
import { sessions } from "./sessionsDb";

const useStore = create(
  persist(
    (set, get) => ({
      days: days.map((day) => ({
        ...day,
        sessions: [],
      })),
      sessions: sessions,
      selectedSessionIndex: Math.floor(Math.random() * sessions.length),
      selectedEventDistance: "short", // add new state variable
      toggleDay: (dayId) => {
        set((state) => {
          const dayIndex = state.days.findIndex((day) => day.id === dayId);
          const addedDays = [...state.days];
          const selectedDay = addedDays[dayIndex];

          selectedDay.added = !selectedDay.added;

          if (!selectedDay.added) {
            selectedDay.sessions = [];
          } else {
            const remainingSessions = state.sessions.filter(
              (session) =>
                session.eventDistance === state.selectedEventDistance && // filter sessions based on selected event distance
                session.type !== selectedDay.type &&
                !selectedDay.sessions.includes(session)
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

            selectedDay.sessions = selectedSessions;
          }

          return { days: addedDays };
        });
      },
      setSelectedEventDistance: (eventDistance) => {
        set({ selectedEventDistance: eventDistance });
      }, // add new function to update selected event distance
    }),
    {
      name: "days-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useStore;
