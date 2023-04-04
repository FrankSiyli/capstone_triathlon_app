import FooterButton from "../src/components/Button/FooterButton";
import WeekCard from "../src/components/WeekCard/WeekCard";

export default function WeeklyOverview({ days, toggleDay }) {
  return (
    <>
      <WeekCard />
      <FooterButton href="/" title="Back"/>
    </>
  );
}