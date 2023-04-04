import FooterButton from "../src/components/Button/FooterButton";
import Header from "../src/components/Header/Header";
import WeekCard from "../src/components/WeekCard/WeekCard";

export default function HomePage() {

  return (
    <div>
      <Header/>
      <WeekCard/>
      <FooterButton href="/weeklyOverview" title="Create Plan" rel="noopener noreferrer"></FooterButton>      
    
    </div>
  );
}