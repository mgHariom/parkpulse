import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import { useState, useEffect } from "react";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Dropdown } from "react-native-element-dropdown";
//https://hossein-zare.github.io/react-native-dropdown-picker-website/
// export function City_dropdown (){
//     const [open, setOpen] = useState(false);
//     const [value, setValue] = useState(null);
//     const [items, setItems] = useState([
//     {label: 'Coimbatore', value: 'Coimbatore'},  
//     {label: 'Chennai', value: 'chennai'},
//     {label: 'Banglore', value: 'banglore'}
//   ]);

//   return (
//     <DropDownPicker

//     ArrowDownIconComponent={() => {

//       return (
//         <FontAwesomeIcon
//           size={15}
//           color={'#fff'}
//           style={{ paddingHorizontal: 5 }}
//           name="chevron-down"
//         />
//       );
//     }}
//     ArrowUpIconComponent={() => {
//       return (
//         <FontAwesomeIcon
//           size={15}
//           color={'#fff'}
//           style={{ paddingHorizontal: 5 }}
//           name="chevron-up"
//         />
//       );
//     }}


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
//         fontSize: 19
//       }}

//       textStyle={{
//         fontSize: 19,
//         color: "#0C1D36"
//       }}

//       labelStyle={{
//         color: '#fff'
//       }}

//       arrowIconStyle={{
//         width: 15,
//         height: 15,
//         color: '#fff'
        
//       }}
      
//     />
//   );
// }

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
        <View style = {styles.container_img}>
            {/* <City_dropdown/> */}
            <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholder={!isFocus ? 'Select a city' : ''}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          //inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          //search
          maxHeight={300}
          
          labelField="label"
          valueField="value"
          //searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(true);
            navigation.navigate(item.value);

        //     switch (item.value) {
        //       case 'Coimbatore':
        //         navigation.navigate('Coimbatore');
        //         break;
        //       case 'Chennai':
        //         navigation.navigate('Chennai');
        //         break;
        //       case 'Banglore':
        //         navigation.navigate('Banglore');
        //         break;
        //       default:
        //         // Handle the default case, if needed
        //         break;
        //     }
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
                    source={require('./image/coimbatore/brookfields_image.png')}
                    style={styles.img}    
                ></Image>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('SecondPage')}>
                <Image 
                    source={require('./image/coimbatore/prozone_image.png')}
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
                    source={require('./image/coimbatore/funrepublic_image.png')}
                    style={styles.img}    
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('SecondPage')}>
                <Image 
                    source={require('./image/coimbatore/broadway_image.png')}
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