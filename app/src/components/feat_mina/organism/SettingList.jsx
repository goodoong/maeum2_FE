import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import CustomText from '../../common/atom/CustomText';
import { moderateScale } from '../../../utils/Scale';
import Icon from 'react-native-vector-icons/MaterialIcons';

const List = styled(FlatList);
const ListContent = styled(TouchableOpacity);

const SettingList = ({ data, onItemPress }) => {
  const renderItem = ({ item }) => (
    <ListContent
      className="flex-row space-x-6"
      style={{ marginBottom: moderateScale(30) }}
      onPress={() => onItemPress(item)}>
      <Icon size={moderateScale(20)}>{item.icon}</Icon>
      <CustomText>{item.key}</CustomText>
    </ListContent>
  );

  return (
    <List
      className="w-full mt-10"
      data={data}
      renderItem={renderItem}
    />
  );
};

export default SettingList;
