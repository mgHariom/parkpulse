import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const SeatSelection = ({ navigation, route }) => {
  const { time, period, name, date } = route.params;

  const numRows = 4;
  const numCols = 3;
  const columnSpacing = 10;

  const generateSeatData = () => {
    const seats = [];
    for (let row = 1; row <= numRows; row++) {
      for (let col = 1; col <= numCols; col++) {
        const seatId = `${String.fromCharCode(64 + row)}-${col}`;
        seats.push({ id: seatId, status: 'available', availability: true, bookingStatus: 'available' });
      }
    }
    return seats;
  };

  const [seatData, setSeatData] = useState(generateSeatData);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [isSeatSelected, setIsSeatSelected] = React.useState(false);

  console.log(selectedSeats);

  
  const toggleSeatSelection = (seatId) => {
    if (isSeatBooked(seatId)) return;

    const updatedSeatData = seatData.map((seat) => {
      if (seat.id === seatId) {
        return {
          ...seat,
          availability: !seat.availability,
          status: 'selected',
        };
      } else if (seat.status === 'selected') {
        // Clear the selection of the previously selected seat
        return {
          ...seat,
          availability: true,
          status: 'available',
        };
      }
      return seat;
    });
    setSeatData(updatedSeatData);

    // Check if at least one seat is selected
    const selected = updatedSeatData.some((seat) => seat.status === 'selected');
    setIsSeatSelected(selected);
  };

  const bookSeat = (seatId) => {
    const updatedSeatData = seatData.map((seat) => {
      if (seat.id === seatId) {
        return {
          ...seat,
          availability: false, // Mark the seat as booked
          status: 'booked', // Set the status to 'booked'
          bookingStatus: 'booked'
        };
      }
      return seat;
    });
    setSeatData(updatedSeatData);
  };

  const isSeatBooked = (seatId) => {
    const seat = seatData.find((seat) => seat.id === seatId);
    return seat.bookingStatus === 'booked';
  };

  const handleConfirmBooking = () => {
    const newlySelectedSeats = seatData.filter((seat) => seat.status === 'selected');
    setSelectedSeats(newlySelectedSeats);
    const hasBookedSeats = newlySelectedSeats.some((seat) => seat.availability === true);
  
    if (hasBookedSeats) {
      // Handle the case when there are booked seats
      console.log('Please select only available seats.');
    } else if (newlySelectedSeats.length === 0) {
      // Handle the case when no seat is selected
      console.log('Please select a seat before confirming booking.');
    } else {
      // Seats are selected and all are available
      setIsSeatSelected(true);
  
      // Call bookSeat function here to mark the selected seats as booked
      newlySelectedSeats.forEach((seat) => bookSeat(seat.id));
  
      navigation.navigate('Ticketpage', {
        data: newlySelectedSeats,
        time: time,
        period: period,
        name: name,
        date: date,
      });
      console.log('Booking confirmed');
    }
    console.log(newlySelectedSeats);
  };
  

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={headerStyle.container}>
          <View style={headerStyle.mallContainerAlign}>
            <View style={headerStyle.mallContainer}>
              <Text style={headerStyle.mallText}>{name}</Text>
            </View>
          </View>
        </View>
        <View style={styles.seatingArrangement}>
          {Array.from({ length: numRows }, (_, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {Array.from({ length: numCols }, (_, colIndex) => {
                const seatIndex = rowIndex * numCols + colIndex;
                const seat = seatData[seatIndex];
                return (
                  <TouchableOpacity
                    key={seat.id}
                    style={[
                      styles.seat,
                      {
                        backgroundColor:
                          seat.bookingStatus === 'booked'
                            ? 'red'
                            : seat.availability === false
                            ? '#264259'
                            : seat.status === 'selected'
                            ? '#264259'
                            : '#d8f0fa',
                        borderColor: seat.status === 'selected' ? '#fff' : '#264259',
                        marginRight: colIndex < numCols - 1 ? columnSpacing : 0,
                      },
                    ]}
                    onPress={() => toggleSeatSelection(seat.id)}
                    disabled={seat.bookingStatus === 'booked'}
                  >
                    <Text
                      style={[
                        styles.seatText,
                        { color: seat.bookingStatus === 'booked' ? 'white' : seat.status === 'selected' ? '#fff' : '#264259' },
                      ]}
                    >
                      {seat.id}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ))}
        </View>

        <TouchableOpacity
          onPress={handleConfirmBooking}
          style={[
            styles.confirmButton,
            {
              backgroundColor: isSeatSelected ? '#264259' : '#ccc',
            }
          ]}
          disabled={!isSeatSelected} // Disable button when no seat is selected
        >
          <Text style={styles.confirmButtonText}>Confirm Booking</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const headerStyle = StyleSheet.create({
  container: {
    flex: 0.4,
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
});

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#d8f0fa',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#d8f0fa',
  },
  seatingArrangement: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  row: {
    flexDirection: 'row',
  },
  seat: {
    width: 80,
    height: 80,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 8,
  },
  seatText: {
    fontSize: 16,
  },
  confirmButton: {
    marginTop: 50,
    backgroundColor: '#264259',
    padding: 10,
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  confirmButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default SeatSelection;
