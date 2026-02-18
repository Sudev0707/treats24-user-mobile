import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../routes/AppRoutes';

type Props = NativeStackScreenProps<RootStackParamList, 'UserPartnerSelection'>;

const UserPartnerSelection: React.FC<Props> = ({ navigation }) => {
  const handleUserSelect = () => {
    navigation.navigate('Auth');
  };

  const handlePartnerSelect = () => {
    navigation.navigate('PartnerSignIn');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0F172A" />
      <Text style={styles.title}>Welcome to treats24</Text>
      <Text style={styles.subtitle}>Are you a User or a Partner?</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleUserSelect}>
          <Text style={styles.buttonText}>User</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handlePartnerSelect}>
          <Text style={styles.buttonText}>Partner</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#F97316',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#E5E7EB',
    marginBottom: 40,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 300,
  },
  button: {
    backgroundColor: '#F97316',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default UserPartnerSelection;
