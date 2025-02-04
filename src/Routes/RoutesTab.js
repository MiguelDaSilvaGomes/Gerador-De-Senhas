import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Pages/Home';
import Senhas from '../Pages/Senhas';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export function RoutesTab() {
    return (
        <Tab.Navigator screenOptions={{ tabBarShowLabel: false, headerShown: false }}>
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({ focused, size, color }) => (
                        <Ionicons 
                            size={size} 
                            color={color} 
                            name={focused ? "home" : "home-outline"} 
                        />
                    )
                }}
            />
            <Tab.Screen
                name='Senhas'
                component={Senhas}
                options={{
                    tabBarIcon: ({ focused, size, color }) => (
                        <Ionicons 
                            size={size} 
                            color={color} 
                            name={focused ? "lock-closed" : "lock-closed-outline"} 
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
}
