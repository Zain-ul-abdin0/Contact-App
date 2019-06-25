import {createStackNavigator , createAppContainer} from 'react-navigation'
import Header from './Header'
import Create from './Create'
import Btn from './Btn'

const AppSwitch = createStackNavigator({
    Create:Create,
    Header:Header,
    Btn:Btn
});
export default createAppContainer(AppSwitch);