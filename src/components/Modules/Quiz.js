// src/components/Modules/Quiz.js
import React, { useState } from 'react';

const Quiz = ({ quizData }) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const question = quizData.questions[currentQ];

  const handleOptionSelect = (index) => {
    setSelectedOption(index);
  };

  const handleNext = () => {
    if (selectedOption === question.answer) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    if (currentQ + 1 < quizData.questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowScore(true);
    }
  };

  if (!quizData || quizData.questions.length === 0) {
    return <p>No quiz available for this module.</p>;
  }

  if (showScore) {
    return (
      <div>
        <h3>Your Score: {score} / {quizData.questions.length}</h3>
      </div>
    );
  }

  return (
    <div style={{ marginTop: '1rem' }}>
      <h3>Quiz</h3>
      <p><strong>Q{currentQ + 1}:</strong> {question.question}</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {question.options.map((opt, idx) => (
          <li key={idx} style={{ marginBottom: '0.5rem' }}>
            <label style={{ cursor: 'pointer' }}>
              <input
                type="radio"
                name="answer"
                value={idx}
                checked={selectedOption === idx}
                onChange={() => handleOptionSelect(idx)}
              />{' '}
              {opt}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleNext} disabled={selectedOption === null}>
        {currentQ + 1 === quizData.questions.length ? 'Finish' : 'Next'}
      </button>
    </div>
  );
};

export default Quiz;
