import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';

import LoginView from './src/views/LoginView';

const App = () => {
  // State to keep track of user login status, later to be replaced with user provider
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <BottomTabNavigator />
      ) : (
        <LoginView onLoginSuccess={() => setIsLoggedIn(true)} />
      )}
    </NavigationContainer>
  );
};

export default App;
