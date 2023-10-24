import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SessionTimer2 = () => {
  const exitTime = 7.5 * 60; // 7:30 AM in minutes
  const [exitTimeLength, setExitTimeLength] = useState(exitTime);
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

  const incremententryTimeLength = () => {
    if (!isSessionActive && exitTimeLength < 720) {
      setExitTimeLength((prevexitTimeLength) => prevexitTimeLength + 30);
    }
  };

  const decremententryTimeLength = () => {
    if (!isSessionActive && exitTimeLength > 60) {
      setExitTimeLength((prevexitTimeLength) => prevexitTimeLength - 30);
    }
  };

  useEffect(() => {
    if (exitTimeLength === 0) {
      // Session has ended
      clearInterval(timer);
      // You can add a sound or notification for session completion here
    }
  }, [exitTimeLength, timer]);

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={decremententryTimeLength} style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <View style={styles.timerContainer}>
          <Text style={styles.timer}>{formatTime(exitTimeLength)}</Text>
        </View>
        <TouchableOpacity onPress={incremententryTimeLength} style={styles.button}>
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

export default SessionTimer2;
