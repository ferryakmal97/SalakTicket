import React, { Component } from 'react'
import { ScrollView, View, StyleSheet, Text, TouchableOpacity, ToastAndroid } from 'react-native'
import { Login } from '../../assets'
import { height, styles, theme, width } from '../../styles'
import { Button, Icon, Input } from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import messaging from '@react-native-firebase/messaging';
import firestore from '@react-native-firebase/firestore';

class LoginScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    async saveTokenToDatabase(token) {
        // Assume user is already signed in
        const userId = auth().currentUser.uid;
        console.log(userId)
        // Add the token to the users datastore
        await firestore()
          .collection('Users')
          .doc(userId)
          .update({
            tokens: firestore.FieldValue.arrayUnion(token),
          });
      }
    
      toast(msg) {
        ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER);
      }
    
    handleButtonSignIn = () => {
        const {email, password} = this.state;
        if (email === '' || password=== ''){
          this.toast('Data Belum Diinput')
        } else {
            auth().signInWithEmailAndPassword(email, password)
                .then((user) => {
                console.log(user)
                this.toast('Login Berhasil');
                // this.props.setLogin(true)
                // this.props.setUser(user)
                messaging()
                .getToken()
                .then(token => {
                    return this.saveTokenToDatabase(token);
                });
                this.props.navigation.replace('Home')
                })
                .catch(error => { 
                if (error.code === 'auth/invalid-email') {
                    this.toast('Email Tidak Ditemukan')
                }
                if (error.code === 'auth/wrong-password') {
                    this.toast('Password Salah');
                }
              // console.error(error);
            });
        }
    }    

    render() {
        return (
            <View style={styles.container}>
                <Login width={200} height={200} />
                <View style={style.formContainer}>
                    <Input placeholder="Masukkan Email" label="Email" leftIcon={<Icon name="email" />} onChangeText={(e)=>{this.setState({email: e})}} />
                    <Input placeholder="Masukkan Password" label="Password" leftIcon={<Icon name="key" />} secureTextEntry  onChangeText={(e)=>{this.setState({password: e})}} />
                    <View style={{flexDirection:'row'}}>
                        <Text>Belum memiliki akun ? </Text>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Register')}}>
                            <Text style={{color: theme.colors.primary}}>Daftar disini</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Button title="Login" buttonStyle={style.button} raised onPress={()=>{this.handleButtonSignIn()}} />
            </View>
        )
    }
}

export default LoginScreen

const style = StyleSheet.create({
    formContainer: {
        width: width/1.2,
        marginVertical: 20
    },
    button: {
        width:width/3,
        height:height/12
    }
})