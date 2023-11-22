import { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";

const Login2 = ({navigation}) => {
    const [password, setPassword] = useState('')
    return(
        <View style={styles.container}>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 80}}>
                <Image source={require('./image/gif/gif2.gif')} style={{ width: 450, height: 300}} />
            </View>
            <View style={styles.textBox}>
                <TextInput
                    autoCapitalize="none"
                    placeholder="password"
                    keyboardType="password"
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                    style={styles.input}
                />
            </View>
            <View style={styles.slotBookerAlign}>
            <View>
              <TouchableOpacity  style={[styles.slotBookercontainer]} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.slotBookerText}>recheck email</Text>
              </TouchableOpacity>
              <TouchableOpacity  style={[styles.slotBookercontainer]} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.slotBookerText}>Log In</Text>
              </TouchableOpacity>
            </View>
        </View>
        </View>
    )
}

export default Login2;

const styles = StyleSheet.create({
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
      }
})