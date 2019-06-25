import React, { Component } from 'react';
import { View, Text, StyleSheet,Dimensions } from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);

export default class Header extends Component{
render(){
  return (
      <View style={styles.headerView}>
        <Text style={styles.txtColor}>Contact App</Text>
      </View>
    );
 }
}
const styles= StyleSheet.create({
    headerView:{
        width:screenWidth,
        height:70,
        backgroundColor:'#FF5733',
        marginTop: 24,
    },
    txtColor:{
        fontWeight: '700',
        paddingTop: 20,
        paddingLeft: 10,
        color:'white',
        fontSize: 18,
    }
})
