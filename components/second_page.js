import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from 'react';
import { startOfMonth, endOfMonth, eachDayOfInterval, format, getDate, addDays, isSameDay, getDay,  } from 'date-fns';
import StripeApp from "./Stripe";



export default function SecondPage ({ route, navigation }) {

  const entryTime = 7 * 60; // 7:00 AM in minutes
  const [entryTimeLength, setEntryTimeLength] = useState(entryTime);
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [period, setPeriod] = useState('AM')
  const [timer, setTimer] = useState(null);

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selected, setSelected] = useState(false)
  console.log(selectedDate)
  const handleDateSelection = (date) => {
    setSelected(true)
    setSelectedDate(date);
  };

  const currentDate = new Date();
  const firstDayOfMonth = startOfMonth(currentDate);

  const fiveDays = [];
  for (let i = 0; i < 5; i++) {
    const day = addDays(currentDate, i);
    fiveDays.push(day);
  }

  // Create an array of day names
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  //AM and Pm toggle
  const periodToggle = () => {
    setPeriod(period === 'AM' ? 'PM' : 'AM');
  }

  // Format the time in "hh:mm AM/PM" format
  const formatTime = (timeInMinutes) => {
    const hours = Math.floor(timeInMinutes / 60);
    const formattedHours = (hours % 12 || 12).toString(); // Display 12-hour time format
    

    // Calculate the minutes separately and pad them with leading zeros
    const formattedMinutes = (timeInMinutes % 60).toString().padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}`;
  };

  const incremententryTimeLength = () => {
    if (!isSessionActive && entryTimeLength < 720) {
      setEntryTimeLength((preventryTimeLength) => preventryTimeLength + 30);
    }
  };

  const decremententryTimeLength = () => {
    if (!isSessionActive && entryTimeLength > 60) {
      setEntryTimeLength((preventryTimeLength) => preventryTimeLength - 30);
    }
  };

  useEffect(() => {
    if (entryTimeLength === 0) {
      // Session has ended
      clearInterval(timer);
      // You can add a sound or notification for session completion here
    }
  }, [entryTimeLength, timer]);


  const {name} = route.params;

  const onPressControl = () => {
    navigation.navigate('Stripe', {time: entryTimeLength, period: period, name:name, date: selectedDate})
  }
  console.log(period)

  return(
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.mallContainerAlign}>
          <View style={styles.mallContainer}>
            <Text style={styles.mallText}>{name}</Text>
          </View>
        </View>
        <View>
        <View style={calendarStyles.container}>
      <View style={calendarStyles.month}>
        <Text style={calendarStyles.monthText}>{format(currentMonth, 'MMMM yyyy')}</Text>
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {fiveDays.map((day, index) => (
          <TouchableOpacity
            key={day.toISOString()}
            onPress={() => handleDateSelection(day)}
            style={{
              flexBasis: '20%',
              alignItems: 'center',
              padding: 5,
            }}
          >
            <View
              style={[
                calendarStyles.dateContainer,
                isSameDay(day, selectedDate) && calendarStyles.selectedDateContainer
              ]}
            >
              <Text style={calendarStyles.dayText}>{dayNames[getDay(day)]}</Text>
              <Text style={calendarStyles.dateText}>{getDate(day)}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
        </View>
        <View style={styles.timeHeadingAlign}>
          <View style={styles.timeHeadingContainer}>
            <Text style={styles.timeHeadingText}>ENTRY</Text>
          </View>
        </View>
        <View style={timerStyles.container}>
          <View style={timerStyles.buttonsContainer}>
            <TouchableOpacity onPress={decremententryTimeLength} style={timerStyles.button}>
              <Text style={timerStyles.buttonText}>--</Text>
            </TouchableOpacity>
            <View style={timerStyles.timerContainer}>
              <Text style={timerStyles.timer}>{formatTime(entryTimeLength)}</Text>
            </View>
            <TouchableOpacity onPress={incremententryTimeLength} style={timerStyles.button}>
              <Text style={timerStyles.buttonText}>+</Text>
            </TouchableOpacity>
            <View style={timerStyles.periodContainer}>
              <TouchableOpacity onPress={periodToggle}>
                <Text style={timerStyles.periodText}>{period}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center'}}>
          <Image source={require('./image/gif/gif2.gif')} style={{ width: 450, height: 300}} />
        </View>
        <View style={styles.slotBookerAlign}>
            <View>
              <TouchableOpacity onPress={onPressControl}  style={[styles.slotBookercontainer, {backgroundColor: selected ? '#264259' : '#ccc'}]} disabled={!selected}>
                <Text style={styles.slotBookerText}>BOOK SLOT</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d8f0fa',
    marginTop: 20,
  },

  scrollView: {
    backgroundColor: '#d8f0fa',
    
  },

  mallContainerAlign: {
    alignItems: 'center',
  },

  mallContainer: {
    width: 279,
    height: 35,
    borderRadius: 8,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },

  mallText: {
    color: '#000',
    fontSize: 22,
    fontWeight: '900',
    textTransform: 'uppercase'
  },
  timeHeadingAlign: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  },
  timeHeadingContainer: {
    backgroundColor: '#fff',
    width: 203,
    height: 53,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  }, 
  timeHeadingText: {
    fontSize: 22,
    fontWeight: '900',
    color: '#264259',
  },
  slotCheckerAlign: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  slotCheckerContainer: {
    backgroundColor: '#264259',
    width: 184,
    height: 61,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  slotCheckerText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#fff',
  },
  slotCounterAlign: {
    flexDirection: 'row',
    margin: 15
  },
  slotCounterContainer: {
    backgroundColor: '#fff',
    width: 54,
    height: 68,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slotCounterText: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  slotBookerAlign: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  },
  slotBookercontainer: {
    backgroundColor: '#264259',
    width: 350,
    height: 61,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  slotBookerText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#fff',
  }
})

const timerStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0
  },
  periodContainer: {
    backgroundColor: '#264259',
    paddingHorizontal: 11,
    paddingVertical: 11,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 20,
  },
  periodText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600'
  },
  timerContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  timer: {
    fontSize:28,
    fontWeight: '500',
    backgroundColor: '#264259',
    color: '#fff',
    width: 171,
    height: 42,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 5,
  },
  buttonText: {
    color: '#264259',
    fontSize: 24,
  },
  // ...
});

const calendarStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  month: {
    width: 200,
    height: 50,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
    backgroundColor: '#264259',
  },
  monthText: {
    color: '#fff',
    fontSize: 21,
    fontWeight: '700',
  },
  dateContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#264259',
    borderRadius: 12,
    width: 50,
    padding: 10
  },
  dateText: {
    color: '#fff',
    fontSize: 18,
    fontWeight:'600'
  },
  dayText: {
    color: '#fff',
    fontSize: 14,
    fontWeight:'600'
  },
  selectedDateContainer: {
    backgroundColor: '#45a7f7',
  },
  selectedDateText: {
    color: '#fff',
  },
  // currentDateContainer: {
  //   backgroundColor: '#45a7f7',
  // },
//   currentDateText: {
//     color: '#fff',
//   },
});