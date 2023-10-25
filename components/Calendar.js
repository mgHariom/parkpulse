import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { startOfMonth, endOfMonth, eachDayOfInterval, format, getDate, addDays, isSameDay, getDay } from 'date-fns';

const Calendar = () => {
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

  return (
    <View style={styles.container}>
      <View style={styles.month}>
        <Text style={styles.monthText}>{format(currentMonth, 'MMMM yyyy')}</Text>
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
                styles.dateContainer,
                isSameDay(day, selectedDate) && styles.selectedDateContainer,
                isSameDay(day, currentDate) && styles.currentDateContainer,
              ]}
            >
              <Text style={styles.dateText}>{getDate(day)}</Text>
              <Text style={styles.dayText}>{dayNames[getDay(day)]}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({
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
