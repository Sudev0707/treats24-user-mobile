import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../components/common/Header';
import { SafeAreaView } from 'react-native-safe-area-context';

const HeaderDemo3: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        showBackButton={true}
        centerContent={
          <View style={styles.centerContent}>
            <Text style={styles.title}>Custom Header</Text>
            <Text style={styles.subtitle}>With left and center content</Text>
          </View>
        }
        rightMenu={
          <View style={styles.rightMenu}>
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="search" size={20} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="notifications" size={20} color="#000" />
            </TouchableOpacity>
          </View>
        }
      />
      <View style={styles.content}>
        <Text style={styles.text}>
          This screen shows a header with custom left content (menu icon),
          custom center content (title and subtitle), and multiple icons in the
          right menu.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
  leftButton: {
    padding: 8,
  },
  centerContent: {
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  rightMenu: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    padding: 8,
    marginLeft: 8,
  },
});

export default HeaderDemo3;
