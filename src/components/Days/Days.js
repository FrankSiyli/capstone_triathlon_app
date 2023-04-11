import React from "react";
import useStore from "../../store";

export default function Days({ filtered }) {
  const days = useStore((state) => {
    if (filtered) {
      return state.days.filter((day) => day.added);
    } else {
      return state.days;
    }
  });
  const toggleDay = useStore((state) => state.toggleDay);

  return (
    <>
      {days.map((day) => {
        return (
          <div key={day.id}>
            <p>{day.title}</p>
            <button onClick={() => toggleDay(day.id)}>
              {day.added ? "selected " : "not selected"}
            </button>
          </div>
        );
      })}
    </>
  );
}
