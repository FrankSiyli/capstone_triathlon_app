import { useState } from "react";

export default function EventDistanceButtons({ onSelect }) {
  const [selectedType, setSelectedType] = useState("short");

  function handleTypeChange(event) {
    setSelectedType(event.target.value);
    onSelect(event.target.value);
  }

  return (
    <form>
      <label>
        Short Distance Triathlon
        <button
          type="button"
          className={selectedType === "short" ? "selected" : ""}
          onClick={() => handleTypeChange({ target: { value: "short" } })}
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
          onClick={() => handleTypeChange({ target: { value: "mid" } })}
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
          onClick={() => handleTypeChange({ target: { value: "long" } })}
        >
          {selectedType === "long" ? "Selected" : "Select"}
        </button>
      </label>
    </form>
  );
}
