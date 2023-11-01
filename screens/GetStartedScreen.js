import React from 'react';
import { View, Text, Button } from 'react-native';

const GetStartedScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Get Started Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default GetStartedScreen;
