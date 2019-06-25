import React, { Component } from 'react';
import { View, Text,StyleSheet ,TouchableOpacity,TouchableWithoutFeedback,KeyboardAvoidingView} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label,Thumbnail } from 'native-base';
import Main from './Main';
import { ImagePicker } from 'expo';
console.disableYellowBox = true;

export default class Create extends Component {

  static navigationOptions = {
    title: 'Create Contact',
    headerTintColor: '#FF5733',
    tintColor:'black'

  };

  constructor(props) {
    super(props);
    this.state = {
      email:'',
      firstName:'',
      lastName:'',
      address:'',
      phoneNumber:'',
      image:require('../pics/user.png'),
      url:'',
    };
  }
   save=()=>{

     alert('Your Contact has been saved !')
    this.props.navigation.navigate('Main',{
      firstName:this.state.firstName,
      lastName:this.state.lastName,
      email:this.state.email,
      phoneNumber:this.state.phoneNumber,
      address:this.state.address,
      image:this.state.image,
      url:this.state.url,
      toCreate:'defined'
    })
   }
   
  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result,url:result.uri });
    }
  };
  
  render() {
    let { image } = this.state;

    return (
<KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <Container>
       <TouchableWithoutFeedback
           onPress={this._pickImage}
          >
        
         
  
          <Thumbnail source={  image }  style={{height:100,width:100,borderRadius:100,alignSelf:'center',marginTop:10}}/>
        
          </TouchableWithoutFeedback>
      <Content>
        <Form>
          <Item floatingLabel>
            <Label>First Name</Label>
            <Input 
              onChangeText={(firstName)=>this.setState({firstName})}
            />
          </Item>
          <Item floatingLabel last>
            <Label>Last Name</Label>
            <Input 
             onChangeText={(lastName)=>this.setState({lastName})}
            />
          </Item>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
               onChangeText={(email)=>this.setState({email})}
             />
          </Item>
          <Item floatingLabel last>
            <Label>Phone Number</Label>
            <Input
            onChangeText={(phoneNumber)=>this.setState({phoneNumber})}
             />
          </Item>
          <Item floatingLabel last>
            <Label>Address</Label>
            <Input 
             onChangeText={(address)=>this.setState({address})}
            />
          </Item>
        </Form>
        
      <TouchableOpacity style={styles.btn} onPress={()=>{this.save()}}>
            <Text style={{fontSize:20,color:'white',textAlign:'center',paddingTop:10}}>Save</Text>
      </TouchableOpacity>
      </Content>
    </Container>
    </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
     backgroundColor:'white',
     flex:1,
  },
  btn:{
     height:50,
     width:300,
     margin:30,
     backgroundColor:'#FF5733',
     borderRadius: 10,
     
}
})