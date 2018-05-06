import React, { Component } from 'react'
import {
    Text,
    View,
} from 'react-native'

export default class LenLichTuoiCay extends Component {
    static navigationOptions = {
        title: 'Lịch tưới cây',
    };
    renderViewHeader() {
        return (
            <View style={styles.viewHeader}>
                <View style={styles.imageLeft}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image style={styles.imageLeft} source={require('../icon/back.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.textRight}>
                    <Text style={styles.textRight}>LỊCH TƯỚI CÂY</Text>
                </View>
            </View>
        )
    }
    render() {
        return (
            <View>
                {this.renderViewHeader()}
            </View>
        )
    }
}