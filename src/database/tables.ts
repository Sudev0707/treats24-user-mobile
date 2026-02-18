import { SQLiteDatabase } from 'react-native-sqlite-storage';
//
// Promise<void> : Function returns a Promise That promise resolves to nothing (void)
// s


export const createLocationTable = async (
  db: SQLiteDatabase,
): Promise<void> => {
  const query = `CREATE TABLE IF NOT EXISTS location(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        latitude REAL,
        longitude REAL,
        area TEXT,
        city TEXT,
        state TEXT,
        district TEXT,
        pincode TEXT,
        country TEXT,
        country_code TEXT,
        updated_at TEXT
    )`;
  await db.executeSql(query);
};



//
// export const createTables = async (db: SQLiteDatabase) => {
//   const query = `
//     CREATE TABLE IF NOT EXISTS tasks (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       title TEXT NOT NULL,
//       description TEXT,
//       completed INTEGER DEFAULT 0,
//       created_at TEXT
//     );
//   `;
//   await db.executeSql(query);
// };
