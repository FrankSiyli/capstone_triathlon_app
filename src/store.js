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
      sessions: [
        {
          type: "swim",
          subType: "interval",
          eventDistance: "short",
          title: "2x500m",
          backgroundColor: "blue",
          icon: "🌊",
          details:
            "warm up 200m @ 70% <br> 2x500m/50m @ 95%/85% <br> cool down 200m @ 80%",
        },
        {
          type: "swim",
          subType: "interval",
          eventDistance: "short",
          title: "3x500m",
          backgroundColor: "blue",
          icon: "🌊",
          details:
            "warm up 200m @ 70% <br> 3x500m/50m @ 95%/85% <br> cool down 200m @ 80%",
        },
        {
          type: "swim",
          subType: "interval",
          eventDistance: "short",
          title: "4x500m",
          backgroundColor: "blue",
          icon: "🌊",
          details:
            "warm up 200m @ 70% <br> 4x500m/50m @ 95%/85% <br> cool down 200m @ 80%",
        },
        {
          type: "bike",
          subType: "interval",
          eventDistance: "short",
          title: "3x5km",
          backgroundColor: "green",
          icon: "🚴‍♂️",
          details:
            "warm up 10km @ 70% <br> 3x5km/1km @ 95%/85% <br> cool down 10km @ 80%",
        },
        {
          type: "bike",
          subType: "interval",
          eventDistance: "short",
          title: "4x5km",
          backgroundColor: "green",
          icon: "🚴‍♂️",
          details:
            "warm up 10km @ 70% <br> 4x5km/1km @ 95%/85% <br> cool down 10km @ 80%",
        },
        {
          type: "bike",
          subType: "interval",
          eventDistance: "short",
          title: "5x5km",
          backgroundColor: "green",
          icon: "🚴‍♂️",
          details:
            "warm up 10km @ 70% <br> 5x5km/1km @ 95%/85% <br> cool down 10km @ 80%",
        },
        {
          type: "run",
          subType: "interval",
          eventDistance: "short",
          title: "3x1km",
          backgroundColor: "orange",
          icon: "🏃‍♀️",
          details:
            "warm up 10km @ 70% <br> 3x1km/1km @ 95%/85% <br> cool down 10km @ 80%",
        },
        {
          type: "run",
          subType: "interval",
          eventDistance: "short",
          title: "4x1km",
          backgroundColor: "orange",
          icon: "🏃‍♀️",
          details:
            "warm up 10km @ 70% <br> 4x1km/1km @ 95%/85% <br> cool down 10km @ 80%",
        },
        {
          type: "run",
          subType: "interval",
          eventDistance: "short",
          title: "5x1km",
          backgroundColor: "orange",
          icon: "🏃‍♀️",
          details:
            "warm up 10km @ 70% <br> 5x1km/1km @ 95%/85% <br> cool down 10km @ 80%",
        },
        {
          type: "yoga",
          subType: "",
          eventDistance: "",
          title: "Padmasana",
          backgroundColor: "yellow",
          icon: "🧘‍♂️",
          details: "15min",
        },
        {
          type: "yoga",
          subType: "",
          eventDistance: "",
          title: "Sukhasana",
          backgroundColor: "yellow",
          icon: "🧘‍♂️",
          details: "20min",
        },
        {
          type: "yoga",
          subType: "",
          eventDistance: "",
          title: "Virasana",
          backgroundColor: "yellow",
          icon: "🧘‍♂️",
          details: "10min",
        },
        {
          type: "stabilization",
          subType: "",
          eventDistance: "",
          title: "Stabi-routine-1",
          backgroundColor: "grey",
          icon: "🏋️‍♀️",
          details: "15min",
        },
        {
          type: "stabilization",
          subType: "",
          eventDistance: "",
          title: "Stabi-routine-2",
          backgroundColor: "grey",
          icon: "🏋️‍♀️",
          details: "20min",
        },
        {
          type: "stabilization",
          subType: "",
          eventDistance: "",
          title: "Stabi-routine-3",
          backgroundColor: "grey",
          icon: "🏋️‍♀️",
          details: "10min",
        },
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
