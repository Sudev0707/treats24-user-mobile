import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StatusBar,
  LogBox,
} from 'react-native';
//
import { useRoute } from '@react-navigation/native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

import { sendPhoneOTP, verifyPhoneOTP } from '../services/fireBaseAuth';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes/types';
import styles from '../styles/screens/OTPVerificationStyles';
import Header from '../components/common/Header';
import CustomAlert from '../components/common/CustomAlert';
import { clearConfirmation, getConfirmation } from '../services/otpSession';
import { sendEmailOTP, verifyEmailOTP } from '../services/api';
import Button from '../components/common/Button';
import EmailLoginModal from '../components/modals/EmailLoginModal';
import fonts from '../theme/fonts';
import colors from '../theme/colors';
import { saveFirebaseToken } from '../utils/authToken';

const OTPVerification: React.FC = () => {
  const route = useRoute<any>();
  const { confirmation, phone } = route.params;

  //
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const OTP_DELAY = 300;
  // console.log(otp);
  const [otpError, setOtpError] = useState('');

  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const inputRefs = useRef<TextInput[]>([]);

  const [verificationMethod, setVerificationMethod] = useState<
    'phone' | 'email'
  >('phone');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [secondsLeft, setSecondsLeft] = useState(OTP_DELAY);
  const [emailModalVisible, setEmailModalVisible] = useState(false);
  const [failedAttempts, setFailedAttempts] = useState(0);

  useEffect(() => {
    if (secondsLeft === 0) return;

    const interval = setInterval(() => {
      setSecondsLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [secondsLeft]);

  const handleCloseAlert = () => {
    setAlertVisible(false);
  };

  // -----
  const handleOtpChange = (value: string, index: number) => {
    setOtpError('');

    if (value.length > 1) return; // Only allow single digit

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  //
  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  //
  console.log('Firebase user:', auth().currentUser);
  const handleVerify = async () => {
    const otpString = otp.join('');

    if (otpString.length !== 6) {
      // Alert.alert("error", "please enter a valid 6 digit otp");
      setOtpError('Please enter a valid 6-digit OTP');
      return;
    }

    setLoading(true);

    if (verificationMethod === 'email') {
      if (!email) {
        setOtpError('Please enter your email address');
        setLoading(false);
        return;
      }
      try {
        await verifyEmailOTP(email, otpString);

        // SAVE TOKEN
        await saveFirebaseToken();

        // ✅ Login success → go to app
        // Navigation will be handled by auth state change in App.tsx
      } catch (error) {
        setOtpError('Invalid OTP');
        setFailedAttempts(prev => prev + 1);
      } finally {
        setLoading(false);
      }
    } else {
      try {
        const confirmation = getConfirmation();

        if (!confirmation) {
          setOtpError('OTP session expired. Please retry.');
          setLoading(false);
          return;
        }

        const userCredential = await verifyPhoneOTP(confirmation, otpString);
        console.log('userCredential', userCredential);

        clearConfirmation();

        // SAVE TOKEN
        await saveFirebaseToken();

        // ✅ Login success → go to app
        navigation.navigate('SetLocation' as never);
      } catch (error) {
        setOtpError('Invalid OTP');
        setFailedAttempts(prev => prev + 1);
      } finally {
        setLoading(false);
      }
    }

    // try {
    //   setOtpError('');

    //   const userCredential = await verifyPhoneOTP(confirmation, otpString);
    //   const user = userCredential.user;
    //   console.log('userrrrrrr', user);

    //   navigation.reset({
    //     index: 0,
    //     routes: [{ name: 'MainTabs' as never }],
    //   });
    // } catch (error) {
    //   setOtpError('Invalid OTP');
    // }

    // if (otpString === '123456') {
    //   setOtpError('');
    //   navigation.navigate('SetLocation' as never);
    // } else {
    //   setOtpError('Invalid OTP');
    //   // Alert.alert('error', 'Invalid otp');
    // }

    //  navigation.navigate('MainTabs' as never);
    // const otpString = otp.join('');
    // if (otpString.length === 6) {
    //   // Here you would typically verify the OTP with your backend
    //   // For now, just navigate to dashboard
    //   navigation.navigate('MainTabs' as never);
    // } else {
    //   Alert.alert('Error', 'Please enter a valid 6-digit OTP');
    // }
  };

  const handleResend = async () => {
    if (verificationMethod === 'email') {
      if (!email) {
        setOtpError('Please enter your email address');
        return;
      }
      try {
        await sendEmailOTP(email);
        setAlertTitle('OTP Sent');
        setAlertMessage('A new OTP has been sent to your email');
        setAlertVisible(true);
      } catch (error) {
        setAlertTitle('Error');
        setAlertMessage('Unable to send OTP to email');
        setAlertVisible(true);
      }
    } else {
      try {
        const newConfirmation = await sendPhoneOTP(phone);
        route.params.confirmation = newConfirmation;
        setAlertTitle('OTP Resent');
        setAlertMessage('A new OTP has been sent to your phone number');
        setAlertVisible(true);
      } catch (error) {
        setAlertTitle('Error');
        setAlertMessage('Unable to resend OTP');
        setAlertVisible(true);
      }
    }
  };

  const handleEmailLoginPress = () => {
    setEmailModalVisible(true);
  };

  const handleEmailContinue = async (emailAddress: string) => {
    setEmailModalVisible(false);

    try {
      // await sendEmailOTP(emailAddress);
      navigation.navigate('EmailOTPVerification', { email: emailAddress });
    } catch (error) {
      setAlertTitle('Error');
      setAlertMessage('Unable to send OTP to email');
      setAlertVisible(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.header}>
        <View style={styles.headerDecorRow} />
        <Text style={styles.headerBrandText}>treats24</Text>
      </View> */}
      <StatusBar barStyle={'dark-content'} />
      <Header showBackButton={true} />

      <ScrollView
        bounces={false}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.contentWrapper}>
          <View style={styles.card}>
            <Text style={styles.title}>
              {verificationMethod === 'email'
                ? 'Verify Email Address'
                : 'Verify Phone Number'}
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.subtitle}>
                Enter the 6-digit code sent to
              </Text>
              <Text style={styles.phoneNumber}>
                {verificationMethod === 'email' ? email : phone}
              </Text>
            </View>

            {/* <Text>{otp}</Text> */}

            {/* phone otp  */}
            <View style={styles.otpContainer}>
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={ref => {
                    if (ref) inputRefs.current[index] = ref;
                  }}
                  style={[
                    styles.otpInput,
                    focusedIndex === index && styles.otpInputFocused,
                    otpError && styles.otpInputError,
                  ]}
                  value={digit}
                  onChangeText={value => handleOtpChange(value, index)}
                  onKeyPress={e => handleKeyPress(e, index)}
                  onFocus={() => setFocusedIndex(index)}
                  onBlur={() => setFocusedIndex(null)}
                  keyboardType="numeric"
                  maxLength={1}
                  selectTextOnFocus
                />
              ))}
            </View>
            {otpError ? <Text style={styles.errorText}>{otpError}</Text> : null}

            <View style={styles.resendContainer}>
              <Text style={styles.resendText}>
                {secondsLeft > 0
                  ? `Resend OTP in ${String(Math.floor(secondsLeft / 60)).padStart(2, '0')}:${String(secondsLeft % 60).padStart(2, '0')}`
                  : 'Didn’t receive OTP?'}
              </Text>

              {secondsLeft === 0 && (
                <TouchableOpacity
                  style={styles.resendButton}
                  onPress={handleResend}
                >
                  <Text style={styles.resendButtonText}>Resend OTP</Text>
                </TouchableOpacity>
              )}
            </View>

            <Button
              title="Verify OTP"
              onPress={handleVerify}
              variant="filled"
              isPhoneValid={true}
              loading={loading}
            />

            <Text style={styles.footerText}>
              By continuing, you agree to our Terms of Service and Privacy
              Policy
            </Text>
          </View>
          {verificationMethod === 'email' || failedAttempts < 3 ? null : (
            <TouchableOpacity
              onPress={handleEmailLoginPress}
              style={{
                borderWidth: 0,
                padding: 2,
                width: '50%',
                alignSelf: 'center',
              }}
            >
              <Text
                style={{
                  fontFamily: fonts.family.regular,
                  color: colors.brandPrimary,
                  textAlign: 'center',
                }}
              >
                Login with email
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
      <CustomAlert
        visible={alertVisible}
        title={alertTitle}
        message={alertMessage}
        onClose={handleCloseAlert}
        onConfirm={handleCloseAlert}
        onCancel={handleCloseAlert}
        confirmText="OK"
        cancelText=""
      />
      <EmailLoginModal
        visible={emailModalVisible}
        onClose={() => setEmailModalVisible(false)}
        onContinue={handleEmailContinue}
      />
    </SafeAreaView>
  );
};

export default OTPVerification;
