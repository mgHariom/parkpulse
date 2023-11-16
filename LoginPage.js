import React, {useRef, useState} from 'react'
import { Text, View,TouchableOpacity, TextInput, Alert } from 'react-native'
//import {firebaseRecaptchaVerifierModal} from 'expo-firebse-recaptcha'
import firebaseConfig from 'firebase'
import firebase from 'firebase/compat'

export default LoginPage = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [code, setCode] = useState('');
    const [verificationId, setVerficationId] = useState(null);
    
    const sendVerification = () => {
        const phoneProvider = new firebase.auth.PhoneAuthProvider();
        phoneProvider
            .verifyPhoneNumber(phoneNumber)
            .then(setVerficationId)
            setPhoneNumber('');
    };

    const confirmCode = () => {
        const credential = firebase.auth.PhoneAuthProvider.credential(
            verificationId,
            code
        );
        firebase.auth().signInWithCredential(credential)
        .then(() => {
            setCode('')
        })
        .catch((error) => {
            //alert message
            alert(error)
        })
        Alert.alert('Login Successful')
    };

    return(
        <View style={StyleSheet.container}>
            <Text style={StyleSheet.otpText}>
                Login using otp
            </Text>
            <TextInput
                placeholder='Phone NUmber with Country Code'
                onChangeText={setPhoneNumber}
                keyboardType='phone-pad'
                autoCompleteType='tel'
                style={styles.TextInput}
            />
            <TouchableOpacity style={styles.sendVeerification} onPress={sendVerification}>
                <Text style={styles.buttonText}>
                    Send Verification
                </Text>
            </TouchableOpacity>

            <TextInput
                placeholder='Confirm Code'
                onChangeText={setPhoneNumber}
                keyboardType='number-pad'
                autoCompleteType='tel'
                style={styles.TextInput}
            />
            <TouchableOpacity style={styles.sendVeerification} onPress={confirmCode}>
                <Text style={styles.buttonText}>
                    Confirm Verification
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = stylesheet.create({
    container: {
        flex:1,
        backgroundColor:'#000',
        alignItems: 'center',
        justifyContent: 'center',

    },   
    textInput: {
        paddingTop:40,
        paddingBottom:20,
        paddingHorizontal:20,
        fontSize:24,
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
        marginBottom:20,
        textAlign: 'center',
        color:'#fff'
    },
    sendVerification:{
        padding:20,
        backgroundColor:'#3498db',
        borderRadius:10,
    },
    sendCode:{
        padding:20,
        backgroundColor:'#9b59',
        borderRadius:10,

    },
    buttonText:{
        padding:20,
        backgroundColor:'#9b59b6',
        borderRadius:10,
    },
    buttonText: {
        textAlign:'center',
        color:'#fff',
        fontWeight:'bold',
    },
    otpText: {
        fontSize:24,
        fontWeight:'bold',
        color:'#fff',
        margin:20
    }

})

