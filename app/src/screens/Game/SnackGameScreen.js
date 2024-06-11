import React, { useEffect } from 'react';
import GameRenderContent from '../../components/game/templates/GameRenderContent';
import { useDispatch, useSelector } from 'react-redux';
import { setTempTurn } from '../../redux/slice/TemplateTurn';
import CustomText from '../../components/common/atom/CustomText';
import { View } from 'react-native';
import { styled } from 'nativewind';

const Box = styled(View);

const SnackGameScreen = ({ route, navigation, appState }) => {
  const dispatch = useDispatch();
  const tempTurn = useSelector((state) => state.templateTurn.tempTurn);

  useEffect(() => {
    dispatch(setTempTurn('snack')); 
    console.log(`turn: ${tempTurn}`);
  }, [dispatch]);

  return (
    <>
      <Box className="flex w-full justify-center items-center">
        <CustomText>같은 글자로 끝나는 단어 말하기</CustomText>
      </Box>
      <GameRenderContent navigation={navigation} /> 
    </>
  );
};

export default SnackGameScreen;
