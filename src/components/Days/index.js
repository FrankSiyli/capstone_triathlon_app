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
      <h2>Choose your training days</h2>
      {days.map((day) => {
        return (
          <div key={day.id}>
            <h3>
              {day.title}
              <button onClick={() => toggleDay(day.id)}>
                {day.added ? "✅ " : "❌"}
              </button>
            </h3>
          </div>
        );
      })}
      <hr />
    </>
  );
}
