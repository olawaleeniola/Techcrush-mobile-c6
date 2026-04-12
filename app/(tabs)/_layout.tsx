import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (

    <Tabs
      screenOptions={{ tabBarActiveBackgroundColor: 'blue', tabBarActiveTintColor: '#007AFF',}}>
      <Tabs.Screen
        name="dashboard"
        options={{
          title: 'Dashboard',
          headerShown: false,
          tabBarActiveBackgroundColor: 'red',
          tabBarIcon: ({ color }) => 
          <Ionicons name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => 
          <Ionicons name="person" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}