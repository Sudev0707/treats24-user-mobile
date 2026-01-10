import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/screens/PartnerSignUpStyles';
import type { RootStackParamList } from '../routes/types';
import { validateInput } from '../utils/validation';

type Props = NativeStackScreenProps<RootStackParamList, 'PartnerSignUp'>;

const PartnerSignUp: React.FC<Props> = ({ navigation, route }) => {
  const [name, setName] = useState('');
  const [addressOne, setAddressOne] = useState('');
  const [addressTwo, setAddressTwo] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [businessLicense, setBusinessLicense] = useState('');
  const [taxId, setTaxId] = useState('');
  const [bankName, setBankName] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [accountNo, setAccountNo] = useState('');
  const [accountHolder, setAccountHolder] = useState('');
  const [hasFssaiLicense, setHasFssaiLicense] = useState<boolean | null>(null);
  const [fssaiLicenseNumber, setFssaiLicenseNumber] = useState('');

  // Error states
  const [nameError, setNameError] = useState('');
  const [addressOneError, setAddressOneError] = useState('');
  const [addressTwoError, setAddressTwoError] = useState('');
  const [cityError, setCityError] = useState('');
  const [districtError, setDistrictError] = useState('');
  const [pinCodeError, setPinCodeError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [contactError, setContactError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [businessLicenseError, setBusinessLicenseError] = useState('');
  const [fssaiLicenseNumberError, setFssaiLicenseNumberError] = useState('');
  const [bankNameError, setBankNameError] = useState('');
  const [ifscCodeError, setIfscCodeError] = useState('');
  const [accountNoError, setAccountNoError] = useState('');
  const [accountHolderError, setAccountHolderError] = useState('');

  useEffect(() => {
    if (route.params?.selectedBank) {
      setBankName(route.params.selectedBank);
      setCurrentStep(2);
    }
  }, [route.params?.selectedBank]);

  // Validation functions
  const validateName = (value: string) => {
    const result = validateInput(value, 'text');
    setNameError(result.error || '');
    return result.value;
  };

  const validateAddressOne = (value: string) => {
    const result = validateInput(value, 'text');
    setAddressOneError(result.error || '');
    return result.value;
  };

  const validateAddressTwo = (value: string) => {
    const result = validateInput(value, 'text');
    setAddressTwoError(result.error || '');
    return result.value;
  };

  const validateCity = (value: string) => {
    const result = validateInput(value, 'text');
    setCityError(result.error || '');
    return result.value;
  };

  const validateDistrict = (value: string) => {
    const result = validateInput(value, 'text');
    setDistrictError(result.error || '');
    return result.value;
  };

  const validatePinCode = (value: string) => {
    const result = validateInput(value, 'number');
    setPinCodeError(result.error || '');
    return result.value;
  };

  const validateEmail = (value: string) => {
    const result = validateInput(value, 'email');
    setEmailError(result.error || '');
    return result.value;
  };

  const validateContact = (value: string) => {
    const result = validateInput(value, 'number');
    setContactError(result.error || '');
    return result.value;
  };

  const validatePassword = (value: string) => {
    const result = validateInput(value, 'password');
    setPasswordError(result.error || '');
    return result.value;
  };

  const validateConfirmPassword = (value: string) => {
    if (!value) {
      setConfirmPasswordError('Confirm password is required');
      return false;
    }
    if (value !== password) {
      setConfirmPasswordError('Passwords do not match');
      return false;
    }
    setConfirmPasswordError('');
    return true;
  };

  const validateBusinessLicense = (value: string) => {
    const result = validateInput(value, 'text');
    setBusinessLicenseError(result.error || '');
    return result.value;
  };

  const validateFssaiLicenseNumber = (value: string) => {
    const result = validateInput(value, 'text');
    setFssaiLicenseNumberError(result.error || '');
    return result.value;
  };

  const validateBankName = (value: string) => {
    if (!value.trim()) {
      setBankNameError('Bank name is required');
      return false;
    }
    setBankNameError('');
    return true;
  };

  const validateIfscCode = (value: string) => {
    const result = validateInput(value, 'text');
    setIfscCodeError(result.error || '');
    return result.value;
  };

  const validateAccountNo = (value: string) => {
    const result = validateInput(value, 'number');
    setAccountNoError(result.error || '');
    return result.value;
  };

  const validateAccountHolder = (value: string) => {
    const result = validateInput(value, 'text');
    setAccountHolderError(result.error || '');
    return result.value;
  };

  const handleNext = () => {

     setCurrentStep(2);
     return


    const isNameValid = validateName(name);
    const isAddressOneValid = validateAddressOne(addressOne);
    const isAddressTwoValid = validateAddressTwo(addressTwo);
    const isCityValid = validateCity(city);
    const isDistrictValid = validateDistrict(district);
    const isPinCodeValid = validatePinCode(pinCode);
    const isEmailValid = validateEmail(email);
    const isContactValid = validateContact(contact);
    const isPasswordValid = validatePassword(password);
    const isConfirmPasswordValid = validateConfirmPassword(confirmPassword);

    if (
      !isNameValid ||
      !isAddressOneValid ||
      !isAddressTwoValid ||
      !isCityValid ||
      !isDistrictValid ||
      !isPinCodeValid ||
      !isEmailValid ||
      !isContactValid ||
      !isPasswordValid ||
      !isConfirmPasswordValid
    ) {
      // Alert.alert('Error', 'Please correct the errors in the form');
      return;
    }
    if (!isChecked) {
      Alert.alert('Error', 'Please confirm that all information is correct');
      return;
    }
    setCurrentStep(2);
  };

  const handleSignUp = () => {
     navigation.navigate('PartnerDashBoard', {
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
    });
    return;

    
    const isBusinessLicenseValid = validateBusinessLicense(businessLicense);
    const isBankNameValid = validateBankName(bankName);
    const isIfscCodeValid = validateIfscCode(ifscCode);
    const isAccountNoValid = validateAccountNo(accountNo);
    const isAccountHolderValid = validateAccountHolder(accountHolder);

    if (hasFssaiLicense === true) {
      const isFssaiLicenseNumberValid = validateFssaiLicenseNumber(fssaiLicenseNumber);
      if (!isFssaiLicenseNumberValid) {
        // Alert.alert('Error', 'Please correct the errors in the form');
        return;
      }
    }

    if (
      !isBusinessLicenseValid ||
      !isBankNameValid ||
      !isIfscCodeValid ||
      !isAccountNoValid ||
      !isAccountHolderValid
    ) {
      // Alert.alert('Error', 'Please correct the errors in the form');
      return;
    }
    // TODO: Implement sign up logic
    Alert.alert('Success', 'Sign up successful');
    navigation.navigate('PartnerDashBoard', {
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
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {currentStep === 2 && (
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => setCurrentStep(1)}
          >
            <Text style={styles.backButtonText}>← Back</Text>
          </TouchableOpacity>
        </View>
      )}
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Partner Sign Up</Text>
          {currentStep === 1 ? (
            <>
              <Text style={styles.label}>Restaurant name</Text>
              <TextInput
                style={styles.input}
                placeholder="Restaurant Name"
                value={name}
                onChangeText={setName}
                onBlur={() => validateName(name)}
                autoCapitalize="words"
              />
              {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}
              <Text style={styles.label}>Address one</Text>
              <TextInput
                style={styles.input}
                placeholder="Address Line 1"
                value={addressOne}
                onChangeText={setAddressOne}
                onBlur={() => validateAddressOne(addressOne)}
                autoCapitalize="words"
              />
              {addressOneError ? <Text style={styles.errorText}>{addressOneError}</Text> : null}
              <Text style={styles.label}>Address two</Text>
              <TextInput
                style={styles.input}
                placeholder="Address Line 2"
                value={addressTwo}
                onChangeText={setAddressTwo}
                onBlur={() => validateAddressTwo(addressTwo)}
                autoCapitalize="words"
              />
              {addressTwoError ? <Text style={styles.errorText}>{addressTwoError}</Text> : null}
              <Text style={styles.label}>City</Text>
              <TextInput
                style={styles.input}
                placeholder="City"
                value={city}
                onChangeText={setCity}
                onBlur={() => validateCity(city)}
                autoCapitalize="words"
              />
              {cityError ? <Text style={styles.errorText}>{cityError}</Text> : null}
              <Text style={styles.label}>District</Text>
              <TextInput
                style={styles.input}
                placeholder="District"
                value={district}
                onChangeText={setDistrict}
                onBlur={() => validateDistrict(district)}
                autoCapitalize="words"
              />
              {districtError ? <Text style={styles.errorText}>{districtError}</Text> : null}
              <Text style={styles.label}>Pin Code</Text>
              <TextInput
                style={styles.input}
                placeholder="Pin Code"
                value={pinCode}
                onChangeText={setPinCode}
                onBlur={() => validatePinCode(pinCode)}
                keyboardType="numeric"
              />
              {pinCodeError ? <Text style={styles.errorText}>{pinCodeError}</Text> : null}
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                onBlur={() => validateEmail(email)}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
              <Text style={styles.label}>Contact</Text>
              <TextInput
                style={styles.input}
                placeholder="Contact Number"
                value={contact}
                onChangeText={setContact}
                onBlur={() => validateContact(contact)}
                keyboardType="phone-pad"
              />
              {contactError ? <Text style={styles.errorText}>{contactError}</Text> : null}
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                onBlur={() => validatePassword(password)}
                secureTextEntry
              />
              {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
              <Text style={styles.label}>Confirm Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                onBlur={() => validateConfirmPassword(confirmPassword)}
                secureTextEntry
              />
              {confirmPasswordError ? <Text style={styles.errorText}>{confirmPasswordError}</Text> : null}
              <TouchableOpacity
                style={styles.checkboxContainer}
                onPress={() => setIsChecked(!isChecked)}
              >
                <View
                  style={[styles.checkbox, isChecked && styles.checkboxChecked]}
                >
                  {isChecked && <Text style={styles.checkmark}>✓</Text>}
                </View>
                <Text style={styles.checkboxText}>
                  Ensure all the info are correct
                </Text>
              </TouchableOpacity>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleNext}>
                  <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <>
              <Text style={styles.label}>GST No.</Text>
              <TextInput
                style={styles.input}
                placeholder="GST Number"
                value={businessLicense}
                onChangeText={setBusinessLicense}
                onBlur={() => validateBusinessLicense(businessLicense)}
                autoCapitalize="none"
              />
              {businessLicenseError ? <Text style={styles.errorText}>{businessLicenseError}</Text> : null}

              <View style={styles.fssaiContainer}>
                <Text style={styles.label}>FSSAI License</Text>
                <View style={styles.fssaiButtons}>
                  <TouchableOpacity
                    style={[
                      styles.fssaiButton,
                      hasFssaiLicense === true && styles.fssaiButtonSelected,
                    ]}
                    onPress={() => setHasFssaiLicense(true)}
                  >
                    <Text style={styles.fssaiButtonText}>Yes</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.fssaiButton,
                      hasFssaiLicense === false && styles.fssaiButtonSelected,
                    ]}
                    onPress={() => setHasFssaiLicense(false)}
                  >
                    <Text style={styles.fssaiButtonText}>No</Text>
                  </TouchableOpacity>
                </View>
                {hasFssaiLicense === true && (
                  <>
                    <TextInput
                      style={styles.input}
                      placeholder="FSSAI License Number"
                      value={fssaiLicenseNumber}
                      onChangeText={setFssaiLicenseNumber}
                      onBlur={() => validateFssaiLicenseNumber(fssaiLicenseNumber)}
                      autoCapitalize="none"
                    />
                    {fssaiLicenseNumberError ? <Text style={styles.errorText}>{fssaiLicenseNumberError}</Text> : null}
                  </>
                )}
                {hasFssaiLicense === false && (
                  <TouchableOpacity style={styles.link}>
                    <Text style={styles.linkText}>
                      Click here to apply for FSSAI License
                    </Text>
                  </TouchableOpacity>
                )}
              </View>

              {/* banking info */}
              <Text style={styles.label}>Bank Name</Text>
              <TouchableOpacity
                style={styles.bankSelectionInput}
                onPress={() => navigation.navigate('BankSelection')}
              >
                <Text
                  style={
                    bankName
                      ? styles.bankSelectionText
                      : styles.bankSelectionTextPlaceholder
                  }
                >
                  {bankName || 'Select Bank'}
                </Text>
              </TouchableOpacity>
              {bankNameError ? <Text style={styles.errorText}>{bankNameError}</Text> : null}

              <Text style={styles.label}>IFSC Code</Text>
              <TextInput
                style={styles.input}
                placeholder="IFSC Code"
                value={ifscCode}
                onChangeText={setIfscCode}
                onBlur={() => validateIfscCode(ifscCode)}
                autoCapitalize="characters"
              />
              {ifscCodeError ? <Text style={styles.errorText}>{ifscCodeError}</Text> : null}
              <Text style={styles.label}>Account no.</Text>
              <TextInput
                style={styles.input}
                placeholder="Account Number"
                value={accountNo}
                onChangeText={setAccountNo}
                onBlur={() => validateAccountNo(accountNo)}
                keyboardType="numeric"
              />
              {accountNoError ? <Text style={styles.errorText}>{accountNoError}</Text> : null}
              <Text style={styles.label}>Account Holder</Text>
              <TextInput
                style={styles.input}
                placeholder="Account Holder Name"
                value={accountHolder}
                onChangeText={setAccountHolder}
                onBlur={() => validateAccountHolder(accountHolder)}
                autoCapitalize="words"
              />
              {accountHolderError ? <Text style={styles.errorText}>{accountHolderError}</Text> : null}

              {/*  */}
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => setCurrentStep(1)}>
                  <Text style={styles.buttonText}>Prev</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                  <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
          {/* <TouchableOpacity>
            <Text style={styles.link}>Already have an account? Sign In</Text>
          </TouchableOpacity> */}
        </View>
      </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default PartnerSignUp;
