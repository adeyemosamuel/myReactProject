import React, { Component } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { Icon } from "native-base";
import HomeTab from './AppTabNavigator/HomeTab'
import SearchTab from './AppTabNavigator/SearchTab'
import AddMediaTab from './AppTabNavigator/AddMediaTab'
import LikesTab from './AppTabNavigator/LikesTab'
import ProfileTab from './AppTabNavigator/ProfileTab'
import { createBottomTabNavigator } from 'react-navigation';

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



const AppTabNavigator = createBottomTabNavigator({
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

}, {
    animationEnabled:true,
    swipeEnabled: true,
    tabBarPosition:"bottom",
    tabBarOptions:{
        style:{
            ...Platform.select({
                android:{
                    backgroundColor:'white'
                }
            })
        },
        activeTintColor:'#000',
        inactiveTintColor:'#d1cece',
        showLabel: false,
        showIcon:true
    }
})

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});

export default MainScreen;