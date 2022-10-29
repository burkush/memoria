import { useState } from 'react';
import '../../sass/components/_card.scss';

function Card({ cards, card, currentCard, setCurrentCard }) {
  const [flip, setFlip] = useState(false);

  function goToPrev(e) {
    e.stopPropagation();
    const isFirst = currentCard === 0;
    const newIndex = isFirst ? cards.length - 1 : currentCard - 1;
    setCurrentCard(newIndex);
  }

  function goToNext(e) {
    e.stopPropagation();
    const isLast = currentCard === cards.length - 1;
    const newIndex = isLast ? 0 : currentCard + 1;
    setCurrentCard(newIndex);
  }

  return (
    <div
      className={`card ${flip ? 'flip' : ''}`}
      style={
        currentCard !== card.id ? { display: 'none' } : { display: 'block' }
      }
      onClick={() => setFlip(!flip)}
    >
      <div className="card__content">
        <div className="front-side">{card.question}</div>
        <div className="back-side">{card.answer}</div>
        <div className="switch-buttons">
          <div className="prev" role="button" onClick={(e) => goToPrev(e)}>
            <i className="fa-solid fa-arrow-left"></i>
          </div>
          <div className="next" role="button" onClick={(e) => goToNext(e)}>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
