export default function Step2(props) {
  const {
    selectedBreed,
    weight,
    product,
    handleStepClick,
    handleWeightChange,
    handleProductChange,
  } = props;

  const isEnabled = weight >= 1 && product;

  return (
    <section>
      <h2>Velg vekt og aktivitetsnivå</h2>

      <div className="box box--step2">
        <div className="box__content">
          <label>
            <span className="box__label-text">Skriv inn vekt på din hund</span>
            <input
              type="number"
              placeholder="Vekt i kg"
              value={weight}
              onChange={handleWeightChange}
            />
          </label>

          <label>
            <span className="box__label-text">Velg din hunds aktivitetsnivå</span>
            <select onChange={handleProductChange}>
              <option selected disabled>Aktivitetsnivå</option>
              <option value="sensitive">Normal</option>
              <option value="active">Svært aktiv</option>
              <option value="active">Brukshund</option>
              <option value="senior">Inaktiv, senior</option>
              <option value="sensitive">Overvektig</option>
            </select>
          </label>

          <div className="button-group">
            <button
              className="button-group__button--first button--secondary"
              onClick={() => handleStepClick(-1)}
            >
              Tilbake til første steg
            </button>

            <button
              className={`button--primary ${!isEnabled ? 'button--disabled' : ''}`}
              onClick={() => handleStepClick(1)}
              disabled={!isEnabled}
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
