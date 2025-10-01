import React from 'react';
import BtnBox from '../../common/molecules/BtnBox';
import useAccountLogin from '../../../hooks/useAccountLogin';
import { useNavigation } from '@react-navigation/native';
import Loading from '../../common/atom/Loading';

const AccountBtnBox = () => {
  const navigation = useNavigation();
  const { isKakaoLogin, moveExternalPage } = useAccountLogin(navigation);

  const buttons = [
    {
      onPress: () => moveExternalPage('https://kauth.kakao.com/oauth/authorize?client_id=16377adaf909fad8a1d0899449c9cc88&redirect_uri=http://localhost:8081/kakao/callback&response_type=code'),
      size: 'lg',
      color: 'buttonwhite',
      rounded: true,
      title: '카카오 로그인',
      borderColor: 'lightgray',
      borderWidth: true,
      img: require('./../../../assets/Images/Kakaotalk.png'),
    },
    // {
    //   onPress: () => moveExternalPage('https://accounts.google.com/o/oauth2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=http://localhost:8081/google/callback&response_type=code&scope=email profile'),
    //   size: 'lg',
    //   color: 'buttonwhite',
    //   rounded: true,
    //   title: '구글 로그인',
    //   borderColor: 'lightgray',
    //   borderWidth: true,
    //   img: require('./../../../assets/Images/Google.png'),
    // },
  ];

  return (
    <BtnBox buttons={buttons} />
  );
};

export default AccountBtnBox;
