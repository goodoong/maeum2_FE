import React from 'react';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styled} from 'nativewind';
import { moderateScale, verticalScale } from '../../../utils/Scale';
import Container from '../../common/atom/Container';
import CustomBtn from '../../common/atom/CustomBtn';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Mainorganism from '../organism/Mainorganism';
import CharacterBody from '../../common/atom/CharacterBody';

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
      <CharacterBody width={500} height={500} />
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
