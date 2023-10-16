import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function Home (){
    return(
        <View style = {styles.container_img}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SecondPage')}>
                <Image 
                    source={require('./image/brookfeilds_image.png')}
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
                    source={require('./image/brookfeilds_image.png')}
                    style={styles.img}    
                />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image 
                    source={require('./image/brookfeilds_image.png')}
                    style={styles.img}    
                />
            </TouchableOpacity>
            
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