import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '@features/auth/SplashScreen';
import {navigationRef, RoutesName} from '@utils/NavigationUtils';
import CustomerLogin from '@features/auth/CustomerLogin';
import DeliveryLogin from '@features/auth/DeliveryLogin';

const Stack = createNativeStackNavigator();

const Navigation: FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={RoutesName.SplashScreen}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={RoutesName.SplashScreen} component={SplashScreen} />
        <Stack.Screen
          options={{
            animation: 'fade',
          }}
          name={RoutesName.CustomerLogin}
          component={CustomerLogin}
        />
        <Stack.Screen
          options={{
            animation: 'fade',
          }}
          name={RoutesName.DeliveryLogin}
          component={DeliveryLogin}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
