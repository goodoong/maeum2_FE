import {View} from 'react-native';
import {moderateScale, scale, verticalScale} from '../../../utiles/Scale';

const Box = ({children}) => {
	const customStyle = {
		width: moderateScale(300),
		height: verticalScale(450),
		padding: scale(10),
	};

	return <View style={customStyle}>{children}</View>;
};

export default Box;
