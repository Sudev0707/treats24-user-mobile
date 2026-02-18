import { SQLiteDatabase } from 'react-native-sqlite-storage';
import { locationdata } from './types';

// location queries ==================================
export const saveLocation = async (
  db: SQLiteDatabase,
  location: locationdata,
): Promise<void> => {
  const query = `INSERT INTO location(
      latitude,
      longitude,
      area,
      city,
      state,
      district,
      pincode,
      country,
      country_code,
      updated_at
    )  
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?) `;

  await db.executeSql(query, [
    location.latitude,
    location.longitude,
    location.area,
    location.city,
    location.state,
    location.district,
    location.pincode,
    location.country,
    location.country_code,
    new Date().toISOString(),
  ]);
};

// --
export const getSavedLocation = async (db: SQLiteDatabase) => {
  const query = `SELECT * FROM location ORDER BY id DESC LIMIT 1;`;
  const results = await db.executeSql(query);

  if (results[0].rows.length > 0) {
    return results[0].rows.item(0);
  }

  return null;
};

// --
export const getStoredLocation = async (
  db: SQLiteDatabase,
): Promise<locationdata | null> => {
  const results = await db.executeSql(`SELECT * FROM location LIMIT 1`);

  const rows = results[0].rows;
  if (rows.length === 0) return null;

  const item = rows.item(0);
  return {
    latitude: item.latitude,
    longitude: item.longitude,
    area: item.area,
    city: item.city,
    state: item.state,
    district: item.district,
    pincode: item.pincode,
    country: item.country,
    country_code: item.country_code,
  };
};
