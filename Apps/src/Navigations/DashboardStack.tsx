import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/DashboardScreens/HomeTabScreens/Home';
import Explore from '../Screens/DashboardScreens/ExploreTabScreens/Explore';
import AddPost from '../Screens/DashboardScreens/AddPostTabScreens/AddPost';
import Profile from '../Screens/DashboardScreens/ProfileTabScreens/Profile';
const Tab = createBottomTabNavigator();

const DashboardStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Add Post" component={AddPost} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default DashboardStack;
