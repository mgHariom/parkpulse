import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import SeatsLayout from "@mindinventory/react-native-bus-seat-layout";
import { parkingSlot } from './Index';

const SeatSelection = () => {

  return(
    <View>
      <SeatsLayout
        row={14}
        layout={{ columnOne: 3, columnTwo: 2 }}
        selectedSeats={[
            { seatNumber: 1, seatType: 'booked' },
            { seatNumber: 11, seatType: 'women' },
            { seatNumber: 17, seatType: 'women' },
            { seatNumber: 43, seatType: 'blocked' },
        ]}
        numberTextStyle={{ fontSize: 12 }}
        seatImage={{ image: parkingSlot, tintColor: '#B2B2B2' }}
        getBookedSeats={(seats) => {
            console.log('getBookedSeats :: ', seats);
        }}
     />
    </View>
  )
  // const initialSeatData = [
  //     ['available', 'available', 'available'],
  //     ['available', 'available', 'available'],
  //     // ...
  //   ];
  
  // const [seatData, setSeatData] = useState(initialSeatData);
      
  // const [selectedSeats, setSelectedSeats] = useState([]);

  // const toggleSeatSelection = (row, col) => {
  //   // Toggle the seat state between "available" and "selected"
  //   const newSeatData = [...seatData];
  //   newSeatData[row][col] = seatData[row][col] === 'available' ? 'selected' : 'available';
  //   setSeatData(newSeatData);
  // };

  // const handleConfirmBooking = () => {
  //   // Implement booking logic here, mark selected seats as "booked"
  //   // Send the selected seats to the server if necessary
  // };

  // return (
  //   <View style={styles.container}>
  //     <View style={styles.seatingArrangement}>
  //       {seatData.map((row, rowIndex) => (
  //         <View key={rowIndex} style={styles.row}>
  //           {row.map((seat, colIndex) => (
  //             <TouchableOpacity
  //               key={colIndex}
  //               style={[
  //                 styles.seat,
  //                 { backgroundColor: seat === 'selected' ? 'blue' : 'gray' },
  //               ]}
  //               onPress={() => toggleSeatSelection(rowIndex, colIndex)}
  //             >
  //               <Text>{rowIndex + 1}-{colIndex + 1}</Text>
  //             </TouchableOpacity>
  //           ))}
  //         </View>
  //       ))}
  //     </View>

  //     <View style={styles.selectedSeats}>
  //       <Text>Selected Seats:</Text>
  //       {selectedSeats.map((seat) => (
  //         <Text key={seat}>{seat}</Text>
  //       ))}
  //     </View>

  //     <TouchableOpacity onPress={handleConfirmBooking} style={styles.confirmButton}>
  //       <Text>Confirm Booking</Text>
  //     </TouchableOpacity>
  //   </View>
  // );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  seatingArrangement: {
    // Style for the seating arrangement container
  },
  row: {
    flexDirection: 'row',
  },
  seat: {
    // Style for individual seats
  },
  selectedSeats: {
    marginTop: 20,
  },
  confirmButton: {
    marginTop: 20,
    backgroundColor: 'green',
    padding: 10,
    alignItems: 'center',
  },
});

export default SeatSelection;
