import { useState } from 'react';
import Header from '../components/Header';
import Step1 from '../components/Step1';

export async function getStaticProps() {
  const res = await fetch('https://api.thedogapi.com/v1/breeds', {
    headers: {
      'x-api-key': process.env.API_KEY
    }
  });
  const dogBreeds = await res.json();

  return {
    props: {
      dogBreeds
    }
  };
}

export default function Home({ dogBreeds }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBreed, setSelectedBreed] = useState({});

  const handleSearchQueryChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleSelectedBreedChange = event => {
    const breed = dogBreeds.find(dogBreed => {
      return dogBreed.id === Number(event.target.value);
    });

    setSelectedBreed(breed);
  };

  return (
    <>
      <Header />

      <main>
        <div className="container">
          <Step1
            dogBreeds={dogBreeds}
            searchQuery={searchQuery}
            selectedBreed={selectedBreed}
            handleSearchQueryChange={handleSearchQueryChange}
            handleSelectedBreedChange={handleSelectedBreedChange}
          />
        </div>
      </main>
    </>
  );
}
