import React from 'react';
import {View, Button} from 'react-native';

function AccountScreen({navigation}) {
  return (
    <View>
      <Button title="Login" onPress={() => navigation.navigate('Main')} />
    </View>
  );
}

export default AccountScreen;
