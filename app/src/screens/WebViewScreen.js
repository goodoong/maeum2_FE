import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import useAccountLogin from '../hooks/useAccountLogin';
import { kakaoapi } from '../service/user';
import { useDispatch } from 'react-redux';
import { setTempId } from '../redux/slice/TemplateSlice';
import { setItem } from '../hooks/useAsyncStorage';
import useModal from '../hooks/useModal';

const WebViewScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { url } = route.params;
  const { extractCodeFromUrl } = useAccountLogin(navigation);
  const [isLoading, setIsLoading] = useState(false);
  const { showModal, hideModal, ModalComponent } = useModal();

  const handleNavigationStateChange = async event => {
    if (event.url.includes('code=') && !isLoading) {
      const code = extractCodeFromUrl(event.url);
      if (code) {
        console.log('Kakao authorization code:', code);
        setIsLoading(true);

        try {
          const response = await kakaoapi(code);
          console.log('[API RESPONSE]', response);
        
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
            showModal({
              title: '로그인 실패',
              content: response.error || '로그인에 실패하였습니다.',
              confirmText: '이전으로 이동하기',
              singleButton: true,
              onConfirm: () => {
                hideModal();
                navigation.goBack();
              },
            });
          }
        } catch (error) {
          console.error('Error during Kakao login', error);
          showModal({
            title: '오류 발생',
            content: '카카오 로그인 중에 오류가 발생했습니다.',
            confirmText: '이전으로 이동하기',
            singleButton: true,
            onConfirm: () => {
              hideModal();
              navigation.goBack();
            },
          });
        } finally {
          setIsLoading(false);
        }
      }
    }
  };

  return (
    <View style={styles.container}>
      {isLoading && (
        <Text>카카오 로그인 중입니다. 잠시만 기다려주세요.</Text>
      )}
      <WebView
        source={{ uri: url }}
        style={styles.webView}
        onNavigationStateChange={handleNavigationStateChange}
      />
      <ModalComponent />
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
