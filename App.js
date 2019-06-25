import {createStackNavigator } from 'react-navigation'
import Header from './src/Header'
import Create from './src/Create'
import Btn from './src/Btn'
import Main from './src/Main'

import React ,{Component} from 'react'


export default class App extends Component {
  render() {
   
    return (
      <AppContainer/>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Main:Main,
    Header: Header,
    Create: Create,
    Btn:Btn
  }, {
    defaultNavigationOptions: {
      header: null
    }
  }
);

const AppContainer = (RootStack);
