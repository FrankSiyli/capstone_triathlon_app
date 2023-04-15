import FooterButton from "../src/components/FooterButton/";
import useStore from "../src/store";

function AddedDaysPage() {
  const { days } = useStore();
  const addedDays = days.filter((day) => day.added);

  return (
    <>
      <div>
        <h2>Your Training Days</h2>
        {addedDays.map((day) => (
          <div key={day.id}>
            <h3>{day.title}</h3>
            {day.sessions.map((session) => (
              <p key={session.id}>{session.title}</p>
            ))}
          </div>
        ))}
        <FooterButton href="/" title="Back" />
      </div>
    </>
  );
}

export default AddedDaysPage;
