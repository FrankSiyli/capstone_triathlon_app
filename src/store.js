import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { days } from "./daysDb";

const useStore = create(
  persist(
    (set) => ({
      days: days.map((day) => ({
        ...day,
      })),

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
export const daysArray = useStore.getState().days;

export default useStore;
