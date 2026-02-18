// import * as SQLite from 'react-native-sqlite-storage';
import SQLite, { SQLiteDatabase } from 'react-native-sqlite-storage';

// SQLite.DEBUG(true);
SQLite.enablePromise(true);

export const getDBConnection = async (): Promise<SQLiteDatabase> => {
  return SQLite.openDatabase({
    name: 'treats.db',
    location: 'default',
  });
};
