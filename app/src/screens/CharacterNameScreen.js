import React from 'react';
import CharacterNameTemplate from '../components/feat_yunsun/templates/CharacterNameTemplate';
import { ScrollView } from 'react-native';


const CharacterNameScreen = ({route, navigation, appState}) => {
  return (
    <>
     <ScrollView>
        <CharacterNameTemplate navigation={navigation} />
      </ScrollView>
    </>
  );
};
export default CharacterNameScreen;
