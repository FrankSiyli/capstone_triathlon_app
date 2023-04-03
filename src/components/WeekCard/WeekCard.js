import useSWR from "swr";
import { useState } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function WeekCard () {

  const { data, error } = useSWR("/api/db", fetcher);
  const [days, setDays] = useState([]);

  if (error) return <div>Failed to load data</div>;
  if (!data) return <div>Loading training days</div>;

  if (days.length === 0) {
    setDays(data[0].days);
  }

  const toggleDay = (id) => {
    setDays((prevDays) =>
      prevDays.map((day) => {
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