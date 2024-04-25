import React, { useRef } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text,Button } from 'react-native';
import Swiper from 'react-native-swiper';
import { moderateScale } from '../../../utils/Scale';
import NextButton from './NextButton';
import DirectionButton from './DirectionButton';

const ImageSlide = () => {
    const swiperRef = useRef(null);

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
  const Slide = ({ uri }) => (
    <View style={styles.slide}>
      <Image source={{ uri }} style={styles.image} />
    </View>
  );
  return (
    <View>
    <Swiper style={styles.wrapper} autoplay={false} circleloop={true} ref={swiperRef}>
      <Slide uri={"https://source.unsplash.com/1024x768/?nature"} />
      <Slide uri={"https://source.unsplash.com/1024x768/?water"} />
      <Slide uri={ "https://source.unsplash.com/1024x768/?girl"} />
    </Swiper>
    <View style={styles.buttonContainer}>
       
        <DirectionButton direction="<"  onPress={goToPreviousSlide}/>
        <NextButton onPress={goToNextSlide} />
       
  </View>
  </View>
  );
};



const styles = StyleSheet.create({
  
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'center',
  },
  buttonContainer: {
    flex: 0.5,
    flexDirection: 'row',
   justifyContent: 'space-between',
   height: '5%'
  },
 });

export default ImageSlide;