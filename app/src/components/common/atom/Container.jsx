import {View, SafeAreaView} from 'react-native';
import {moderateScale, scale, verticalScale} from '../../../utils/Scale';

const Container = ({children}) => {
  const customStyle = {
    width: moderateScale(390),
    height: verticalScale(680),
    alignItems: 'center',
  };

  return (
    <SafeAreaView>
      <View contentInsetAdjustmentBehavior="automatic" style={customStyle}>
        {children}
      </View>
    </SafeAreaView>
  );
};

export default Container;
