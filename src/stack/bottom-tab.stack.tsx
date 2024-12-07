import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from '@react-native-vector-icons/ionicons';
import HomeScreen from '@/screen/app/home.screen';
import UserAccountScreen from '@/screen/user/account.screen';

export type BottomTabNavigatorParams = {
  Home: undefined;
  Account: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabNavigatorParams>();

const TabBarIcon = (
  props: {focused: boolean; color: string; size: number},
  name: any,
) => {
  return <Ionicons name={name} color={props.color} size={props.size} />;
};

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: props => TabBarIcon(props, 'home'),
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={UserAccountScreen}
        options={{
          tabBarIcon: props => TabBarIcon(props, 'person-circle'),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
