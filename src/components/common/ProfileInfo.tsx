import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../theme/colors';
import styles from '../../styles/components/ProfileInfoStyles';
import Button from './Button';
import InputField from '../inputs/InputField';
import DOBInput from '../inputs/DOBInput';
import CountryCodeInput from '../inputs/CountryCodeInput';
import Col from '../layout/Col';
import TextHeader from './TextHeader';
import axiosInstance from '../../api/axios';

const ProfileInfo: React.FC = () => {
  const [selectedGender, setSelectedGender] = useState<string>('');
  const [dob, setDob] = useState<string>('');
  const [countryCode, setCountryCode] = useState<{
    iso: string;
    code: string;
  } | null>(null);
  const [firstName, setFirstName] = useState<string>('Sudev');
  const [lastName, setLastName] = useState<string>('Maji');
  const [email, setEmail] = useState<string>('sudev97gmail.com');
  const [mobile, setMobile] = useState<string>('7488854000');
  const genderOptions = ['Male', 'Female', 'Other'];

  const handleUpdate = async () => {
    try {
      const profileData = {
        firstName,
        lastName,
        email,
        mobile: `${countryCode?.code || ''}${mobile}`,
        dob,
        gender: selectedGender,
      };

      const response = await axiosInstance.put('/api/auth/profile', profileData);

      if (response.status === 200) {
        Alert.alert('Success', 'Profile updated successfully!');
      } else {
        Alert.alert('Error', 'Failed to update profile. Please try again.');
      }
    } catch (error) {
      console.error('Update profile error:', error);
      Alert.alert('Error', 'An error occurred while updating the profile.');
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.userDetailContainer}>
          <View
            style={{
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              // borderWidth: 1,
              width: 130,
              height: 130,
              borderRadius: 100,
              backgroundColor: colors.backgroundSoft,
              // elevation:1,
              top: -80,
            }}
          >
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>S</Text>
            </View>
          </View>

          <TextHeader type="labeled" title="Basic Details" />
          <InputField
            label="First Name"
            placeholder="Enter first name"
            value={firstName}
            onChangeText={setFirstName}
            type="text"
          />
          <InputField
            label="Last Name"
            placeholder="Enter last name"
            value={lastName}
            onChangeText={setLastName}
            type="text"
          />

          <InputField
            label="Email"
            placeholder="Enter email"
            value={email}
            onChangeText={setEmail}
            type="email"
          />
          <View style={styles.roww}>
            <View style={{ width: '35%' }}>
              {/* country code */}
              <CountryCodeInput
                label="Country Code"
                value={countryCode}
                onChange={setCountryCode}
              />
            </View>

            <View style={{ width: '60%' }}>
              <InputField
                label="Mobile"
                placeholder="Enter mobile number"
                value={'7488854000'}
                onChangeText={() => {
                  ('');
                }}
                type="text"
                keyboardType="phone-pad"
              />
            </View>
          </View>
          {/*  */}

          <DOBInput label="Date of birth" value={dob} onChange={setDob} />

          {/*  */}
          <TextHeader type="secondary" title="Gender" />
          <View style={styles.genderContainer}>
            {genderOptions.map(gender => (
              <TouchableOpacity
                key={gender}
                style={styles.radioButton}
                onPress={() => setSelectedGender(gender)}
              >
                <View
                  style={[
                    styles.radioCircle,
                    selectedGender === gender && styles.selectedRadioCircle,
                  ]}
                >
                  {selectedGender === gender && (
                    <View style={styles.selectedRb} />
                  )}
                </View>
                <Text style={styles.radioText}>{gender}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={{ marginTop: 50 }}>
          <Button
            title="Update"
            variant="filled"
            onPress={handleUpdate}
            isPhoneValid={true}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ProfileInfo;
