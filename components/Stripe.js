import { View, Text, StyleSheet, TextInput, Pressable, Alert, ImageBackground, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";

const Stripe = ({ route }) => {
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');

  const navigation = useNavigation();

  const handlePayPress = () => {
    const { time, period, name, date } = route.params;
    console.log(time);

    // Function to generate a random slot based on availability
    const generateRandomSlot = (slots) => {
      // Check if there are available slots
      if (slots.length === 0) {
        return null; // No available slots
      }

      // Generate a random index within the range [0, slots.length)
      const randomIndex = Math.floor(Math.random() * slots.length);
      return slots[randomIndex];
    };

    // Example usage
    const availableSlots = ['A1', 'A2', 'A3', 'A4', 'A5']; // Replace with your actual slots array

    const randomSlot = generateRandomSlot(availableSlots);
    console.log(randomSlot)

    if (randomSlot !== null) {
      console.log(`Selected random slot: ${randomSlot}`);
    } else {
      console.log('No available slots');
    }

    // Validate email and card details before navigating to the next screen
      navigation.navigate('Ticketpage', {
        time: time,
        period: period,
        name: name,
        date: date,
        slot: randomSlot,
      });
  };

  return (
    <ScrollView style = {styles.scrollView}>
      <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          autoCapitalize="none"
          placeholder="E-mail"
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          autoCapitalize="none"
          placeholder="4242 4242 4242 4242"
          keyboardType="number-pad"
          onChangeText={(text) => setCardNumber(text)}
          style={styles.input}
        />
      </View>
      <View>
<ImageBackground
  source={require('./image/payment/totalpayment.png.png')}
  style={styles.tp}
></ImageBackground>
      </View>
      <View style= {styles.btnContainers}>
      <Pressable onPress={handlePayPress}  style={styles.btn}>
        <Text style={styles.btnContainer}>Pay</Text>
      </Pressable>
      </View>
    </View>
    </ScrollView>
  );
};

export default Stripe;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#d8f0fa'
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: '#d8f0fa',
  },
  inputContainer: {
    margin: 5,
  },
  input: {
    borderRadius: 8,
    fontSize: 20,
    height: 50,
    padding: 10,
    backgroundColor: '#fff',
    marginTop: 20
  },
  btn: {
    width: 230,
    height: 60,
    backgroundColor: '#264259',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnContainer: {
    fontSize: 27,
    fontWeight: '600',
    color: '#fff'
  },
  btnContainers : {
    justifyContent : 'flex-end',
    alignItems:'center',
  
},
  tp : {
    display: 'flex',
    width: 352,
    height: 236,
    justifycontent: 'center',
    alignitems: 'center',
    marginTop:75,
    marginBottom:100,
    marginLeft:40,
    flexshrink: 0
  }



})