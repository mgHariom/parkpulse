import { View, Text, Image, Pressable, StyleSheet} from "react-native";


export default function Home (){
    return(
        <View style = {styles.container_img}>
            <Pressable onPress={navigation.navigate('SecondPage')}>
                <Image 
                    source={require('./image/brookfeilds_image.png')}
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
                    source={require('./image/brookfeilds_image.png')}
                    style={styles.img}    
                />
            </Pressable>

            <Pressable>
                <Image 
                    source={require('./image/brookfeilds_image.png')}
                    style={styles.img}    
                />
            </Pressable>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container_img:    {
        flex: 1,
        alignItems: 'center',
        paddingTop: 30
    },

    img: {
        height: 130, 
        width: 319.36,
        justifyContent: 'center',
        borderRadius: 8,
        marginTop: 20
    }

    })