import React from "react";

export default function DistanceButtons({ selectedType, setSelectedType }) {
  const handleButtonClick = (type) => {
    setSelectedType(type);
  };

  return (
    <div>
      <h2>Choose your event distance</h2>
      <label>
        <h3>
          Short Distance Triathlon
          <button
            type="button"
            className={selectedType === "short" ? "selected" : ""}
            onClick={() => handleButtonClick("short")}
          >
            {selectedType === "short" ? "✅" : "❌"}
          </button>
        </h3>
      </label>
      <label>
        <h3>
          Middle Distance Triathlon
          <button
            type="button"
            className={selectedType === "mid" ? "selected" : ""}
            onClick={() => handleButtonClick("mid")}
          >
            {selectedType === "mid" ? "✅" : "❌"}
          </button>
        </h3>
      </label>
      <label>
        <h3>
          Long Distance Triathlon
          <button
            type="button"
            className={selectedType === "long" ? "selected" : ""}
            onClick={() => handleButtonClick("long")}
          >
            {selectedType === "long" ? "✅" : "❌"}
          </button>
        </h3>
      </label>
      <hr />
    </div>
  );
}
