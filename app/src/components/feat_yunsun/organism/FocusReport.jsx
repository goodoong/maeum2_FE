import { BarChart } from "react-native-gifted-charts";
import React from "react";
import { View } from "react-native";
import { scale } from "../../../utils/Scale";
import CustomText from "../../common/atom/CustomText";
import { styled } from "nativewind";
import Icon from 'react-native-vector-icons/AntDesign';

const Box = styled(View);

const FocusReport = () => {
    const barData = [
        {value: 10, label: '월'},
        {value: 50, label: '화'},
        {value: 75, label: '수'},
        {value: 30, label: '목'},
        {value: 60, label: '금', frontColor: '#FF7FA0'},
        {value: 0, label: '토'},
        {value: 0, label: '일'},
    ];
    return (
        <Box  className="flex flex-col space-y-4" style={{width: '95%', height:'50%', marginTop:scale(30)}}>
            <Box className="flex flex-row justify-center space-x-4">
            <CustomText size='lg'>56분</CustomText>
            <Icon name="arrowup" size={30} color="#FF7FA0" />
            </Box>
            <Box className="flex flex-row justify-center space-x-4" style={{marginBottom:scale(40)}}>
            <CustomText size='sm'color='lightblack'>지난 게임보다 10분 더 집중했어요!</CustomText>
            </Box>
            <BarChart
                barWidth={scale(22)}
                noOfSections={1}
                barBorderRadius={4}
                frontColor="#FAAE2B"
                data={barData}
                yAxisThickness={0}
                xAxisThickness={0}
                hideYAxisText
            
            />
        </Box>
    );
};

export default FocusReport;