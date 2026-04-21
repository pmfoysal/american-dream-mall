import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { SlideDeck } from './components/deck/SlideDeck';
import { Intro } from './components/common/Intro';
import './styles/global.css';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <>
      <AnimatePresence>
        {showIntro && <Intro onComplete={handleIntroComplete} />}
      </AnimatePresence>

      {!showIntro && <SlideDeck />}
    </>
  );
}

export default App;
