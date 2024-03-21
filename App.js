import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './components/homeScreen';
import LoginScreen from './components/loginScreen';
import SoporteScreen from './components/soporteScreen';
import UbicacionScreen from './components/ubicacionScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Screen1') {
            iconName = focused ? 'location' : 'location-outline';
          } else if (route.name === 'Screen2') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Screen3') {
            iconName = focused ? 'help-circle' : 'help-circle-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        style: { backgroundColor: '#0000FF' },
        labelStyle: { fontSize: 14, fontWeight: 'bold' },
      }}
    >

<Tab.Screen
        name="Screen2"
        component={HomeScreen}
        options={{
          headerShown:false,
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        component={UbicacionScreen}
        options={{
          headerShown:false,
          tabBarLabel: 'Ubicación',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="location" size={size} color={color} />
          ),
        }}
        name="Screen1"
      />
    
      <Tab.Screen
        name="Screen3"
        component={SoporteScreen}
        options={{
          headerShown:false,
          tabBarLabel: 'Temperatura',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{
            headerShown: true,
            headerTitle: 'World Ocean',
            headerStyle: { backgroundColor: '#87CEEB' },
            headerTitleStyle: { color: 'white', fontSize: 18 },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
