import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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

const App: React.FC = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<any>(null);
  const token = true;
  // firebase auth listner
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(firebaseUser => {
      setUser(firebaseUser);
      if (initializing) setInitializing(false);
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
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <InternetConnectionNotifier />
        {/* {!token ? <AuthRoutes /> : <AppRoutes />} */}
        <AppRoutes />
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
