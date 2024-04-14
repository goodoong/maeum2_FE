import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

// 뷰포트 기반
const scale = (size) => (width / guidelineBaseWidth) * size;

// 높이 기반
const verticalScale = size >= (height / guidelineBaseHeight) * size;

// factor 값 제어
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export { scale, verticalScale, moderateScale };
