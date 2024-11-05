import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeView from '../views/HomeView';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={HomeView} 
        options={{ title: 'Home' }}
      />
      {/* Add more Tab.Screen components here if you want additional tabs */}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
