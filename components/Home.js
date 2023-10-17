import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from "react";

export function City_dropdown ({navigation}){
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
    {label: 'Coimbatore', value: 'Coimbatore'},  
    {label: 'Chennai', value: 'chennai'},
    {label: 'Banglore', value: 'banglore'}
  ]);

  return (
    <DropDownPicker
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
        PLACEHOLDER: "Coimbatore"
      }}

      placeholderStyle={{
        color: "#fff",
        fontWeight: "bold",
        fontSize: 23
      }}

      textStyle={{
        fontSize: 23,
        color: "#0C1D36"
      }}

      labelStyle={{
        color: '#fff'
      }}

      arrowIconStyle={{
        width: 20,
        height: 20,
        color: '#fff'
        
      }}
      
    />
  );
}

export default function Home ({navigation}){
    return(
        <View style = {styles.container_img}>
            <City_dropdown/>
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
    }

    })