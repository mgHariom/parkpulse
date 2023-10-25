import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text} from 'react-native';

const SeatSelection = ({navigation, route}) => {

  const {time, period, name, date} = route.params

  console.log(period);

  const numRows = 4;
  const numCols = 3; // Updated to 3 columns
  const columnSpacing = 10; // Adjust the spacing as needed

  const generateSeatData = () => {
    const seats = [];
    for (let row = 1; row <= numRows; row++) {
      for (let col = 1; col <= numCols; col++) {
        const seatId = `${String.fromCharCode(64 + row)}-${col}`;
        seats.push({ id: seatId, status: 'available' });
      }
    }
    return seats;
  };

  const [seatData, setSeatData] = useState(generateSeatData());
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeatSelection = (seatId) => {
    const updatedSeatData = seatData.map((seat) => {
      if (seat.id === seatId) {
        return {
          ...seat,
          status: seat.status === 'available' ? 'selected' : 'available',
        };
      } else if (seat.status === 'selected') {
        // Deselect the previously selected seat
        return {
          ...seat,
          status: 'available',
        };
      }
      return seat;
    });
  
    const newlySelectedSeat = updatedSeatData.find((seat) => seat.status === 'selected');
    setSelectedSeats(newlySelectedSeat ? [newlySelectedSeat] : []);
  
    setSeatData(updatedSeatData);
  };
  

  const handleConfirmBooking = () => {
    const newlySelectedSeats = seatData.filter((seat) => seat.status === 'selected');
    setSelectedSeats(newlySelectedSeats);
  
    console.log(newlySelectedSeats);

   navigation.navigate('Ticketpage', {data : newlySelectedSeats, time: time, period:period, name:name, date: date});
  };

  

  return (
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
                      backgroundColor: seat.status === 'selected' ? '#264259' : '#d8f0fa',
                      borderColor: seat.status === 'selected' ? '#fff' : '#264259',
                      marginRight: colIndex < numCols - 1 ? columnSpacing : 0,
                    },
                  ]}
                  onPress={() => toggleSeatSelection(seat.id)}
                >
                  <Text style={[styles.seatText, {color: seat.status === 'selected' ? '#fff' : '#264259',}]}>{seat.id}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </View>


      <TouchableOpacity onPress={handleConfirmBooking} style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>Confirm Booking</Text>
      </TouchableOpacity>
    </View>
  );
};

const headerStyle = StyleSheet.create({
  container: {
    flex: 0.4,
    backgroundColor: '#d8f0fa'
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
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#d8f0fa',
  },
  seatingArrangement: {
    justifyContent: 'center',
    alignItems: 'center',
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
  selectedSeats: {
    marginTop: 20,
  },
  confirmButton: {
    marginTop: 50,
    backgroundColor: '#264259',
    padding: 10,
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
  },
  confirmButtonText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  selectedSeatsText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#264259',
  },
  selectedSeat: {
    fontSize: 16,
    color: '#264259',
    fontWeight: 'bold',
  },
  
});

export default SeatSelection;
