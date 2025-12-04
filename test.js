import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


// --- Écrans ---
function HomeScreen({ navigation }) {
return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text> Écran d'accueil</Text>
<Button
title="Aller aux détails"
onPress={() => navigation.navigate('Details', { id: 42 })}
/>
</View>
);
}
🏠
function DetailsScreen({ route }) {
return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text> Écran de détails</Text>
{route.params && <Text>ID reçu : {route.params.id}</Text>}
</View>
);
}