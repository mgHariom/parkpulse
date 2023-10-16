import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function Home (){
    return(
        <View style = {styles.container_img}>
            <TouchableOpacity>
                <Image 
                    source={require('./image/brookfeilds_image.png')}
                    style={{
                        height: 130, 
                        width: 319.36,
                        justifyContent: 'center'
                           }}    
                />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image 
                    source={require('./image/brookfeilds_image.png')}
                    style={{
                        height: 130, 
                        width: 319.36,
                        justifyContent: 'center'
                           }}    
                />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image 
                    source={require('./image/brookfeilds_image.png')}
                    style={{
                        height: 130, 
                        width: 319.36,
                        justifyContent: 'center'
                           }}    
                />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image 
                    source={require('./image/brookfeilds_image.png')}
                    style={{
                        height: 130, 
                        width: 319.36,
                        justifyContent: 'center',
                        borderRadius: 8
                           }}    
                />
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container_img:    {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    }
    })