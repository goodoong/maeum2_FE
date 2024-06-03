import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { styled } from 'nativewind';
import { useDispatch, useSelector } from 'react-redux';
import ScrollContainer from '../../common/atom/ScrollContainer';
import CustomBtn from '../../common/atom/CustomBtn';
import Character from '../../common/molecules/Character';
import TurnSelect from '../organisms/TurnSelect';
import SubjectSelect from '../organisms/SubjectSelect';
import CustomText from '../../common/atom/CustomText';
import { moderateScale, scale } from '../../../utils/Scale';
import useGameTurn from '../../../hooks/useGameTurn';
import { setTempTurn } from '../../../redux/slice/TemplateTurn';

const Header = styled(View);
const Subtitle = styled(View);

const SelectTemplate = ({ route, navigation, appState }) => {
  const [stage, setStage] = useState('turnSelect');
  const [subtitleText, setSubtitleText] = useState("순서를 정해보자\n어떤 순서로 하고 싶어?");
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState("");
  const dispatch = useDispatch();
  const { sendRequest, turn } = useGameTurn();
  const tempTurn = useSelector((state) => state.templateTurn.tempTurn);

  const handleButtonPress = async (message, turnValue, title) => {
    setSubtitleText(message);
    setUserInput(title);
    setLoading(true);
    if (turnValue) {
      dispatch(setTempTurn(turnValue));
    }
  };

  const handleSubjectPress = async (message) => {
    setSubtitleText(message);
    setUserInput(message);
    setLoading(true);
  };

  useEffect(() => {
    const sendRequestIfNeeded = async () => {
      if (loading && userInput) {
        await new Promise(resolve => setTimeout(resolve, 500)); 
        try {
          const response = await sendRequest(userInput);
          console.log('Response:', response);
          if (stage === 'turnSelect') {
            setStage('subjectSelect'); // 주제 선택 화면으로 전환
            setSubtitleText("주제를 정해보자\n어떤 주제로 하고 싶어?");
          } else if (stage === 'subjectSelect') {
            // Handle the response for subject select
            console.log('Subject selected and request sent');
          }
        } catch (error) {
          console.error('Error handling user input:', error);
        }
        setLoading(false);
      }
    };

    sendRequestIfNeeded();
  }, [tempTurn, loading, userInput, stage, sendRequest]);

  const renderContent = () => {
    if (stage === 'turnSelect') {
      return <TurnSelect onButtonPress={handleButtonPress} />;
    }
    if (stage === 'subjectSelect') {
      return <SubjectSelect onButtonPress={handleSubjectPress} />;
    }
  };

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
      {loading ? <ActivityIndicator size="large" color="#0000ff" /> : renderContent()}
    </ScrollContainer>
  );
};

export default SelectTemplate;
