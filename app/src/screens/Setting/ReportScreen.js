import React from "react";
import { Text } from "react-native";

import ReportTemplate from "../../components/feat_yunsun/templates/ReportTemplate";

const data = [
    { id: 1, date: '2024-03-26T09:26:00' },
    { id: 2, date: '2024-03-26T10:30:00' },
    { id: 3, date: '2024-03-26T11:45:00' },
  ];

const ReportScreen = ({navigation}) => {
    return (
        <ReportTemplate  navigation={navigation} data={data}/>
        
    )
}

export default ReportScreen;