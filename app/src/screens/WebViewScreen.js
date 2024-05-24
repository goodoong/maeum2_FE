import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
import useAccountLogin from '../hooks/useAccountLogin';

const WebViewScreen = ({ route, navigation }) => {
  const { url } = route.params;
  const { extractCodeFromUrl } = useAccountLogin(navigation);

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: url }}
        style={styles.webView}
        onNavigationStateChange={(event) => {
          if (event.url.includes('code=')) {
            const code = extractCodeFromUrl(event.url);
            if (code) {
              console.log('Kakao authorization code:', code);
              navigation.navigate('signup1', { code });
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
