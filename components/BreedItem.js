export default function BreedItem(props) {
  const {
    dogBreed,
    selectedBreed,
    handleSelectedBreedChange
  } = props;

  return (
    <li>
      <label className="list__item">
        <input
          type="radio"
          value={dogBreed.id}
          checked={selectedBreed.id === dogBreed.id}
          onChange={handleSelectedBreedChange}
        />

        <div className="list__content">
          <img
            className="list__image"
            src={dogBreed.image.url}
            alt={dogBreed.name}
          />
          {dogBreed.name}
        </div>
      </label>
    </li>
  );
}
