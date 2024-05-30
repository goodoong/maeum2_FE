import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { WebView } from 'react-native-webview';
import useAccountLogin from '../hooks/useAccountLogin';
import { kakaoapi } from '../service/user';
import { useDispatch } from "react-redux";
import { setTempId } from '../redux/slice/TemplateSlice';

const WebViewScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { url } = route.params;
  const { extractCodeFromUrl } = useAccountLogin(navigation);
  const [isLoading, setIsLoading] = useState(false);

  const handleNavigationStateChange = async (event) => {
    if (event.url.includes('code=') && !isLoading) {
      const code = extractCodeFromUrl(event.url);
      if (code) {
        console.log('Kakao authorization code:', code);
        setIsLoading(true); // 로딩 시작, 로딩으로 비동기 처리 필요, 이때 로딩 화면 보여줘야함

        try {
          const response = await kakaoapi(code);
          if (response.success) {
            if (response.response.is_user) {
              console.log('User is already a member, navigating to main.');
              navigation.navigate('main');
            } else {
              console.log('User is not a member, navigating to signup.');
              dispatch(setTempId(response.response.member_id));
              navigation.navigate('signup1', { code });
            }
          } else {
            console.error('Login failed', response.error);
            Alert.alert('Login Failed', response.error || 'Unknown error occurred');
          }
        } catch (error) {
          console.error('Error during Kakao login', error);
          Alert.alert('Error', 'An error occurred during Kakao login. Please try again.');
        } finally {
          setIsLoading(false); // 로딩 종료
        }
      }
    }
  };

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: url }}
        style={styles.webView}
        onNavigationStateChange={handleNavigationStateChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webView: {
    flex: 1,
  },
});

export default WebViewScreen;
