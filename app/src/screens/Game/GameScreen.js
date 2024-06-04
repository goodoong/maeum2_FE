import React, {useEffect} from 'react';
import GameRenderContent from '../../components/game/templates/GameRenderContent';

const GameScreen = ({route, navigation, appState}) => {
  return (
    <>
      <GameRenderContent navigation={navigation} /> 
    </>
  );
};
export default GameScreen;
