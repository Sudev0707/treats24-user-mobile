import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { RestaurantScreenStyle } from '../../styles/screens/RestaurantScreenStyle';

interface FilterChipProps {
  item: {
    id: string;
    title: string;
    isToggleable: boolean;
  };
  activeChips: { [key: string]: boolean };
  activeCount: number;
  onPress: (item: { id: string; title: string; isToggleable: boolean }) => void;
}

const FilterChip: React.FC<FilterChipProps> = ({
  item,
  activeChips,
  activeCount,
  onPress,
}) => {
  const isActive = activeChips[item.title];
  const isFilterChip = item.title === 'Filters';

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[
        RestaurantScreenStyle.chip,
        (item.isToggleable && activeChips[item.title] && activeCount > 0) ||
        (isFilterChip && activeCount > 0)
          ? RestaurantScreenStyle.activeChip
          : undefined,
      ]}
      onPress={item.isToggleable ? () => onPress(item) : undefined}
    >
      <Text
        style={[
          (item.isToggleable && activeChips[item.title]) ||
          (isFilterChip && activeCount > 0)
            ? RestaurantScreenStyle.activeChipText
            : RestaurantScreenStyle.ChipText,
        ]}
      >
        {item.title}
      </Text>
      {isFilterChip && activeCount > 0 && (
        <Text style={[RestaurantScreenStyle.countText]}>({activeCount})</Text>
      )}
      {item.isToggleable && activeChips[item.title] && (
        <Text style={[RestaurantScreenStyle.crossIcon]}>×</Text>
      )}
    </TouchableOpacity>
  );
};

export default FilterChip;
