import FooterButton from "../src/components/Button/FooterButton";
import useStore from "../src/store";

function AddedDaysPage() {
  const { days } = useStore();
  const addedDays = days.filter((day) => day.added);
  return (
    <>
      <div>
        <h2>Your Training Days</h2>
        {addedDays.map((day) => (
          <p key={day.id}>{day.title}</p>
        ))}
        <FooterButton href="/" title="Back" rel="noopener noreferrer" />
      </div>
    </>
  );
}

export default AddedDaysPage;
