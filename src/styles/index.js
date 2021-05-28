import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'white',
        paddingVertical:10
    }
})

export const theme = {
    colors: {
      primary: '#FCDCAC',
    },
};

export const {width, height} = Dimensions.get('window')