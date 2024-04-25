import {View, SafeAreaView} from 'react-native';
import {width,height} from '../../../utils/Scale';

const Container = ({children}) => {
  const customStyle = {
    width: width,
    height: height,
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
