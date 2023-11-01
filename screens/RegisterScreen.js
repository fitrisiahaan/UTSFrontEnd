import React from 'react';
import { View, Text, Button } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Register Screen</Text>
      <Button
        title="Go back to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default RegisterScreen;
