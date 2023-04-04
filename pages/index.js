import FooterButton from "../src/components/Button/FooterButton";
import WeekCard from "../src/components/WeekCard/WeekCard";

export default function HomePage() {
  return (
    <div>hgfds
      <WeekCard />
      <FooterButton href="/weeklyOverview" title="Create Plan" />
    </div>
  );
}