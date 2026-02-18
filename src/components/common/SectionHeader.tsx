import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../styles/screens/DashboardStyles';

interface SectionHeaderProps {
  title: string;
  onActionPress?: () => void;
  actionText?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  onActionPress,
  actionText = 'See all',
}) => {
  return (
    <View style={styles.sectionHeaderRow}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {onActionPress && (
        <TouchableOpacity onPress={onActionPress}>
          <Text style={styles.sectionAction}>{actionText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SectionHeader;
