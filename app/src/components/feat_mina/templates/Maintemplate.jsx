import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styled } from 'nativewind';
import { moderateScale } from '../../../utils/Scale';
import ScrollContainer from '../../common/atom/ScrollContainer';
import CustomBtn from '../../common/atom/CustomBtn';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Mainorganism from '../organism/Mainorganism';
import CharacterBody from '../../common/atom/CharacterBody';
import { mockfeelingData } from '../../feat_yunsun/mocks/mockfeelingdata';
import DefaultEyes from '../../common/atom/DefaultEyes';
import SadEyes from '../../common/atom/SadEyes';
import DefaultMouth from '../../common/atom/DefaultMouth';
import SadMouth from '../../common/atom/SadMouth';

const Header = styled(View);

const Maintemplate = ({ route, navigation, appState }) => {
  const [feeling, setFeeling] = useState(null);

  const moveSettingScreen = () => {
    navigation.push('setting');
  };
  useEffect(() => {
    // 모의 데이터를 직접 처리
    const feelingData = mockfeelingData.response.feelingData[0].data;
    setFeeling(feelingData);

    if (feelingData === 'happy') {
      console.log('happy');
    } else if (feelingData === 'sad') {
      console.log('sad');
    }
  }, []);


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
       {feeling === 'happy' && <DefaultEyes width={300} height={300}/>}
       {feeling === 'happy' && <DefaultMouth width={100} height={100}/>}

      {feeling === 'sad' && <SadEyes width={300} height={300}/>}
      {feeling === 'sad' && <SadMouth width={200} height={200}/>}
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

