import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../theme/colors';
import DashboardHeaderStyles from '../../styles/components/DashboardHeaderStyles';
import LinearGradient from 'react-native-linear-gradient';
import { getDBConnection } from '../../database/db';
import { getStoredLocation } from '../../database/queries';
import { locationdata } from '../../database/types';

const DashboardHeader: React.FC = () => {
  const navigation = useNavigation();
  const [location, setLocation] = useState<locationdata | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const locationData = async () => {
      setLoading(true);
      const db = await getDBConnection();
      const data = await getStoredLocation(db);
      setLocation(data);
      setLoading(false);
    };

    locationData();
  }, []);

  return (
    <>
      <LinearGradient
        colors={['#fff8f8ff', '#ffffffff']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={DashboardHeaderStyles.LinearGradientHeader}
      >
        <View style={DashboardHeaderStyles.mainDashboardHeader}>
          <View style={DashboardHeaderStyles.dashboardHeaderContainer}>
            {/* LEFT — LOCATION */}
            <TouchableOpacity style={DashboardHeaderStyles.addressWrapper} onPress={()=> ''}>
              <View style={DashboardHeaderStyles.addressRow}>
                <Icon
                  name="map-pin"
                  size={18}
                  color={colors.brandPrimary}
                  style={{ marginRight: 8 }}
                />
                <Text style={DashboardHeaderStyles.addressText}>
                  {location?.area}
                </Text>
                <Icon
                  name="chevron-down"
                  size={19}
                  color={colors.darkBlack}
                />
              </View>
              <Text style={DashboardHeaderStyles.deliverySubtitle}>
                {location?.city}, {location?.state}, {location?.pincode}, {location?.country}
              </Text>
            </TouchableOpacity>

            {/* RIGHT — PROFILE */}
            <TouchableOpacity
              style={DashboardHeaderStyles.avatar}
              onPress={() => navigation.navigate('Profile' as never)}
            >
              <Text style={DashboardHeaderStyles.avatarText}>S</Text>
            </TouchableOpacity>
          </View> 

          <TouchableOpacity
            style={DashboardHeaderStyles.searchBar}
            onPress={() => ''}
          >
            <TextInput
              editable={false}
              style={DashboardHeaderStyles.searchInput}
              placeholder="Search for dishes or restaurants"
              placeholderTextColor="#9CA3AF"
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </>
  );
};

export default DashboardHeader;
