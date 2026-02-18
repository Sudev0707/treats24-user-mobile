import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from '../../styles/components/DOBModalStyles';
import Button from '../common/Button';
import colors from '../../theme/colors';

interface DOBModalProps {
  visible: boolean;
  onClose: () => void;
  onSelectDate: (date: string) => void;
  initialDate?: string;
}

const DOBModal: React.FC<DOBModalProps> = ({
  visible,
  onClose,
  onSelectDate,
  initialDate,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date>(
    initialDate ? new Date(initialDate) : new Date(),
  );
  const [showPicker, setShowPicker] = useState<boolean>(false);

  const handleDateChange = (event: any, date?: Date) => {
    if (Platform.OS === 'android') {
      setShowPicker(false);
    }
    if (date) {
      setSelectedDate(date);
    }
  };

  const handleConfirm = () => {
    const formattedDate = selectedDate.toLocaleDateString();
    onSelectDate(formattedDate);
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.box}>
          <Text style={styles.title}>Select Date of Birth</Text>
          <TouchableOpacity
            style={styles.dateInput}
            onPress={() => setShowPicker(true)}
          >
            <Text style={styles.dateText}>
              {selectedDate.toLocaleDateString()}
            </Text>
          </TouchableOpacity>
          {showPicker && (
            <DateTimePicker
              value={selectedDate}
              mode="date"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={handleDateChange}
              maximumDate={new Date()}
            />
          )}

          {/* wheel date picker */}

          <View style={styles.buttonContainer}>
            <View style={styles.cancelButton}>
              <Button title="Cancel" variant="outlined" onPress={onClose} isPhoneValid={true} />
            </View>
            <View style={styles.confirmButton}>
              <Button
                title="Confirm"
                variant="filled"
                onPress={handleConfirm}
                isPhoneValid={true}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DOBModal;
