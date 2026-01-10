import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../routes/types';
import { styles } from '../styles/screens/PartnerSignUpStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../theme/colors';
import PartnerMenuModal from '../components/modals/PartnerMenuModal';
import fonts from '../theme/fonts';

type Props = NativeStackScreenProps<RootStackParamList, 'PartnerDashBoard'>;

const PartnerDashBoard: React.FC<Props> = ({ navigation, route }) => {
  const [isMenuModalVisible, setIsMenuModalVisible] = useState(false);
  const [notificationCount, setNotificationCount] = useState(5);
  const [isActive, setIsActive] = useState(false);

  const {
    name,
    addressOne,
    addressTwo,
    city,
    district,
    pinCode,
    email,
    contact,
    businessLicense,
    hasFssaiLicense,
    fssaiLicenseNumber,
    bankName,
    ifscCode,
    accountNo,
    accountHolder,
  } = route.params;

  const handleEditProfile = () => {
    navigation.navigate('PartnerProfile', route.params);
  };

  const handleViewMenu = () => {
    // TODO: Navigate to menu management screen
    console.log('View Menu pressed');
  };

  const handleSettings = () => {
    // TODO: Navigate to settings screen
    console.log('Settings pressed');
  };

  const handleLogout = () => {
    // TODO: Implement logout logic
    console.log('Logout pressed');
    navigation.goBack();
  };

  return (
    <>
      <View
        style={{
          height: StatusBar.currentHeight,
          backgroundColor: colors.brandPrimary,
        }}
      />
      <StatusBar
        backgroundColor={colors.brandPrimary}
        barStyle="light-content"
      />
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.restaurantName}>{name}</Text>
          <Text style={styles.locationText}>
            {city}, {district}
          </Text>
        </View>
        <TouchableOpacity style={styles.notificationButton}>
          <Image
            source={require('../assets/icons/notification.png')}
            style={styles.notificationIcon}
          />
          {notificationCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{notificationCount}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.innerContainer}>
            {/* <Text style={styles.title}>Partner Dashboard</Text> */}
            <Text style={styles.subtitle}>Welcome back, {name}!</Text>

            <View style={styles.detailSection}>
              <View style={styles.innerDetailSection} >
              {/* <Text style={styles.sectionTitle}>Profile Overview</Text> */}
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Restaurant:</Text>
                <Text style={styles.detailValue}>{name}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Location:</Text>
                <Text style={styles.detailValue}>
                  {city}, {district}
                </Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Contact:</Text>
                <Text style={styles.detailValue}>{contact}</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Status:</Text>
                <TouchableOpacity onPress={() => setIsActive(!isActive)}>
                  <Text
                    style={[
                      styles.detailValue,
                      {
                        color: isActive ? colors.success : colors.danger,
                        fontFamily: fonts.family.regular,
                      },
                    ]}
                  >
                    {isActive ? 'Active Partner' : 'Inactive Partner'}
                  </Text>
                </TouchableOpacity>
              </View>
              </View>
             
                {!isActive && (
                <Text style={styles.reviewText}>
                  Your restaurant is under review. Our team is verifying the
                  details and will activate it soon.
                </Text>
              )}
            

              {/* <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={[styles.button, { flex: 1, marginHorizontal: 5 }]}
                  onPress={handleEditProfile}
                >
                  <Text style={styles.buttonText}>Edit Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.button,
                    {
                      flex: 1,
                      marginHorizontal: 5,
                      backgroundColor: '#1E293B',
                    },
                  ]}
                  onPress={handleViewMenu}
                >
                  <Text style={styles.buttonText}>View Menu</Text>
                </TouchableOpacity>
              </View> */}
            </View>
            

            {/* <View style={styles.detailSection}>
            <Text style={styles.sectionTitle}>Restaurant Information</Text>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Restaurant Name:</Text>
              <Text style={styles.detailValue}>{name}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Address:</Text>
              <Text style={styles.detailValue}>
                {addressOne}{addressTwo ? `, ${addressTwo}` : ''}, {city}, {district} - {pinCode}
              </Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Email:</Text>
              <Text style={styles.detailValue}>{email}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Contact:</Text>
              <Text style={styles.detailValue}>{contact}</Text>
            </View>
          </View> */}

            {/* <View style={styles.detailSection}>
            <Text style={styles.sectionTitle}>Business Details</Text>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>GST Number:</Text>
              <Text style={styles.detailValue}>{businessLicense}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>FSSAI License:</Text>
              <Text style={styles.detailValue}>
                {hasFssaiLicense ? `Yes - ${fssaiLicenseNumber}` : 'No'}
              </Text>
            </View>
          </View> */}

            {/* <View style={styles.detailSection}>
            <Text style={styles.sectionTitle}>Banking Information</Text>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Bank Name:</Text>
              <Text style={styles.detailValue}>{bankName}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>IFSC Code:</Text>
              <Text style={styles.detailValue}>{ifscCode}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Account Number:</Text>
              <Text style={styles.detailValue}>{accountNo}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Account Holder:</Text>
              <Text style={styles.detailValue}>{accountHolder}</Text>
            </View>
          </View> */}
          </View>
        </ScrollView>

        <PartnerMenuModal
          visible={isMenuModalVisible}
          onClose={() => setIsMenuModalVisible(false)}
          onEditProfile={handleEditProfile}
          onViewMenu={handleViewMenu}
          onLogout={handleLogout}
          onSettings={handleSettings}
          partnerName={name}
          partnerEmail={email}
        />
      </SafeAreaView>
    </>
  );
};

export default PartnerDashBoard;
