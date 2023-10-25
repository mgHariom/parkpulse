import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { startOfMonth, endOfMonth, eachDayOfInterval, format, getDate, addDays, isSameDay, getDay } from 'date-fns';

const Ticketpage = ({ route }) => {
  // Extract the 'data' and 'time' parameters from the route
  const { data, time, period, name, date } = route.params;
  const formattedDate = format(date, 'MMMM d, yyyy');

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
          <Text style={ticketStyle.headingText}>Parking Receipt</Text>
        <View>
          {data.map((seat) => (
            <View key={seat.id}>
              <View style={ticketStyle.qrContainer}>
                <QRCode 
                  value={`${name} ${seat.id} ${formatTime(time)} ${period} ${formattedDate}`} size={250} 
                  color='#000'/>
              </View>
              <View style={ticketStyle.infocontainer}>
              <Text style={ticketStyle.mallname}>mall</Text>
              <Text style={ticketStyle.mall}>{name}</Text>
              <Text style={ticketStyle.slotheading}>parking slot</Text>
              <Text style={ticketStyle.slot}>{seat.id}</Text>
              <Text style={ticketStyle.timeheading}>time</Text>
              <Text style={ticketStyle.time}>{formatTime(time)}<Text> </Text>{period}</Text>
              <Text style={ticketStyle.timeheading}>date</Text>
              <Text style={ticketStyle.time}>{formattedDate}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
      <Text style={styles.alertText}>Please take a sceenshot of this Receipt :)</Text>
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
  alertText: {
    opacity: 0.4,
    fontSize: 18,
    paddingTop: 18
  },
})

const ticketStyle = StyleSheet.create({
  container: {
    height: 670,
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
    padding: 30,
    borderRadius: 10,
  },

  infocontainer: {
    paddingLeft: 48
  },

  mall: {
    // opacity: 1,
    fontSize: 24,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },

  mallname: {
    opacity: 0.4,
    fontSize: 18
  },

  slotheading: {
    opacity: 0.4,
    fontSize: 18,
    paddingTop: 10
  },

  slot: {
    fontSize: 24,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },

  timeheading: {
    opacity: 0.4,
    fontSize: 18,
    paddingTop: 10
  },

  time: {
    fontSize: 24,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  }
})

export default Ticketpage;
