import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import locationStyles from '../styles/screens/SetLocationStyles';
import Header from '../components/common/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import SavedAddressCard from '../components/common/SavedAddressCard';
import { savedAddress } from '../data/savedAddress';
//
import { getDBConnection } from '../database/db';
import { saveLocation } from '../database/queries';

//
import {
  getCurrentLocation,
  getCurrentLocationWithAddress,
} from '../utils/locationService';
import { useNavigation } from '@react-navigation/native';
import colors from '../theme/colors';
import Button from '../components/common/Button';

interface LocationType {
  latitude: number;
  longitude: number;
  area: string;
  city: string;
  state: string;
  district: string;
  pincode: string;
  country: string;
  country_code: string;
}

//

const SetLocation: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState<LocationType | null>(null);
  const [proceedLoading, setProceedLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    // simulate API
    handleCurrentLocation();

    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  //
  const handleCurrentLocation = async () => {
    setLoading(true);

    getCurrentLocationWithAddress(locationData => {
      setLocation(locationData);
      setLoading(false);
    });
    // if (!location) return;
    // const db = await getDBConnection();
    // await saveLocation(db, location);
  };

  //
  const handleProceed = async () => {
    if (!location) return;
    setProceedLoading(true);
    const db = await getDBConnection();
    await saveLocation(db, location);
    setProceedLoading(false);
    navigation.navigate('MainTabs' as never);
  };

  //   ---
  const ActionButton = ({ icon, label, onPress }: any) => {
    return (
      <TouchableOpacity style={locationStyles.actionButton} onPress={onPress}>
        {icon}
        <Text style={locationStyles.actionText}>{label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={locationStyles.safeArea}>
      <StatusBar backgroundColor="" barStyle="dark-content" />
      <Header showBackButton={true} title="Select Location" />

      <View style={locationStyles.container}>
        <View style={locationStyles.searchContainer}>
          <Feather name="search" size={20} color="#999" />
          <TextInput
            placeholder="Search an area or address"
            placeholderTextColor="#999"
            style={locationStyles.searchInput}
          />
        </View>

        <View style={locationStyles.actionRow}>
          <ActionButton
            icon={
              <MaterialIcons
                name="my-location"
                size={22}
                color={colors.brandPrimary}
              />
            }
            label="Use Current Location"
            onPress={handleCurrentLocation}
          />
          <ActionButton
            icon={
              <MaterialIcons
                name="add-location-alt"
                size={22}
                color={colors.brandPrimary}
              />
            }
            label="Add New Address"
          />
          {/* <ActionButton
            icon={<Ionicons name="logo-whatsapp" size={22} color="#25D366" />}
            label="Request Address"
          /> */}
        </View>

        {/* Saved Address */}
        <Text style={locationStyles.sectionTitle}>SAVED ADDRESSES</Text>
        <View style={{ flex: 1 }}>
          <FlatList
            data={savedAddress}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 180, paddingTop: 5 }}
            renderItem={({ item }) => (
              <>
                {/* <SavedAddressCard
                title={item.title}
                address={item.address}
                distance={item.distance}
                icon={item.icon}
                onMorePress={() => ''}
              /> */}
              </>
            
            )}
            //   onEndReached={()=> ''}
            onEndReachedThreshold={0.2}
            ListEmptyComponent={
              <View style={{ alignItems: 'center', marginTop: 50 }}>
                <Feather
                  name="inbox"
                  size={60}
                  color="#ccc"
                  style={{ marginBottom: 20 }}
                />

                <Text
                  style={{ textAlign: 'center', color: '#999', fontSize: 14 }}
                >
                  No saved addresses found
                </Text>
              </View>
            }
          />
        </View>

        {/* Current Address Container */}
        <View style={locationStyles.currentAddressContainer}>
          {/* <View>
            {location && (
              <View style={{ marginTop: 20 }}>
                <Text>Latitude: {location.latitude}</Text>
                <Text>Longitude: {location.longitude}</Text>
                <Text>Area: {location.area}</Text>
                <Text>City: {location.city}</Text>
                <Text>State: {location.state}</Text>
                <Text>District: {location.district}</Text>
                <Text>Pincode: {location.pincode}</Text>
                <Text>Country: {location.country}</Text>
              </View>
            )}
          </View> */}
          <View style={locationStyles.addressRow}>
            <View style={locationStyles.locationIcon}>
              <Feather name="map-pin" size={18} color={colors.brandPrimary} />
            </View>

            {loading ? (
              <View style={{ marginStart: 125, justifyContent: 'center' }}>
                <ActivityIndicator
                  size="small"
                  color={colors.brandPrimary}
                  style={{ marginTop: 15 }}
                />
              </View>
            ) : (
              <View style={locationStyles.addressTextContainer}>
                <Text style={locationStyles.currentAddressTitle}>
                  {location?.city}
                </Text>
                <Text
                  style={locationStyles.currentAddressText}
                  numberOfLines={2}
                >
                  {location?.city}, {location?.state}, {location?.country},{' '}
                  {location?.pincode}
                </Text>
              </View>
            )}
          </View>

          <View style={locationStyles.buttonRow}>
            <Button
              title="Confirm & proceed"
              variant="outlined"
              onPress={handleProceed}
              isPhoneValid={!!location}
              loading={proceedLoading}
            />
            {/* <TouchableOpacity
              style={locationStyles.confirmBtn}
              onPress={handleProceed}
            >
              <Text style={locationStyles.confirmBtnText}>
                Confirm & Proceed
              </Text>
            </TouchableOpacity> */}

            {/* <TouchableOpacity style={styles.proceedBtn}>
              <Text style={styles.proceedBtnText}>Proceed</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SetLocation;

const styles = StyleSheet.create({});
