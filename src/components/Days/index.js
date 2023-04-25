import useStore, { daysArray } from "../../store";
import HeadingH3 from "../HeadingH3";
import HeadingH4 from "../HeadingH4";

export default function Days({ filtered }) {
  const days = filtered ? daysArray.filter((day) => day.added) : daysArray;
  const toggleDay = useStore((state) => state.toggleDay);

  const handleToggle = (day) => {
    toggleDay(day.id);
  };

  return (
    <>
      <HeadingH3 headingH3Title={"Choose your training days"} />
      <article className="border1">
        {days &&
          days.map((day) => {
            return (
              <div key={day.id}>
                <section className="border2">
                  <HeadingH4 headingH4Title={day.title} />
                  <button onClick={() => handleToggle(day)}>
                    {day.added ? "✅ " : "❌"}
                  </button>
                </section>
              </div>
            );
          })}
      </article>
    </>
  );
}
