import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const Map = () => {
  const [region, setRegion] = useState({
    latitude: 11.007124069457875,
    longitude: 76.9511086380984,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });

  const [places, setPlaces] = useState([]);

  useEffect(() => {
    // Fetch nearby places data here (e.g., using Google Places API)
    // Update the places state with the fetched data

    // For demonstration purposes, let's consider a sample places array
    const samplePlaces = [
      { id: 1, name: 'Place 1', latitude: 11.007124069457875, longitude:   76.9511086380984 },
      { id: 2, name: 'Place 2', latitude: 11.007124069457875, longitude:  76.9511086380984 },
      // Add more places as needed
    ];

    setPlaces(samplePlaces);
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={(newRegion) => setRegion(newRegion)}
      >
        {places.map((place) => (
          <Marker
            key={place.id}
            coordinate={{ latitude: place.latitude, longitude: place.longitude }}
            title={place.name}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default Map;
