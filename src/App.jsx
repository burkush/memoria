import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home/Home';
import Flashcards from './components/Flashcards/Flashcards';
import FlashcardSet from './components/Flashcards/FlashcardSet';
import CreateSet from './components/Flashcards/CreateSet';

function App() {
  const [sets, setSets] = useState(
    localStorage.getItem('sets') === null
      ? []
      : JSON.parse(localStorage.getItem('sets'))
  );
  const [currentSet, setCurrentSet] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/flashcards"
          element={
            <Flashcards
              sets={sets}
              setSets={setSets}
              currentSet={currentSet}
              setCurrentSet={setCurrentSet}
            />
          }
        />
        <Route
          path="/flashcards/learn"
          element={<FlashcardSet set={sets[currentSet]} />}
        />
        <Route
          path="/flashcards/create"
          element={<CreateSet sets={sets} setSets={setSets} />}
        />
      </Routes>
    </>
  );
}

export default App;
