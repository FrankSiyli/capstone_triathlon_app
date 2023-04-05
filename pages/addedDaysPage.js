import React, { useEffect } from "react";
import useStore from "../src/store";

function AddedDaysPage() {
  const { days } = useStore();

  useEffect(() => {
    const addedDays = days.filter((day) => day.added);
    useStore.setState({ days: addedDays });
  }, []);

  return (
    <div>
      <h1>Added Days</h1>
      {days.map((day) => (
        <div key={day.id}>{day.title}</div>
      ))}
    </div>
  );
}

export default AddedDaysPage;
