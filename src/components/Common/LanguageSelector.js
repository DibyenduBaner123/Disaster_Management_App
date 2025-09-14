// src/components/Common/LanguageSelector.js
import React from 'react';

const LanguageSelector = ({ currentLang, onChange }) => {
  return (
    <select
      value={currentLang}
      onChange={e => onChange(e.target.value)}
      style={{ padding: '0.5rem', marginLeft: '1rem' }}
    >
      <option value="en">English</option>
      <option value="hi">Hindi</option>
      {/* Add other languages as needed */}
    </select>
  );
};

export default LanguageSelector;
