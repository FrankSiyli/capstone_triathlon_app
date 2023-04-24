import useStore, { daysArray } from "../../store";

export default function Days({ filtered }) {
  const days = filtered ? daysArray.filter((day) => day.added) : daysArray;
  const toggleDay = useStore((state) => state.toggleDay);

  const handleToggle = (day) => {
    toggleDay(day.id);
  };

  return (
    <>
      <h2>Choose your training days</h2>
      {days &&
        days.map((day) => {
          return (
            <div key={day.id}>
              <h3>
                {day.title}
                <button onClick={() => handleToggle(day)}>
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
