import { create } from "zustand";

const useStore = create((set) => ({
  days: [
    {
      title: "Monday",
    },
    {
      title: "Tuesday",
    },
    {
      title: "Wednesday",
    },
    {
      title: "Thursday",
    },
    {
      title: "Friday",
    },
    {
      title: "Saturday",
    },
    {
      title: "Sunday",
    },
  ],
}));
export default useStore;
