import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import HomeStack from './HomeStack';
import SettingScreen from './SettingScreen';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import AppBar from './AppBar';

const Tab = createBottomTabNavigator(); // ← IMPORTANT


export default function App() {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          {/* SafeAreaView pour l'AppBar */}
          <SafeAreaView style={{ backgroundColor: '#007AFF' }}>
            <AppBar />
          </SafeAreaView>
  
          {/* Contenu principal */}
          <View style={{ flex: 1 }}>
            <Tab.Navigator
              screenOptions={{
                headerShown: false, // désactive le header par défaut de React Navigation
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'gray',
              }}
            >
              <Tab.Screen
                name="Maison"
                component={HomeStack}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home" size={size} color={color} />
                  ),
                }}
              />
  
              <Tab.Screen
                name="Paramètres"
                component={SettingScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Ionicons name="settings" size={size} color={color} />
                  ),
                }}
              />
            </Tab.Navigator>
          </View>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }