import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import { useState, useEffect } from "react";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Dropdown } from "react-native-element-dropdown";

export default function Home ({navigation, route}){
  const data = [
    { label: 'Coimbatore', value: 'Coimbatore' },
    { label: 'Chennai', value: 'Chennai' },
    { label: 'Banglore', value: 'Banglore' },
  ];

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[styles.label, isFocus && { color: 'blue' }]}>
            Dropdown label
          </Text>
        );
      }
      return null;
    };

  const resetDropdownValue = (newValue) => {
        setValue(newValue);
      };

      useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          // Reset the dropdown value based on the screen being navigated to
          switch (route.name) {
            case 'Coimbatore':
              resetDropdownValue('Coimbatore');
              break;
            case 'Chennai':
              resetDropdownValue('Chennai');
              break;
            case 'Banglore':
              resetDropdownValue('Banglore');
              break;
            default:
              resetDropdownValue(null);
              break;
          }
        });
    
        return unsubscribe;
      }, [navigation, route.name]);
    
    return(
        <ScrollView>
          <View style = {styles.container_img}>
            <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholder={!isFocus ? 'Select a city' : ''}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(true);
            navigation.navigate(item.value);
          }}
        />
            <TouchableOpacity onPress={() => navigation.navigate('SecondPage',  { name: 'Brookefields' })}>
                <Image 
                    source={require('./image/coimbatore/brookfields_image.png')}
                    style={styles.img}    
                ></Image>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('SecondPage', { name: 'Phoenix' })}>
                <Image 
                    source={require('./image/chennai/phoenix_image.png')}
                    style={{
                        height: 150, 
                        width: 319.36,
                        justifyContent: 'center',
                        borderRadius: 8,
                        marginTop: 20
                        }}   
                />
            </TouchableOpacity> 

            <TouchableOpacity onPress={() => navigation.navigate('SecondPage', { name: 'Orion' })}>
                <Image 
                    source={require('./image/banglore/orion_image.png')}
                    style={styles.img}    
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('SecondPage', { name: 'Nexus' })}>
                <Image 
                    source={require('./image/chennai/nexus_image.png')}
                    style={{
                        height: 140, 
                        width: 319.36,
                        justifyContent: 'center',
                        borderRadius: 8,
                        marginTop: 20
                        }}    
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