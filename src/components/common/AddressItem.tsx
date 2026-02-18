import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Address } from '../../data/userData';
import colors from '../../theme/colors';
import UserAddressStyle from '../../styles/components/UserAddressStyle';

interface AddressItemProps {
  item: Address;
  onMenuPress: (address: Address, ref: View | null) => void;
}

const addressTypes = [
  { label: 'HOME', icon: 'home', color: '#4CAF50' },
  { label: 'WORK', icon: 'briefcase', color: '#2196F3' },
  { label: 'OFFICE', icon: 'building', color: '#FF9800' },
  { label: 'OTHER', icon: 'map-pin', color: '#9C27B0' },
];

const AddressItem: React.FC<AddressItemProps> = ({ item, onMenuPress }) => {
  const menuIconRef = useRef<View>(null);
  const typeInfo = addressTypes.find(type => type.label === item.label);

  return (
    <View style={UserAddressStyle.addressItem}>
      <View style={UserAddressStyle.addressItemInner}>
        <View>
          <View style={UserAddressStyle.addressItemLabelRow}>
            <Icon name={typeInfo?.icon || 'map-pin'} size={20} color={typeInfo?.color || '#666'} />
            <Text style={UserAddressStyle.addressItemLabelText}>
              {item.label.charAt(0) + item.label.slice(1).toLowerCase()}
              {item.isDefault && <Text style={UserAddressStyle.addressItemDefaultText}> (Default)</Text>}
            </Text>
          </View>
          <Text style={UserAddressStyle.addressItemNameText}>
            {item.name} • {item.mobile}
          </Text>
          <Text style={UserAddressStyle.addressItemAddressText}>
            {item.street}, {item.area}, {item.city}, {item.state} {item.pincode}
          </Text>
        </View>
        <TouchableOpacity ref={menuIconRef} style={UserAddressStyle.addressItemMenuButton} onPress={() => onMenuPress(item, menuIconRef.current)}>
          <Image style={UserAddressStyle.addressItemMenuIcon} source={require('../../assets/icons/iconsmenu.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddressItem;
