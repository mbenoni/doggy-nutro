export default function Step2(props) {
  const {
    selectedBreed,
    weight,
    handleStepClick,
    handleWeightChange,
    handleProductChange,
  } = props;

  return (
    <section>
      <h2>Velg vekt og aktivitetsnivå</h2>

      <div className="box box--step2">
        <div className="box__content">
          <h3>Skriv inn vekt på din hund</h3>
          <input
            type="number"
            placeholder="Vekt i kg"
            value={weight}
            onChange={handleWeightChange}
          />

          <h3>Velg din hunds aktivitetsnivå</h3>
          <select onChange={handleProductChange}>
            <option selected disabled>Aktivitetsnivå</option>
            <option value="sensitive">Normal</option>
            <option value="active">Svært aktiv</option>
            <option value="active">Brukshund</option>
            <option value="senior">Inaktiv, senior</option>
            <option value="sensitive">Overvektig</option>
          </select>

          <div className="button-group">
            <button
              className="button-group__button--first button--secondary"
              onClick={() => handleStepClick(-1)}
            >
              Tilbake til første steg
            </button>

            <button
              className="button--primary"
              onClick={() => handleStepClick(1)}
            >
              Gå til resultat
            </button>
          </div>
        </div>

        <img
          className="box__image"
          src={selectedBreed.image.url}
          alt={selectedBreed.name}
        />
      </div>
    </section>
  );
}
