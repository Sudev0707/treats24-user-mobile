import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import colors from '../theme/colors';
import { useScrollToHideTabBar } from '../hooks/useScrollToHideTabBar';
import Header from '../components/common/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputField from '../components/inputs/InputField';
import styles from '../styles/screens/ProfileStyles';
// import { Icon } from 'react-native-vector-icons/Icon';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ProfileInfo from '../components/common/ProfileInfo';
import UserAddress from '../components/common/UserAddress';
import Orders from '../components/common/Orders';
import { userData } from '../data/userData';
import CustomAlert from '../components/common/CustomAlert';
import auth from '@react-native-firebase/auth';

const Profile: React.FC = () => {
  const scrollProps = useScrollToHideTabBar({ threshold: 50 });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState('');
  const [showProfileInfo, setShowProfileInfo] = useState(false);
  const [showUserAddress, setShowUserAddress] = useState(false);
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [alertOnConfirm, setAlertOnConfirm] = useState<
    (() => void) | undefined
  >(undefined);
  const [alertOnCancel, setAlertOnCancel] = useState<(() => void) | undefined>(
    undefined,
  );
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogoutPress = () => {
    setAlertTitle('Logout');
    setAlertMessage('Are you sure you want to logout?');
    setAlertOnCancel(() => setAlertVisible(false));
    setAlertVisible(true);
  };

  const menuSections = [
    [
      {
        icon: 'person',
        label: 'Edit Profile',
        onPress: () => setShowProfileInfo(true),
      },
      {
        icon: 'location-on',
        label: 'Address',
        onPress: () => setShowUserAddress(true),
      },
      {
        icon: 'shopping-bag',
        label: 'Orders',
        onPress: () => setShowOrderDetails(true),
      },
    ],
    [
      {
        icon: 'notifications',
        label: 'Notifications',
        onPress: () => console.log('Notifications'),
      },
      {
        icon: 'help-outline',
        label: 'Help',
        onPress: () => console.log('Help'),
      },
    ],
    [
      {
        icon: 'info-outline',
        label: 'About',
        onPress: () => console.log('About'),
      },
      {
        icon: 'settings',
        label: 'Settings',
        onPress: () => console.log('Settings'),
      },
      {
        icon: 'logout',
        label: 'Logout',
        onPress: () => {
          handleLogoutPress();
        },
      },
    ],
  ];

  const handleSubmit = () => {
    if (!email) {
      setFormError('Email is required');
      return;
    }
    if (!password) {
      setFormError('Password is required');
      return;
    }

    setFormError('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        // translucent
        backgroundColor="#fff"
        barStyle="dark-content"
      />
      <Header
        showBackButton={true}
        title={
          showProfileInfo
            ? 'Edit Profile'
            : showUserAddress
            ? 'Saved Address'
            : showOrderDetails
            ? 'Orders'
            : 'Profile'
        }
        onBackPress={
          showProfileInfo
            ? () => setShowProfileInfo(false)
            : showUserAddress
            ? () => setShowUserAddress(false)
            : showOrderDetails
            ? () => setShowOrderDetails(false)
            : undefined
        }
        rightMenu={
          showProfileInfo || showUserAddress || showOrderDetails ? (
            <></>
          ) : (
            <TouchableOpacity style={{ padding: 8 }}>
              <Image
                source={require('../assets/icons/iconsmenu.png')}
                style={{ width: 24, height: 24, borderRadius: 7 }}
              />
            </TouchableOpacity>
          )
        }
      />

      {showProfileInfo ? (
        <ProfileInfo />
      ) : showUserAddress ? (
        <UserAddress />
      ) : showOrderDetails ? (
        <Orders />
      ) : (
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          {...scrollProps}
        >
          <View style={styles.header}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{userData.avatar}</Text>
            </View>
            <View style={styles.userDetails}>
              <Text style={styles.userName}>{userData.name}</Text>
              <Text style={styles.userMobile}>{userData.mobile}</Text>
              <Text style={styles.userEmail}>{userData.email}</Text>
            </View>
          </View>

          {/*  */}
          <View style={styles.contentContainer}>
            {menuSections.map((section, sectionIndex) => (
              <View key={sectionIndex} style={styles.rowViewContainer}>
                {section.map((item, itemIndex) => (
                  <React.Fragment key={item.icon}>
                    <TouchableOpacity
                      style={styles.rowContainer}
                      onPress={item.onPress}
                    >
                      <View style={styles.row}>
                        <View style={styles.rowIconBox}>
                          <Icon
                            name={item.icon}
                            size={18}
                            color={colors.brandPrimary}
                          />
                        </View>
                        <Text style={styles.rowLabel}>{item.label}</Text>
                      </View>
                      <Icon name="chevron-right" size={28} color="#666" />
                    </TouchableOpacity>
                    {itemIndex < section.length - 1 && (
                      <View style={styles.rowSeparator} />
                    )}
                  </React.Fragment>
                ))}
              </View>
            ))}

            <View style={styles.versionContainer}>
              <Text style={styles.versionText}>App Version</Text>
              <Text style={styles.versionNumber}>1.0.0</Text>
            </View>
          </View>
        </ScrollView>
      )}
      <CustomAlert
        visible={alertVisible}
        title={alertTitle}
        message={alertMessage}
        onConfirm={() => {
          auth().signOut();
          setAlertVisible(false);
        }}
        onCancel={alertOnCancel}
        onClose={() => setAlertVisible(false)}
      />
    </SafeAreaView>
  );
};

export default Profile;
