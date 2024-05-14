import React from "react";
import BtnBox from "../../common/molecules/BtnBox";

const AccountBtnBox =({ navigation }) =>{
    const moveSignup1Screen = (screen) => {
        navigation.push(screen);
    }
  
    const buttons = [
        {
          onPress: () => moveSignup1Screen('signup1'),
          size: 'lg',
          color: 'buttonwhite',
          rounded: true,
          title: '카카오 로그인',
          borderColor: true,
          borderWidth : true,
          img: require('./../../../assets/Images/Images/Kakaotalk.png')
          
        },
        {
          onPress: () => moveSignup1Screen('signup1'),
          size: 'lg',
          color: 'buttonwhite',
          rounded: true,
          title: '구글 로그인',
          borderColor: true,
          borderWidth : true,
          img: require('./../../../assets/Images/Images/Google.png')
        }
      ];
    return(
        <BtnBox buttons={buttons} />
    );
}

export default AccountBtnBox;