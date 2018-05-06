/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Navigator,
    AppRegistry,
    View
} from 'react-native'
import { StackNavigator, SwitchNavigator, DrawerNavigator } from 'react-navigation';
import DangNhapScreen from './src/screens/DangNhap'
import HomeScreen from './src/screens/Home'
import ThongBaoScreen from './src/screens/ThongBao'
import LichLamViecScreen from './src/screens/LichLamViec'
import DangXuatScreen from './src/screens/DangXuat'
// import LichSuScreen from './src/screens/LichSu'
import HDSDPMScreen from './src/screens/HDSDPM'
// import TimDuongLayNuocScreen from './src/screens/TimDuongLayNuoc'



const HomeStack = DrawerNavigator({
    Home: HomeScreen,
    ThongBao: ThongBaoScreen,
    LichLamViec: LichLamViecScreen,
    //   LichSu: LichSuScreen, 
    HDSDPM: HDSDPMScreen,
    DangXuat: DangXuatScreen
});
const DangNhapStack = StackNavigator({ DangNhap: DangNhapScreen });

export default SwitchNavigator(
  {

    Home: HomeStack,
    DangNhap: DangNhapStack,
  },
  {
    initialRouteName: 'DangNhap',
  }
)
// export default class App extends Component {
//     componentWillMount() {
//         SwitchNavigator(
//             {

//                 Home: HomeStack,
//                 DangNhap: DangNhapStack,
//             },
//             {
//                 initialRouteName: 'DangNhap',
//             }
//         )
//     }
//     render(){
//         return(
//             <View></View>
            
//         )
//     }
// }
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// // type Props = {};
// export default class App extends Component/*<Props>*/ {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit App.js
//         </Text>
//         <Text style={styles.instructions}>
//           {instructions}
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
