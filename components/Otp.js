import React, { useRef, useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert, StyleSheet } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/auth';

export default LoginPage = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [code, setCode] = useState('');
    const [verificationId, setVerificationId] = useState(null);

    const sendVerification = () => {
        const phoneProvider = new firebase.auth.PhoneAuthProvider();
        phoneProvider
            .verifyPhoneNumber(phoneNumber)
            .then(setVerificationId);
        setPhoneNumber('');
    };

    const confirmCode = () => {
        const credential = firebase.auth.PhoneAuthProvider.credential(
            verificationId,
            code
        );
        firebase.auth().signInWithCredential(credential)
            .then(() => {
                setCode('');
                Alert.alert('Login Successful');
            })
            .catch((error) => {
                // alert message
                alert(error);
            });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.otpText}>
                Login using otp
            </Text>
            {/* <TextInput
                placeholder='Phone Number with Country Code'
                onChangeText={setPhoneNumber}
                keyboardType='phone-pad'
                autoCompleteType='tel'
                style={styles.textInput}
            />
            <TouchableOpacity style={styles.sendVerification} onPress={sendVerification}>
                <Text style={styles.buttonText}>
                    Send Verification
                </Text>
            </TouchableOpacity> */}

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
        paddingTop: 40,
        paddingBottom: 20,
        paddingHorizontal: 20,
        fontSize: 24,
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
        marginBottom: 20,
        textAlign: 'center',
        color: '#fff',
    },
    sendVerification: {
        padding: 20,
        backgroundColor: '#3498db',
        borderRadius: 10,
        marginBottom: 20,
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
    },
    otpText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        margin: 20,
    },
});
