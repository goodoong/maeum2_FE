import React, { useEffect, useRef, useState } from 'react';
import TurnSelect from '../organisms/TurnSelect';
import SubjectSelect from '../organisms/SubjectSelect';
import GameTemplate from './GameTemplate';
import useGameSelectHandler from '../../../hooks/useGameSelectHandler';
import useTTS from '../../../hooks/useTTS';

const SelectRenderContent = ({ navigation }) => {
  const {
    stage,
    subtitleText,
    loading,
    handleButtonPress,
    handleSubjectPress,
    feelingData: initialFeelingData,
  } = useGameSelectHandler(navigation);
  const { loading: ttsLoading, handleTTS } = useTTS();
  const prevSubtitleText = useRef();
  const [feelingData, setFeelingData] = useState(initialFeelingData);

  useEffect(() => {
    if (subtitleText && subtitleText !== prevSubtitleText.current) {
      handleTTS(subtitleText);
      prevSubtitleText.current = subtitleText;
    }
  }, [subtitleText, handleTTS]);

  useEffect(() => {
    if (ttsLoading) {
      setFeelingData('talkingmouth'); 
    } else {
      setFeelingData(initialFeelingData); 
    }
  }, [ttsLoading, initialFeelingData]);

  const renderContent = () => {
    if (stage === 'turnSelect') {
      return <TurnSelect onButtonPress={handleButtonPress} />;
    }
    if (stage === 'subjectSelect') {
      return <SubjectSelect onButtonPress={handleSubjectPress} />;
    }
  };

  return (
    <GameTemplate
      subtitleText={subtitleText}
      loading={loading || ttsLoading}
      renderContent={renderContent}
      navigation={navigation}
      feelingData={feelingData} // 수정된 feelingData 전달
    />
  );
};

export default SelectRenderContent;
