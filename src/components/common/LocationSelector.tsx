import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import SavedAddressCard from './SavedAddressCard';
import { savedAddress } from '../../data/savedAddress';
import {
  getCurrentLocation,
  getCurrentLocationWithAddress,
} from '../../utils/locationService';
import colors from '../../theme/colors';
import Button from './Button';
import { getDBConnection } from '../../database/db';
import { saveLocation } from '../../database/queries';

interface LocationOptionProps {
  iconName: string;
  title: string;
  subtitle?: string;
  onPress?: () => void;
}

const LocationOption: React.FC<LocationOptionProps> = ({
  iconName,
  title,
  subtitle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.locationOption}
      onPress={onPress}
    >
      <MaterialIcons
        name={iconName}
        size={22}
        color={colors.brandPrimary}
      />
      <View style={styles.locationOptionTextContainer}>
        <Text style={styles.locationOptionTitle}>{title}</Text>
        {subtitle && <Text style={styles.locationOptionSubTitle}>{subtitle}</Text>}
      </View>
      <MaterialIcons
        name="chevron-right"
        size={30}
        color={colors.brandPrimary}
      />
    </TouchableOpacity>
  );
};

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

interface LocationSelectorProps {
  onClose: () => void;
  onLocationSelect: (location: LocationType) => void;
}

const LocationSelector: React.FC<LocationSelectorProps> = ({
  onClose,
  onLocationSelect,
}) => {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState<LocationType | null>(null);

  useEffect(() => {
    handleCurrentLocation();
  }, []);

  const handleCurrentLocation = async () => {
    setLoading(true);
    getCurrentLocationWithAddress(locationData => {
      setLocation(locationData);

      setLoading(false);
      handleProceed();
    });
  };

  const handleProceed = async () => {
    if (!location) return;
    const db = await getDBConnection();
    await saveLocation(db, location);
    onLocationSelect(location);
    onClose();
  };

  const ActionButton = ({ icon, label, onPress }: any) => {
    return (
      <TouchableOpacity style={styles.actionButton} onPress={onPress}>
        {icon}
        <Text style={styles.actionText}>{label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose}>
            <Feather name="x" size={24} color={colors.darkBlack} />
          </TouchableOpacity>
          <Text style={styles.title}>Select Location</Text>
          <View style={styles.spacer} />
        </View>
        <View style={styles.searchContainer}>
          <Feather name="search" size={20} color="#999" />
          <TextInput
            placeholder="Search an area or address"
            placeholderTextColor="#999"
            style={styles.searchInput}
          />
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.locationOptionsContainer}>
          <View>
            <LocationOption
              iconName="my-location"
              title="Use Current Location"
              subtitle={location?.city}
              onPress={handleCurrentLocation}
            />

            <View style={styles.separator} />

            <LocationOption
              iconName="add-location-alt"
              title="Add New Address"
            />
          </View>

          {/* <View style={styles.actionRow}>
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
              label="Add Address"
            />
          </View> */}
        </View>

        <View style={styles.savedAddressesContainer}>
          <Text style={styles.sectionTitle}>Select Address</Text>
          <View>
            <FlatList
              data={savedAddress}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.flatListContent}
              renderItem={({ item }) => (
                <SavedAddressCard
                  title={item.title}
                  address={item.address}
                  distance={item.distance}
                  icon={item.icon}
                  onMorePress={() => ''}
                />
              )}
              onEndReachedThreshold={0.2}
              ListEmptyComponent={
                <View style={styles.emptyContainer}>
                  <Feather
                    name="inbox"
                    size={60}
                    color="#ccc"
                    style={styles.emptyIcon}
                  />
                  <Text style={styles.emptyText}>
                    No saved addresses found
                  </Text>
                </View>
              }
            />
          </View>
          {loading && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator
                size="large"
                color={colors.brandPrimary}
                style={styles.loadingIndicator}
              />
            </View>
          )}
        </View>

        {/* <View style={styles.currentAddressContainer}>
          <View style={styles.addressRow}>
            <View style={styles.locationIcon}>
              <Feather name="map-pin" size={18} color={colors.brandPrimary} />
            </View>
            {loading ? (
              <View style={{ justifyContent:'center' , borderWidth: 0, width:'90%'}}>
                <ActivityIndicator
                  size="small"
                  color={colors.brandPrimary}
                  style={{ marginTop: 15,  }}
                />
              </View>
            ) : (
              <View style={styles.addressTextContainer}>
                <Text style={styles.currentAddressTitle}>
                  {location?.city}
                </Text>
                <Text
                  style={styles.currentAddressText}
                  numberOfLines={2}
                >
                  {location?.city}, {location?.state}, {location?.country},{' '}
                  {location?.pincode}
                </Text>
              </View>
            )}
          </View>

          <View style={styles.buttonRow}>
            <Button
              title="Confirm & proceed"
              variant="outlined"
              onPress={handleProceed}
              isPhoneValid={!!location}
            />
          </View>
        </View> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    // borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.darkBlack,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.backgroundLight,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f8f8ff',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 45,
    marginVertical: 15,
    borderWidth: 1,
    borderColor: colors.borderLight,
    marginHorizontal: 20,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#000',
    fontWeight: 700,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginBottom: 20,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
  },
  actionText: {
    marginLeft: 8,
    fontSize: 14,
    color: colors.darkBlack,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.darkBlack,
    marginBottom: 10,
  },
  currentAddressContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
    paddingBottom: 30,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  locationIcon: {
    marginRight: 10,
  },
  addressTextContainer: {
    flex: 1,
  },
  currentAddressTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.darkBlack,
  },
  currentAddressText: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  buttonRow: {
    marginTop: 15,
  },
  //
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderStyle: 'dashed',
    marginVertical: 12,
    marginHorizontal: 10,
  },
  locationOptionsContainer: {
    backgroundColor: colors.background,
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 2,
  },
  locationOption: {
    flexDirection: 'row',
    paddingStart: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical:7
  },
  locationOptionTextContainer: {
    marginLeft: 9,
    flex: 1,
  },
  locationOptionTitle: {
    color: colors.brandPrimary,
    fontWeight: 800,
    fontSize: 14,
  },
  locationOptionSubTitle:{
  fontWeight: 800,
    fontSize: 10,
  },
  savedAddressesContainer: {},
  flatListContent: {
    paddingBottom: 180,
    paddingTop: 5,
    paddingHorizontal: 5,
  },
  emptyContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  emptyIcon: {
    marginBottom: 20,
  },
  emptyText: {
    textAlign: 'center',
    color: '#999',
    fontSize: 14,
  },
  loadingContainer: {
    justifyContent: 'center',
    borderWidth: 0,
    width: '100%',
  },
  loadingIndicator: {
    marginTop: 15,
  },
  spacer: {
    width: 24,
  },
});

export default LocationSelector;
