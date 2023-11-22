import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";

const Stripe = ({route}) => {
 
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');

 const navigation = useNavigation()

 const handlePayPress = () => {

  const { time, period, name, date } = route.params;
  console.log(time)

  // Validate email and card details before navigating to the next screen
  if (email == '' && cardNumber == "") {
    navigation.navigate('Ticketpage' , {
      time: time,
      period: period,
      name: name,
      date: date,});
  } else {
    Alert.alert('Invalid input', 'Please enter valid email and card details.');
  }
};

  return(
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        placeholder="E-mail"
        keyboardType="email-address"
        onChange={value => setEmail(value.nativeEvent.text)}
        style={styles.input}
      />
      <TextInput
        autoCapitalize="none"
        placeholder="4242 4242 4242 4242"
        keyboardType="email-address"
        onChange={value => setEmail(value.nativeEvent.text)}
        style={styles.input}
      />
      <Button title="Pay" onPress={handlePayPress}/>
    </View>
  )
}

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