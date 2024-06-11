import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GlobalErrorHandler from '../hooks/GlobalErrorHandler';
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
import WebViewScreen from '../screens/WebViewScreen';
// Setting Page
import SettingScreen from '../screens/Setting/SettingScreen';
import ReportScreen from '../screens/Setting/ReportScreen';
import InformationScreen from '../screens/Setting/InformationScreen';
import InformationFixScreen from '../screens/Setting/InformationFixScreen';
import HistoryDetailScreen from '../screens/Setting/HistoryDetailScreen';
// Game Page
import STTScreen from '../screens/STTScreen';
import GameSelectScreen from '../screens/Game/GameSelectScreen';
import GameScreen from '../screens/Game/GameScreen';
import EyeTracking from '../screens/EyeTracking';

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

const StackNavigation = () => {
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator
        initialRouteName={'main'}
        screenOptions={({ route }) => ({
          ...customStackNavigationOptions,
          headerShown: !(
            route.name === 'login' ||
            route.name === 'main' ||
            route.name === 'splash' ||
            route.name === 'charactername' ||
            route.name === 'tutorial' ||
            route.name === 'selectscreen' ||
            route.name === 'sttscreen' ||
            route.name === 'gamescreen'
          ),
          cardStyle: {
            backgroundColor:
              route.name === ('selectscreen' && 'sttscreen')
                ? '#f2f7f5'
                : 'white',
          },
        })}
      >
        {/* 로그인 페이지 */}
        <Stack.Screen name="login">
          {props => (
            <GlobalErrorHandler navigation={props.navigation}>
              <LoginScreen {...props} />
            </GlobalErrorHandler>
          )}
        </Stack.Screen>
        {/* 연동 페이지 */}
        <Stack.Screen name="account">
          {props => (
            <GlobalErrorHandler navigation={props.navigation}>
              <AccountScreen {...props} />
            </GlobalErrorHandler>
          )}
        </Stack.Screen>
        {/* 회원가입1 페이지 */}
        <Stack.Screen name="signup1">
          {props => (
            <GlobalErrorHandler navigation={props.navigation}>
              <Signup1Screen {...props} />
            </GlobalErrorHandler>
          )}
        </Stack.Screen>
        {/* 문자 인증 페이지 */}
        <Stack.Screen name="authorization">
          {props => (
            <GlobalErrorHandler navigation={props.navigation}>
              <AuthorizationScreen {...props} />
            </GlobalErrorHandler>
          )}
        </Stack.Screen>
        {/* 회원가입2 페이지 */}
        <Stack.Screen name="signup2">
          {props => (
            <GlobalErrorHandler navigation={props.navigation}>
              <Signup2Screen {...props} />
            </GlobalErrorHandler>
          )}
        </Stack.Screen>
        {/* 메인 페이지 */}
        <Stack.Screen name="main">
          {props => (
            <GlobalErrorHandler navigation={props.navigation}>
              <MainScreen {...props} />
            </GlobalErrorHandler>
          )}
        </Stack.Screen>
        {/* 세팅 페이지 */}
        <Stack.Screen name="setting">
          {props => (
            <GlobalErrorHandler navigation={props.navigation}>
              <SettingScreen {...props} />
            </GlobalErrorHandler>
          )}
        </Stack.Screen>
        {/* 리포트 페이지 */}
        <Stack.Screen name="report">
          {props => (
            <GlobalErrorHandler navigation={props.navigation}>
              <ReportScreen {...props} />
            </GlobalErrorHandler>
          )}
        </Stack.Screen>
        {/* 튜토리얼 페이지 */}
        <Stack.Screen name="tutorial">
          {props => (
            <GlobalErrorHandler navigation={props.navigation}>
              <TutorialScreen {...props} />
            </GlobalErrorHandler>
          )}
        </Stack.Screen>
        {/* 회원 정보 페이지 */}
        <Stack.Screen name="info">
          {props => (
            <GlobalErrorHandler navigation={props.navigation}>
              <InformationScreen {...props} />
            </GlobalErrorHandler>
          )}
        </Stack.Screen>
        {/* 회원 정보 수정 페이지 */}
        <Stack.Screen name="infofix">
          {props => (
            <GlobalErrorHandler navigation={props.navigation}>
              <InformationFixScreen {...props} />
            </GlobalErrorHandler>
          )}
        </Stack.Screen>
        {/* 기록 상세 페이지 */}
        <Stack.Screen name="history">
          {props => (
            <GlobalErrorHandler navigation={props.navigation}>
              <HistoryDetailScreen {...props} />
            </GlobalErrorHandler>
          )}
        </Stack.Screen>
        {/* 스플레쉬 페이지 */}
        <Stack.Screen name="splash">
          {props => (
            <GlobalErrorHandler navigation={props.navigation}>
              <SplashScreen {...props} />
            </GlobalErrorHandler>
          )}
        </Stack.Screen>
        {/* 캐릭터 이름 설정 페이지 */}
        <Stack.Screen name="charactername">
          {props => (
            <GlobalErrorHandler navigation={props.navigation}>
              <CharacterNameScreen {...props} />
            </GlobalErrorHandler>
          )}
        </Stack.Screen>
        {/* STT */}
        <Stack.Screen name="sttscreen">
          {props => (
            <GlobalErrorHandler navigation={props.navigation}>
              <STTScreen {...props} />
            </GlobalErrorHandler>
          )}
        </Stack.Screen>
        {/* 카카오 연동 웹뷰 */}
        <Stack.Screen name="webviewscreen">
          {props => (
            <GlobalErrorHandler navigation={props.navigation}>
              <WebViewScreen {...props} />
            </GlobalErrorHandler>
          )}
        </Stack.Screen>
        {/* 게임 정하기 */}
        <Stack.Screen name="selectscreen">
          {props => (
            <GlobalErrorHandler navigation={props.navigation}>
              <GameSelectScreen {...props} />
            </GlobalErrorHandler>
          )}
        </Stack.Screen>
        {/* 게임 화면 */}
        <Stack.Screen name="gamescreen">
          {props => (
            <GlobalErrorHandler navigation={props.navigation}>
              <GameScreen {...props} />
            </GlobalErrorHandler>
          )}
        </Stack.Screen>
        <Stack.Screen name="eyetracking">
          {props => (
            <GlobalErrorHandler navigation={props.navigation}>
              <EyeTracking {...props} />
            </GlobalErrorHandler>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
