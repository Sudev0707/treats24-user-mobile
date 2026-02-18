import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../theme/colors';
import LocationModalStyles from '../../styles/components/LocationModalStyles';

interface LocationModalProps {
  visible: boolean;
  onClose: () => void;
  onSelect: (location: string) => void;
}

// Sample locations data - you can replace with actual data
const LOCATIONS = [
  { id: '1', name: 'Bhubaneswar, Odisha', code: 'BHU' },
  { id: '2', name: 'Delhi, India', code: 'DEL' },
  { id: '3', name: 'Mumbai, Maharashtra', code: 'MUM' },
  { id: '4', name: 'Bangalore, Karnataka', code: 'BLR' },
  { id: '5', name: 'Chennai, Tamil Nadu', code: 'CHN' },
];

const LocationModal: React.FC<LocationModalProps> = ({
  visible,
  onClose,
  onSelect,
}) => {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={LocationModalStyles.overlay}>
        <View style={LocationModalStyles.box}>
          <Text style={LocationModalStyles.title}>Select Location</Text>

          <FlatList
            data={LOCATIONS}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={LocationModalStyles.locationRow}
                onPress={() => {
                  onSelect(item.name);
                  onClose();
                }}
              >
                <Icon name="map-pin" size={18} color={colors.brandPrimary} />
                <Text style={LocationModalStyles.locationName}>{item.name}</Text>
                <Text style={LocationModalStyles.locationCode}>{item.code}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </Modal>
  );
};

export default LocationModal;
