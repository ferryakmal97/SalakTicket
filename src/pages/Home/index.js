import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import auth from '@react-native-firebase/auth';

class HomeScreen extends Component {

    signOut = () => {
        auth()
        .signOut()
        .then(() => {
            console.log('User signed out!')
            this.props.navigation.replace('GetStarted')
        });
    }

    render() {
        return (
            <View>
                <Text> textInComponent </Text>
                <Button title="Logout" onPress={()=>{this.signOut()}} />
            </View>
        )
    }
}

export default HomeScreen
