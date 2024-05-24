import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
import useAccountLogin from '../hooks/useAccountLogin';
import { kakaoapi } from '../service/user';

const WebViewScreen = ({ route, navigation }) => {
  const { url } = route.params;
  const { extractCodeFromUrl } = useAccountLogin(navigation);

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: url }}
        style={styles.webView}
        onNavigationStateChange={async (event) => {
          if (event.url.includes('code=')) {
            const code = extractCodeFromUrl(event.url);
            if (code) {
              console.log('Kakao authorization code:', code);
              // 인가 코드를 백엔드로 POST
              try {
                const response = await kakaoapi(code);
                if (response.success) {
                  if (response.response.is_user) {
                    // 응답 결과 회원인 경우 -> 메인 페이지로 이동
                    navigation.navigate('main');
                  } else {
                    // 응답 결과 회원이 아닌 경우 -> 회원가입 페이지로 이동
                    navigation.navigate('signup1', { code });
                  }
                } else {
                  // 응답 결과 에러
                  console.error('Login failed', response.error);
                }
              } catch (error) {
                // 요청 실패 
                console.error('Error during Kakao login', error);
              }
            }
          }
        }}
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