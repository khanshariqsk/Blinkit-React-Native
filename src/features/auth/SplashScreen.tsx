import {View, StyleSheet, Image, Alert} from 'react-native';
import React, {useEffect} from 'react';
import {Colors} from '@utils/Constants';
import {screenHeight, screenWidth} from '@utils/Scaling';
import Logo from '@assets/images/splash_logo.jpeg';

import GeoLocation from '@react-native-community/geolocation';
import {tokenStorage} from '@state/storage';
import {resetAndNavigate, RoutesName} from '@utils/NavigationUtils';

GeoLocation.setRNConfiguration({
  skipPermissionRequests: false,
  authorizationLevel: 'always',
  enableBackgroundLocationUpdates: true,
  locationProvider: 'auto',
});

const SplashScreen = () => {
  const tokenCheck = async () => {
    const accessToken = tokenStorage.getString('accessToken');
    const refreshToken = tokenStorage.getString('refreshToken');

    if (accessToken) {
    }

    resetAndNavigate(RoutesName.CustomerLogin);
  };

  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        GeoLocation.requestAuthorization();
        tokenCheck();
      } catch (error) {
        Alert.alert(
          'Sorry we need location service to give you better shopping experience',
        );
      }
    };
    const timeoutId = setTimeout(fetchUserLocation, 1000);
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logoImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: screenWidth * 0.7,
    height: screenHeight * 0.7,
    resizeMode: 'contain',
  },
});

export default SplashScreen;
