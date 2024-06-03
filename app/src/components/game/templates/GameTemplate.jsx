import React from 'react';
import { View } from 'react-native';
import { styled } from 'nativewind';
import ScrollContainer from '../../common/atom/ScrollContainer';
import CustomBtn from '../../common/atom/CustomBtn';
import Character from '../../common/molecules/Character';
import CustomText from '../../common/atom/CustomText';
import { moderateScale, scale } from '../../../utils/Scale';
import Loading from '../../common/atom/Loading';

const Header = styled(View);
const Subtitle = styled(View);

const GameTemplate = ({ subtitleText, loading, renderContent }) => {
  return (
    <ScrollContainer>
      <Header className="w-full flex-row justify-start">
        <CustomBtn
          size="xs"
          color="buttonlight"
          borderColor="green"
          borderWidth="true"
          title="그만할래요"
        />
      </Header>
      <Subtitle
        style={{
          marginTop: scale(20),
          padding: scale(10),
          width: moderateScale(300, 0.3),
        }}
        className="justify-center items-center rounded-lg bg-subtitle">
        <CustomText>{subtitleText}</CustomText>
      </Subtitle>
      <View style={{ width: 500, height: 450 }}>
        <Character feelingdata="default" />
      </View>
      {loading ? 
        <Loading width={100} height={100} loop={true} /> 
        : renderContent()
      }
    </ScrollContainer>
  );
};

export default GameTemplate;
