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
      {/* Add other tabs if needed */}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
