import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Coimbatore from './components/Coimbatore';
import second_page from './components/second_page';
import Chennai from './components/Chennai';
import Banglore from './components/Banglore';
import Home from './components/Home';
import Calendar from './components/Calendar';


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
        backgroundColor: '#d8f0fa',
        height: 80,
        
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#d8f0fa'
      },
    }}
    >
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Coimbatore" component={Coimbatore}/>
      <Stack.Screen name="Chennai" component={Chennai} />
      <Stack.Screen name="Banglore" component={Banglore} />
      <Stack.Screen name="SecondPage" component={second_page} />
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