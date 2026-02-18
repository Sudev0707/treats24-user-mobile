import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import AlertStyles from '../../styles/components/AlertStyles';

const CustomAlert = ({
  visible,
  title,
  message,
  onClose,
  onConfirm,
  onCancel,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  loading = false,
}: {
  visible: boolean;
  title: string;
  message: string;
  onClose?: () => void;
  onConfirm?: () => void;
  onCancel?: () => void;
  confirmText?: string;
  cancelText?: string;
  loading?: boolean;
}) => {
  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    } else if (onClose) {
      onClose();
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    } else if (onClose) {
      onClose();
    }
  };

  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View style={AlertStyles.overlay}>
        <View style={AlertStyles.alertBox}>
          <Text style={AlertStyles.title}>{title}</Text>
          <Text style={AlertStyles.message}>{message}</Text>

          <View style={AlertStyles.buttonContainer}>
            <TouchableOpacity
              style={[AlertStyles.button, AlertStyles.cancelButton]}
              onPress={handleCancel}
              disabled={loading}
            >
              <Text style={[AlertStyles.buttonText, AlertStyles.cancelButtonText]}>{cancelText}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[AlertStyles.button, AlertStyles.confirmButton]}
              onPress={handleConfirm}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={AlertStyles.buttonText}>{confirmText}</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomAlert;
