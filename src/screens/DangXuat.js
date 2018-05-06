import React, { Component } from 'react'
import {
    View
} from 'react-native'
import { StackNavigator } from 'react-navigation';



export default class DangXuat extends Component{

    static navigationOptions = {
        title: 'Đăng xuất',
    };

    // returnDangNhapScreen(){
    //     () => this.props.navigation.navigate('DangNhap')
    // }
    componentWillMount() {
        this.props.navigation.navigate('DangNhap')
    }
    render(){
        return(
            <View></View>
            
        )
    }


}
