import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {styled} from 'nativewind';
import ScrollContainer from '../../common/atom/ScrollContainer';
import CustomBtn from '../../common/atom/CustomBtn';
import Character from '../../common/molecules/Character';
import TurnSelect from '../organism/TurnSelect';
import CustomText from '../../common/atom/CustomText';
import {moderateScale, scale} from '../../../utils/Scale';

const Header = styled(View);
const Subtitle = styled(View);

const TurnSelectTemplate = ({route, navigation, appState}) => {
  const message = `순서를 정해보자\n어떤 순서로 하고 싶어?`;
  return (
    <ScrollContainer>
      <Header className="w-full flex-row justify-start">
        <CustomBtn
          size="xs"
          color="buttonlight"
          rounded={true}
          title="그만할래요"
        />
      </Header>
      <Subtitle
        style={{
          marginTop: scale(20),
          padding: scale(10),
          width: moderateScale(300, 0.3),
        }}
        className="justify-center items-center border-2 border-headline rounded-lg bg-white">
        <CustomText>{message}</CustomText>
      </Subtitle>
      <View style={{width: 500, height: 450}}>
        <Character feelingdata="default" />
      </View>
      <TurnSelect />
    </ScrollContainer>
  );
};

export default TurnSelectTemplate;
