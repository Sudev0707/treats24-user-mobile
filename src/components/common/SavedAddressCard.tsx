import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../theme/colors';

type Props = {
  title: string;
  address: string;
  distance?: string;
  icon?: string;
  openPopMenu?: () => void;
  item?: any;
  handleSetDefault?: (id: string) => void;
  handleEditAddress?: (item: any) => void;
  handleDeleteAddress?: (id: string) => void;
};

const SavedAddressCard = ({
  title,
  address,
  icon = 'home',
  openPopMenu,
  distance,
  item,
  handleSetDefault,
  handleEditAddress,
  handleDeleteAddress,
}: Props) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(prev => !prev);
  };

  // const toggleMenu = () => {
  //   setIsMenuVisible(!isMenuVisible);
  // };

  return (
    <View style={{ position: 'relative', overflow: 'visible' }}>
      <TouchableOpacity style={styles.addressCard} activeOpacity={0.9}>
        {/* LEFT */}
        <View style={styles.addressLeft}>
          <View style={styles.homeIcon}>
            <Feather name={icon} size={18} color={colors.brandPrimary} />
          </View>

          <View style={styles.textContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.addressTitle}>{title}</Text>
              {distance && <Text style={styles.distance}>{distance}</Text>}
            </View>

            <Text style={styles.addressText} numberOfLines={2}>
              {address}
            </Text>
          </View>
        </View>

        {/* RIGHT */}
        <View style={styles.addressRight}>
          <TouchableOpacity onPress={toggleMenu}>
            <Feather name="more-vertical" size={18} color="#999" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      {menuVisible && (
        <View style={styles.popupMenu}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              handleSetDefault?.(item?.id);
              setMenuVisible(false);
            }}
          >
            <Text style={styles.menuText}>Set Default</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              handleEditAddress?.(item);
              setMenuVisible(false);
            }}
          >
            <Text style={styles.menuText}>Edit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              handleDeleteAddress?.(item.id);
              setMenuVisible(false);
            }}
          >
            <Text style={[styles.menuText, { color: 'red' }]}>Delete</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default SavedAddressCard;
const styles = StyleSheet.create({
  addressCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    // marginHorizontal: 16,
    padding: 14,
    borderRadius: 14,
    elevation: 2,
    marginBottom: 7,
    borderWidth: 0.6,
    borderColor: colors.borderLight,
  },

  addressLeft: {
    flexDirection: 'row',
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // alignContent: 'center',
    // borderWidth: 1,
  },
  homeIcon: {
    backgroundColor: '#ffe8e8ff',
    padding: 8,
    borderRadius: 10,
    marginRight: 10,
    // borderWidth: 1,
    // paddingHorizontal:20,
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  textContainer: {
    flex: 1,
  },
  addressTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000',
  },

  addressText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  addressRight: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },

  distance: {
    fontSize: 12,
    color: '#999',
  },
  addressActions: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 120,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    zIndex: 10,
    flexDirection: 'column',
    alignItems: 'stretch',
    padding: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  actionButton: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  actionText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.brandPrimary,
  },
  deleteButton: {
    backgroundColor: '#ffebee',
  },
  deleteText: {
    color: '#d32f2f',
  },
  // =====
  popupMenu: {
    position: 'absolute',
    top: 28,
    right: 0,
    width: 140,
    backgroundColor: '#fff',
    borderRadius: 8,

    // shadow
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    zIndex: 999,
  },

  menuItem: {
    paddingVertical: 6,
    paddingHorizontal: 12,
  },

  menuText: {
    fontSize: 14,
    color: '#333',
  },
});
