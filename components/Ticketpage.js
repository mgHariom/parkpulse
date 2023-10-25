import React from 'react';
import { View, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const Ticketpage = ({ route }) => {
  // Extract the 'data' parameter from the route
  const { data } = route.params;

  return (
    <View>
      <Text>Selected Seats:</Text>
      {data.map((seat) => (
        <View key={seat.id}>
          <Text>Seat ID: </Text> 
          <QRCode value={seat.id} size={100} />
        </View>
      ))}
    </View>
  );
};

export default Ticketpage;
