import { useState } from 'react';
import Header from '../components/Header';
import Step1 from '../components/Step1';
import Step2 from '../components/Step2';
import Step3 from '../components/Step3';

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
  const [step, setStep] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBreed, setSelectedBreed] = useState({});
  const [weight, setWeight] = useState();
  const [product, setProduct] = useState('');

  const handleStepClick = number => {
    setStep(step + number);
  };

  const handleSearchQueryChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleSelectedBreedChange = event => {
    const breed = dogBreeds.find(dogBreed => {
      return dogBreed.id === Number(event.target.value);
    });

    setSelectedBreed(breed);

    handleStepClick(1);
  };

  const handleWeightChange = event => {
    setWeight(event.target.value);
  };

  const handleProductChange = event => {
    setProduct(event.target.value);
  };

  return (
    <>
      <Header />

      <main>
        <div className="container">
          {step === 1 && <Step1
                           dogBreeds={dogBreeds}
                           searchQuery={searchQuery}
                           selectedBreed={selectedBreed}
                           handleSearchQueryChange={handleSearchQueryChange}
                           handleSelectedBreedChange={handleSelectedBreedChange}
                         />}

          {step === 2 && <Step2
                           selectedBreed={selectedBreed}
                           weight={weight}
                           handleStepClick={handleStepClick}
                           handleWeightChange={handleWeightChange}
                           handleProductChange={handleProductChange}
                         />}

          {step === 3 && <Step3
                           weight={weight}
                           product={product}
                         />}
        </div>
      </main>
    </>
  );
}
