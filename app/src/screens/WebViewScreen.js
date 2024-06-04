import React, {useState} from 'react';
import {StyleSheet, View, ActivityIndicator, Alert} from 'react-native';
import {WebView} from 'react-native-webview';
import useAccountLogin from '../hooks/useAccountLogin';
import {kakaoapi} from '../service/user';
import {useDispatch} from 'react-redux';
import {setTempId} from '../redux/slice/TemplateSlice';
import {setItem} from '../hooks/useAsyncStorage';

const WebViewScreen = ({route, navigation}) => {
  const dispatch = useDispatch();
  const {url} = route.params;
  const {extractCodeFromUrl} = useAccountLogin(navigation);
  const [isLoading, setIsLoading] = useState(false);

  const handleNavigationStateChange = async event => {
    if (event.url.includes('code=') && !isLoading) {
      const code = extractCodeFromUrl(event.url);
      if (code) {
        console.log('Kakao authorization code:', code);
        setIsLoading(true); // 로딩 시작

        try {
          const response = await kakaoapi(code);
          console.log('[API RESPONSE]', response); // 응답 전체 로그 출력

          if (response.success) {
            if (response.response.is_user) {
              console.log('User is already a member, navigating to main.');

              // 응답 헤더에서 토큰 추출
              // const headers = response.headers;
              // console.log('Response Headers:', headers); // 헤더 로그 출력
              // const token = headers && headers.authorization;

              // if (token) {
              //   // Bearer 접두어 제거
              //   const tokenValue = token.startsWith('Bearer ')
              //     ? token.slice(7)
              //     : token;
              //   // 토큰을 AsyncStorage에 저장
              //   await setItem('token', tokenValue);
              //   console.log(`Token saved: ${tokenValue}`);
              //   // 토큰 저장 후 홈 화면으로 리다이렉트
                navigation.navigate('main');
              // } else {
              //   console.error('Token is missing in the response headers');
              //   Alert.alert('Error', '로그인 실패했습니다. 다시 시도해주세요.');
              // }
            } else {
              console.log('User is not a member, navigating to signup.');
              dispatch(setTempId(response.response.member_id));
              navigation.navigate('signup1', {code});
            }
          } else {
            console.error('Login failed', response.error);
            Alert.alert(
              'Login Failed',
              response.error || 'Unknown error occurred',
            );
          }
        } catch (error) {
          console.error('Error during Kakao login', error);
          Alert.alert(
            'Error',
            'An error occurred during Kakao login. Please try again.',
          );
        } finally {
          setIsLoading(false); // 로딩 종료
        }
      }
    }
  };

  return (
    <View style={styles.container}>
      {isLoading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
      <WebView
        source={{uri: url}}
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
  loading: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WebViewScreen;
