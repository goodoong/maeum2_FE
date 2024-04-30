import React from 'react';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styled} from 'nativewind';
import Container from '../../common/atom/Container';
import CustomBtn from '../../common/atom/CustomBtn';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {moderateScale, scale} from '../../../utils/Scale';
import Mainorganism from '../organism/Mainorganism';
import TestLottie from '../../common/atom/TestLottie';

const Header = styled(View);

const Maintemplate = ({route, navigation, appState}) => {
  
  const moveSettingScreen = () => {
    navigation.push('setting');
  };

  return (
    <Container>
      <Header className="w-full flex-row justify-end">
        <TouchableOpacity onPress={moveSettingScreen}>
          <Icon name="settings" size={moderateScale(55)} color="darkgray" />
        </TouchableOpacity>
      </Header>
      <Mainorganism />
      <TestLottie width={300} height={300}/>
      <CustomBtn
        size="sm"
        color="buttonyellow"
        rounded={true}
        title="게임 시작하기"
      />
    </Container>
  );
};

export default Maintemplate;
