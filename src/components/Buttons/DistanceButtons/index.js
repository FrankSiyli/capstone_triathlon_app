import React from "react";

export default function DistanceButtons({ selectedType, setSelectedType }) {
  const handleButtonClick = (type) => {
    setSelectedType(type);
  };

  return (
    <div>
      <h2>Choose your event distance</h2>
      <label>
        Short Distance Triathlon
        <button
          type="button"
          className={selectedType === "short" ? "selected" : ""}
          onClick={() => handleButtonClick("short")}
        >
          {selectedType === "short" ? "Selected" : "Select"}
        </button>
      </label>
      <br />
      <br />
      <label>
        Middle Distance Triathlon
        <button
          type="button"
          className={selectedType === "mid" ? "selected" : ""}
          onClick={() => handleButtonClick("mid")}
        >
          {selectedType === "mid" ? "Selected" : "Select"}
        </button>
      </label>
      <br />
      <br />
      <label>
        Long Distance Triathlon
        <button
          type="button"
          className={selectedType === "long" ? "selected" : ""}
          onClick={() => handleButtonClick("long")}
        >
          {selectedType === "long" ? "Selected" : "Select"}
        </button>
      </label>
    </div>
  );
}
