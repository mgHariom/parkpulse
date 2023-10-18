import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './components/Home';
import second_page from './components/second_page';

export default function App() {
  return (
    <MyStack/>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
      <NavigationContainer>
        <Stack.Navigator 
      screenOptions={{
      headerStyle: {
      backgroundColor: '#0C1D36',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {fontWeight: 'bold'},
    }}
    >
      <Stack.Screen 
      name="Home"
      component={Home}
       />
      <Stack.Screen name="SecondPage" component={second_page} />
      {/* <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
      </NavigationContainer>

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
