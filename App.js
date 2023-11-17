import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Coimbatore from './components/Coimbatore';
import second_page from './components/second_page';
import Chennai from './components/Chennai';
import Bangalore from './components/Bangalore';
import Home from './components/Home';
import TimeToggle from './components/TimeToggle';
import ThirdPage from './components/ThirdPage';
import Ticketpage from './components/Ticketpage';
import LoginPage from './components/LoginPage';
import Otp from './components/Otp'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';




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
    initialRouteName='LoginPage'
    screenOptions={{
      headerStyle: {
        backgroundColor: '#D8F0FA',
        height: 80,
        
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
        //color: '#d8f0fa'
      },
    }}
    >
      <Stack.Screen name='LoginPage' component={LoginPage}
      options={{
        headerTitle: () => (
          <Image
            source={require('./assets/logo3.png')} // Replace with the path to your logo image
            style={{ flex:1, width: 200, height: "auto"}}
            resizeMode="contain" // Adjust the width and height as needed
          />
        ),
      }}
      />

<Stack.Screen name='Otp' component={Otp}
      options={{
        headerTitle: () => (
          <Image
          source={require('./assets/logo3.png')} // Replace with the path to your logo image
          style={{ flex:1, width: 200, height: "auto"}}
          resizeMode="contain" // Adjust the width and height as needed
          />
        ),
      }}
      />

      <Stack.Screen name="Home" component={Home} 
      options={{
        headerTitle: () => (
          <Image
          source={require('./assets/logo3.png')} // Replace with the path to your logo image
          style={{ flex:1, width: 200, height: "auto"}}
          resizeMode="contain" // Adjust the width and height as needed
          />
        ),
      }}/>
      <Stack.Screen name="Coimbatore" component={Coimbatore}
      options={{
        headerTitle: () => (
          <Image
          source={require('./assets/logo3.png')} // Replace with the path to your logo image
          style={{ flex:1, width: 200, height: "auto"}}
          resizeMode="contain" // Adjust the width and height as needed
          />
        ),
        headerLeft: () => null,
      }}/>
      <Stack.Screen name="Chennai" component={Chennai} 
      options={{
        headerTitle: () => (
          <Image
          source={require('./assets/logo3.png')} // Replace with the path to your logo image
          style={{ flex:1, width: 200, height: "auto"}}
          resizeMode="contain" // Adjust the width and height as needed
          />
        ),
        headerLeft: () => null,
      }}/>
      <Stack.Screen name="Bangalore" component={Bangalore} 
      options={{
        headerTitle: () => (
          <Image
          source={require('./assets/logo3.png')} // Replace with the path to your logo image
          style={{ flex:1, width: 200, height: "auto"}}
          resizeMode="contain" // Adjust the width and height as needed
          />
        ),
        headerLeft: () => null,
      }}/>
      <Stack.Screen name="SecondPage" component={second_page} 
      options={{
        headerTitle: () => (
          <Image
          source={require('./assets/logo3.png')} // Replace with the path to your logo image
          style={{ flex:1, width: 200, height: "auto"}}
          resizeMode="contain" // Adjust the width and height as needed
          />
        ),
      }}/>
      <Stack.Screen name="TimeToggle" component={TimeToggle} 
      options={{
        headerTitle: () => (
          <Image
          source={require('./assets/logo3.png')} // Replace with the path to your logo image
          style={{ flex:1, width: 200, height: "auto"}}
          resizeMode="contain" // Adjust the width and height as needed
          />
        ),
      }}/>
      <Stack.Screen name="ThirdPage" component={ThirdPage} 
      options={{
        headerTitle: () => (
          <Image
          source={require('./assets/logo3.png')} // Replace with the path to your logo image
          style={{ flex:1, width: 200, height: "auto"}}
          resizeMode="contain" // Adjust the width and height as needed
          />
        ),
      }}/>
      <Stack.Screen
        name="Ticketpage"
        component={Ticketpage}
        options={ {
          headerLeft: () => {
            const navigation = useNavigation();
            return (
              <MaterialCommunityIcons
                name="arrow-left"
                color="#000"
                size={20}
                style={{ marginLeft: 15 }}
                onPress={() => navigation.navigate('Home')}
              />
            );
          },
          headerTitle: () => (
            <Image
              source={require('./assets/logo.png')} // Replace with the path to your logo image
              style={{ width: 150, height: 30 }} // Adjust the width and height as needed
            />
          ),
        }}
      />

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