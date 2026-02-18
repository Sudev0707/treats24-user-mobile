import React from 'react';
import { Text } from 'react-native';
import TextHeaderStyles from '../../styles/components/TextHeaderStyles';

interface TextHeaderProps {
  type: 'primary' | 'secondary' | 'tertiary' | 'labeled';
  title?: string
}

const TextHeader: React.FC<TextHeaderProps> = ({ type, title }) => {
  return <Text style={TextHeaderStyles[type]}>{title}</Text>;
};

export default TextHeader;
