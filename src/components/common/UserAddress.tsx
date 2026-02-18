import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Animated,
  FlatList,
  Modal,
  Platform,
  Image,
  Dimensions,
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
import AddressItem from './AddressItem';
import CustomAlert from './CustomAlert';

const UserAddress: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [addresses, setAddresses] = useState<Address[]>(userData.addresses);
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);
  const [alertVisible, setAlertVisible] = useState(false);
  const [addressToDelete, setAddressToDelete] = useState<string | null>(null);
  const menuIconRef = useRef<View>(null);

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
    setAddressToDelete(addressId);
    setAlertVisible(true);
  };

  const handleConfirmDelete = () => {
    if (addressToDelete) {
      setAddresses(prev => prev.filter(addr => addr.id !== addressToDelete));
      setAddressToDelete(null);
    }
    setAlertVisible(false);
  };

  const handleCancelDelete = () => {
    setAddressToDelete(null);
    setAlertVisible(false);
  };

  const handleMenuPress = (address: Address, ref: View | null) => {
    if (ref) {
      ref.measureInWindow((x: number, y: number, width: number, height: number) => {
        // setMenuPosition({ x: x - 50, y: y + height });
        setMenuPosition({ x: x - 110, y: y + height });
        setSelectedAddress(address);
        setMenuVisible(true);
      });
    }
  };

  const handleMenuClose = () => {
    setMenuVisible(false);
    setSelectedAddress(null);
  };

  const handleMenuEdit = () => {
    if (selectedAddress) {
      handleEditAddress(selectedAddress);
      handleMenuClose();
    }
  };

  const handleMenuDelete = () => {
    if (selectedAddress) {
      handleDeleteAddress(selectedAddress.id);
      handleMenuClose();
    }
  };

  const handleMenuSetDefault = () => {
    if (selectedAddress) {
      setAddresses(prev => prev.map(addr => ({
        ...addr,
        isDefault: addr.id === selectedAddress.id
      })));
      handleMenuClose();
    }
  };

  const renderAddressItem = ({ item }: { item: Address }) => <AddressItem item={item} onMenuPress={handleMenuPress} />;

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

      <Modal visible={menuVisible} transparent animationType="fade">
        <TouchableOpacity
          style={UserAddressStyle.overlay}
          activeOpacity={1}
          onPress={handleMenuClose}
        >
          <View style={[UserAddressStyle.menu, { left: menuPosition.x, top: menuPosition.y }]}>
            <TouchableOpacity style={UserAddressStyle.menuItem} onPress={handleMenuEdit}>
              <Icon name="edit" size={15} color={colors.textPrimary} />
              <Text style={UserAddressStyle.menuItemText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={UserAddressStyle.menuItem} onPress={handleMenuSetDefault}>
              <Icon name="star"  size={15} color={colors.brandPrimary} />
              <Text style={UserAddressStyle.menuItemText}>Set Default</Text>
            </TouchableOpacity>
            <TouchableOpacity style={UserAddressStyle.menuItem} onPress={handleMenuDelete}>
              <Icon name="trash"  size={15} color={colors.error} />
              <Text style={[UserAddressStyle.menuItemText, { color: colors.error }]}>Delete</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>

      <CustomAlert
        visible={alertVisible}
        title="Delete Address"
        message="Are you sure you want to delete this address?"
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
        confirmText="Delete"
        cancelText="Cancel"
      />
    </View>
  );
};

export default UserAddress;
