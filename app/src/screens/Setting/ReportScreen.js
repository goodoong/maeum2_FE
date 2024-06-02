import React from "react";
import { Text } from "react-native";

import ReportTemplate from "../../components/feat_yunsun/templates/ReportTemplate";

const data = [
    { id:'1', date: '2024-03-1' },
    { id:'2', date: '2024-03-2' },
    { id:'3', date: '2024-03-3' },
]

const ReportScreen = ({navigation}) => {
    return (
        <ReportTemplate  navigation={navigation} data={data} />
        
    )
}

export default ReportScreen;