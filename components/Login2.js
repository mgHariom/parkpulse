import { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";

const Login2 = ({navigation}) => {
    const [password, setPassword] = useState('')
    return(
        <ScrollView style = {styles.scrollView}>
          <View style={styles.container}>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 80}}>
                <Image source={require('./image/gif/carpark.gif')} style={{ width: 450, height: 300}} />
            </View>
            <View style={styles.textBox}>
                <TextInput
                    autoCapitalize="none"
                    placeholder="password"
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                    style={styles.input}
                />
            </View>
            <View style={styles.slotBookerAlign}>
            <View style={styles.btnContainer}>
              <TouchableOpacity  style={[styles.slotBookercontainer]} onPress={() => navigation.goBack()}>
                <Text style={styles.slotBookerText}>Recheck Email</Text>
              </TouchableOpacity>
              <TouchableOpacity  style={[styles.slotBookercontainer]} onPress={() => navigation.navigate('Destination')}>
                <Text style={styles.slotBookerText}>Get Started</Text>
              </TouchableOpacity>
            </View>
        </View>
        </View>
        </ScrollView>
    )
}

export default Login2;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#d8f0fa'
  },
    container: {
        flex: 1,
        backgroundColor: '#d8f0fa'
    },
    input: {
        backgroundColor: "#C9D3DF",
        borderRadius: 8,
        fontSize: 20,
        height: 50,
        width:350,
        padding: 10,
      },
    textBox: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
        borderRadius: 10
    },
    slotBookerAlign: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
      },
      slotBookercontainer: {
        backgroundColor: '#264259',
        width: 180,
        height: 61,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginTop: 40
      },
      slotBookerText: {
        fontSize: 20,
        fontWeight: '800',
        color: '#fff',
      },
      btnContainer: {
        flexDirection: 'row'
      }
})