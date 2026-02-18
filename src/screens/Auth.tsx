import React, { use, useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  Platform,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Animated,
  Keyboard,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import styles from '../styles/screens/AuthStyles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes/AuthRoutes';
import { SafeAreaView } from 'react-native-safe-area-context';
import PhoneInput from '../components/inputs/PhoneInput';
import CountryModal from '../components/modals/CountryModals';
import InputField from '../components/inputs/InputField';
import {
  getCountryCode,
  getCountry,
  storeCountryCode,
  storeCountry,
} from '../services/storage';
import EmailLogin from '../components/EmailLogin';
import { sendPhoneOTP } from '../services/fireBaseAuth';
import colors from '../theme/colors';
import Button from '../components/common/Button';
const googleIcon = require('../assets/icons/iconsgoogle.png');
const mailIcon = require('../assets/icons/iconsmail.png');
const brandLogo = require('../assets/brand/treatsLogo.png');

import { validatePhone } from '../utils/validate';
import { setConfirmation } from '../services/otpSession';

const Auth: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [showEmailLogin, setShowEmailLogin] = useState(false);

  const [country, setCountry] = useState('IN');
  const [countryCode, setCountryCode] = useState('+91');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const translateY = useRef(new Animated.Value(0)).current;
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  // console.log('rememberMe', rememberMe);
  // console.log('phone', phone);

  useEffect(() => {
    // console.log('heyy sudevcvv');

    const showSub = Keyboard.addListener('keyboardDidShow', () =>
      setKeyboardOpen(true),
    );
    const hideSub = Keyboard.addListener('keyboardDidHide', () =>
      setKeyboardOpen(false),
    );

    // Load stored country code and country on component mount
    const loadStoredData = async () => {
      const storedCountryCode = await getCountryCode();
      const storedCountry = await getCountry();
      if (storedCountryCode) {
        setCountryCode(storedCountryCode);
      }
      if (storedCountry) {
        setCountry(storedCountry);
      }
    };
    loadStoredData();

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  // ======

  //
  const isPhoneValid = phone.length >= 10;
  const handleContinue = async () => {
    console.log();

    const { isValid, error } = validatePhone({ phone, country });
    // console.log("isValid", isValid, error);

    if (!isValid) {
      setError(error);
      return;
    }

    setLoading(true);
    try {
      const fullPhone = `${countryCode}${phone}`;
      if (fullPhone !== '+917488854261') {
        setError('Enter valid phone number');
        return;
      }

      const confirmation = await sendPhoneOTP(fullPhone);
      console.log('mcnsdcnkjsdcnskjd', confirmation);

      // ✅ store confirmation globally
      setConfirmation(confirmation);

      // ✅ now navigate safely
      navigation.navigate('OTPVerification', {
        phone: fullPhone,
      });
    } catch (err: any) {
      setError(err?.message || 'Failed to send OTP');
    } finally {
      setLoading(false);
    }
  };

  // const handleContinue = async () => {
  //   const { isValid, error } = validatePhone({ phone, country });

  //   if (!isValid) {
  //     setError(error);
  //     return;
  //   }

  //   //
  //   try {
  //     const fullPhone = `${countryCode}${phone}`;
  //     const confirmation = await sendPhoneOTP(fullPhone);
  //     console.log('fullPhone', fullPhone);

  //     navigation.navigate('OTPVerification', { confirmation, phone: fullPhone });
  //   } catch (error: any) {
  //     setError(error?.message || 'Failed to send OTP');
  //   }

  //   setError('');

  // };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      // keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
    >
      <View style={[styles.container, { justifyContent: 'flex-end' }]}>
        {/* <StatusBar hidden={Platform.OS === 'android'} /> */}

        <View style={styles.header}>
          {/* <View style={styles.headerDecorRow} /> */}

          <View style={styles.headerContent}>
            {/* <Text style={styles.headerBrandText}>treats24</Text> */}
            <Image
              source={brandLogo}
              resizeMode="contain"
              style={{ width: 200, height: 200 }}
            />
            <Text style={styles.appTagline}>Dil se delivery</Text>
          </View>
        </View>

        {/* auth container */}
        <View style={{}}>
          <ScrollView
            // automaticallyAdjustKeyboardInsets
            keyboardShouldPersistTaps="handled"
            keyboardDismissMode="interactive"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              flexGrow: 1,
              paddingBottom: keyboardOpen ? 250 : 30,
              ...styles.contentWrapper,
            }}
            // contentContainerStyle={{ flexGrow: 1, ...styles.contentWrapper }}
          >
            {/* main login  cintainer */}
            <View>
              {showEmailLogin ? (
                <EmailLogin
                  setShowEmailLogin={setShowEmailLogin}
                  navigation={navigation}
                />
              ) : (
                <>
                  <View style={{ alignItems: 'center', marginBottom: 5 }}>
                    <Text style={styles.authSubtitle}>
                      Log in to continue and get the best from the app
                    </Text>
                  </View>

                  <View style={styles.orRow}>
                    <View style={styles.orDivider} />
                    <Text style={styles.orText}>Log in or signup</Text>
                    <View style={styles.orDivider} />
                  </View>

                  <View style={{ marginVertical: 15 }}>
                    <PhoneInput
                      label=""
                      country={country}
                      countryCode={countryCode}
                      value={phone}
                      // onChange={setPhone}
                      onChange={text => {
                        setPhone(text);
                        if (error) setError('');
                      }}
                      onCountryPress={() => setModalVisible(true)} // open country picker
                      error={error}
                    />
                  </View>

                  <View style={styles.Rememberme}>
                    <TouchableOpacity
                      onPress={() => setRememberMe(!rememberMe)}
                      style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                      <View
                        style={{
                          width: 18,
                          height: 18,
                          borderRadius: 5,
                          borderWidth: 0.9,
                          borderColor: colors.brandPrimary,
                          marginRight: 10,
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: rememberMe
                            ? colors.brandPrimary
                            : 'transparent',
                        }}
                      >
                        {rememberMe && (
                          <Icon name="check" size={16} color="#fff" />
                        )}
                      </View>
                      <Text style={styles.forgotPassText}>Remember me</Text>
                    </TouchableOpacity>
                  </View>

                  <Button
                    title="Continue"
                    variant="filled"
                    onPress={handleContinue}
                    isPhoneValid={isPhoneValid}
                    loading={loading}
                  />

                  {/* <View style={styles.orRow}>
                    <View style={styles.orDivider} />
                    <Text style={styles.orText}>Or, login with</Text>
                    <View style={styles.orDivider} />
                  </View>

                  <View style={styles.socialLoginContainer}>
                    <TouchableOpacity style={styles.socialBtn}>
                      <Image source={googleIcon} style={styles.socialIcon} />
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.socialBtn}
                      onPress={() => setShowEmailLogin(true)}
                    >
                      <Image source={mailIcon} style={styles.socialIcon} />
                    </TouchableOpacity>
                  </View> */}

                  {/* footer content */}
                  <Text style={styles.footerText}>
                    By continuing, you agree to our
                  </Text>
                  <View style={styles.footerLinksRow}>
                    <Text style={styles.footerLink}>Terms of Service</Text>
                    <Text style={styles.footerLink}>Privacy Policy</Text>
                    <Text style={styles.footerLink}>Content Policies</Text>
                  </View>
                </>
              )}
            </View>

            {/* otp container */}
            <View></View>
          </ScrollView>
        </View>

        {/* </KeyboardAvoidingView> */}

        <CountryModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onSelect={(iso, code) => {
            setCountry(iso);
            setCountryCode(code);
          }}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Auth;
