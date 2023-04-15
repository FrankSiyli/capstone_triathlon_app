import { useState } from "react";

function DistanceButtons({ onSelect }) {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (event) => {
    const value = event.target.value;
    setActiveButton(value);
    onSelect(value);
  };

  return (
    <>
      <h2>Choose your event distance</h2>
      <h3>Short Distance Tri</h3>
      <button value="short" onClick={handleButtonClick}>
        {activeButton === "short" ? "active" : "not active"}
      </button>
      <h3>Middle Distance Tri</h3>
      <button value="mid" onClick={handleButtonClick}>
        {activeButton === "mid" ? "active" : "not active"}
      </button>
      <h3> Long Distance Tri</h3>
      <button value="long" onClick={handleButtonClick}>
        {activeButton === "long" ? "active" : "not active"}
      </button>
    </>
  );
}

export default DistanceButtons;
