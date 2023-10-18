import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from "react";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

//https://hossein-zare.github.io/react-native-dropdown-picker-website/
export function City_dropdown (){
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
    {label: 'Coimbatore', value: 'Coimbatore'},  
    {label: 'Chennai', value: 'Chennai'},
    {label: 'Banglore', value: 'Banglore'}
  ]);

  const navigation = useNavigation();

  return (
    <DropDownPicker

    ArrowDownIconComponent={() => {

      return (
        <FontAwesomeIcon
          size={15}
          color={'#fff'}
          style={{ paddingHorizontal: 5 }}
          name="chevron-down"
        />
      );
    }}
    ArrowUpIconComponent={() => {
      return (
        <FontAwesomeIcon
          size={15}
          color={'#fff'}
          style={{ paddingHorizontal: 5 }}
          name="chevron-up"
        />
      );
    }}


      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      
      containerStyle={{
             width: 310,
             color: '#fff',
             zIndex: 3
      }}

      style={{
        borderColor: '#fff',
        backgroundColor: '#0C1D36'
      }}

      translation={{
        PLACEHOLDER: "Chennai"
      }}

      placeholderStyle={{
        color: "#fff",
        fontSize: 19
      }}

      textStyle={{
        fontSize: 19,
        color: "#0C1D36"
      }}

      labelStyle={{
        color: '#fff'
      }}

      arrowIconStyle={{
        width: 15,
        height: 15,
        color: '#fff'
        
      }}
     
    
      onChangeValue={(itemValue) => {
        switch (itemValue) {
          case 'Coimbatore':
            navigation.navigate('home');
            break;
          case 'Chennai':
            navigation.navigate('ChennaiScreen');
            console.log("pressed");
            break;
          case 'Banglore':
            navigation.navigate('BangloreScreen');
            break;
          default:
            // Handle the default case, if needed
            break;
        }
      }}



      
    />
  );
}

export default function ChennaiScreen ({navigation}){
    return(
        <View style = {styles.container_img}>
            <City_dropdown/>
            <TouchableOpacity onPress={() => navigation.navigate('SecondPage')}>
                <Image 
                    source={require('./image/brookfields_image.png')}
                    style={styles.img}    
                ></Image>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('SecondPage')}>
                <Image 
                    source={require('./image/prozone_image.png')}
                    style={{
                        height: 150, 
                        width: 319.36,
                        justifyContent: 'center',
                        borderRadius: 8,
                        marginTop: 20
                        }}   
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('SecondPage')}>
                <Image 
                    source={require('./image/funrepublic_image.png')}
                    style={styles.img}    
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('SecondPage')}>
                <Image 
                    source={require('./image/broadway_image.png')}
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
    )
}

const styles = StyleSheet.create({
    container_img:    {
        flex: 1,
        alignItems: 'center',
        paddingTop: 30,
        backgroundColor: '#ffffff'
    },

    img: {
        height: 130, 
        width: 319.36,
        justifyContent: 'center',
        borderRadius: 8,
        marginTop: 20
    }

    })