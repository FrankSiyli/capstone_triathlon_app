import FooterButton from "../src/components/Button/FooterButton";
import Days from "../src/components/Days/Days";
export default function HomePage() {
  return (
    <div>
      <Days />
      <FooterButton
        href="/weeklyOverview"
        title="Create Plan"
        rel="noopener noreferrer"
      ></FooterButton>
    </div>
  );
}
