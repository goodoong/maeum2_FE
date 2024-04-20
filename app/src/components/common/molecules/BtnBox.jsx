import React from 'react';
import CustomBtn from '../atom/CustomBtn';
import { View } from 'react-native';


const BtnBox = ({ buttons }) => { 
    return (
        <View> 
            {buttons.map((button, index) => (
                <CustomBtn
                    key={index}
                    onPress={button.onPress}
                    size={button.size}
                    color={button.color}
                    rounded={button.rounded}
                    title={button.title}
                />
            ))}
        </View>
    );
};

export default BtnBox;
