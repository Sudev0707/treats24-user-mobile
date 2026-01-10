import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/screens/PartnerSignUpStyles';
import type { RootStackParamList } from '../routes/types';

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

  useEffect(() => {
    if (route.params?.selectedBank) {
      setBankName(route.params.selectedBank);
    }
  }, [route.params?.selectedBank]);

  const handleNext = () => {
    if (!name || !addressOne || !addressTwo || !city || !district || !pinCode || !email || !contact || !password || !confirmPassword) {
      // Alert.alert('Error', 'Please fill in all fields');
      // return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    if (!isChecked) {
      Alert.alert('Error', 'Please confirm that all information is correct');
      return;
    }
    setCurrentStep(2);
  };

  const handleSignUp = () => {
    if (!businessLicense || !taxId) {
      Alert.alert('Error', 'Please fill in business license and tax ID');
      return;
    }
    // TODO: Implement sign up logic
    Alert.alert('Success', 'Sign up successful');
    navigation.navigate('Auth'); // Navigate to main auth or dashboard
  };

  return (
    <SafeAreaView style={styles.container}>
      {currentStep === 2 && (
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => setCurrentStep(1)}>
            <Text style={styles.backButtonText}>← Back</Text>
          </TouchableOpacity>
        </View>
      )}
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
                autoCapitalize="words"
              />
              <Text style={styles.label}>Address one</Text>
              <TextInput
                style={styles.input}
                placeholder="Address Line 1"
                value={addressOne}
                onChangeText={setAddressOne}
                autoCapitalize="words"
              />
              <Text style={styles.label}>Address two</Text>
              <TextInput
                style={styles.input}
                placeholder="Address Line 2"
                value={addressTwo}
                onChangeText={setAddressTwo}
                autoCapitalize="words"
              />
              <Text style={styles.label}>City</Text>
              <TextInput
                style={styles.input}
                placeholder="City"
                value={city}
                onChangeText={setCity}
                autoCapitalize="words"
              />
              <Text style={styles.label}>District</Text>
              <TextInput
                style={styles.input}
                placeholder="District"
                value={district}
                onChangeText={setDistrict}
                autoCapitalize="words"
              />
              <Text style={styles.label}>Pin Code</Text>
              <TextInput
                style={styles.input}
                placeholder="Pin Code"
                value={pinCode}
                onChangeText={setPinCode}
                keyboardType="numeric"
              />
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <Text style={styles.label}>Contact</Text>
              <TextInput
                style={styles.input}
                placeholder="Contact Number"
                value={contact}
                onChangeText={setContact}
                keyboardType="phone-pad"
              />
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
              <Text style={styles.label}>Confirm Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
              />
              <TouchableOpacity style={styles.checkboxContainer} onPress={() => setIsChecked(!isChecked)}>
                <View style={[styles.checkbox, isChecked && styles.checkboxChecked]}>
                  {isChecked && <Text style={styles.checkmark}>✓</Text>}
                </View>
                <Text style={styles.checkboxText}>Ensure all the info are correct</Text>
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
                autoCapitalize="none"
              />

              <View style={styles.fssaiContainer}>
                <Text style={styles.label}>FSSAI License</Text>
                <View style={styles.fssaiButtons}>
                  <TouchableOpacity
                    style={[styles.fssaiButton, hasFssaiLicense === true && styles.fssaiButtonSelected]}
                    onPress={() => setHasFssaiLicense(true)}
                  >
                    <Text style={styles.fssaiButtonText}>Yes</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.fssaiButton, hasFssaiLicense === false && styles.fssaiButtonSelected]}
                    onPress={() => setHasFssaiLicense(false)}
                  >
                    <Text style={styles.fssaiButtonText}>No</Text>
                  </TouchableOpacity>
                </View>
                {hasFssaiLicense === true && (
                  <TextInput
                    style={styles.input}
                    placeholder="FSSAI License Number"
                    value={fssaiLicenseNumber}
                    onChangeText={setFssaiLicenseNumber}
                    autoCapitalize="none"
                  />
                )}
                {hasFssaiLicense === false && (
                  <TouchableOpacity style={styles.link}>
                    <Text style={styles.linkText}>Click here to apply for FSSAI License</Text>
                  </TouchableOpacity>
                )}
              </View>

              {/* banking info */}
              <Text style={styles.label}>Bank Name</Text>
              <TouchableOpacity
                style={styles.bankSelectionInput}
                onPress={() => navigation.navigate('BankSelection')}
              >
                <Text style={bankName ? styles.bankSelectionText : styles.bankSelectionTextPlaceholder}>
                  {bankName || 'Select Bank'}
                </Text>
              </TouchableOpacity>
              
              <Text style={styles.label}>IFSC Code</Text>
              <TextInput
                style={styles.input}
                placeholder="IFSC Code"
                value={ifscCode}
                onChangeText={setIfscCode}
                autoCapitalize="characters"
              />
              <Text style={styles.label}>Account no.</Text>
              <TextInput
                style={styles.input}
                placeholder="Account Number"
                value={accountNo}
                onChangeText={setAccountNo}
                keyboardType="numeric"
              />
              <Text style={styles.label}>Account Holder</Text>
              <TextInput
                style={styles.input}
                placeholder="Account Holder Name"
                value={accountHolder}
                onChangeText={setAccountHolder}
                autoCapitalize="words"
              />

              <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
            </>
          )}
          {/* <TouchableOpacity>
            <Text style={styles.link}>Already have an account? Sign In</Text>
          </TouchableOpacity> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PartnerSignUp;
