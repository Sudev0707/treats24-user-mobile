import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import Button from '../common/Button';

interface EmailLoginModalProps {
  visible: boolean;
  onClose: () => void;
  onContinue: (email: string) => void;
}

const EmailLoginModal: React.FC<EmailLoginModalProps> = ({
  visible,
  onClose,
  onContinue,
}) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleContinue = () => {
    if (!email.trim()) {
      setEmailError('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    setEmailError('');
    onContinue(email);
    setEmail('');
  };

  const handleClose = () => {
    setEmail('');
    setEmailError('');
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <SafeAreaView style={{ flex: 1 }}>
            <View
              style={{
                flex: 1,
                backgroundColor: colors.background,
                padding: 20,
                paddingBottom: Platform.OS === 'ios' ? 40 : 20,
              }}
            >
              {/* Header */}
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 20,
                }}
              >
                <TouchableOpacity onPress={handleClose}>
                  <Icon name="x" size={24} color={colors.textSecondary} />
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: fonts.size.md,
                    fontFamily: fonts.family.bold,
                    color: colors.textPrimary,
                    paddingStart:10
                  }}
                >
                  Login with Email
                </Text>
              </View>

              {/* Email Input */}
              <View style={{ marginVertical: 20,  }}>
                <Text
                  style={{
                    fontSize: fonts.size.md,
                    fontFamily: fonts.family.medium,
                    color: colors.textPrimary,
                    marginBottom: 8,
                  }}
                >
                  Email Address
                </Text>
                <TextInput
                  style={{
                    borderWidth: 1,
                    borderColor: emailError ? colors.error : colors.borderLight,
                    borderRadius: 8,
                    padding: 12,
                    fontSize: fonts.size.sm,
                    fontFamily: fonts.family.regular,
                    color: colors.textPrimary,
                    backgroundColor: colors.backgroundSoft,
                  }}
                  placeholder="Enter your email"
                  placeholderTextColor={colors.textSecondary}
                  value={email}
                  onChangeText={text => {
                    setEmail(text);
                    if (emailError) setEmailError('');
                  }}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
                {emailError ? (
                  <Text
                    style={{
                      fontSize: 14,
                      color: colors.error,
                      fontFamily: fonts.family.regular,
                      marginTop: 4,
                    }}
                  >
                    {emailError}
                  </Text>
                ) : null}
              </View>

              {/* Continue Button */}
              <Button
                title="Continue"
                onPress={handleContinue}
                variant="filled"
                isPhoneValid={true}
              />
            </View>
          </SafeAreaView>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default EmailLoginModal;
