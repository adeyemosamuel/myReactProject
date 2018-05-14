import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "native-base";
import HomeTab from './AppTabNavigator/HomeTab'
import SearchTab from './AppTabNavigator/SearchTab'
import AddMediaTab from './AppTabNavigator/AddMediaTab'
import LikesTab from './AppTabNavigator/LikesTab'
import ProfileTab from './AppTabNavigator/ProfileTab'
import { TabNavigator } from 'react-navigation';

class MainScreen extends Component {

    static navigationOptions= {
        headerLeft: <Icon style={{ paddingLeft: 10}} name="ios-camera-outline"/>,
        title:"Instagram",
        headerRight:<Icon style={{ paddingRight: 10}} name="ios-send-outline"/>
    }
    render() {
        return (
           <AppTabNavigator/>
        );
    }
}

export default MainScreen;

const AppTabNavigator = TabNavigator({
     HomeTab:{
         screen: HomeTab
     },

     SearchTab:{
        screen: SearchTab
    },

    AddMediaTab:{
        screen: AddMediaTab
    },

    LikesTab:{
        screen: LikesTab
    },

    ProfileTab:{
        screen: ProfileTab
    },

})

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});