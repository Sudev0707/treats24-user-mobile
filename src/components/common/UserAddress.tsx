import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
  Animated,
  FlatList,
  Modal,
  Platform,
  Image,
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import UserAddressStyle from '../../styles/components/UserAddressStyle';
import styles from '../../styles/components/ProfileInfoStyles';
import TextHeader from './TextHeader';
import InputField from '../inputs/InputField';
import { savedAddress } from '../../data/savedAddress';
import { userData, Address } from '../../data/userData';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import { callbackRegistry } from '../../utils/callbackRegistry';
import { RootStackParamList } from '../../routes/AppRoutes';

const UserAddress: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [addresses, setAddresses] = useState<Address[]>(userData.addresses);

  const addressTypes = [
    { label: 'HOME', icon: 'home', color: '#4CAF50' },
    { label: 'WORK', icon: 'briefcase', color: '#2196F3' },
    { label: 'OFFICE', icon: 'building', color: '#FF9800' },
    { label: 'OTHER', icon: 'map-pin', color: '#9C27B0' },
  ];

  const handleAddAddress = () => {
    const callbackKey = `add_${Date.now()}`;
    callbackRegistry.set(callbackKey, (address: Address) => {
      setAddresses(prev => [...prev, address]);
    });
    navigation.navigate('AddAddressScreen', {
      callbackKey,
    });
  };

  const handleEditAddress = (address: Address) => {
    const callbackKey = `edit_${Date.now()}`;
    callbackRegistry.set(callbackKey, (updatedAddress: Address) => {
      setAddresses(prev => prev.map(addr => addr.id === address.id ? updatedAddress : addr));
    });
    navigation.navigate('AddAddressScreen', {
      editingAddress: address,
      callbackKey,
    });
  };

  const handleDeleteAddress = (addressId: string) => {
    Alert.alert(
      'Delete Address',
      'Are you sure you want to delete this address?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => setAddresses(prev => prev.filter(addr => addr.id !== addressId)),
        },
      ]
    );
  };

  const renderAddressItem = ({ item }: { item: Address }) => {
    const typeInfo = addressTypes.find(type => type.label === item.label);
    return (
      <TouchableOpacity
        style={UserAddressStyle.addressItem}
        onPress={() => handleEditAddress(item)}
      >
        <View style={{ borderRadius:15, padding: 15, borderWidth:0.8, flexDirection:'row', justifyContent:'space-between' }}>
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
            <Icon name={typeInfo?.icon || 'map-pin'} size={20} color={typeInfo?.color || '#666'} />
            <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 10, color: colors.textPrimary }}>
              {item.label.charAt(0) + item.label.slice(1).toLowerCase()}
              {item.isDefault && <Text style={{ color: colors.brandPrimary }}> (Default)</Text>}
            </Text>
             </View>
            <Text style={{ fontSize: 14, color: colors.textSecondary, marginBottom: 4 }}>
              {item.name} • {item.mobile}
            </Text>
            <Text style={{ fontSize: 14, color: colors.textPrimary }}>
              {item.street}, {item.area}, {item.city}, {item.state} {item.pincode}
            </Text>
          </View>
          <View>
            <TouchableOpacity style={{ borderWidth:0.8,}} >
              <Image style={{width:20, height:20, }} source={require('../../assets/icons/iconsmenu.png')}/>
            </TouchableOpacity>
          </View>
        
        </View>


        <View style={UserAddressStyle.addressActions}>
          <TouchableOpacity
            style={[UserAddressStyle.actionButton, UserAddressStyle.deleteButton]}
            onPress={() => handleDeleteAddress(item.id)}
          >
            <Text style={UserAddressStyle.deleteText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={UserAddressStyle.container}>
      {addresses.length === 0 ? (
        <View style={UserAddressStyle.emptyContainer}>
          <Icon name="map-o" size={48} color="#ccc" />
          <Text style={UserAddressStyle.emptyText}>No saved addresses yet</Text>
          <Text style={UserAddressStyle.emptyText}>Add your first delivery address</Text>
        </View>
      ) : (
        <FlatList
          data={addresses}
          renderItem={renderAddressItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={UserAddressStyle.listContainer}
          showsVerticalScrollIndicator={false}
        />
      )}

      <View style={UserAddressStyle.footer}>
        <TouchableOpacity
          style={UserAddressStyle.addAddressButton}
          onPress={handleAddAddress}
        >
          <Text style={UserAddressStyle.addAddressText}>+ Add New Address</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserAddress;
