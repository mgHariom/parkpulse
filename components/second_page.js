import { View, Text, StyleSheet, ScrollView, Pressable, TouchableOpacity } from "react-native";
import Calendar from "./Calendar";
import React, { useState, useEffect } from 'react';
import { startOfMonth, endOfMonth, eachDayOfInterval, format, getDate, addDays, isSameDay, getDay,  } from 'date-fns';



export default function SecondPage ({ route, navigation }) {

  const entryTime = 7 * 60; // 7:00 AM in minutes
  const [entryTimeLength, setEntryTimeLength] = useState(entryTime);
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [period, setPeriod] = useState('AM')
  const [timer, setTimer] = useState(null);

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  console.log(selectedDate)
  const handleDateSelection = (date) => {
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
    navigation.navigate('ThirdPage', {time: entryTimeLength, period: period, name:name, date: selectedDate})
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
              flexBasis: '18%',
              alignItems: 'center',
              padding: 5,
            }}
          >
            <View
              style={[
                calendarStyles.dateContainer,
                isSameDay(day, selectedDate) && calendarStyles.selectedDateContainer,
                isSameDay(day, currentDate) && calendarStyles.currentDateContainer,
              ]}
            >
              <Text style={calendarStyles.dateText}>{getDate(day)}</Text>
              <Text style={calendarStyles.dayText}>{dayNames[getDay(day)]}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
        </View>
        <View style={styles.timeHeadingAlign}>
          <View style={styles.timeHeadingContainer}>
            <Text style={styles.timeHeadingText}>ENTRY TIME</Text>
          </View>
        </View>
        <View style={timerStyles.container}>
          <View style={timerStyles.buttonsContainer}>
            <TouchableOpacity onPress={decremententryTimeLength} style={timerStyles.button}>
              <Text style={timerStyles.buttonText}>-</Text>
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
        {/* <View style={styles.timeHeadingAlign}>
          <View style={styles.timeHeadingContainer}>
            <Text style={styles.timeHeadingText}>EXIT TIME</Text>
          </View>
        </View>
        <View>
          <SessionTimer2/>
        </View> */}
        <View style={styles.slotCheckerAlign}>
          <View style={styles.slotCheckerContainer}>
            <Text style={styles.slotCheckerText}>SLOTS AVAILABLE</Text>
          </View>
          <View style={styles.slotCounterAlign}>
            <View style={styles.slotCounterContainer}>
              <Text style={styles.slotCounterText}>12</Text>
            </View>
            {/* <View style={styles.slotCounterContainer}>
              <Text style={styles.slotCounterText}>2</Text>
            </View> */}
          </View>
        </View>
        <View style={styles.slotBookerAlign}>
            <View>
              <TouchableOpacity onPress={onPressControl}  style={styles.slotBookercontainer}>
                <Text style={styles.slotBookerText}>BOOK A SLOT</Text>
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
    backgroundColor: '#d8f0fa'
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
    fontSize: 20,
    fontWeight: '500',
  },
  timeHeadingAlign: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  },
  timeHeadingContainer: {
    backgroundColor: '#fff',
    width: 203,
    height: 47,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  }, 
  timeHeadingText: {
    fontSize: 20,
    fontWeight: '800',
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
  },
  periodContainer: {
    backgroundColor: '#264259',
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 20,
  },
  periodText: {
    color: '#fff',
    fontSize: 24
  },
  timerContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  timer: {
    fontSize: 36,
    backgroundColor: '#264259',
    color: '#fff',
    width: 171,
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
    paddingVertical: 10,
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
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
    backgroundColor: '#264259',
  },
  monthText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '400',
  },
  dateContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#264259',
    borderRadius: 8,
    width: 50,
    height: 80,
  },
  dateText: {
    color: '#fff',
    fontSize: 18,
  },
  dayText: {
    color: '#fff',
  },
  selectedDateContainer: {
    backgroundColor: '#45a7f7',
  },
  selectedDateText: {
    color: '#fff',
  },
//   currentDateContainer: {
//     backgroundColor: '#e74c3c',
//   },
//   currentDateText: {
//     color: '#fff',
//   },
});