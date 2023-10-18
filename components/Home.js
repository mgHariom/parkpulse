import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import second_page from './second_page';

export default function Home ({navigation}){
    return(
        <View style = {styles.container_img}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('second_page')}>
                <Image 
                    source={require('./image/brookfields_image.png')}
                    style={styles.img}    
                ></Image>
            </Pressable>

            <Pressable>
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
            </Pressable>

            <Pressable>
                <Image 
                    source={require('./image/funrepublic_image.png')}
                    style={styles.img}    
                />
            </Pressable>

            <Pressable>
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
            </Pressable>
            
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