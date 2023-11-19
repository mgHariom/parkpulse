import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert, StyleSheet, Image } from 'react-native';
import { getAuth, signInWithPhoneNumber, PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
import { FirebaseConfig } from '../firebase';

const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');
  const [verificationId, setVerificationId] = useState(null);
  const [error, setError] = useState('');

  const auth = getAuth();

  const sendVerification = async () => {
    console.log('phone number:', phoneNumber)
    try {
      // Request OTP using signInWithPhoneNumber
      const confirmationResult = await signInWithPhoneNumber(auth, '+11234567890');
      setVerificationId(confirmationResult.verificationId);
      console.log(verificationId)
      setError('');
      console.log(confirmationResult.verificationId)
    } catch (err) {
      setError(err.message);
    }
  };

  const confirmCode = () => {
    const credential = PhoneAuthProvider.credential(verificationId, code);
    signInWithCredential(auth, credential)
      .then(() => {
        setCode('');
        Alert.alert('Login Successful');
      })
      .catch((error) => {
        // alert message
        console.log(error)
        alert(error);
      });
  };

    return (
        <View style={styles.container}>
            <Image source={require('./image/gif/carpark.gif')} style={{ width: 415, height: 300 }} />
            <Text style={styles.otpText}>
                ENTER YOUR MOBILE NO :
            </Text>
            <TextInput
                placeholder='Phone Number with Country Code'
                onChangeText={setPhoneNumber}
                keyboardType='phone-pad'
                autoCompleteType='tel'
                style={styles.textInput}
            />
            <TouchableOpacity style={styles.sendVerification} onPress={sendVerification}>
                <Text style={styles.buttonText}>
                    GET OTP
                </Text>
            </TouchableOpacity>

            <TextInput
                placeholder='Confirm Code'
                onChangeText={setCode}
                keyboardType='number-pad'
                autoCompleteType='tel'
                style={styles.textInput}
            />
            <TouchableOpacity style={styles.sendVerification} onPress={confirmCode}>
                <Text style={styles.buttonText}>
                    Confirm Verification
                </Text>
            </TouchableOpacity> 
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D8F0FA',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingHorizontal: 20,
        fontSize: 22,
        borderBottomColor: '#C9D3DF',
        borderBottomWidth: 2,
        marginBottom: 20,
        textAlign: 'center',
        color: '#264259',
        borderRadius: 40,
        backgroundColor: '#C9D3DF'
    },
    sendVerification: {
        //padding: 30,
        backgroundColor: '#264259',
        borderRadius: 60,
        //marginBottom: 20,
        //marginTop: 30,
        shadowOffset: {width: 20, height: 10},  
        shadowColor: '#000',  
        shadowOpacity: 0.2,  
        shadowRadius: 3,
        marginTop: 100,
        height: 60,
        width: 215,
        justifyContent: 'center',
        alignItems: 'center'
    },  
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 17,
        width: 120
    },
    otpText: {
        fontSize: 19,
        fontWeight: '800',
        color: '#000',
        margin: 20,
        paddingRight: 130,
    },
});

export default LoginPage;