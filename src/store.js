import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { days } from "./daysDb";
import { sessions } from "./sessionsDb";

const useStore = create(
  persist(
    (set) => ({
      days: days.map((day) => ({
        ...day,
      })),

      selectedSessionIndex: Math.floor(Math.random() * sessions.length),
      selectedEventDistance: "short",
      toggleDay: (dayId) => {
        set((state) => {
          const dayIndex = state.days.findIndex((day) => day.id === dayId);
          const addedDays = [...state.days];
          const selectedDay = addedDays[dayIndex];
          selectedDay.added = !selectedDay.added;
          return { days: addedDays };
        });
      },
      setSelectedEventDistance: (eventDistance) => {
        set({ selectedEventDistance: eventDistance });
      },
    }),
    {
      name: "days-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useStore;
