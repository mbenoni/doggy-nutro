import Image from 'next/image';

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

        <span className="list__content">
          <span className="list__image">
            <Image
              src={dogBreed.image.url}
              alt={dogBreed.name}
              layout="fill"
              objectFit="cover"
              sizes="(min-width: 768px) 277px,
                     423px"
            />
          </span>
          {dogBreed.name}
        </span>
      </label>
    </li>
  );
}
