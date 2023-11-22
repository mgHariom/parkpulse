import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

export default function Stadiums ({navigation, route}){
    return(
        <ScrollView style = {styles.scrollView}>
          <View style = {styles.container_img}>
            <TouchableOpacity onPress={() => navigation.navigate('SecondPage', { name: 'Chepauk' })}>
                <Image 
                    source={require('./image/stadiums/chepauk.jpg')}
                    style={styles.img}    
                ></Image>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('SecondPage', { name: 'MCA' })}>
                <Image 
                    source={require('./image/stadiums/mca.jpg')}
                    style={styles.img}  
                />
            </TouchableOpacity> 

            <TouchableOpacity onPress={() => navigation.navigate('SecondPage', { name: 'Nehru cbe' })}>
                <Image 
                    source={require('./image/stadiums/nehru2.jpg')}
                    style={styles.img}   
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('SecondPage', { name: 'SDAT' })}>
                <Image 
                    source={require('./image/stadiums/sdat.jpg')}
                    style={styles.img}   
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('SecondPage', { name: 'wankhede' })}>
                <Image 
                    source={require('./image/stadiums/wankhede.jpg')}
                    style={styles.img}   
                />
            </TouchableOpacity>
            
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container_img:    {
        flex: 1,
        alignItems: 'center',
        paddingTop: 0,
        backgroundColor: '#d8f0fa'
    },

    scrollView: {
      backgroundColor: '#d8f0fa',
    },

    img: {
      height: 130, 
      width: 319.36,
        justifyContent: 'center',
        borderRadius: 8,
        marginTop: 20
    },

    dropdown: {
          margin: 16,
          height: 50,
          width: 319.36,
          borderBottomColor: 'gray',
          borderBottomWidth: 0.5,
    },
    icon: {
          marginRight: 5,
    },
    placeholderStyle: {
          fontSize: 16,
    },
    selectedTextStyle: {
          fontSize: 16,
    },
    iconStyle: {
          width: 20,
          height: 20,
    },
    inputSearchStyle: {
          height: 40,
          fontSize: 16,
    },


    })