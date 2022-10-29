import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  padding-top: 30px;
`;

const StyledForm = styled.form`
  margin-bottom: 50px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: 700;
  color: #0175b8;
`;

const DeckInput = styled.input`
  margin-bottom: 30px;
  width: 100%;
  max-width: 500px;
  outline: none;
  border: none;
  border-bottom: 3px solid #0582ca;
  padding: 10px;
  font-family: inherit;
  font-size: 16px;
`;

const TermsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const AddButton = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 10px;
  background-color: #1d1e2c;
  color: white;
  text-align: center;
  cursor: pointer;
  border-radius: 4px;
  transition: opacity 150ms ease-in;

  &:hover,
  &:focus {
    opacity: 0.9;
  }
`;

const CreateButton = styled.button`
  margin-bottom: 20px;
  outline: none;
  border: none;
  padding: 10px;
  background-color: #1d1e2c;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  transition: opacity 150ms ease-in;

  &:hover,
  &:focus {
    opacity: 0.9;
  }
`;

const SetPreview = styled.section`
  margin: 30px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 30px;
`;

const PreviewCell = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid lightgray;
`;

const PreviewTitle = styled.span`
  font-size: 1.1rem;
  font-weight: 700;
  color: #1d1e2c;
  border-bottom: 2px solid #1d1e2c;
`;

function CreateSet({ sets, setSets }) {
  const [deckTitle, setDeckTitle] = useState('');
  const [newCards, setNewCards] = useState([]);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    document.title = 'Memoria | Create';
  });

  const navigate = useNavigate();

  function saveToLocalStorage(sets) {
    localStorage.setItem('sets', JSON.stringify(sets));
  }

  function createSet() {
    if (newCards.length < 2) {
      alert('You need to add at least 2 cards to create the set');
      return;
    }

    const id = sets.length ? sets[sets.length - 1].id + 1 : 0;
    const newSet = {
      id: id,
      title: deckTitle,
      set: newCards,
    };
    const decksCopy = [...sets];
    decksCopy.push(newSet);
    saveToLocalStorage(decksCopy);
    setSets(JSON.parse(localStorage.getItem('sets')));

    navigate('/flashcards');
  }

  function addTerm() {
    if (question === '' || answer === '') {
      alert('You must define the question as well as the answer');
      return;
    }
    const id = !newCards.length ? 0 : newCards[newCards.length - 1].id + 1;
    const newQuestion = question;
    const newAnswer = answer;
    const newPair = { id, question: newQuestion, answer: newAnswer };
    const newCardsCopy = [...newCards];
    newCardsCopy.push(newPair);
    setNewCards(newCardsCopy);
    setQuestion('');
    setAnswer('');
  }

  return (
    <StyledContainer>
      <h2 className="page-title">Create a new study set</h2>
      <StyledForm action="#">
        <CreateButton type="submit" onClick={() => createSet()}>
          Create
        </CreateButton>
        <Label htmlFor="title">Set title</Label>
        <DeckInput
          type="text"
          id="title"
          placeholder='Example: "Physics terms"'
          autoFocus
          value={deckTitle}
          onChange={(e) => setDeckTitle(e.currentTarget.value)}
          required
        />
        <Label htmlFor="term">Add term</Label>
        <TermsGrid>
          <DeckInput
            type="text"
            id="term"
            placeholder="Front side"
            value={question}
            onChange={(e) => setQuestion(e.currentTarget.value)}
          />
          <DeckInput
            type="text"
            placeholder="Back side"
            value={answer}
            onChange={(e) => setAnswer(e.currentTarget.value)}
          />
        </TermsGrid>
        <AddButton role="button" onClick={() => addTerm()}>
          Add term
        </AddButton>
      </StyledForm>
      <h2 className="page-title">Set preview ({newCards.length} terms)</h2>
      <SetPreview>
        <React.Fragment>
          <PreviewTitle>Term</PreviewTitle>
          <PreviewTitle>Definition</PreviewTitle>
        </React.Fragment>
        {newCards.map((item) => (
          <React.Fragment key={item.id}>
            <PreviewCell>{item.question}</PreviewCell>
            <PreviewCell>{item.answer}</PreviewCell>
          </React.Fragment>
        ))}
      </SetPreview>
    </StyledContainer>
  );
}

export default CreateSet;
