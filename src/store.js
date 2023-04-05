import create from "zustand";
import { devtools, persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set, get) => ({
      days: [
        { id: 1, title: "Monday", added: false },
        { id: 2, title: "Tuesday", added: false },
        { id: 3, title: "Wednesday", added: false },
        { id: 4, title: "Thursday", added: false },
        { id: 5, title: "Friday", added: false },
        { id: 6, title: "Saturday", added: false },
        { id: 7, title: "Sunday", added: false },
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
      name: "days-storage", // name of the local storage key
      getStorage: () => localStorage, // storage API to use
    }
  )
);

export default useStore;
