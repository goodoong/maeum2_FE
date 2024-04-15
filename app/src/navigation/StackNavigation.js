import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from "../screens/Auth/LoginScreen"
import AccountScreen from '../screens/Auth/AccountScreen';
import AuthorizationScreen from "../screens/Auth/AuthorizationScreen"
import Signup1Screen from '../screens/Auth/Signup1Screen';
import Signup2Screen from '../screens/Auth/Signup2Screen';
import MainScreen from '../screens/MainScreen';


/** 
 * StackNavigator를 이용하여서 앱에 대한 페이지 이동을 관리합니다.
*/
const StackNavigation = () => {

    // RootStackPageList에서 페이지를 관리합니다
    const Stack = createStackNavigator();

    
    const customStackNavigationOptions = {
        gestureEnabled: false,
        title: ''
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
            <Stack.Navigator initialRouteName={"home"} screenOptions={customStackNavigationOptions}>
                {/* 로그인 페이지 */}
                <Stack.Screen name="login">
                    {(props) => <LoginScreen {...props} />}    
                </Stack.Screen>
                {/* 연동 페이지 */}
                <Stack.Screen name="account">
                    {(props) => <AccountScreen {...props} />}
                </Stack.Screen>
                {/* 회원가입1 페이지 */}
                <Stack.Screen name="signup1">
                    {(props) => <Signup1Screen {...props} />}
                </Stack.Screen>
                <Stack.Screen name="authorization">
                    {(props) => <AuthorizationScreen {...props} />}
                </Stack.Screen>
                {/* 회원가입2 페이지 */}
                <Stack.Screen name="signup2">
                    {(props) => <Signup2Screen {...props} />}
                </Stack.Screen>
                {/* 메인 페이지 */}
                <Stack.Screen name="main">
                    {(props) => <MainScreen {...props} />}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer >
    );
};

export default StackNavigation;
