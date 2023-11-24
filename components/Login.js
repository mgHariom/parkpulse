import { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";

const Login = ({navigation}) => {
    const [email, setEmail] = useState('')
    return(
        <ScrollView style = {styles.scrollView}>
          <View style={styles.container}>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 80}}>
                <Image source={require('./image/gif/carpark.gif')} style={{ width: 450, height: 300}} />
            </View>
            <Text style={styles.inputHeader}>Enter Your Gmail :</Text>
            <View style={styles.textBox}>
                <TextInput
                    autoCapitalize="none"
                    placeholder="E-mail"
                    keyboardType="email-address"
                    onChangeText={(text) => setEmail(text)}
                    style={styles.input}
                />
            </View>
            <View style={styles.slotBookerAlign}>
            <View>
              <TouchableOpacity  style={[styles.slotBookercontainer]} onPress={() => navigation.navigate('Login2')}>
                <Text style={styles.slotBookerText}>Login</Text>
              </TouchableOpacity>
            </View>
        </View> 
        </View>
        </ScrollView>
    )
}

export default Login;

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
        width: 350,
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
      inputHeader: {
        fontSize: 24,
        marginLeft: 30,
        marginTop: 30,
        fontWeight: '800'
      }
})