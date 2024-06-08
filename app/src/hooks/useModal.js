import { useState } from 'react';
import CustomModal from '../components/common/atom/CustomModal';

const useModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalConfig, setModalConfig] = useState({});

  const showModal = (config) => {
    setModalConfig(config);
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
    setModalConfig({});
  };

  const ModalComponent = () => (
    <CustomModal 
      modalVisible={modalVisible} 
      setModalVisible={setModalVisible} 
      {...modalConfig} 
    />
  );

  return { showModal, hideModal, ModalComponent };
};

export default useModal;
