// src/components/AdminDashboard/DrillScheduler.js
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

const DrillScheduler = () => {
  const [selectedModule, setSelectedModule] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [drillDate, setDrillDate] = useState('');
  const [scheduledDrills, setScheduledDrills] = useState([]);
  const [message, setMessage] = useState('');

  const handleSchedule = (e) => {
    e.preventDefault();
    if (!selectedModule || !selectedClass || !drillDate) {
      setMessage('Please select module, class and date.');
      return;
    }

    const moduleTitle = mockModules.find(m => m.id === +selectedModule).title;
    const className = mockClasses.find(c => c.id === +selectedClass).name;

    const newDrill = {
      id: scheduledDrills.length + 1,
      moduleId: selectedModule,
      classId: selectedClass,
      moduleTitle,
      className,
      date: drillDate,
    };

    setScheduledDrills([...scheduledDrills, newDrill]);
    setMessage(`Scheduled drill for "${moduleTitle}" in ${className} on ${drillDate}.`);

    // Reset form
    setSelectedModule('');
    setSelectedClass('');
    setDrillDate('');
  };

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '2rem' }}>
      <h1>Drill Scheduler</h1>

      <form onSubmit={handleSchedule} style={{ marginBottom: '1.5rem' }}>
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
        <label>
          Select Date:{' '}
          <input
            type="date"
            value={drillDate}
            onChange={e => setDrillDate(e.target.value)}
            min={new Date().toISOString().split('T')[0]}
          />
        </label>{' '}
        <button type="submit">Schedule Drill</button>
      </form>

      {message && <p style={{ color: 'green' }}>{message}</p>}

      <h2>Scheduled Drills</h2>
      {scheduledDrills.length === 0 ? (
        <p>No drills scheduled yet.</p>
      ) : (
        <ul>
          {scheduledDrills.map(drill => (
            <li key={drill.id}>
              {drill.date}: "{drill.moduleTitle}" drill scheduled for {drill.className}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DrillScheduler;
