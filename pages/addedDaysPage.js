import FooterButton from "../src/components/Button/FooterButton";
import useStore from "../src/store";

function AddedDaysPage() {
  const { days } = useStore();
  const addedDays = days.filter((day) => day.added);

  const handleDropdownChange = (event, dayId) => {
    const selectedOption = event.target.value;
  };

  return (
    <>
      <div>
        <h2>Your Training Days</h2>
        {addedDays.map((day) => (
          <div key={day.id}>
            <h3>{day.title}</h3>
            <select onChange={(event) => handleDropdownChange(event, day.id)}>
              <option value="option1">
                <span
                  role="button"
                  onClick={(event) => handleDropdownChange(event, day.id)}
                >
                  🍔
                </span>
              </option>
              <option value="option2">
                <span
                  role="button"
                  onClick={(event) => handleDropdownChange(event, day.id)}
                >
                  🍔
                </span>
              </option>
            </select>
          </div>
        ))}
        <FooterButton href="/" title="Back" rel="noopener noreferrer" />
      </div>
    </>
  );
}

export default AddedDaysPage;
