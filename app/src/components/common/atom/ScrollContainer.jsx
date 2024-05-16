import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { scale, width } from '../../../utils/Scale';

const ScrollContainer = ({children}) => {
  // 태블릿 판별 기준 설정 (너비 기준)
  const isTablet = width >= 300; // 300dp를 기준으로 태블릿 판별

  const customStyle = {
    width: width,
    height: '100%',
    alignItems: "center",
    justifyContent: "center",
    padding:scale(10)
  };

  // 디바이스가 태블릿인 경우 ScrollView 사용, 그렇지 않으면 View 사용
  const ScrollViewComponent = isTablet ? ScrollView : View;

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollViewComponent style={{flex: 1}}>
        <View style={{flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View contentInsetAdjustmentBehavior="automatic" style={customStyle}>
            {children}
          </View>
        </View>
      </ScrollViewComponent>
    </SafeAreaView>
  );
};

export default ScrollContainer;
