import React, { Component } from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native'
import styles from '../styles/style';
import newStyles from '../styles/newStyle'

export default class LichSu extends Component {
    static navigationOptions = {
        title: 'HDSD phần mềm',
    };
    renderViewHeader() {
        return (
            <View style={newStyles.viewHeader}>
                <View>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image style={newStyles.imageLeft} source={require('../icon/back.png')} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={newStyles.textRight}>HDSD PHẦN MỀM</Text>
                </View>
            </View>
        )
    }
    render() {
        return (
            <View style={{flex: 1}}>
                {this.renderViewHeader()}
                <View style={{flex: 9}}></View>
            </View>
        )
    }
}