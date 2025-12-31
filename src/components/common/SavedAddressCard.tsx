import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../theme/colors';

type Props = {
  title: string;
  address: string;
  distance?: string;
  icon?: string;
  onMorePress?: () => void;
};

const SavedAddressCard = ({
  title,
  address,
  icon = 'home',
  onMorePress,
  distance,
}: Props) => {
  return (
    <View style={styles.addressCard}>
      {/* LEFT */}
      <View style={styles.addressLeft}>
        <View style={styles.homeIcon}>
          <Feather name={icon} size={18}   color={colors.brandPrimary} />
        </View>

        <View style={styles.textContainer}>
          <View style={{ flexDirection: 'row',alignItems:'center' }}> 
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
        <TouchableOpacity onPress={onMorePress}>
          <Feather name="more-vertical" size={18} color="#999" />
        </TouchableOpacity>
      </View>
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
    // elevation: 2,
    // marginBottom: 7,
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
});
