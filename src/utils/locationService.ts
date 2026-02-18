import { PermissionsAndroid, Platform, Alert } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

// Google Cloud APIs (Geocoding, Maps SDK)
// https://maps.googleapis.com/maps/api/geocode/json?latlng=22.59787,86.472642&key=YOUR_API_KEY

// -----
export const requestLocationPermission = async (): Promise<boolean> => {
  if (Platform.OS === 'ios') return true;

  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    {
      title: 'Location Permission',
      message: 'App needs access to your location',
      buttonPositive: 'OK',
      buttonNegative: 'Cancel',
    },
  );

  console.log('Permission result:', granted);
  return granted === PermissionsAndroid.RESULTS.GRANTED;
};

// ======
export const getCurrentLocationWithAddress = async (
  onSuccess: (data: {
    latitude: number;
    longitude: number;
    area: string;
    city: string;
    state: string;
    district: string;
    pincode: string;
    country: string;
    country_code: string;
  }) => void,
) => {
  const hasPermission = await requestLocationPermission();
  if (!hasPermission) {
    Alert.alert('Permission denied');
    return;
  }

  Geolocation.getCurrentPosition(
    async position => {
      const { latitude, longitude } = position.coords;
      console.log('LAT/LNG:', latitude, longitude);

      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
          {
            headers: {
              'User-Agent': 'ReactNativeApp/1.0',
            },
          },
        );

        const data = await response.json();
        console.log('RAW RESPONSE:', data);

        const address = data.address || {};
        const area =
          address.neighbourhood ||
          address.locality ||
          address.suburb ||
          address.village ||
          address.hamlet ||
          '';

        onSuccess({
          latitude,
          longitude,
          area,
          // address.suburb ||
          // address.neighbourhood ||
          // address.village ||
          // address.hamlet ||
          // '',
          city: address.city || address.town || address.municipality || '',
          state: address.state || '',
          district: address.state_district || '',
          pincode: address.postcode || '',
          country: address.country || '',
          country_code: address.country_code || '',
        });
      } catch (error) {
        console.log('FETCH ERROR:', error);
        Alert.alert('Error', 'Failed to fetch address');
      }
    },
    error => {
      console.log('LOCATION ERROR:', error);
      Alert.alert('Location Error', error.message);
    },
    {
      accuracy: {
        android: 'high',
        ios: 'best',
      },
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 0,
      forceRequestLocation: true,
      showLocationDialog: true,
    },
  );
};

type LocationSuccessCallback = (coords: {
  latitude: number;
  longitude: number;
}) => void;

export const getCurrentLocation = async (
  onSuccess: LocationSuccessCallback,
) => {
  const hasPermission = await requestLocationPermission();

  if (!hasPermission) {
    Alert.alert('Permission denied');
    return;
  }

  Geolocation.getCurrentPosition(
    async position => {
      console.log('POSITION:', position);
    },
    error => {
      console.log('LOCATION ERROR:', error);
      Alert.alert('Location Error', error.message);
    },
    {
      accuracy: {
        android: 'high',
        ios: 'best',
      },
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 0,
      forceRequestLocation: true,
      showLocationDialog: true,
    },
  );
};
