import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Alert,
  Image,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { RootStackParamList } from '../routes/types';
import Header from '../components/common/Header';

type Props = NativeStackScreenProps<RootStackParamList, 'BankSelection'>;

const BankSelection: React.FC<Props> = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [banks] = useState([
    'State Bank of India',
    'HDFC Bank',
    'ICICI Bank',
    'Axis Bank',
    'Punjab National Bank',
    'Bank of Baroda',
    'Canara Bank',
    'Union Bank of India',
    'IDBI Bank',
    'Kotak Mahindra Bank',
    'IndusInd Bank',
    'Federal Bank',
    'Yes Bank',
    'Bandhan Bank',
    'RBL Bank',
    'IDFC First Bank',
    'Jammu & Kashmir Bank',
    'South Indian Bank',
    'City Union Bank',
    'Karnataka Bank',
  ]);

  const filteredBanks = banks.filter(bank =>
    bank.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBankSelect = (bank: string) => {
    // Navigate back to PartnerSignUp with selected bank
    navigation.navigate('PartnerSignUp', { selectedBank: bank });
  };

  const handleAddBank = () => {
    Alert.alert('Add Bank', 'Feature to add a new bank will be implemented here.');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Header
        leftContent={
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginRight: 10 }}>
              <Image source={require('../assets/icons/iconsback.png')} style={{ width: 24, height: 24, borderRadius: 7 }} />
            </TouchableOpacity>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Select Bank</Text>
          </View>
        }
      />
      <View style={{ padding: 20 }}>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 8,
            padding: 10,
            marginBottom: 20,
            fontSize: 16,
          }}
          placeholder="Search banks..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity
          style={{
            backgroundColor: '#007bff',
            padding: 12,
            borderRadius: 8,
            alignItems: 'center',
            marginBottom: 20,
          }}
          onPress={handleAddBank}
        >
          <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>
            + Add New Bank
          </Text>
        </TouchableOpacity>
        <FlatList
          data={filteredBanks}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                padding: 15,
                borderBottomWidth: 1,
                borderBottomColor: '#eee',
              }}
              onPress={() => handleBankSelect(item)}
            >
              <Text style={{ fontSize: 16 }}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default BankSelection;
