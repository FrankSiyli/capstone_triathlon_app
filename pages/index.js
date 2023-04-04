import FooterButton from "../src/components/Button/FooterButton";
import WeekCard from "../src/components/WeekCard/WeekCard";

export default function HomePage() {

  return (
    <div>
      
      <WeekCard/>
      <FooterButton href="/weeklyOverview" title="Create Plan" ></FooterButton>      
    
    </div>
  );
}
