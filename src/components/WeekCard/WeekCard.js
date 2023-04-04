import useSWR from "swr";
import { useState } from "react";

const fetcher = async url => {
  const res = await fetch(url)
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.') 
    error.info = await res.json()
    error.status = res.status
    throw error
  }
  return res.json()
}

export default function WeekCard () {

  const { data, error } = useSWR("/api/db", fetcher);
  const [days, setDays] = useState([]);

  if (error) return <div>Failed to load data</div>;
  if (!data) return <div>loading training days...</div>;

  if (days.length === 0) {
    setDays(data[0].days);
  }

  const toggleDay = (id) => {
    setDays((chosenDays) =>
      chosenDays.map((day) => {
        if (day.id === id) {
          return { ...day, isToggled: !day.isToggled };
        }
        return day;
      })
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
              {day.isToggled ? "✅" : "❌"}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}