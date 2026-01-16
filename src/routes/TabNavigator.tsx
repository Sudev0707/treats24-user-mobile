import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../theme/colors';
import AnimatedTabBar from '../components/common/AnimatedTabBar';
import * as Screens from './Screens';

export type TabParamList = {
  Home: undefined;
  Nearby: undefined;
  Favorites: undefined;
  TastyDeals: undefined;
  MyPlate: undefined;

  Orders: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.brandPrimary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarItemStyle: styles.tabBarItem,
      }}
      tabBar={props => <AnimatedTabBar {...props} />}
    >
      <Tab.Screen
        name="Home"
        component={Screens.Dashboard}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={focused ? 'cutlery' : 'cutlery'}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Nearby"
        component={Screens.Nearby}
        options={{
          tabBarLabel: 'Nearby',
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={focused ? 'map-marker' : 'map-marker'}
              size={24}
              color={color}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Favorites"
        component={Screens.Favorites}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={focused ? 'heart' : 'heart-o'}
              size={24}
              color={color}
            />
          ),
        }}
      /> */}

      <Tab.Screen
        name="TastyDeals"
        component={Screens.Deals}
        options={{
          tabBarLabel: 'Tasty Deals',
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={focused ? 'percent' : 'percent'}
              size={24}
              color={color}
            />
          ),
        }}
      />

      {/* <Tab.Screen
        name="MyPlate"
        component={Screens.Cart}
        options={{
          tabBarLabel: 'My Plate',
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={focused ? 'spoon' : 'spoon'}
              size={24}
              color={color}
            />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 70,
    paddingBottom: 9,
    // paddingTop: 8,s
    backgroundColor: colors.background,
    borderTopWidth: 0.5,
    borderTopColor: colors.borderMuted,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  tabBarLabel: {
    fontSize: 12,
    fontWeight: '800',
    marginTop: 4,
  },
  tabBarItem: {
    paddingVertical: 4,
  },
});

export default TabNavigator;
