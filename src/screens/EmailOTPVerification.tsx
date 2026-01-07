import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/screens/EmailOTPVerificationStyles';
import Header from '../components/common/Header';
import CustomAlert from '../components/common/CustomAlert';
import { sendEmailOTP, verifyEmailOTP } from '../services/api';
import Button from '../components/common/Button';

const EmailOTPVerification: React.FC = () => {
  const route = useRoute<any>();
  const { email } = route.params;

  const navigation = useNavigation();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const OTP_DELAY = 30;
  const [otpError, setOtpError] = useState('');
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const inputRefs = useRef<TextInput[]>([]);
  const [loading, setLoading] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [secondsLeft, setSecondsLeft] = useState(OTP_DELAY);

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

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = async () => {
    const otpString = otp.join('');

    if (otpString.length !== 6) {
      setOtpError('Please enter a valid 6-digit OTP');
      return;
    }

    setLoading(true);

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
  };

  const handleResend = async () => {
    try {
      await sendEmailOTP(email);
      setAlertTitle('OTP Sent');
      setAlertMessage('A new OTP has been sent to your email');
      setAlertVisible(true);
      setSecondsLeft(OTP_DELAY);
    } catch (error) {
      setAlertTitle('Error');
      setAlertMessage('Unable to send OTP to email');
      setAlertVisible(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
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
            <Text style={styles.title}>Verify Email Address</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.subtitle}>
                Enter the 6-digit code sent to
              </Text>
              <Text style={styles.emailAddress}>{email}</Text>
            </View>

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
                  ? `Resend OTP in 00:${String(secondsLeft).padStart(2, '0')}`
                  : 'Didn\'t receive OTP?'}
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

export default EmailOTPVerification;
