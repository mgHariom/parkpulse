import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const Ticketpage = ({ route }) => {
  // Extract the 'data' and 'time' parameters from the route
  const { data, time, period, name } = route.params;
  console.log(period)

  // Format the time in "hh:mm AM/PM" format
  const formatTime = (timeInMinutes) => {
    const hours = Math.floor(timeInMinutes / 60);
    const formattedHours = (hours % 12 || 12).toString(); // Display 12-hour time format
    

    // Calculate the minutes separately and pad them with leading zeros
    const formattedMinutes = (timeInMinutes % 60).toString().padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}`;
  };

  return (
    <View style={styles.container}>
      <View style={ticketStyle.container}>
        <View>
          <Text style={ticketStyle.headingText}>Parking Receipt</Text>
        </View>
        <View>
          {data.map((seat) => (
            <View key={seat.id}>
              <View style={ticketStyle.qrContainer}>
                <QRCode 
                  value={`${seat.id} ${formatTime(time)} ${period}`} size={250} 
                  color='#000'/>
              </View>
              <Text>Mall name: {name}</Text>
              <Text>Seat ID: {seat.id}</Text>
              <Text>Time:{formatTime(time)}{period} </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d8f0fa',
    justifyContent: 'center',
    alignItems: 'center'
  },
})

const ticketStyle = StyleSheet.create({
  container: {
    height: 700,
    width: 350,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  headingText: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign:'center',
    color: '#000',
    margin: 20
  },
  qrContainer: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30
  },
})

export default Ticketpage;
