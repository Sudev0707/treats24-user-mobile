import React from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/screens/DealsStyles';
import { useScrollToHideTabBar } from '../hooks/useScrollToHideTabBar';
import colors from '../theme/colors';
import Header from '../components/common/Header';

const HEADER_HEIGHT = 60;

const Deals: React.FC = () => {
  const scrollProps = useScrollToHideTabBar();

  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor={colors.background}
        barStyle="dark-content"
      />

      {/* FIXED HEADER */}
      <SafeAreaView edges={['top']}>
        <View style={styles.headerWrapper}>
          <Header showBackButton={true} title="Deals" />
        </View>
      </SafeAreaView>

      {/* SCREEN CONTENT */}
      <View style={styles.mainContainer}>
        <ScrollView
          {...scrollProps}
          contentContainerStyle={{
            paddingTop: HEADER_HEIGHT + 12,
            paddingBottom: 24,
          }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>
            <Text style={styles.emptyText}>No favorites added yet</Text>
            <Text style={styles.emptyText}>No favorites added yet</Text>
            <Text style={styles.emptyText}>No favorites added yet</Text>
            <Text style={styles.emptyText}>No favorites added yet</Text>
            <Text style={styles.emptyText}>No favorites added yet</Text>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Deals;
