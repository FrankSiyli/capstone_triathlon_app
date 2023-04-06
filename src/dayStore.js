import create from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set, get) => ({
      days: [
        { id: 1, title: "Monday", added: true },
        { id: 2, title: "Tuesday", added: true },
        { id: 3, title: "Wednesday", added: true },
        { id: 4, title: "Thursday", added: true },
        { id: 5, title: "Friday", added: true },
        { id: 6, title: "Saturday", added: true },
        { id: 7, title: "Sunday", added: true },
      ],

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
