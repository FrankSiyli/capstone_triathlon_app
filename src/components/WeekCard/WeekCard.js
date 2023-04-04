import useSWR from "swr";
import React, { useState } from "react";


const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  return res.json();
};

export default function WeekCard ({ days }) {
  const [selectedDays, setSelectedDays] = useState([]);

  const toggleDay = (id) => {
    setSelectedDays((prev) =>
      prev.includes(id) ? prev.filter((day) => day !== id) : [...prev, id]
    );
  };

  return (
    <>
      <h2 aria-label="Choose your training days">Choose your training days</h2>
      <div className="weekCard" aria-label="week card">
        {days.map((day) => (
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