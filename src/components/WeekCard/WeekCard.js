import { useState } from "react";

export default function WeekCard({ days }) {
  const [selectedDays, setSelectedDays] = useState([]);

  const toggleDay = (id) => {
    setSelectedDays((prevDays) =>
      prevDays.includes(id)
        ? prevDays.filter((dayId) => dayId !== id)
        : [...prevDays, id]
    );
  };

  return (
    <>
      <h2 aria-label="Choose your training days">Choose your training days</h2>
      <div className="weekCard" aria-label="week card">
        {days && days.map((day) => (
          <div key={day.id}>
            <h3>{day.title}</h3>
            <button onClick={() => toggleDay(day.id)}>
              {selectedDays.includes(day.id) ? "✅" : "❌"}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}