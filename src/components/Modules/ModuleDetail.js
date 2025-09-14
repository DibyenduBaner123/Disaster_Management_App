// src/components/Modules/ModuleDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';
import Quiz from './Quiz';

const ModuleDetail = () => {
  const { id } = useParams();
  const [module, setModule] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace with your API endpoint
    fetch(`/api/modules/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to load module');
        return res.json();
      })
      .then(data => {
        setModule(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading module...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!module) return <p>Module not found</p>;

  return (
    <div style={{ padding: '2rem', maxWidth: 800, margin: '0 auto' }}>
      <h1>{module.title}</h1>
      <p>{module.description}</p>
      {module.videoUrl && <VideoPlayer src={module.videoUrl} />}
      {module.quiz && <Quiz quizData={module.quiz} />}
    </div>
  );
};

export default ModuleDetail;
