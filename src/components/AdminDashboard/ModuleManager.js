// src/components/AdminDashboard/ModuleManager.js
import React, { useState } from 'react';

const mockModules = [
  { id: 1, title: 'Flood Preparedness' },
  { id: 2, title: 'Earthquake Response' },
  { id: 3, title: 'Fire Safety' },
];

const mockClasses = [
  { id: 101, name: 'Class 5A' },
  { id: 102, name: 'Class 6B' },
  { id: 103, name: 'Class 7C' },
];

const ModuleManager = () => {
  const [selectedModule, setSelectedModule] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [assignments, setAssignments] = useState([]);
  const [message, setMessage] = useState('');

  const handleAssign = (e) => {
    e.preventDefault();
    if (!selectedModule || !selectedClass) {
      setMessage('Please select both a module and a class.');
      return;
    }

    // Check if already assigned
    const exists = assignments.find(
      (a) => a.moduleId === selectedModule && a.classId === selectedClass
    );
    if (exists) {
      setMessage('This module is already assigned to the selected class.');
      return;
    }

    const moduleTitle = mockModules.find(m => m.id === +selectedModule).title;
    const className = mockClasses.find(c => c.id === +selectedClass).name;

    setAssignments([
      ...assignments,
      { moduleId: selectedModule, classId: selectedClass, moduleTitle, className }
    ]);
    setMessage(`Assigned "${moduleTitle}" to ${className}.`);
  };

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '2rem' }}>
      <h1>Module Manager</h1>
      <form onSubmit={handleAssign} style={{ marginBottom: '1.5rem' }}>
        <label>
          Select Module:{' '}
          <select value={selectedModule} onChange={e => setSelectedModule(e.target.value)}>
            <option value="">-- Select Module --</option>
            {mockModules.map(module => (
              <option key={module.id} value={module.id}>{module.title}</option>
            ))}
          </select>
        </label>{' '}
        <label>
          Select Class:{' '}
          <select value={selectedClass} onChange={e => setSelectedClass(e.target.value)}>
            <option value="">-- Select Class --</option>
            {mockClasses.map(cls => (
              <option key={cls.id} value={cls.id}>{cls.name}</option>
            ))}
          </select>
        </label>{' '}
        <button type="submit">Assign</button>
      </form>
      {message && <p style={{ color: 'green' }}>{message}</p>}

      <h2>Current Assignments</h2>
      {assignments.length === 0 ? (
        <p>No modules assigned to any class yet.</p>
      ) : (
        <ul>
          {assignments.map((a, index) => (
            <li key={index}>
              Module <strong>"{a.moduleTitle}"</strong> assigned to <strong>{a.className}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ModuleManager;
