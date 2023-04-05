import React from "react";
import useStore from "../../store";

export default function Days() {
  const days = useStore((state) => state.days);
  return (
    <>
      <p>we have {days.length} days</p>
      {days.map((day) => {
        return <p key={day.id}>{day.title}</p>;
      })}
    </>
  );
}
