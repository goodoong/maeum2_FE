import { useState } from 'react';
import { fetchTTS, playSound } from '../service/tts';

const useTTS = () => {
  const [loading, setLoading] = useState(false);

  const handleTTS = async (text, callback) => {
    if (loading) {
      console.warn('이미 TTS 요청이 진행 중입니다. 새로운 요청은 무시됩니다.');
      return;
    }

    setLoading(true);
    console.log('TTS 요청 시작:', text);

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
