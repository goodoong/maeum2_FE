import React, {useEffect} from 'react';
import useMoveNavigation from '../../hooks/useMoveNavigation';
import Container from '../../components/common/atom/Container';
import CustomTitle from '../../components/common/atom/CustomTitle';
import CustomBtn from '../../components/common/atom/CustomBtn';

const LoginScreen = ({navigation}) => {
  useEffect(() => {}, []);

  const moveScreen = useMoveNavigation(navigation);

  const handlePress = () => {
    moveScreen('account');
  };

  return (
    <Container>
      <CustomTitle>마음의 창</CustomTitle>
      <CustomBtn
        size="sm"
        color="buttonyellow"
        rounded={true}
        onPress={handlePress}
        title="회원 가입"
      />
      <CustomBtn
        size="sm"
        color="buttonpink"
        rounded={true}
        onPress={handlePress}
        title="로그인"
      />
    </Container>
  );
};

export default LoginScreen;
