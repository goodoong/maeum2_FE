import React, {useEffect} from 'react';
import Maintemplate from '../components/feat_mina/templates/Maintemplate';
import * as permissions from 'react-native-permissions';
import { request, requestMultiple, PERMISSIONS } from 'react-native-permissions';
// import EyeTracking from './EyeTracking';


requestMultiple(Platform.OS === 'ios' ?
    [PERMISSIONS.IOS.CAMERA, PERMISSIONS.IOS.MICROPHONE]
    :
    [PERMISSIONS.ANDROID.CAMERA, PERMISSIONS.ANDROID.RECORD_AUDIO])
    .then((result) => {
      console.log(result)
    });
    
const MainScreen = ({route, navigation, appState}) => {

  return (
    <>
       <Maintemplate navigation={navigation} />
       {/* <EyeTracking/> */}
    </>
  );
};
export default MainScreen;
