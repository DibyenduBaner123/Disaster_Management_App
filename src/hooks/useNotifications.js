// src/hooks/useNotifications.js
import { useState, useCallback } from 'react';

const useNotifications = () => {
  const [notification, setNotification] = useState(null);

  const showNotification = useCallback((message, type = 'info') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  }, []);

  return { notification, showNotification };
};

export default useNotifications;
// src/hooks/useAuth.js