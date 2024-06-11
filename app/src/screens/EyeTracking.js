import React, { useEffect, useState, useRef, useCallback } from 'react';
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';
import { Camera, useCameraDevice, CameraRuntimeError } from 'react-native-vision-camera';
import { PermissionsAndroid } from 'react-native';

const EyeTracking = () => {
  const [cameraPermission, setCameraPermission] = useState('not-determined');
  const [microphonePermission, setMicrophonePermission] = useState('not-determined');
  const camera = useRef(null);
  const device = useCameraDevice('back');

  const requestCameraPermission = async () => {
    try {
      const cameraGranted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
        title: 'Cool Photo App Camera Permission',
        message: 'Cool Photo App needs access to your camera so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      });

      const micGranted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.RECORD_AUDIO, {
        title: 'Cool Photo App Microphone Permission',
        message: 'Cool Photo App needs access to your microphone to record audio.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      });

      if (cameraGranted === PermissionsAndroid.RESULTS.GRANTED && micGranted === PermissionsAndroid.RESULTS.GRANTED) {
        setCameraPermission('authorized');
        setMicrophonePermission('authorized');
      } else {
        setCameraPermission('denied');
        setMicrophonePermission('denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const onError = useCallback((error) => {
    console.error(error);
  }, []);

  if (device == null) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size={20} color="red" />
      </View>
    );
  }

  if (cameraPermission !== 'authorized' || microphonePermission !== 'authorized') {
    return (
      <View style={styles.centered}>
        <Text>Requesting permissions...</Text>
      </View>
    );
  }

  return (
    <View style={styles.cameraContainer}>
      <Camera
        style={styles.camera}
        device={device}
        isActive={true}
        photo={true}
        video={false}
        audio={false}
        ref={camera}
        onError={onError}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraContainer: {
    position: 'absolute',
    bottom: 20, // Adjust as needed
    right: 20, // Adjust as needed
    width: 100, // Adjust as needed for circular size
    height: 100, // Adjust as needed for circular size
    borderRadius: 50, // Half of width and height to make it circular
    overflow: 'hidden',
    borderWidth: 2, // Optional: add border
    borderColor: 'white', // Optional: border color
  },
  camera: {
    width: '100%',
    height: '100%',
  },
});

export default EyeTracking;
