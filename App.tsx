import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginStack from './Apps/src/Navigations/LoginStack';
import DashboardStack from './Apps/src/Navigations/DashboardStack';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginStack" component={LoginStack} />
        <Stack.Screen name="DashboardStack" component={DashboardStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
