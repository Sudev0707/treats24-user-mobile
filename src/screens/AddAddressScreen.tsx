import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
  Platform,
  StatusBar,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import UserAddressStyle from '../styles/components/UserAddressStyle';
import InputField from '../components/inputs/InputField';
import { Address } from '../data/userData';
import colors from '../theme/colors';
import { callbackRegistry } from '../utils/callbackRegistry';

const AddAddressScreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { editingAddress, callbackKey } = route.params as {
    editingAddress?: Address;
    callbackKey?: string;
  };

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    street: '',
    area: '',
    city: '',
    state: '',
    pincode: '',
    label: 'HOME' as Address['label'],
  });

  const addressTypes = [
    { label: 'HOME', icon: 'home', color: '#4CAF50' },
    { label: 'WORK', icon: 'briefcase', color: '#2196F3' },
    { label: 'OFFICE', icon: 'building', color: '#FF9800' },
    { label: 'OTHER', icon: 'map-pin', color: '#9C27B0' },
  ];

  useEffect(() => {
    if (editingAddress) {
      setFormData({
        name: editingAddress.name,
        mobile: editingAddress.mobile,
        street: editingAddress.street,
        area: editingAddress.area,
        city: editingAddress.city,
        state: editingAddress.state,
        pincode: editingAddress.pincode,
        label: editingAddress.label,
      });
    }
  }, [editingAddress]);

  const handleSaveAddress = () => {
    if (
      !formData.name ||
      !formData.mobile ||
      !formData.street ||
      !formData.city ||
      !formData.state ||
      !formData.pincode
    ) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    const newAddress: Address = {
      id: editingAddress ? editingAddress.id : `addr_${Date.now()}`,
      ...formData,
      latitude: 0,
      longitude: 0,
      isDefault: false,
    };

    if (callbackKey) {
      const callback = callbackRegistry.get(callbackKey);
      if (callback) {
        callback(newAddress);
        callbackRegistry.delete(callbackKey);
      }
    }

    navigation.goBack();
  };

  const FORM_CONTENT = (
    <>
      <InputField
        label="Full Name"
        placeholder="Enter your full name"
        value={formData.name}
        onChangeText={text => setFormData(p => ({ ...p, name: text }))}
        variant="standard"
      />

      <InputField
        label="Mobile Number"
        placeholder="Enter mobile number"
        value={formData.mobile}
        keyboardType="phone-pad"
        onChangeText={text => setFormData(p => ({ ...p, mobile: text }))}
        variant="standard"
      />

      <InputField
        label="House / Flat / Door No."
        placeholder="Enter house or flat number"
        value={formData.street}
        onChangeText={text => setFormData(p => ({ ...p, street: text }))}
        variant="standard"
      />

      <InputField
        label="Street / Area / Locality"
        placeholder="Enter street or area"
        value={formData.area}
        onChangeText={text => setFormData(p => ({ ...p, area: text }))}
        variant="standard"
      />

      <InputField
        label="City"
        placeholder="Enter city"
        value={formData.city}
        onChangeText={text => setFormData(p => ({ ...p, city: text }))}
        variant="standard"
      />

      <InputField
        label="State"
        placeholder="Enter state"
        value={formData.state}
        onChangeText={text => setFormData(p => ({ ...p, state: text }))}
        variant="standard"
      />

      <InputField
        label="Pincode"
        placeholder="Enter pincode"
        value={formData.pincode}
        keyboardType="numeric"
        onChangeText={text => setFormData(p => ({ ...p, pincode: text }))}
        variant="standard"
      />

      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          marginTop: 20,
          marginBottom: 10,
          color: colors.textPrimary,
        }}
      >
        Address Type
      </Text>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 25 }}>
        {addressTypes.map(type => (
          <TouchableOpacity
            key={type.label}
            onPress={() =>
              setFormData(p => ({
                ...p,
                label: type.label as Address['label'],
              }))
            }
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 10,
              margin: 5,
              borderRadius: 8,
              borderWidth: 1,
              borderColor:
                formData.label === type.label ? type.color : '#ddd',
              backgroundColor:
                formData.label === type.label
                  ? `${type.color}20`
                  : 'transparent',
            }}
          >
            <Icon
              name={type.icon}
              size={16}
              color={
                formData.label === type.label ? type.color : '#666'
              }
            />
            <Text
              style={{
                marginLeft: 6,
                fontSize: 14,
                fontWeight:
                  formData.label === type.label ? 'bold' : 'normal',
                color:
                  formData.label === type.label
                    ? type.color
                    : colors.textPrimary,
              }}
            >
              {type.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={UserAddressStyle.buttonContainer}>
        <TouchableOpacity
          style={[
            UserAddressStyle.actionButton,
            {
              // flex: 1,
              // marginRight: 10,
              backgroundColor: colors.background,
              borderWidth: 1,
              borderColor: colors.brandPrimary,
            },
          ]}
          onPress={() => navigation.goBack()}
        >
          <Text style={[UserAddressStyle.actionText, { color: '#666' }]}>
            Cancel
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            UserAddressStyle.actionButton,
            {
              // flex: 1,
              // marginLeft: 10,
              backgroundColor: colors.brandPrimary,
            },
          ]}
          onPress={handleSaveAddress}
        >
          <Text
            style={[
              UserAddressStyle.actionText,
              { color: colors.background },
            ]}
          >
            Save Address
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />

      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 20,
          paddingBottom: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/icons/iconsback.png')}
            style={{ width: 20, height: 20, tintColor: colors.textPrimary }}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginLeft: 15,
            color: colors.textPrimary,
          }}
        >
          {editingAddress ? 'Edit Address' : 'Add New Address'}
        </Text>
      </View>

      {Platform.OS === 'ios' ? (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
          <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{
              paddingHorizontal: 20,
              paddingTop: 10,
              paddingBottom: 30,
            }}
          >
            {FORM_CONTENT}
          </ScrollView>
        </KeyboardAvoidingView>
      ) : (
        <KeyboardAwareScrollView
          enableOnAndroid
          extraScrollHeight={24}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingTop: 10,
            paddingBottom: 20,
          }}
        >
          {FORM_CONTENT}
        </KeyboardAwareScrollView>
      )}
    </SafeAreaView>
  );
};

export default AddAddressScreen;
