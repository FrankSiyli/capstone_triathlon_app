import React from "react";
import FooterButton from "../src/components/Button/FooterButton";
import Days from "../src/components/Days/Days";

function AddedDaysPage() {
  return (
    <div>
      <h1>Your Training Days</h1>
      <Days filtered={true} />
      <FooterButton href="/" title="Back" rel="noopener noreferrer" />
    </div>
  );
}

export default AddedDaysPage;
