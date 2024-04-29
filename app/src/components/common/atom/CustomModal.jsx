import React from 'react';
import { Alert, Modal, View, Text, Button } from 'react-native';

const CustomModal = ({ modalVisible, setModalVisible }) => {
  return (
    <Modal
      presentationStyle={'overFullScreen'}
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <View style={{ backgroundColor: 'pink', padding: 20, borderRadius: 10}}>
          <Text>로그아웃 하시겠습니까?</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
            <Button title="확인" onPress={() => setModalVisible(false)} />
            <Button title="취소" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
