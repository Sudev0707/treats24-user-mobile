import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import CountryFlag from 'react-native-country-flag';
import { COUNTRIES } from '../../data/countries';
import styles from '../../styles/components/CountryModalStyles';

interface CountryModalProps {
  visible: boolean;
  onClose: () => void;
  onSelect: (iso: string, code: string) => void;
}

const CountryModal: React.FC<CountryModalProps> = ({
  visible,
  onClose,
  onSelect,
}) => {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.box}>
          <Text style={styles.title}>Select Country</Text>

          <FlatList
            data={COUNTRIES}
            keyExtractor={item => item.iso}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.countryRow}
                onPress={() => {
                  onSelect(item.iso, item.code);
                  onClose();
                }}
              >
                <CountryFlag isoCode={item.iso} size={18} />
                <Text style={styles.countryName}>{item.name}</Text>
                <Text style={styles.countryCode}>{item.code}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </Modal>
  );
};

export default CountryModal;
