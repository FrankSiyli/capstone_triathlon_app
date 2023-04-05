import React, { useState } from "react";



















/* export default function WeekCard({ days }) {
  
  const [selectedDays, setSelectedDays] = useState([]);

  const handleDayToggle = (dayId) => {
    if (selectedDays.includes(dayId)) {
      setSelectedDays(selectedDays.filter((id) => id !== dayId));
    } else {
      setSelectedDays([...selectedDays, dayId]);
    } console.log(selectedDays.id);
  };

  return (
    <>
      <h2 aria-label="Choose your training days">Choose your training days</h2>
      <div className="weekCard" aria-label="week card">
        {days && days.map((day) => (
          <div key={day.id}>
            <h3>{day.title}</h3>
            <button
                onClick={() => handleDayToggle(day.id)}
              >
                {selectedDays.includes(day.id) ? "✅" : "❌"}
              </button>
          </div>
        ))}
      </div>
    </>
  );
}

 */


