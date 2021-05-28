import React, { Component } from 'react'
import { ScrollView, View, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import { height, styles, theme, width } from '../../styles'
import { Button, Input, Text } from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

class RegisterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            email: '',
            password: '',
            samePassword: '',
            phone: '',
            isValidEmail: true,
            isValidPassword: true,
        };
    }

    toast(msg) {
        ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER);
    }

    _handleButtonSignUp = () => {
        const {fullName, phone, password, email} = this.state
        auth().createUserWithEmailAndPassword(email, password).then(
            (response)=>{
                console.log(response)
                firestore()
                .collection('Users')
                .doc(response.user.uid)
                .set({
                    name: fullName,
                    phone: phone,
                    email: email,
                    userId: response.user.uid
                })
                .then(() => {
                    console.log('User added!');
                });
                this.toast('Registrasi Berhasil');
                this.props.navigation.replace('Login')
            },
            (error)=>{
                console.log(error)
                this.toast('Registrasi Gagal');
            }
        )
    };
    

    validateEmail = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
            this.setState({
                email: text,
                isValidEmail: false,
            });
            return false;
        } else {
            this.setState({
                email: text,
                isValidEmail: true,
            });
        }
    };

    validatePassword = (e) => {
        let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
        if (reg.test(e) === false) {
            this.setState({
                password: e,
                isValidPassword: false,
            });
            return false;
        } else {
            this.setState({
                password: e,
                isValidPassword: true,
            });
        }
    };
        
    render() {
        const {
            fullName,
            username,
            email,
            phone,
            password,
            selectedItems,
            isValidEmail,
            isValidPassword,
            samePassword,
        } = this.state;
        const {navigation} = this.props;      
        return (
            <View style={styles.container}>
                <Text h3>Daftar Akun</Text>
                <View style={style.formContainer}>
                    <Input placeholder="Masukkan Nama" label="Nama" onChangeText={(e)=>{this.setState({fullName: e})}} />
                    <Input placeholder="Masukkan Email" label="Email" onChangeText={(e)=>{this.setState({email: e})}} />
                    <Input placeholder="Masukkan Nomor HP" label="Handphone" onChangeText={(e)=>{this.setState({phone: e})}} />
                    <Input placeholder="Masukkan Password" label="Password" secureTextEntry onChangeText={(e)=>{this.setState({password: e})}} />
                    <Input 
                        placeholder="Ketik Ulang Password" 
                        label="Re-Password" 
                        secureTextEntry
                        onChangeText={(e)=>{this.setState({samePassword: e})}}
                        errorMessage={samePassword!==password && 'Password tidak sesuai'} 
                    />
                </View>
                <Button title="Daftar" buttonStyle={style.button} raised onPress={()=>{this._handleButtonSignUp()}} />
            </View>
        )
    }
}

export default RegisterScreen

const style = StyleSheet.create({
    formContainer: {
        width: width/1.2,
        marginVertical: 5
    },
    button: {
        width:width/3,
        height:height/14
    }
})