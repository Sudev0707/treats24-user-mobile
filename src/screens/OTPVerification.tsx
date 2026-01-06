import React, { useState, useRef } from 'react';
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
import styles from '../styles/screens/OTPVerificationStyles';
import Header from '../components/common/Header';
import CustomAlert from '../components/common/CustomAlert';
import { clearConfirmation, getConfirmation } from '../services/otpSession';
import { sendEmailOTP, verifyEmailOTP } from '../services/api';
import Button from '../components/common/Button';

const OTPVerification: React.FC = () => {
  const route = useRoute<any>();
  const { confirmation, phone } = route.params;

  //
  const navigation = useNavigation();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
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
        // ✅ Login success → go to app
        navigation.reset({
          index: 0,
          routes: [{ name: 'MainTabs' as never }],
        });
      } catch (error) {
        setOtpError('Invalid OTP');
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

        // ✅ Login success → go to app
        navigation.reset({
          index: 0,
          routes: [{ name: 'SetLocation' as never }],
        });
      } catch (error) {
        setOtpError('Invalid OTP');
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
            <Text style={styles.title}>Verify Phone Number</Text>
            <Text style={styles.subtitle}>
              Enter the 6-digit code sent to your phone/email
            </Text>
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
              <Text style={styles.resendText}>Didn't receive the code?</Text>
              <TouchableOpacity
                style={styles.resendButton}
                onPress={handleResend}
              >
                <Text style={styles.resendButtonText}>Resend OTP</Text>
              </TouchableOpacity>
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
    </SafeAreaView>
  );
};

export default OTPVerification;
