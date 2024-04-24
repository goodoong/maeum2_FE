import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 390;
const guidelineBaseHeight = 680;

// 뷰포트기반
const scale = size => width / guidelineBaseWidth * size;

// 높이기반
const verticalScale = size => height / guidelineBaseHeight * size;

// factor값 제어
const moderateScale = (size, factor = 0.5) => size + ( scale(size) - size ) * factor;

export {scale, verticalScale, moderateScale, width, height};