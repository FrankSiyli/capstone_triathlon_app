import Header from "../src/components/Header/Header";
import WeekCard from "../src/components/WeekCard/WeekCard";
import FooterButton from "../src/components/FooterButton/FooterButton";

export default function HomePage() {

  return (
    <div>
      <Header/>
      <WeekCard/>
      <FooterButton href="page2" title="Create Plan"></FooterButton>
      
    </div>
  );
}
