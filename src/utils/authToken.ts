

import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = 'FIREBASE_TOKEN';

export const saveFirebaseToken = async () => {
  const user = auth().currentUser;

  if (!user) {
    throw new Error('User not logged in');
  }

  const token = await user.getIdToken(true); // force refresh
  await AsyncStorage.setItem(TOKEN_KEY, token);

  return token;
};

export const getFirebaseToken = async () => {
  return AsyncStorage.getItem(TOKEN_KEY);
};

export const removeFirebaseToken = async () => {
  await AsyncStorage.removeItem(TOKEN_KEY);
};

