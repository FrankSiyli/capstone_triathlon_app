import React, { useEffect } from "react";
import useStore from "../src/store";
import FooterButton from "../src/components/Button/FooterButton";

function AddedDaysPage() {
  const { days } = useStore();

  const addedDays = days.filter((day) => day.added);

  return (
    <div>
      <h1>Your Training Days</h1>
      {addedDays.map((day) => (
        <div key={day.id}>{day.title}</div>
      ))}
      <FooterButton href="/" title="Back" rel="noopener noreferrer" />
    </div>
  );
}

export default AddedDaysPage;
