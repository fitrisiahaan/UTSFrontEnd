import React from 'react';
import { View, Text, Button } from 'react-native';

const SplashScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Splash Screen</Text>
      <Button
        title="Go to Get Started"
        onPress={() => navigation.navigate('GetStarted')}
      />
    </View>
  );
};

export default SplashScreen;
