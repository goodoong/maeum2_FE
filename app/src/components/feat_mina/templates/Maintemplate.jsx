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
import {getItem} from '../../../hooks/useAsyncStorage';
import { setTempTurn } from '../../../redux/slice/TemplateTurn';

const Header = styled(View);

const Maintemplate = ({route, navigation, appState}) => {

  useEffect(() => {
    const checkToken = async () => {
      dispatch(setTempTurn('')); 
      const token = await getItem('token');
      console.log(token)
      if (!token) {
        navigation.replace('splash');
      }
    };
    checkToken();
  }, []);

  const moveSettingScreen = () => {
    navigation.push('setting');
  };
  const moveGameScreen = () => {
    navigation.push('selectscreen');
  };
  const moveSnackGameScreen = () => {
    const message = '스낵 게임에 온걸 환영해! 말을 걸어서 시작해줘';
    navigation.navigate('snackgamescreen', { message });
  };
  
  return (
    <ScrollContainer>
      <Header className="w-full flex-row justify-between">
      <CustomBtn
        size="xs"
        color="buttonpink"
        rounded={true}
        title="스낵 게임"
        onPress={moveSnackGameScreen}
      />  
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
