import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import Welcome from '../Pages/Welcome';
import Login from '../Pages/Login/Login'; 
import { RoutesTab } from './RoutesTab'; // Importa o Tab Navigator

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignIn"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="HomeTabs" // Novo nome para o Tab Navigator
                component={RoutesTab}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}
