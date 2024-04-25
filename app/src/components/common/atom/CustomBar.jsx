import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';
import { moderateScale, verticalScale } from '../../../utils/Scale';

const CustomBar = ({rate}) => {
  const styles = StyleSheet.create({
    columcenter: {
      flexDirection:'column',
      justifyContent: "center",
      alignItems: "center"
    }
  });
return (
<View style={styles.columcenter}>
       <Progress.Bar 
       progress={rate/100}
          width={moderateScale(327)}
          height={verticalScale(4)}
          marginTop={10}
          borderWidth={0}
          color={'#FFA8BA'}
          unfilledColor={'#E3E5E5'}
        />
    </View>
  );
};




export default CustomBar;