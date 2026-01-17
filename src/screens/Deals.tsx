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
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
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
            // flexGrow: 1,
            paddingTop: HEADER_HEIGHT + 12,
            paddingBottom: 24,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.emptyTitle}>No deals available</Text>
          <Text style={styles.emptySubtitle}>
            Please check back later for exciting offers 🎉
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default Deals;
