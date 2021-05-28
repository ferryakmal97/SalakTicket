import React, { Component } from 'react'
import { View } from 'react-native'
import { Adventure } from '../../assets'
import { styles } from '../../styles'
import auth from '@react-native-firebase/auth'

class SplashScreen extends Component {
    componentDidMount() {
        setTimeout(() => {
            auth().onAuthStateChanged((user)=>{
                console.log("user loggin:",user)
                if (!user) {
                  this.props.navigation.replace('GetStarted');
                  // this.props.isOnline(false)
                }else{
                  this.props.navigation.replace('Home');
                }
            })
        }, 2000);
        // setTimeout (()=>{
        //     if(this.props.isLogin){
        //         this.props.navigation.replace('Home')
        //     } else {
        //         this.props.navigation.replace('Welcome')
        //     }
        //    },2000
        // )
    }
    render() {
        return (
            <View style={styles.container}>
                <Adventure width={350} height={350} />
            </View>
        )
    }
}

export default SplashScreen
