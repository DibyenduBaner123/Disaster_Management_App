// src/hooks/useFetch.js
import { useState, useEffect } from 'react';

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(url, options)
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(json => setData(json))
      .catch(setError)
      .finally(() => setLoading(false));
    // eslint-disable-next-line
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
