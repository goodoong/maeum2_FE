import React, {useEffect} from 'react';
import TurnSelectTemplate from '../../components/game/template/TurnSelectTemplate';

const TurnSelectScreen = ({route, navigation, appState}) => {
  return (
    <>
      <TurnSelectTemplate navigation={navigation} />
    </>
  );
};
export default TurnSelectScreen;
