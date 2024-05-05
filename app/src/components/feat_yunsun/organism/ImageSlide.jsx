import React, { useRef, useState } from 'react';
import { View, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomSlide from '../atom/CustomSlide';
import { styled } from 'nativewind';
import CustomBtn from '../../common/atom/CustomBtn';

const SlideBox = styled(View);

const ImageSlide = ({route, navigation}) => {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const moveMainScreen = () => {
    navigation.push('main');
  };
  const goToPreviousSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy(-1, true);
    }
  };
  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy(1, true);
    }
  };
  const onIndexChanged = (index) => {
    setCurrentIndex(index);
  };

 const ChangeBtn =()=>{
  if(currentIndex>=5){
    return(
    <CustomBtn size='sm' rounded={'true'} color='buttonpink' title={'메인'} onPress={moveMainScreen}/>
    );
  }
  else{
    return(
    <Icon name='arrow-circle-right' size={50} color='#FFA8BA' onPress={goToNextSlide} />
    );
  }
  };
  return (
    <View>
      <SlideBox className='basis-2/3 justify-center'>
        <Swiper autoplay={false} loop={true} ref={swiperRef} onIndexChanged={onIndexChanged}>
          <CustomSlide source={require('./../../../assets/Images/Tutorial1.png')} text="음성과 카메라 접근에 허용해주세요!" />
          <CustomSlide source={require('./../../../assets/Images/Tutorial2.png')} text="똑똑이와 스무고개를 시작해보세요!" />
          <CustomSlide source={require('./../../../assets/Images/Tutorial3.png')} text="원하는 순서와 주제를 고를땐아래의 버튼을 클릭해요" />
          <CustomSlide source={require('./../../../assets/Images/Tutorial4.png')} text="게임을 할 땐 마이크 버튼을 꾹 누르고 이야기 해보세요!" />
          <CustomSlide source={require('./../../../assets/Images/Tutorial5.png')} text="똑똑이와 눈을 마주치면서 대화해보세요!" />
          <CustomSlide source={require('./../../../assets/Images/Tutorial6.png')} text="질문 횟수 설명 정답이면 버튼을 눌러줘" />
        </Swiper>
      </SlideBox>
      <View style={styles.buttonContainer}>
        <Icon name='arrow-circle-left' size={50} color='#FFA8BA' onPress={goToPreviousSlide} />
        <ChangeBtn/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
  buttonContainer: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '5%',
  },
  currentIndexText: {
    textAlign: 'center',
    marginTop: 10,
  },
});

export default ImageSlide;
