import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styled } from 'nativewind';
import { moderateScale } from '../../../utils/Scale';
import ScrollContainer from '../../common/atom/ScrollContainer';
import CustomBtn from '../../common/atom/CustomBtn';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Mainorganism from '../organism/Mainorganism';
import CharacterBody from '../../common/atom/CharacterBody';

const Header = styled(View);

const Maintemplate = ({ route, navigation, appState }) => {
  
  const moveSettingScreen = () => {
    navigation.push('setting');
  };

  return (
    <ScrollContainer>
      <Header className="w-full flex-row justify-end">
        <TouchableOpacity onPress={moveSettingScreen}>
          <Icon name="settings" size={moderateScale(55)} color="darkgray" />
        </TouchableOpacity>
      </Header>
      <Mainorganism />
      <View style={{position: 'relative',width: 500, height: 500,}}>
        <CharacterBody width={500} height={500} />
       {/*표정*/}
      </View>
      <CustomBtn
        size="sm"
        color="buttonyellow"
        rounded={true}
        title="게임 시작하기"
      />
    </ScrollContainer>
  );
};

export default Maintemplate;

