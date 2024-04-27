import React from 'react';
import {View} from 'react-native';
import {styled} from 'nativewind';
import Container from '../../common/atom/Container';
import SettingProfile from '../organism/SettingProgfile';

const Settingtemplate = ({navigation}) => {
  return (
    <Container>
      <SettingProfile />
    </Container>
  );
};

export default Settingtemplate;
