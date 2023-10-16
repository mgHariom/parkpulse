import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './components/Home';
import { useFonts } from 'expo-font';

export default function App() {
  return (
    <NavigationContainer>
      <MyStack>

      </MyStack>
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator 
    screenOptions={{
      headerStyle: {
        backgroundColor: '#0C1D36',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontFamily: 'FiraSansCondensed',
        fontWeight: 'bold'

      },
    }}
    >
      <Stack.Screen 
      name="Home"
      component={Home}
       />
      {/* <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
