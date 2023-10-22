import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SessionTimer = () => {
  const initialSessionTime = 7 * 60; // 7:00 AM in minutes
  const [sessionLength, setSessionLength] = useState(initialSessionTime);
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [period, setPeriod] = useState('AM')
  const [timer, setTimer] = useState(null);

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

  const incrementSessionLength = () => {
    if (!isSessionActive && sessionLength < 720) {
      setSessionLength((prevSessionLength) => prevSessionLength + 30);
    }
  };

  const decrementSessionLength = () => {
    if (!isSessionActive && sessionLength > 60) {
      setSessionLength((prevSessionLength) => prevSessionLength - 30);
    }
  };

  useEffect(() => {
    if (sessionLength === 0) {
      // Session has ended
      clearInterval(timer);
      // You can add a sound or notification for session completion here
    }
  }, [sessionLength, timer]);

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={decrementSessionLength} style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <View style={styles.timerContainer}>
          <Text style={styles.timer}>{formatTime(sessionLength)}</Text>
        </View>
        <TouchableOpacity onPress={incrementSessionLength} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <View style={styles.periodContainer}>
        <TouchableOpacity onPress={periodToggle}>
          <Text style={styles.periodText}>{period}</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default SessionTimer;
