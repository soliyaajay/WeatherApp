import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import MainTabs from './MainTabs';

import Splash from '../../src/screens/Spash';
import Home from '../../src/screens/Home';
import Map from '../../src/screens/Map';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{title: 'Splash', headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: 'Home', headerShown: false, gestureEnabled: false}}
      />
      <Stack.Screen
        name="Map"
        component={Map}
        options={{title: 'Map', headerShown: false, gestureEnabled: false}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
