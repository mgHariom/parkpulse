import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from "react";
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

//https://hossein-zare.github.io/react-native-dropdown-picker-website/
// export function City_dropdown ({navigation}){
//     const [open, setOpen] = useState(false);
//     const [value, setValue] = useState(null);
//     const [items, setItems] = useState([
//     {label: 'Coimbatore', value: 'Coimbatore'},  
//     {label: 'Chennai', value: 'chennai'},
//     {label: 'Banglore', value: 'banglore'}
//   ]);

//   return (
//     <DropDownPicker
//       open={open}
//       value={value}
//       items={items}
//       setOpen={setOpen}
//       setValue={setValue}
//       setItems={setItems}
      
//       containerStyle={{
//              width: 310,
//              color: '#fff',
//              zIndex: 3
//       }}

//       style={{
//         borderColor: '#fff',
//         backgroundColor: '#0C1D36'
//       }}

//       translation={{
//         PLACEHOLDER: "Coimbatore"
//       }}

//       placeholderStyle={{
//         color: "#fff",
//         fontWeight: "bold",
//         fontSize: 23
//       }}

//       textStyle={{
//         fontSize: 23,
//         color: "#0C1D36"
//       }}

//       labelStyle={{
//         color: '#fff'
//       }}

//       arrowIconStyle={{
//         width: 20,
//         height: 20,
//         color: '#fff'
        
//       }}
      
//     />
//   );
// }

export default function Home ({navigation}){

  const data = [
    { label: 'coimbatore', value: 'Coimbatore' },
    { label: 'chennai', value: 'Chennai' },
    { label: 'banglore', value: 'Banglore' },
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
    return(
        <View style = {styles.container_img}>
            {/* <City_dropdown/> */}
            <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          //inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          //search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select city' : ''}
          //searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          // renderLeftIcon={() => (
          //   <AntDesign
          //     style={styles.icon}
          //     color={isFocus ? 'blue' : 'black'}
          //     name="EnvironmentTwoTone"
          //     size={20}
          //   />
          // )}
        />
            <TouchableOpacity onPress={() => navigation.navigate('SecondPage')}>
                <Image 
                    source={require('./image/brookfields_image.png')}
                    style={styles.img}    
                ></Image>
            </TouchableOpacity>

            <TouchableOpacity>
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

            <TouchableOpacity>
                <Image 
                    source={require('./image/funrepublic_image.png')}
                    style={styles.img}    
                />
            </TouchableOpacity>

            <TouchableOpacity>
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
    },

    dropdown: {
      width: 319.36,
      height: 40,
      backgroundColor:'#d8f4fh',
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      //width: 300,
      backgroundColor: '#d8f4fh',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
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