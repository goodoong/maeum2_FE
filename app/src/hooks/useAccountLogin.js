import { useState } from 'react';
import { Linking, StyleSheet, View } from 'react-native';

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=16377adaf909fad8a1d0899449c9cc88&redirect_uri=http://localhost:8081/kakao/callback&response_type=code`;

const useAccountLogin = (navigation) => {
  const [isKakaoLogin, setIsKakaoLogin] = useState(false);

  const moveExternalPage = (url) => {
    if (url.includes('kauth.kakao.com')) {
      setIsKakaoLogin(true);
      navigation.navigate('webviewscreen', { url });
    } else {
      Linking.openURL(url);
    }
  };

  const extractCodeFromUrl = (url) => {
    const match = url.match(/[?&]code=([^&]+)/);
    return match ? match[1] : null;
  };

  return { isKakaoLogin, moveExternalPage, extractCodeFromUrl };
};

export default useAccountLogin;
