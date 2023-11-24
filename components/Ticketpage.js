import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { startOfMonth, endOfMonth, eachDayOfInterval, format, getDate, addDays, isSameDay, getDay } from 'date-fns';
import { ScrollView } from 'react-native-gesture-handler';

const Ticketpage = ({ route, navigation }) => {
  // Extract the 'data' and 'time' parameters from the route
  const {time, period, name, date, slot } = route.params;
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
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
      <View style={[mallinfo.container, mallinfo.shadowProp]}>
        <Image source={require('./image/mall.webp')} style={mallinfo.image}/>
        <View style={styles.textContainer}>
          <Text style={mallinfo.mall}>{name}</Text>
          <Text>1 Slot (P/A)</Text>
          <Text style={mallinfo.time}>{formattedDate}</Text>
        </View>
      </View>
      <View style={ticketStyle.container}>
      <View style={ticketinfo.container}>
        <View style={ticketinfo.qrContainer}>
          <View style={ticketinfo.qr}>
            <QRCode 
              value={`${name} ${formatTime(time)} ${period} ${formattedDate}`} size={100} 
              color='#000'/>
          </View>
          <View style={ticketinfo.textContainer}>
            <Text style={ticketinfo.headingText}>Parking Receipt</Text>
            <Text style={ticketinfo.slot}>Slot : {slot}</Text>
            <Text style={ticketinfo.ticketNo}>Ticket no: 123456</Text>
          </View>
        </View>
        <View style={styles.alertContainer}>
          <Text style={styles.alertText}>Please take a sceenshot of this Receipt :)</Text>
        </View>
        <Text style={ticketinfo.timeText}>Entry Time | {formatTime(time)}<Text> </Text>{period}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>Basic Fee : ₹ 40</Text>
        </View>
      </View>
        </View>
        <View style={styles.btnContainer}>
              <TouchableOpacity  style={[styles.slotBookercontainer]} onPress={() => navigation.navigate('Destination')}>
                <Text style={styles.slotBookerText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity  style={[styles.slotBookercontainer]} onPress={() => navigation.navigate('Destination')}>
                <Text style={styles.slotBookerText}>Done</Text>
              </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const ticketinfo = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  qrContainer: {
    backgroundColor: '#d8f0fa',
    alignItems: 'left',
    flexDirection: 'row',
    height: 170,
    width: 320,
    marginTop: 15,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15
  },
  textContainer: {
    margin: 20,
  },
  headingText: {
    fontSize: 20,
    fontWeight: '600'
  },
  slot: {
    fontSize: 30,
    fontWeight: '600'
  },
  ticketNo: {
    fontSize: 20,
    fontWeight: '300'
  },
  timeText: {
    fontSize: 25,
    marginTop: 80,
    fontWeight: '900'
  }
})
const mallinfo = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 180,
    width: 350,
    backgroundColor: '#fff',
    borderRadius: 20, 
    flexDirection: 'row',
    alignItems: 'start',
  },
  shadowProp: {  
    shadowOffset: {width: -2, height: 4},  
    shadowColor: '#000',  
    shadowOpacity: 200,  
    shadowRadius: 3,  
  },  
  mall: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },
  time: {
    fontSize: 15,
    fontWeight: '500',
  },
  image: {
    width: 100,
    height: 100,
    margin: 15,
    borderRadius: 20,
    marginTop: 20
  }
})

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#d8f0fa',
  },
  container: {
    flex: 1,
    backgroundColor: '#d8f0fa',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  alertText: {
    opacity: 0.4,
    fontSize: 18,
    paddingTop: 18,
  },
  alertContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  priceContainer: {
    width: 320,
    height: 50,
    backgroundColor: '#d8f0fa',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 70
  },
  priceText: {
    fontSize: 20,
    fontWeight: '600'
  },
  slotBookerAlign: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  },
  slotBookercontainer: {
    backgroundColor: '#264259',
    width: 180,
    height: 61,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10
  },
  slotBookerText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#fff',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

const ticketStyle = StyleSheet.create({
  container: {
    height: 480,
    width: 350,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginTop: 20,
  },
  headingText: {
    fontSize: 20,
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
    borderRadius: 50,
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
