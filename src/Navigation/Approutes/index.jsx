import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import HomeScreen from '../../Screens/AppScreens/Home'
import ExploreScreen from '../../Screens/AppScreens/Explore'
import NameScreen from '../../Screens/AppScreens/Name'
import ProfileScreen from '../../Screens/AppScreens/Profile'
import {HomeSVG , ProfileSvg , ExploreSvg , NameSvg} from '../../Assets/Svg'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
    return (
      <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
       headerShown:false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* <Stack.Screen name="SeeDetails" component={SeeDetails} /> */}
      </Stack.Navigator>
    );
  };
 
  const ExploreStack = () => {
    return (
      <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
       headerShown:false
      }}>
        <Stack.Screen name="Explore" component={ExploreScreen} />
        {/* <Stack.Screen name="SeeDetails" component={SeeDetails} /> */}
      </Stack.Navigator>
    );
  }; 
  
  const NameStack = () => {
    return (
      <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
       headerShown:false
      }}>
        <Stack.Screen name="Name" component={NameScreen} />
        {/* <Stack.Screen name="SeeDetails" component={SeeDetails} /> */}
      </Stack.Navigator>
    );
  };
  const ProfileStack = () => {
    return (
      <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
        headerShown:false
      }}>
        <Stack.Screen name="Profile" component={ProfileScreen} />
        {/* <Stack.Screen name="SeeDetails" component={SeeDetails} /> */}
      </Stack.Navigator>
    );
  };

const TabScreens = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#ff8e00',
        tabBarInactiveTintColor: 'white',
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: '#FFFFFF', paddingHorizontal: 10, height: 80 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', gap: 10 ,  width:60}}>
              <HomeSVG fill={focused ? '#212121' : '#BDBDBD'} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', gap: 10 ,  width:60}}>
              <ExploreSvg fill={focused ? '#212121' : '#BDBDBD'} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Name"
        component={NameStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', gap: 10 ,  width:60}}>
              <NameSvg fill={focused ? '#212121' : '#BDBDBD'} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', gap: 10 ,  width:60}}>
              <ProfileSvg fill={focused ? '#212121' : '#BDBDBD'} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export const Approutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
      <Stack.Screen component={TabScreens} name="TabBar" />
    </Stack.Navigator>
  );
};
