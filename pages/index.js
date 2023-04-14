import FooterButton from "../src/components/FooterButton";
import Days from "../src/components/Days";

export default function HomePage() {
  return (
    <div>
      <h2>Choose your training days</h2>
      <Days />
      <FooterButton
        href="/addedDaysPage"
        title="Create Plan"
        rel="noopener noreferrer"
      />
    </div>
  );
}
