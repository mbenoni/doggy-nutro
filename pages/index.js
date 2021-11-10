import { useState } from 'react';
import Header from '../components/Header';

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
  return (
    <>
      <Header />

      <main>
        <div className="container">
          <h1>Ernæringsveilederen</h1>
          <p>Visste du hvor viktig det er å velge riktig fôr til din hund? Prøv
            vår enkle ernæringsveileder som hjelper deg å velge riktig ernæring
            til din firbeinte venn. Svar på noen enkle spørsmål og få veiledning
            til hvilket fôr du bør velge. Gi hunden din det aller beste den kan
            få!</p>
        </div>
      </main>
    </>
  );
}
