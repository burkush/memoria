import { useState, useEffect } from 'react';
import Card from './Card';
import styled from 'styled-components';

const CardList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
`;

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

function FlashcardSet({ set }) {
  const [currentCard, setCurrentCard] = useState(0);
  const cards = set.set;

  useEffect(() => {
    document.title = `Memoria | ${set.title}`;
  });

  return (
    <div>
      <Info>
        {currentCard + 1} / {cards.length}
      </Info>
      <CardList>
        {cards.map((card) => {
          return (
            <Card
              cards={cards}
              card={card}
              currentCard={currentCard}
              setCurrentCard={setCurrentCard}
              key={card.id}
            />
          );
        })}
      </CardList>
    </div>
  );
}

export default FlashcardSet;
