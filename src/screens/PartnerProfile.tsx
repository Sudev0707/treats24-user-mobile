import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { RootStackParamList } from '../routes/types';
import { styles } from '../styles/screens/PartnerSignUpStyles';

type Props = NativeStackScreenProps<RootStackParamList, 'PartnerProfile'>;

const PartnerProfile: React.FC<Props> = ({ navigation, route }) => {
  const {
    name: initialName,
    addressOne: initialAddressOne,
    addressTwo: initialAddressTwo,
    city: initialCity,
    district: initialDistrict,
    pinCode: initialPinCode,
    email: initialEmail,
    contact: initialContact,
    businessLicense: initialBusinessLicense,
    hasFssaiLicense: initialHasFssaiLicense,
    fssaiLicenseNumber: initialFssaiLicenseNumber,
    bankName: initialBankName,
    ifscCode: initialIfscCode,
    accountNo: initialAccountNo,
    accountHolder: initialAccountHolder,
  } = route.params;

  const [name, setName] = useState(initialName);
  const [addressOne, setAddressOne] = useState(initialAddressOne);
  const [addressTwo, setAddressTwo] = useState(initialAddressTwo);
  const [city, setCity] = useState(initialCity);
  const [district, setDistrict] = useState(initialDistrict);
  const [pinCode, setPinCode] = useState(initialPinCode);
  const [email, setEmail] = useState(initialEmail);
  const [contact, setContact] = useState(initialContact);
  const [businessLicense, setBusinessLicense] = useState(initialBusinessLicense);
  const [hasFssaiLicense, setHasFssaiLicense] = useState(initialHasFssaiLicense);
  const [fssaiLicenseNumber, setFssaiLicenseNumber] = useState(initialFssaiLicenseNumber);
  const [bankName, setBankName] = useState(initialBankName);
  const [ifscCode, setIfscCode] = useState(initialIfscCode);
  const [accountNo, setAccountNo] = useState(initialAccountNo);
  const [accountHolder, setAccountHolder] = useState(initialAccountHolder);

  const handleSave = () => {
    // TODO: Implement save logic (API call)
    Alert.alert('Success', 'Profile updated successfully!');
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Edit Profile</Text>
          <Text style={styles.subtitle}>Update your restaurant information</Text>

          <View style={styles.detailSection}>
            <Text style={styles.sectionTitle}>Restaurant Information</Text>

            <Text style={styles.label}>Restaurant Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Restaurant Name"
              value={name}
              onChangeText={setName}
              autoCapitalize="words"
            />

            <Text style={styles.label}>Address Line 1</Text>
            <TextInput
              style={styles.input}
              placeholder="Address Line 1"
              value={addressOne}
              onChangeText={setAddressOne}
              autoCapitalize="words"
            />

            <Text style={styles.label}>Address Line 2</Text>
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

            <Text style={styles.label}>Contact Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Contact Number"
              value={contact}
              onChangeText={setContact}
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.detailSection}>
            <Text style={styles.sectionTitle}>Business Details</Text>

            <Text style={styles.label}>GST Number</Text>
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
                    autoCapitalize="none"
                  />
                </>
              )}
            </View>
          </View>

          <View style={styles.detailSection}>
            <Text style={styles.sectionTitle}>Banking Information</Text>

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

            <Text style={styles.label}>IFSC Code</Text>
            <TextInput
              style={styles.input}
              placeholder="IFSC Code"
              value={ifscCode}
              onChangeText={setIfscCode}
              autoCapitalize="characters"
            />

            <Text style={styles.label}>Account Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Account Number"
              value={accountNo}
              onChangeText={setAccountNo}
              keyboardType="numeric"
            />

            <Text style={styles.label}>Account Holder Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Account Holder Name"
              value={accountHolder}
              onChangeText={setAccountHolder}
              autoCapitalize="words"
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, { flex: 1, marginHorizontal: 5 }]}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { flex: 1, marginHorizontal: 5 }]}
              onPress={handleSave}
            >
              <Text style={styles.buttonText}>Save Changes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PartnerProfile;
