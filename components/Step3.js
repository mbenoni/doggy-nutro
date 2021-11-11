import { capitalizeWord } from '../helpers';

export default function Step3({ weight, product }) {
  const activityLevels = {
    active: 3,
    senior: 1.2,
    sensitive: 1.8
  };

  const kcal = Math.round((70 * weight ** 0.75) * activityLevels[product]);

  return (
    <section>
      <h2>Her er vår anbefaling</h2>

      <div className="box box--step3">
        <div className="box__content">
          <h3>Ditt resultat! Hunden din trenger {kcal} kcal om dagen.</h3>
          <p>Din hund vil nyte godt av <strong>DoggyNutro {capitalizeWord(product)}</strong>! Næringsinnholdet i dette fôret vil gi hunden din nøyaktig det den trenger.</p>
          <p>Kun premium hundemat er det beste for din hund!</p>

          <div className="button-group">
            <button className="button-group__button--first button--primary">
              Handle i nettbutikken
              <img className="button__icon" src="/icons/basket_white.svg" alt="" />
            </button>

            <button className="button--secondary">
              Del mitt resultat
              <img className="button__icon" src="/icons/share.svg" alt="" />
            </button>
          </div>
        </div>

        <img
          className="box__image"
          src={`/products/${product}.jpg`}
          alt={`Produktemballasje for DoggyNutro ${capitalizeWord(product)}`}
        />
      </div>
    </section>
  );
}
