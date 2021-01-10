import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/AntDesign';
import HomeScreen from '../screens/HomeScreen'
import SettingScreen from '../screens/SettingScreen';
import Expense from '../screens/Expense';
import Income from '../screens/Income';


const Tab = createBottomTabNavigator()

const MyTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Income"
        component={Income}
        options={{
          tabBarLabel: 'Income',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="up" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Expense"
        component={Expense}
        options={{
          tabBarLabel: 'Expense',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="down" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="setting" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
    )
}

export default MyTabs
