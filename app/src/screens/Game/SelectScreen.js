import React, {useEffect} from 'react';
import SelectTemplate from '../../components/game/templates/SelectTemplate';

const SelectScreen = ({route, navigation, appState}) => {
  return (
    <>
      <SelectTemplate navigation={navigation} /> 
    </>
  );
};
export default SelectScreen;
