import { useEffect } from 'react';
import SetsList from './SetsList';
import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 30px;
`;

const StyledFlashcards = styled.section`
  padding: 0 15px;
`;

function Flashcards({ sets, setSets, currentSet, setCurrentSet }) {
  useEffect(() => {
    document.title = 'Memoria | Flashcards';
  });

  return (
    <StyledContainer>
      <StyledFlashcards>
        <SetsList
          categoryTitle="My Flashcards"
          sets={sets}
          setSets={setSets}
          currentSet={currentSet}
          setCurrentSet={setCurrentSet}
        ></SetsList>
      </StyledFlashcards>
    </StyledContainer>
  );
}

export default Flashcards;
