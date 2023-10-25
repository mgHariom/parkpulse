import { View, Text, StyleSheet, ScrollView, Pressable, TouchableOpacity } from "react-native";
import Calendar from "./Calendar";
import SessionTimer from "./TimeToggle";
import SessionTimer2 from "./TimeToggle2";

export default function SecondPage ({ route, navigation }) {

  const {name} = route.params;

  const onPressControl = () => {
    navigation.navigate('ThirdPage')
  }

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
        <View style={styles.timeHeadingAlign}>
          <View style={styles.timeHeadingContainer}>
            <Text style={styles.timeHeadingText}>ENTRY TIME</Text>
          </View>
        </View>
        <View>
          <SessionTimer/>
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
              <Text style={styles.slotCounterText}>1</Text>
            </View>
            <View style={styles.slotCounterContainer}>
              <Text style={styles.slotCounterText}>0</Text>
            </View>
          </View>
        </View>
        <View style={styles.slotBookerAlign}>
            <View style={styles.slotBookercontainer}>
              <TouchableOpacity onPress={onPressControl}>
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
    width: 44,
    height: 61,
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