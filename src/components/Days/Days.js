import React from "react";
import useStore from "../../store";

export default function Days() {
  const days = useStore((state) => state.days);
  const toggleDay = useStore((state) => state.toggleDay);

  return (
    <>
      <p>we have {days.length} days</p>
      {days.map((day) => {
        return (
          <div key={day.id}>
            <p>{day.title}</p>
            <button onClick={() => toggleDay(day.id)}>
              {day.added ? "✅ " : "❌"}
            </button>
          </div>
        );
      })}
    </>
  );
}
