import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';

export default class Btn extends Component {
 
   navigat=()=>{
    this.props.myNavigation.navigate('Create')
   }
  render() {
    return (
<View styles={{position:'absolute'}}>
        <View style={styles.btn}>
            <TouchableWithoutFeedback onPress={()=>this.navigat()} >
               <Text style={styles.plus}>+</Text>
           </TouchableWithoutFeedback>
        </View>
</View>
    );
  }
}
const styles=StyleSheet.create({
    btn:{
        marginTop: 450,
        height:62,
        width:62,
        marginLeft: 280,
        borderColor: '#FF5733',
        borderRadius: 100,
        backgroundColor:'#FF5733',
    },
    plus:{
        alignSelf: 'center',
        color:'white',
        marginBottom: 30,
        fontSize: 50,
        position:'relative',
        top:-5,
    }
})
