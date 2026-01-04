import React, { useState } from 'react';
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


const Profile: React.FC = () => {
  const scrollProps = useScrollToHideTabBar({ threshold: 50 });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState('');
  const [showProfileInfo, setShowProfileInfo] = useState(false);
  const [showUserAddress, setShowUserAddress] = useState(false);
  const [showOrderDetails, setShowOrderDetails] = useState(false);

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
            <View style={styles.rowViewContainer}>
              <TouchableOpacity
                style={styles.rowContainer}
                onPress={() => setShowProfileInfo(true)}
              >
                <View style={styles.row}>
                  <View style={styles.rowIconBox}>
                    <Icon name="person" size={18} color={colors.brandPrimary} />
                  </View>

                  <Text style={styles.rowLabel}>Edit Profile</Text>
                </View>
                <Icon name="chevron-right" size={28} color="#666" />
              </TouchableOpacity>

              <View style={styles.rowSeparator} />

              <TouchableOpacity
                style={styles.rowContainer}
                onPress={() => setShowUserAddress(true)}
              >
                <View style={styles.row}>
                  <View style={styles.rowIconBox}>
                    <Icon
                      name="location-on"
                      size={18}
                      color={colors.brandPrimary}
                    />
                  </View>
                  <Text style={styles.rowLabel}>Address</Text>
                </View>
                <Icon name="chevron-right" size={28} color="#666" />
              </TouchableOpacity>

              <View style={styles.rowSeparator} />

              <TouchableOpacity
                style={styles.rowContainer}
                onPress={() => setShowOrderDetails(true)}
              >
                <View style={styles.row}>
                  <View style={styles.rowIconBox}>
                    <Icon
                      name="shopping-bag"
                      size={18}
                      color={colors.brandPrimary}
                    />{' '}
                  </View>
                  <Text style={styles.rowLabel}>Orders</Text>
                </View>
                <Icon name="chevron-right" size={28} color="#666" />
              </TouchableOpacity>
            </View>

            <View style={styles.rowViewContainer}>
              <TouchableOpacity
                style={styles.rowContainer}
                onPress={() => console.log('Notifications')}
              >
                <View style={styles.row}>
                  <View style={styles.rowIconBox}>
                    <Icon
                      name="notifications"
                      size={18}
                      color={colors.brandPrimary}
                    />
                  </View>
                  <Text style={styles.rowLabel}>Notifications</Text>
                </View>
                <Icon name="chevron-right" size={28} color="#666" />
              </TouchableOpacity>

              <View style={styles.rowSeparator} />

              <TouchableOpacity
                style={styles.rowContainer}
                onPress={() => console.log('Help')}
              >
                <View style={styles.row}>
                  <View style={styles.rowIconBox}>
                    <Icon
                      name="help-outline"
                      size={18}
                      color={colors.brandPrimary}
                    />
                  </View>
                  <Text style={styles.rowLabel}>Help</Text>
                </View>
                <Icon name="chevron-right" size={28} color="#666" />
              </TouchableOpacity>
            </View>

            <View style={styles.rowViewContainer}>
              <TouchableOpacity
                style={styles.rowContainer}
                onPress={() => console.log('About')}
              >
                <View style={styles.row}>
                  <View style={styles.rowIconBox}>
                    <Icon
                      name="info-outline"
                      size={18}
                      color={colors.brandPrimary}
                    />
                  </View>
                  <Text style={styles.rowLabel}>About</Text>
                </View>
                <Icon name="chevron-right" size={28} color="#666" />
              </TouchableOpacity>
              <View style={styles.rowSeparator} />

              <TouchableOpacity
                style={styles.rowContainer}
                onPress={() => console.log('Settings')}
              >
                <View style={styles.row}>
                  <View style={styles.rowIconBox}>
                    <Icon
                      name="settings"
                      size={18}
                      color={colors.brandPrimary}
                    />
                  </View>
                  <Text style={styles.rowLabel}>Settings</Text>
                </View>
                <Icon name="chevron-right" size={28} color="#666" />
              </TouchableOpacity>
              <View style={styles.rowSeparator} />

              <TouchableOpacity
                style={styles.rowContainer}
                onPress={() => console.log('Logout')}
              >
                <View style={styles.row}>
                  <View style={styles.rowIconBox}>
                    <Icon name="logout" size={18} color={colors.brandPrimary} />
                  </View>
                  <Text style={styles.rowLabel}>Logout</Text>
                </View>
                <Icon name="chevron-right" size={28} color="#666" />
              </TouchableOpacity>
            </View>

            <View style={styles.versionContainer}>
              <Text style={styles.versionText}>App Version</Text>
              <Text style={styles.versionNumber}>1.0.0</Text>
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Profile;
