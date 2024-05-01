import React, { useRef } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text,Button } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
    <Swiper autoplay={false} circleloop={true} ref={swiperRef}>
      <Slide uri={"https://source.unsplash.com/1024x768/?nature"} />
      <Slide uri={"https://source.unsplash.com/1024x768/?water"} />
      <Slide uri={ "https://source.unsplash.com/1024x768/?girl"} />
    </Swiper>
    <View style={styles.buttonContainer}>
    <Icon name='arrow-circle-left' size={50} color='#FFA8BA' onPress={goToPreviousSlide} />
    <Icon name='arrow-circle-right' size={50} color='#FFA8BA' onPress={goToNextSlide} /> 
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