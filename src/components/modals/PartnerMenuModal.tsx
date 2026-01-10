import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../theme/colors';
import PartnerMenuModalStyles from '../../styles/components/PartnerMenuModalStyles';

interface PartnerMenuModalProps {
  visible: boolean;
  onClose: () => void;
  onEditProfile: () => void;
  onViewMenu: () => void;
  onLogout: () => void;
  onSettings: () => void;
  partnerName: string;
  partnerEmail: string;
}

const PartnerMenuModal: React.FC<PartnerMenuModalProps> = ({
  visible,
  onClose,
  onEditProfile,
  onViewMenu,
  onLogout,
  onSettings,
  partnerName,
  partnerEmail,
}) => {
  const menuItems = [
    {
      id: 'editProfile',
      label: 'Edit Profile',
      icon: 'user',
      onPress: onEditProfile,
    },
    {
      id: 'viewMenu',
      label: 'View Menu',
      icon: 'list',
      onPress: onViewMenu,
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: 'settings',
      onPress: onSettings,
    },
    {
      id: 'logout',
      label: 'Logout',
      icon: 'log-out',
      onPress: onLogout,
    },
  ];

  return (
    <Modal visible={visible} transparent animationType="slide">
      <TouchableOpacity
        style={PartnerMenuModalStyles.overlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <View style={PartnerMenuModalStyles.box}>
          <TouchableOpacity
            style={PartnerMenuModalStyles.closeButton}
            onPress={onClose}
          >
            <Icon name="x" size={24} color={colors.textPrimary} />
          </TouchableOpacity>

          <View style={PartnerMenuModalStyles.header}>
            <Image
              source={require('../../assets/icons/iconsmenu.png')}
              style={PartnerMenuModalStyles.profileImage}
            />
            <View style={PartnerMenuModalStyles.profileInfo}>
              <Text style={PartnerMenuModalStyles.profileName}>{partnerName}</Text>
              <Text style={PartnerMenuModalStyles.profileEmail}>{partnerEmail}</Text>
            </View>
          </View>

          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={PartnerMenuModalStyles.menuItem}
              onPress={() => {
                item.onPress();
                onClose();
              }}
            >
              <Icon name={item.icon} size={20} color={colors.brandPrimary} />
              <Text style={PartnerMenuModalStyles.menuItemText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default PartnerMenuModal;
