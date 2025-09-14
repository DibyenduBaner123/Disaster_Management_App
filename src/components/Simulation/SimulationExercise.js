// src/components/Simulations/SimulationExercise.js
import React, { useState } from 'react';

// Example scenario with decision steps
const demoScenario = {
  id: 1,
  title: 'Flood Evacuation Drill',
  steps: [
    {
      id: 1,
      question: 'Is there visible flood water inside the school?',
      options: ['Yes', 'No'],
      correctOption: 'Yes',
      nextStepId: 2,
    },
    {
      id: 2,
      question: 'Did you activate the evacuation alarm?',
      options: ['Yes', 'No'],
      correctOption: 'Yes',
      nextStepId: 3,
    },
    {
      id: 3,
      question: 'Were all students evacuated safely?',
      options: ['Yes', 'No'],
      correctOption: 'Yes',
      nextStepId: null,
    }
  ]
};

const SimulationExercise = ({ scenario = demoScenario, onComplete }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const step = scenario.steps[currentStepIndex];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption === step.correctOption) {
      setScore(score + 1);
    }
    if (step.nextStepId === null) {
      setFinished(true);
      onComplete && onComplete(score + (selectedOption === step.correctOption ? 1 : 0));
    } else {
      const nextIndex = scenario.steps.findIndex(s => s.id === step.nextStepId);
      setCurrentStepIndex(nextIndex);
      setSelectedOption(null);
    }
  };

  if (finished) {
    return (
      <div style={{ padding: '2rem', maxWidth: 600, margin: '0 auto' }}>
        <h2>{scenario.title} - Completed</h2>
        <p>Your score: {score} / {scenario.steps.length}</p>
        <button onClick={() => window.location.reload()}>Restart Simulation</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', maxWidth: 600, margin: '0 auto' }}>
      <h2>{scenario.title}</h2>
      <p><strong>Step {currentStepIndex + 1}:</strong> {step.question}</p>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {step.options.map(opt => (
          <li key={opt} style={{ marginBottom: '0.5rem' }}>
            <label style={{ cursor: 'pointer' }}>
              <input
                type="radio"
                name="option"
                value={opt}
                checked={selectedOption === opt}
                onChange={() => handleOptionSelect(opt)}
              />{' '}
              {opt}
            </label>
          </li>
        ))}
      </ul>
      <button disabled={!selectedOption} onClick={handleNext}>
        {step.nextStepId === null ? 'Finish' : 'Next'}
      </button>
    </div>
  );
};

export default SimulationExercise;
