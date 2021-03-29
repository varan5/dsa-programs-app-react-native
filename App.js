import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen'
import ListScreen from './src/screens/ListScreen'
import ArrayScreen from './src/screens/array/ArrayScreen'
import TwoSumScreen from './src/screens/array/contents/TwoSumScreen'
import ValidateSubsequenceScreen from './src/screens/array/contents/ValidateSubsequenceScreen'
import ThreeSumScreen from './src/screens/array/contents/ThreeSumScreen'

import StringScreen from './src/screens/string/StringScreen'
import LinkedListScreen from './src/screens/linked-list/LinkedListScreen'


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: ListScreen,
    Array: ArrayScreen,
    Two: TwoSumScreen,
    Valid: ValidateSubsequenceScreen,
    Three: ThreeSumScreen,

    String: StringScreen,
    
    Linked: LinkedListScreen,

  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'My App',
    },
  }
);

export default createAppContainer(navigator);
