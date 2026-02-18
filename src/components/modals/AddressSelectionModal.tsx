import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Pressable,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AddressSelectionModalStyles from '../../styles/components/AddressSelectionModalStyles';
import colors from '../../theme/colors';

interface Address {
  id: string;
  title: string;
  address: string;
  icon?: string;
}

interface AddressSelectionModalProps {
  visible: boolean;
  onClose: () => void;
  onSelect: (addressId: string) => void;
  onAddNewAddress?: () => void;
  addresses: Address[];
  selectedAddressId: string | null;
}

const AddressSelectionModal: React.FC<AddressSelectionModalProps> = ({
  visible,
  onClose,
  onSelect,
  onAddNewAddress,
  addresses,
  selectedAddressId,
}) => {
  const handleSelectAddress = (addressId: string) => {
    onSelect(addressId);
    onClose();
  };

  const renderAddressItem = ({ item }: { item: Address }) => {
    const isSelected = item.id === selectedAddressId;

    return (
      <TouchableOpacity
        style={[
          AddressSelectionModalStyles.addressRow,
          isSelected && AddressSelectionModalStyles.addressRowSelected,
        ]}
        onPress={() => handleSelectAddress(item.id)}
        activeOpacity={0.7}
      >
        <View style={AddressSelectionModalStyles.iconCircle}>
          <Feather
            name={item.icon || 'map-pin'}
            size={18}
            color={colors.brandPrimary}
          />
        </View>

        <View style={AddressSelectionModalStyles.textSection}>
          <Text style={AddressSelectionModalStyles.mainText}>{item.title}</Text>
          <Text
            style={AddressSelectionModalStyles.subText}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {item.address}
          </Text>
        </View>

        {isSelected && (
          <View style={AddressSelectionModalStyles.checkmark}>
            <Text style={AddressSelectionModalStyles.checkmarkText}>✓</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <Pressable style={AddressSelectionModalStyles.overlay} onPress={onClose}>
        <Pressable
          style={AddressSelectionModalStyles.box}
          onPress={e => e.stopPropagation()}
        >
          <View style={AddressSelectionModalStyles.handle} />

          <Text style={AddressSelectionModalStyles.title}>
            Select Delivery Address
          </Text>

          <FlatList
            data={addresses}
            keyExtractor={item => item.id}
            renderItem={renderAddressItem}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 10 }}
          />
          <TouchableOpacity 
            style={AddressSelectionModalStyles.addAddressBtn}
            onPress={() => {
              if (onAddNewAddress) {
                onAddNewAddress();
              }
            }}
          >
            <Feather name="plus-circle" size={20} color={colors.brandPrimary} />
            <Text style={AddressSelectionModalStyles.addAddressText}>
              Add New Address
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={AddressSelectionModalStyles.closeButton}
            onPress={onClose}
            activeOpacity={0.8}
          >
            <Text style={AddressSelectionModalStyles.closeButtonText}>
              Cancel
            </Text>
          </TouchableOpacity>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default AddressSelectionModal;
