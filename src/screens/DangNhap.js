import React, { Component } from 'react'
import {
  Text,
  View,
  // Button,
  // TextInput,
  Image,
  TextInput,
  StatusBar,
  TouchableHighlight,
  
} from 'react-native'
import { StackNavigator } from 'react-navigation';
import styleDangNhap from '../styles/StyleDangNhap'


export default class DangNhap extends Component {
  constructor(props) {
    super(props)

    background = require('../img/background.jpg')
    logo = require('../icon/Logo.png')
    
  }

  static navigationOptions = {
    header: null
  }

  

  render() {
    return (
      <View style={styleDangNhap.Container}>
        <StatusBar hidden={true} />
        {/* Waper Logo */}
        <View style={styleDangNhap.waperLogo}>
          <Image source={logo} style={styleDangNhap.logo} />
        </View>
        {/* Waper TextInput */}
        <View style={styleDangNhap.waperTextInput}>
          {/* <Text style ={styleDangNhap.textREGISTER}>REGISTER</Text> */}
          <TextInput placeholder={'Tên tài khoản'} style={styleDangNhap.textInput} underlineColorAndroid={'transparent'} />
          <TextInput placeholder={'Mật khẩu'} secureTextEntry={true} style={styleDangNhap.textInput} underlineColorAndroid={'transparent'} />
          <TouchableHighlight style={styleDangNhap.waperButton} onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={styleDangNhap.textDangNhapButton}>ĐĂNG NHẬP</Text>
          </TouchableHighlight>
          {/* TouchableOpacity */}
        </View>


      </View>
    )
  }
}

