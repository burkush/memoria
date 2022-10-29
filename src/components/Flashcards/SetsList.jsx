import { Link } from 'react-router-dom';
import ButtonLink from '../Home/../ButtonLink';
import styled from 'styled-components';

const FlashcardsFlex = styled.section`
  display: flex;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
`;

const Flashcard = styled.div`
  width: 270px;
  height: 150px;
  background-color: white;
  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 20px;
  transition: background-color 150ms ease-in;

  &:hover {
    background-color: rgb(245, 245, 255);
  }
`;

const FlashcardTitle = styled.h2`
  font-size: 1.3rem;
  color: #9090ff;
  margin-bottom: 15px;
`;

const Toolbar = styled.div`
  margin-bottom: 30px;
  display: flex;
  gap: 20px 30px;
  align-items: center;
`;

const InfoMessage = styled.p`
  color: #59656f;
  font-size: 1.2rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const SetsActions = styled.div`
  margin-top: auto;
  text-align: right;
`;

const DeleteButton = styled.button`
  padding: 5px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  background-color: #fa899d;
  color: white;
`;

function SetsList({ categoryTitle, sets, setSets, currentSet, setCurrentSet }) {
  function deleteSet(id, e) {
    e.preventDefault();

    if (window.confirm('Are you sure?')) {
      const newSets = sets.filter((item) => item.id !== id);
      localStorage.setItem('sets', JSON.stringify(newSets));
      setSets(newSets);

      return;
    }

    return;
  }

  return (
    <div>
      <h2 className="page-title">{categoryTitle}</h2>
      <Toolbar>
        <ButtonLink text="Create" to="/flashcards/create" />
      </Toolbar>
      {sets.length ? (
        <FlashcardsFlex>
          {sets.map((set) => (
            <Link to="/flashcards/learn" key={set.id}>
              <Flashcard onClick={() => setCurrentSet(set.id)}>
                <FlashcardTitle>{set.title}</FlashcardTitle>
                <p style={{ color: '#59656f' }}>{set.set.length} terms</p>
                <SetsActions>
                  <DeleteButton
                    type="button"
                    onClick={(e) => deleteSet(set.id, e)}
                  >
                    Delete
                  </DeleteButton>
                </SetsActions>
              </Flashcard>
            </Link>
          ))}
        </FlashcardsFlex>
      ) : (
        <InfoMessage>You have no sets yet.</InfoMessage>
      )}
    </div>
  );
}

export default SetsList;
