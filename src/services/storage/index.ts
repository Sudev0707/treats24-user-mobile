import AsyncStorage from '@react-native-async-storage/async-storage';

const COUNTRY_CODE_KEY = 'countryCode';
const COUNTRY_KEY = 'country';

export const storeCountryCode = async (countryCode: string) => {
  try {
    await AsyncStorage.setItem(COUNTRY_CODE_KEY, countryCode);
  } catch (error) {
    console.error('Error storing country code:', error);
  }
};

export const getCountryCode = async (): Promise<string | null> => {
  try {
    const value = await AsyncStorage.getItem(COUNTRY_CODE_KEY);
    return value;
  } catch (error) {
    console.error('Error retrieving country code:', error);
    return null;
  }
};

export const storeCountry = async (country: string) => {
  try {
    await AsyncStorage.setItem(COUNTRY_KEY, country);
  } catch (error) {
    console.error('Error storing country:', error);
  }
};

export const getCountry = async (): Promise<string | null> => {
  try {
    const value = await AsyncStorage.getItem(COUNTRY_KEY);
    return value;
  } catch (error) {
    console.error('Error retrieving country:', error);
    return null;
  }
};
