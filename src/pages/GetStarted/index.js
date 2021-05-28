import React, { Component } from 'react'
import { View } from 'react-native'
import { Adventure } from '../../assets'
import { height, styles, width } from '../../styles'
import { Button } from 'react-native-elements';
import { StyleSheet } from 'react-native';

class GetStartedScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Adventure width={300} height={300} />
                <View style={style.buttonContainer}>
                    <Button buttonStyle={style.button} raised title="Masuk" onPress={()=>{this.props.navigation.replace('Login')}} />
                    <Button buttonStyle={style.button} type="outlined" raised title="Daftar" onPress={()=>{this.props.navigation.replace('Register')}} />
                </View>
            </View>
        )
    }
}

export default GetStartedScreen

const style = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: width
    },
    button: {
        width:width/3,
        height:height/12
    }
})