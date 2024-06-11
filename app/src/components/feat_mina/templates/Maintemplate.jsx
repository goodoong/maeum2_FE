import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styled} from 'nativewind';
import {moderateScale, verticalScale} from '../../../utils/Scale';
import ScrollContainer from '../../common/atom/ScrollContainer';
import CustomBtn from '../../common/atom/CustomBtn';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Mainorganism from '../organism/Mainorganism';
import Character from '../../common/molecules/Character';
import {getItem, removeItem} from '../../../hooks/useAsyncStorage';
import CustomModal from '../../common/atom/CustomModal';
import { scale } from '../../../utils/Scale';

const Header = styled(View);

const Maintemplate = ({route, navigation, appState}) => {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      const token = await getItem('token');
      console.log(token)
      if (!token) {
        navigation.replace('splash');
      }
    };
//  
    checkToken();
  }, []);

  const moveSettingScreen = () => {
    navigation.push('setting');
  };
  const moveGameScreen = () => {
    navigation.push('selectscreen');
  };

  return (
    <ScrollContainer>
      <Header className="w-full flex-row justify-end">
        <TouchableOpacity onPress={moveSettingScreen}>
          <Icon name="settings" size={moderateScale(55)} color="darkgray" />
        </TouchableOpacity>
      </Header>
      <Mainorganism />
      <View style={{width: moderateScale(500, 0.3), height: verticalScale(350)}}>
        <Character feelingdata="default" />
      </View>
      <CustomBtn
        size="sm"
        color="buttonyellow"
        rounded={true}
        title="게임 시작하기"
        onPress={moveGameScreen}
      />
    </ScrollContainer>
  );
};

export default Maintemplate;
