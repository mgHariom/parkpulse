import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import Calendar from "./Calendar";

export default function SecondPage ({ route, navigation }) {

  const {name} = route.params;

  return(
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.mallContainerAlign}>
          <View style={styles.mallContainer}>
            <Text style={styles.mallText}>{name}</Text>
          </View>
        </View>
        <View>
          <Calendar/>
        </View>
      </View>
      <View>
      <Pressable onPress={() => navigation.navigate('TimeToggle')}>
              <Text>
                TimeToggle
              </Text>
      </Pressable>
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
  }
})