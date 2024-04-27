import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {styled} from 'nativewind';
import Container from '../../common/atom/Container';
import SettingProfile from '../organism/SettingProgfile';
import CustomBtn from '../../common/atom/CustomBtn';
import CustomText from '../../common/atom/CustomText';
import { settingList1 } from '../constant/data';
import { scale, moderateScale } from '../../../utils/Scale';
import Icon from 'react-native-vector-icons/MaterialIcons';


const List = styled(FlatList);
const ListContent = styled(TouchableOpacity)

const Settingtemplate = ({navigation}) => {

  const moveReportScreen = () => {
    navigation.push('report');
  };

  const renderItem = ({ item }) => (
    // space 적용 안됨 오류 
    <ListContent className="flex-row space-x-10" style={{marginBottom:scale(30)}} onPress={() => navigation.navigate(item.screen)}>
      <Icon size={moderateScale(20)} >{item.icon}</Icon><CustomText>{item.key}</CustomText>
    </ListContent>
  );

  return (
    <Container>
      <SettingProfile />
      <CustomBtn
        size="lg"
        color="buttonpink"
        rounded={true}
        title="발전 현황 리포트"
        onPress={moveReportScreen}
      />
       <List
       className="w-full mt-10"
      data={settingList1}
      renderItem={renderItem}
    />
    </Container>
  );
};

export default Settingtemplate;
