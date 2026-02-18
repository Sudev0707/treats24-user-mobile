import React from 'react';
import { View, Text, StyleSheet,} from 'react-native';
import Header from '../components/common/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../theme/colors';

const HeaderDemo1: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header   showBackButton={true} title="Simple Title" />
      <View style={styles.content}>
        <Text style={styles.text}>This screen shows a header with just a title.</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.backgroundSoft
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
});

export default HeaderDemo1;
