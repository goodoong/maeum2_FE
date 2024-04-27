import {View, SafeAreaView} from 'react-native';
import {width, height} from '../../../utils/Scale';
import {scale} from '../../../utils/Scale';

const Container = ({children}) => {
  const customStyle = {
    width: width,
    height: height,
    alignItems: 'center',
    padding: scale(20),
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
