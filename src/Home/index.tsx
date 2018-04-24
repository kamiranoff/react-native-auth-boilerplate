import React from 'react';
import { View, Text } from 'react-native';

const Home = () => (
  <View>
    <Text>Signed In</Text>
  </View>
);

(Home as React.SFC).displayName = 'Home';

export default Home;
