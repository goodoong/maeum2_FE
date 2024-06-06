import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <View style={styles.container}>
      <Text>오류가 발생했습니다.</Text>
      <Text>자세한 내용 : {error.message}</Text>
      <Button title="다시 시도하기" onPress={resetErrorBoundary} />
    </View>
  );
}

export const ErrorHandler = ({ children }) => (
  <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onError={(error, info) => {
      Alert.alert('오류 발생', '사용 중에 오류가 발생했습니다. 다시 시도해주세요.');
      console.error('Error caught by ErrorBoundary:', error, info);
    }}
  >
    {children}
  </ErrorBoundary>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});
