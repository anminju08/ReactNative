import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class MainScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>MainScrren 임</Text>
            </View>
        )
    }
}

export default MainScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems :'center',
        justifyContent:'center'
    }
})