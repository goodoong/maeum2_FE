import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Auth Page
import LoginScreen from '../screens/Auth/LoginScreen';
import AccountScreen from '../screens/Auth/AccountScreen';
import AuthorizationScreen from '../screens/Auth/AuthorizationScreen';
import Signup1Screen from '../screens/Auth/Signup1Screen';
import Signup2Screen from '../screens/Auth/Signup2Screen';

// Main
import MainScreen from '../screens/MainScreen';
import TutorialScreen from '../screens/TutorialScreen';
import SplashScreen from '../screens/SplashScreen';
import CharacterNameScreen from '../screens/CharacterNameScreen';

// Settin Page
import SettingScreen from '../screens/Setting/SettingScreen';
import ReportScreen from '../screens/Setting/ReportScreen';
import InformationScreen from '../screens/Setting/InformationScreen';
import InformationFixScreen from '../screens/Setting/InformationFixScreen';
import HistoryDetailScreen from '../screens/Setting/HistoryDetailScreen';

// Game Page
import STTScreen from '../screens/STTScreen';

/**
 * StackNavigator를 이용하여서 앱에 대한 페이지 이동을 관리합니다.
 */
const StackNavigation = () => {
  // RootStackPageList에서 페이지를 관리합니다
  const Stack = createStackNavigator();

  const customStackNavigationOptions = {
    gestureEnabled: false,
    title: '',
  };

  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white',
    },
  };

  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator
        initialRouteName={'splash'}
        screenOptions={({route}) => ({
          ...customStackNavigationOptions,
          headerShown: !(
            route.name === 'login' ||
            route.name === 'main' ||
            route.name === 'splash' ||
            route.name === 'charactername' ||
            route.name === 'tutorial'
          ),
        })}>
        {/* 로그인 페이지 */}
        <Stack.Screen name="login">
          {props => <LoginScreen {...props} />}
        </Stack.Screen>
        {/* 연동 페이지 */}
        <Stack.Screen name="account">
          {props => <AccountScreen {...props} />}
        </Stack.Screen>
        {/* 회원가입1 페이지 */}
        <Stack.Screen name="signup1">
          {props => <Signup1Screen {...props} />}
        </Stack.Screen>
        {/* 문자 인증 페이지 */}
        <Stack.Screen name="authorization">
          {props => <AuthorizationScreen {...props} />}
        </Stack.Screen>
        {/* 회원가입2 페이지 */}
        <Stack.Screen name="signup2">
          {props => <Signup2Screen {...props} />}
        </Stack.Screen>
        {/* 메인 페이지 */}
        <Stack.Screen name="main">
          {props => <MainScreen {...props} />}
        </Stack.Screen>
        {/* 세팅 페이지 */}
        <Stack.Screen name="setting">
          {props => <SettingScreen {...props} />}
        </Stack.Screen>
        {/* 리포트 페이지 */}
        <Stack.Screen name="report">
          {props => <ReportScreen {...props} />}
        </Stack.Screen>
        {/* 튜토리얼 페이지 */}
        <Stack.Screen name="tutorial">
          {props => <TutorialScreen {...props} />}
        </Stack.Screen>
        {/* 회원 정보 페이지 */}
        <Stack.Screen name="info">
          {props => <InformationScreen {...props} />}
        </Stack.Screen>
        {/* 회원 정보 수정 페이지 */}
        <Stack.Screen name="infofix">
          {props => <InformationFixScreen {...props} />}
        </Stack.Screen>
        {/* 기록 상세 페이지 */}
        <Stack.Screen name="history">
          {props => <HistoryDetailScreen {...props} />}
        </Stack.Screen>
        {/* 스플레쉬 페이지 */}
        <Stack.Screen name="splash">
          {props => <SplashScreen {...props} />}
        </Stack.Screen>
        {/* 캐릭터 이름 설정 페이지 */}
        <Stack.Screen name="charactername">
          {props => <CharacterNameScreen {...props} />}
        </Stack.Screen>
        {/* STT */}
        <Stack.Screen name="sttscreen">
          {props => <STTScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
