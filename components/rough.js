import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";



const StripeApp = (navigation) => {
  
 
  const handlePayPress = () => {
    navigation.navigate('Ticketpage')
    // //1.Gather the customer's billing information (e.g., email)
    // if (!cardDetails?.complete || !email) {
    //   Alert.alert("Please enter Complete card details and Email");
    //   return;
    // }
    // const billingDetails = {
    //   email: email,
    // };
    // //2.Fetch the intent client secret from the backend
    // try {
    //   const { clientSecret, error } = await fetchPaymentIntentClientSecret();
    //   console.log(fetchPaymentIntentClientSecret())
    //   //2. confirm the payment
    //   if (error) {
    //     console.log("Unable to process payment");
    //   } else {
    //     const { paymentIntent, error } = await confirmPayment(clientSecret, {
    //       type: "Card",
    //       billingDetails: billingDetails,
    //     });
    //     console.log(clientSecret)
    //     if (error) {
    //       alert(`Payment Confirmation Error ${error.message}`);
    //     } else if (paymentIntent) {
    //       alert("Payment Successful");
    //       console.log("Payment successful ", paymentIntent);
    //     }
    //   }
    // } catch (e) {
    //   console.log('payment error', e);
    // }
    // //3.Confirm the payment with the card details
  };

  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        placeholder="E-mail"
        keyboardType="email-address"
        onChange={value => setEmail(value.nativeEvent.text)}
        style={styles.input}
      />
      <CardField
        postalCodeEnabled={false}
        placeholder={{
          number: "4242 4242 4242 4242",
        }}
        cardStyle={styles.card}
        style={styles.cardContainer}
        onCardChange={cardDetails => {
          setCardDetails(cardDetails);
        }}
      />
      <Button title="Pay" onPress={handlePayPress}/>
    </View>
  );
};
export default StripeApp;

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