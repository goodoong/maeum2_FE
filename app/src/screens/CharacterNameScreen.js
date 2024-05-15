import React from 'react';
import CharacterNameTemplate from '../components/feat_yunsun/templates/CharacterNameTemplate';


const CharacterNameScreen = ({route, navigation, appState}) => {
  return (
    <>
        <CharacterNameTemplate navigation={navigation} />
    </>
  );
};
export default CharacterNameScreen;
