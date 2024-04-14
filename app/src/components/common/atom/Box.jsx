import {ScrollView, SafeAreaView} from 'react-native';
import {moderateScale, scale, verticalScale} from '../../../utils/Scale';

const Box = ({children}) => {
	const customStyle = {
		width: moderateScale(300),
		height: verticalScale(450),
		padding: scale(10),
	};

	return (
	  <SafeAreaView>
		<ScrollView contentInsetAdjustmentBehavior="automatic" style={customStyle}>{children}</ScrollView>
     </SafeAreaView>
	)
}

export default Box;
