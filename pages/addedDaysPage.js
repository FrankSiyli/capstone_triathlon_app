import { useEffect } from "react";
import useStore from "../src/store";

function AddedDaysPage() {
  const { days } = useStore();

  useEffect(() => {
    // Get the stored state from local storage
    const storedState = JSON.parse(localStorage.getItem("days-storage"));

    // If the stored state has added days, update the days in the store
    if (storedState && Array.isArray(storedState.days)) {
      const addedDays = storedState.days.filter((day) => day.added);
      useStore.setState({ days: addedDays });
    }
  }, []);

  return (
    <div>
      <h1>Added Days</h1>
      <ul>
        {days.map((day) => (
          <li key={day.id}>{day.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default AddedDaysPage;
