import { useState } from 'react';
import { fetchTTS, playSound } from '../service/tts';

const useTTS = () => {
  const [loading, setLoading] = useState(false);

  const handleTTS = async (text, callback) => {
    setLoading(true);
    console.log('TTS 요청 중:', text);
    try {
      const filePath = await fetchTTS(text);
      console.log('TTS 요청 성공:', filePath);
      playSound(filePath, () => {
        setLoading(false);
        console.log('TTS 재생 완료');
        if (callback) {
          callback();
        }
      });
    } catch (error) {
      console.error('TTS 처리 오류:', error);
      setLoading(false);
    }
  };

  return { loading, handleTTS };
};

export default useTTS;
