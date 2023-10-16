import { View, Text, Image, Pressable } from "react-native";

export default function Home (){
    return(
        <View>
            <Pressable>
            <Image source={require('C:\parkpulse\assets\brookfeilds_image.png')} />
            </Pressable>
        </View>
    )
}