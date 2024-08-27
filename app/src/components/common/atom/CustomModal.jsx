import React from 'react';
import { Modal, View } from 'react-native';
import CustomText from './CustomText';
import CustomBtn from './CustomBtn';
import { styled } from 'nativewind';
import { moderateScale, scale } from '../../../utils/Scale';

const Background = styled(View);
const Box = styled(View);

const CustomModal = ({ 
  modalVisible, 
  setModalVisible, 
  title, 
  content, 
  confirmText, 
  cancelText, 
  onConfirm, 
  onCancel, 
  singleButton 
}) => {
  return (
    <Modal
      presentationStyle={'overFullScreen'}
      animationType="fade"
      transparent={true}
      visible={modalVisible}>
    <Background className="flex flex-1 justify-center items-center" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
     <Box className="flex flex-col bg-white rounded-xl justify-center items-center space-y-4" style={{ width: moderateScale(327, 0.4), height: moderateScale(222, 0.4), padding:scale(10)}}>
          <CustomText size="lg">{title}</CustomText>
          <CustomText size="sm" color="darkgray">{content}</CustomText>
          <CustomBtn title={confirmText} size="md" color="buttonyellow" rounded={true} onPress={onConfirm} />
          {!singleButton && (
            <CustomBtn title={cancelText} size="md" color="buttonpink" rounded={true} onPress={onCancel} />
          )}
        </Box>
      </Background>
    </Modal>
  );
};

export default CustomModal;
