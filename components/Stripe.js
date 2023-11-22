import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
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
    if (email === '' && cardNumber === '') {
      navigation.navigate('Ticketpage', {
        time: time,
        period: period,
        name: name,
        date: date,
        slot: randomSlot,
      });
    } else {
      Alert.alert('Invalid input', 'Please enter valid email and card details.');
    }
  };

  return (
    <View style={styles.container}>
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
      <Button title="Pay" onPress={handlePayPress} />
    </View>
  );
};

export default Stripe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 20,
  },
  input: {
    backgroundColor: "#efefefef",

    borderRadius: 8,
    fontSize: 20,
    height: 50,
    padding: 10,
  },
  card: {
    backgroundColor: "#efefefef",
  },
  cardContainer: {
    height: 50,
    marginVertical: 30,
  },
});