import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    PermissionsAndroid,
    TouchableOpacity,
    Image,
} from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions'
import styles from '../styles/style'
import newStyles from '../styles/newStyle'
const GOOGLE_MAPS_APIKEY = 'AIzaSyCP-0ibKUZtY_wC4hkbUm5A47KybUQ9E-M';

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            region: {
                latitude: 21.0048697,
                longitude: 105.8429932,
                latitudeDelta: 0.01,
                longitudeDelta: 0.005,
            },
            markerTreeGreen: [
                { latitude: 21.005162, longitude: 105.844711 },
                { latitude: 21.004608, longitude: 105.844778 },
                { latitude: 21.004612, longitude: 105.845062 },
            ],
            markerTreeYellow: [
                { latitude: 21.005168, longitude: 105.844911 },
                { latitude: 21.004675, longitude: 105.844655 },
            ],
            markerTreeBlack: [
                { latitude: 21.005496, longitude: 105.844695 },
            ],
            markerWater: [
                { latitude: 21.004391, longitude: 105.845257 },
            ],
            statusBarHeight: 1,
            origin: { latitude: 21.0048697, longitude: 105.8429932 },
            destination: { latitude: 21.0048697, longitude: 105.8429932 },
        }
    }

    componentWillMount() {
        this.requestLocationPermission()
        setTimeout(() => this.setState({ statusBarHeight: 0 }), 200);
    }

    requestLocationPermission() {
        async function requestCameraPermission() {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                        'title': 'Cấp quyền truy cập vị trí',
                        'message': 'Để xác định chính xác vị trí của bạn, hãy cấp cho chũng tôi quyền tri cập vị trí'
                    }
                )
                console.log('granted la: ' + granted)
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log("Da cap quyen truy cap vi tri")
                } else {
                    console.log("quyen truy cap vi tri k dc cap")
                }
            } catch (err) {
                console.warn(err)
            }
        }
    }

    getLocalPosition() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    origin: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    }
                })
            }
            , (error) => {
                console.log(error)
            }
            , {
                enableHighAccuracy: true,
                timeout: 20000,
            })
    }

    renderTrees() {
        // navigator.product.push({ten:'tuan'})
        // console.log(navigator.product)
        trees = []
        for (marker of this.state.markerTreeGreen) {
            trees.push(
                <MapView.Marker
                    image={require('../icon/treeGreen.png')}
                    key={marker.latitude}
                    title={'Cây đủ nước'}
                    description={'Không cần tưới thêm'}
                    coordinate={marker}
                    onPress={e => {
                        console.log(e.nativeEvent)
                        this.setState({
                            destination: e.nativeEvent.coordinate
                        })
                        this.getLocalPosition()
                    }}
                />

            )
        }
        for (marker of this.state.markerTreeYellow) {
            trees.push(
                <MapView.Marker
                    image={require('../icon/treeYellow.png')}
                    key={marker.latitude}
                    title={'Cây thiếu nước'}
                    description={'Cần tưới 2 lít nước'}
                    coordinate={marker}
                    onPress={e => {
                        console.log(e.nativeEvent)
                        this.setState({
                            destination: e.nativeEvent.coordinate
                        })
                        this.getLocalPosition()
                    }
                    }
                />
            )
        }
        for (marker of this.state.markerTreeBlack) {
            trees.push(
                <MapView.Marker
                    image={require('../icon/treeBlack.png')}
                    key={marker.latitude}
                    title={'Cây đã chết'}
                    description={'Không cần tưới'}
                    coordinate={marker}

                    onPress={e => {
                        console.log(e.nativeEvent)
                        this.setState({
                            destination: e.nativeEvent.coordinate,
                        })
                        this.getLocalPosition()
                    }
                    }
                />
            )
        }
        for (marker of this.state.markerWater) {
            trees.push(
                <MapView.Marker
                    image={require('../icon/water.png')}
                    key={marker.latitude}
                    coordinate={marker}

                    onPress={e => {
                        console.log(e.nativeEvent)
                        this.setState({
                            destination: e.nativeEvent.coordinate,
                        })
                        this.getLocalPosition()
                    }
                    }
                />
            )
        }
        return trees
    }

    renderMapViewDirections() {
        return (
            <MapViewDirections
                origin={this.state.origin}
                destination={this.state.destination}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={3}
                strokeColor="hotpink"
                mode='walking'
            />
        )
    }

    renderViewHeader() {
        return (
            <View style={newStyles.viewHeader}>
                <View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                        <Image style={newStyles.imageLeft} source={require('../icon/menu.png')} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={newStyles.textRight}>TRANG CHÍNH</Text>
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={{ paddingTop: this.state.statusBarHeight, flex: 1 }}>
                {this.renderViewHeader()}

                <MapView
                    // toolbarEnabled = {true}
                    showsMyLocationButton={true}
                    showsUserLocation={true}
                    showsPointsOfInterest={false}
                    zoomControlEnabled={true}
                    initialRegion={this.state.region}
                    style={{ flex: 9 }}
                >
                    {this.renderTrees()}
                    {this.renderMapViewDirections()}

                </MapView>

            </View>
        )
    }
}

