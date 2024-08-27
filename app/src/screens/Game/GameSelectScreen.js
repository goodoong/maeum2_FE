import React, {useEffect} from 'react';
import SelectRenderContent from '../../components/game/templates/SelectRenderContent';

const GameSelectScreen = ({route, navigation, appState}) => {
  return (
    <>
      <SelectRenderContent navigation={navigation} /> 
    </>
  );
};
export default GameSelectScreen;
