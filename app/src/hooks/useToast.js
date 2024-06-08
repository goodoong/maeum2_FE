import { useState, useCallback } from 'react';

const useToast = () => {
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);

  const showToast = useCallback((msg) => {
    setMessage(msg);
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 5000); // 5초 후에 사라짐
  }, []);

  return { message, visible, showToast };
};

export default useToast;
