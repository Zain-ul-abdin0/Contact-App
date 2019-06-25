import React, { Component } from 'react';
import { View, Text ,FlatList ,StyleSheet,Button,Image,TouchableOpacity,ScrollView} from 'react-native';
import Header from './Header';
import Btn from './Btn';
import { Ionicons } from '@expo/vector-icons';
import Swipeout from 'react-native-swipeout';

console.disableYellowBox = true;

// class FlatlistItem extends Component{
//    swipeoutBtns = [
//     {
//       text: 'Delete',
//       backgroundColor:'#FD0E0E',
//       onPress:()=>{
//         obj=new Main();
//         obj.del()
//       }
//     }
//   ]
//   constructor(props){
//     super(props);
//   }
//   render(){
//     return (
//       <Swipeout right={this.swipeoutBtns} 
//     >
//       <View style={{backgroundColor: '#EFEFEF',marginTop:10,position:'relative'}}>
//               <View style={styles.card}>
//               <Image style={{height:75,width:75,borderRadius:100,marginTop:15,position:'absolute',marginLeft:10}} source={{uri: this.props.item.url}}/>

//                  <Text style={[styles.text,{paddingTop:20}]}>{this.props.item.firstName}</Text>
//                  <Text style={styles.text}>{this.props.item.phoneNumber}</Text>
//                  <Text style={styles.text}>{this.props.item.key}</Text>

//               </View>
//       </View>
//       </Swipeout>

//     )
//   }
// }
export default class Main extends Component {

 static navigationOptions=({
   header:null
 })
  constructor(props) {
    super(props);

    this.state = {
      data:[],
   refreshing :false,
   key:0,
   toCreate:'defined'
    
  };

}

ref(firstName,lastName,phoneNumber,address,email,image,url,key,toCreate){
  let contact={"firstName":firstName,"lastName":lastName,"phoneNumber":phoneNumber,"address":address,"email":email,"image":image,"url":url,"key":key}
  if(typeof this.state.toCreate != 'notDefined'){
  this.setState({
    refreshing:true,
    data:[...this.state.data,contact]
  })
}

  this.setState({refreshing:false,key:this.state.key+1})
}
del(index){
  var rebels = this.state.data.filter(function (data) {
    return data.key != index;
  });
  this.setState({data:rebels})
}
swipteDelete(){
  
  var rebels = this.state.data.filter(function (data) {
    return data.key != this.state.data.key;
  });
  this.setState({data:rebels})
}
  render() {
    
     const { navigation } = this.props;
     const firstName = navigation.getParam('firstName' );
     const lastName = navigation.getParam('lastName' );
     const address = navigation.getParam('address', );
     const phoneNumber = navigation.getParam('phoneNumber', );
     const email = navigation.getParam('email' );
     const image = navigation.getParam('image' );
     const url = navigation.getParam('url' );
     const key = navigation.getParam('key' );
     const toCreate = navigation.getParam('toCreate' );
     
     
    return (
      <View>
          <Header/>
          <TouchableOpacity onPress={()=>{this.ref(firstName,lastName,phoneNumber,address,email,image,url,this.state.key,toCreate)}}style={{position:'absolute',right:40,top:40}}>
          <Ionicons  name="ios-refresh" size={32} color="white" />
          </TouchableOpacity>

          <Btn myNavigation = {this.props.navigation} />
          <View style={{position:'absolute',top:90}}>
          <FlatList data={this.state.data}
          refreshing={this.state.refreshing}
          onRefresh={()=>{this.ref(firstName,lastName,phoneNumber,address,email,image,url,this.state.key,toCreate)}}
          renderItem={({item,index})=>{
      
            return(
      <View style={{backgroundColor: '#EFEFEF',marginTop:10,position:'relative'}}>
              <View style={styles.card}>
              <Image style={{height:75,width:75,borderRadius:100,marginTop:15,position:'absolute',marginLeft:10}} source={{uri: item.url}}/>

                 <Text style={[styles.text,{paddingTop:20}]}>{item.firstName}</Text>
                 <Text style={styles.text}>{item.phoneNumber}</Text>
              {/* <Button title = "del" onPress={()=>this.del(item.key)}></Button> */}
              
          <TouchableOpacity onPress={()=>this.del(item.key)} style={{position:'absolute',marginLeft:330,top:20}}>
          <Ionicons  name="ios-trash" size={36} color="red" />
          </TouchableOpacity>
              </View>
      </View>
            )
          }}
          >

         </FlatList>
          </View>
       
       </View>
    );
  }
}


const styles = StyleSheet.create({
  card :{
    height:100,width:371,backgroundColor:'#fff'
      },
      text:{
        paddingLeft:100,
        color:'#FF5733'
      }
  })
// <Text>itemId: {JSON.stringify(firstName)}</Text>
// <Text>otherParam: {JSON.stringify(lastName)}</Text>