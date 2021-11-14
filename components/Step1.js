import BreedItem from '../components/BreedItem';

export default function Step1(props) {
  const {
    dogBreeds,
    searchQuery,
    selectedBreed,
    handleSearchQueryChange,
    handleSelectedBreedChange
  } = props;

  const filteredDogBreeds = dogBreeds.filter(dogBreed => {
    return dogBreed.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const breedItems = filteredDogBreeds.map(dogBreed => {
    return (
      <BreedItem
        key={dogBreed.id}
        dogBreed={dogBreed}
        selectedBreed={selectedBreed}
        handleSelectedBreedChange={handleSelectedBreedChange}
      />
    );
  });

  return (
    <>
      <h1>Ernæringsveilederen</h1>
      <p className="intro-text">
        Visste du hvor viktig det er å velge riktig fôr til din hund? Prøv
        vår enkle ernæringsveileder som hjelper deg å velge riktig ernæring
        til din firbeinte venn. Svar på noen enkle spørsmål og få veiledning
        til hvilket fôr du bør velge. Gi hunden din det aller beste den kan få!
      </p>

      <section>
        <h2>Velg din hunderase</h2>

        <div className="box box--step1">
          <div className="box__header">
            <h3>Bla eller søk etter hunderase</h3>
            <input
              className="box__input"
              type="text"
              placeholder="Søk etter hunderaser"
              value={searchQuery}
              onChange={handleSearchQueryChange}
            />
          </div>
          {breedItems.length > 0
            ? <ul className="list">{breedItems}</ul>
            : <div className="empty-result">
                Beklager, vi fant ingen resultater. Prøv igjen med et annet søk.
              </div>
          }
        </div>
      </section>
    </>
  );
}
