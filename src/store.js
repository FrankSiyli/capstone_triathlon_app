import {create} from "zustand";
import { persist } from "zustand/middleware";
import { sessions } from "./sessionsDb";
import { days } from "./daysDb";

const useStore = create (
  persist(
    (set) => ({
      days: days,
      sessions: sessions,
      toggleDay: (dayId) => {
        set((state) => {
          const dayIndex = state.days.findIndex((day) => day.id === dayId);
          const addedDays = [...state.days];
          addedDays[dayIndex] = {
            ...addedDays[dayIndex],
            added: !addedDays[dayIndex].added,
          };
          return { days: addedDays };
        });
      },
    }),
    {
      name: "days-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useStore;
