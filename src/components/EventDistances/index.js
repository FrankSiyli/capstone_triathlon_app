import HeadingH3 from "../HeadingH3";
import HeadingH4 from "../HeadingH4";

export default function EventDistances({ selectedType, setSelectedType }) {
  const handleButtonClick = (type) => {
    setSelectedType(type);
  };

  return (
    <>
      <HeadingH3 headingH3Title={"Choose your event distance"} />
      <article className="article-container">
        <section className="section-container">
          <HeadingH4 headingH4Title={"Short Distance Triathlon"} />
          <button
            type="button"
            className={selectedType === "short" ? "selected" : ""}
            onClick={() => handleButtonClick("short")}
          >
            {selectedType === "short" ? "✅" : "❌"}
          </button>
        </section>
        <section className="section-container">
          <HeadingH4 headingH4Title={"Middle Distance Triathlon"} />{" "}
          <button
            type="button"
            className={selectedType === "mid" ? "selected" : ""}
            onClick={() => handleButtonClick("mid")}
          >
            {selectedType === "mid" ? "✅" : "❌"}
          </button>
        </section>
        <section className="section-container">
          <HeadingH4 headingH4Title={"Long Distance Triathlon"} />{" "}
          <button
            type="button"
            className={selectedType === "long" ? "selected" : ""}
            onClick={() => handleButtonClick("long")}
          >
            {selectedType === "long" ? "✅" : "❌"}
          </button>
        </section>
      </article>
    </>
  );
}
