import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import AppRoutes from './src/routes/AppRoutes';
import AuthRoutes from './src/routes/AuthRoutes';
import InternetConnectionNotifier from './src/components/common/InternetConnectionNotifier';
//
import auth from '@react-native-firebase/auth';
//
import { getDBConnection } from './src/database/db';
import { createLocationTable } from './src/database/tables';
import { getCurrentLocationWithAddress } from './src/utils/locationService';
import { saveLocation } from './src/database/queries';
import colors from './src/theme/colors';
import {
  getFirebaseToken,
  removeFirebaseToken,
  saveFirebaseToken,
} from './src/utils/authToken';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

const App: React.FC = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  // firebase auth listner
  console.log('user: ', user);

  useEffect(() => {
    const checkToken = async () => {
      const token = await getFirebaseToken();
      console.log('🔥 Saved token on app start:', token);
    };

    checkToken();
  }, []);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(async firebaseUser => {
      setUser(firebaseUser);

      if (firebaseUser) {
        await saveFirebaseToken();
        setIsLoggedOut(false);
      } else {
        await removeFirebaseToken();
        setIsLoggedOut(true);
      }

      setInitializing(false);

      //
      // if (initializing) setInitializing(false);
    });

    return unsubscribe;
  }, []);

  // db
  useEffect(() => {
    const initApp = async () => {
      try {
        //open db
        const db = await getDBConnection();

        // create location table
        await createLocationTable(db);

        //  fetch location
        getCurrentLocationWithAddress(async location => {
          await saveLocation(db, location);
          // console.log();
        });
      } catch (error) {
        console.log('APP INIT ERROR:', error);
      }
    };

    initApp();
  }, []);

  //
  // if (initializing) {
  //   return (
  //     <View >
  //       <ActivityIndicator size="large" color={colors.brandPrimary} />
  //     </View>
  //   );
  // }

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <View style={styles.container}>
            {/* <InternetConnectionNotifier /> */}
            {user ? <AppRoutes /> : <AuthRoutes isLoggedOut={isLoggedOut} />}
          </View>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
