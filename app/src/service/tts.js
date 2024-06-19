import axios from 'axios';
import RNFetchBlob from 'rn-fetch-blob';
import Sound from 'react-native-sound';
import { Buffer } from 'buffer';  

const client_id = '';
const client_secret = '';

export const fetchTTS = async text => {
  const api_url = 'https://naveropenapi.apigw.ntruss.com/tts-premium/v1/tts';
  const options = {
    method: 'POST',
    url: api_url,
    headers: {
      'X-NCP-APIGW-API-KEY-ID': client_id,
      'X-NCP-APIGW-API-KEY': client_secret,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: `speaker=ndain&volume=5&speed=0&pitch=0&text=${encodeURIComponent(text)}&format=mp3`,
    responseType: 'arraybuffer',
  };

  try {
    const response = await axios(options);
    const base64String = Buffer.from(response.data, 'binary').toString('base64');
    const filePath = `${RNFetchBlob.fs.dirs.DocumentDir}/tts.mp3`;
    await RNFetchBlob.fs.writeFile(filePath, base64String, 'base64');
    return filePath;
  } catch (error) {
    console.error('TTS 요청 오류:', error);
    throw error;
  }
};

export const playSound = (filePath, callback) => {
  const sound = new Sound(filePath, '', error => {
    if (error) {
      console.error('음성 파일 재생 오류:', error);
      return;
    }
    sound.play(() => {
      sound.release();
      if (callback) {
        callback();
      }
    });
  });
};
