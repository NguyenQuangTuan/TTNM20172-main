import React, { Component } from 'react'
import {
    Text,
    View,
    // Button,
    Image,
    StatusBar,
    TouchableHighlight,
    ImageBackground,
    ListView,
    TouchableOpacity
} from 'react-native'
import { StackNavigator } from 'react-navigation';
import styles from '../styles/style';
import newStyles from '../styles/newStyle'

export default class ThongBao extends Component {
    constructor(proqs) {
        super(proqs)

        data = [
            {
                image: 'https://goo.gl/xrrHH9',
                title: 'THÔNG BÁO THỨ 1',
                content: 'Nội dung thông báo thứ 1'
            },
            {
                image: 'https://goo.gl/xrrHH9',
                title: 'THÔNG BÁO THỨ 2',
                content: 'Nội dung thông báo thứ 2'
            },
            {
                image: 'https://goo.gl/xrrHH9',
                title: 'THÔNG BÁO THỨ 3',
                content: 'Nội dung thông báo thứ 3'
            },
        ]
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

        this.state = {
            dataSource: ds.cloneWithRows(data)
        }

    }

    static navigationOptions = {
        title: 'Thông báo',
    };

    renderlist(dataSource) {
        return (
            <View style={styles.containerListTB}>
                <Image source={{ uri: dataSource.image }} style={styles.imageTB} />
                <View style={styles.waperContainerTB}>
                    <Text style={styles.titleTB}>{dataSource.title}</Text>
                    <Text style={styles.contentTB}>{dataSource.content}</Text>
                </View>
            </View>
        )
    }

    renderListView() {
        return (
            <View style={{flex: 9}}>
                <ListView dataSource={this.state.dataSource} renderRow={this.renderlist.bind(this)} />
            </View>
        )
    }
    renderViewHeader() {
        return (
            <View style={newStyles.viewHeader}>
                <View>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image style={newStyles.imageLeft} source={require('../icon/back.png')} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={newStyles.textRight}>THÔNG BÁO</Text>
                </View>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                
                {this.renderViewHeader()}
                {this.renderListView()}
            </View>
        )
    }
}