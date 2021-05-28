import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GetStartedScreen, HomeScreen, LoginScreen, RegisterScreen, SplashScreen } from '../pages';

const Stack = createStackNavigator();
const Hide = {headerShown: false};

class Navigation extends Component {
    render(){
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Splash" >
                    <Stack.Screen name="Splash" component={SplashScreen} options={Hide} />
                    <Stack.Screen name="GetStarted" component={GetStartedScreen} options={Hide} />
                    <Stack.Screen name="Login" component={LoginScreen} options={Hide} />
                    <Stack.Screen name="Register" component={RegisterScreen} options={Hide} />
                    <Stack.Screen name="Home" component={HomeScreen} options={Hide} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default Navigation