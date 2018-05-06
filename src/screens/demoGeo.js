import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
} from 'react-native';

import MapView from 'react-native-maps';

export default class DemoGeo extends Component{
    constructor(props){
        super(props)
        this.state={
            region: {
                latitude: 21.0048697,
                longitude: 105.8429932,
                latitudeDelta: 0.01,
                longitudeDelta: 0.005,
            },
            markers: {
                latitude: 21.0048697,
                longitude: 105.8429932,
            },
            statusBarHeight: 1,
        }
    }

    requestLocationPermission(){
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

    componentWillMount(){
        this.requestLocationPermission()
        setTimeout(()=>this.setState({statusBarHeight: 0}),500);
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position)
                this.setState({
                    region: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.005,
                    },
                    markers: {  
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    }
                })
            }
            ,(error) => {
                console.log(error)
            }
            ,{
                enableHighAccuracy: true,
                timeout: 20000,
                
            })
    }

    render() {
        return(
            <View style = {{paddingTop: this.state.statusBarHeight, flex: 1 }}>
                
                <MapView 
                    // toolbarEnabled = {true}
                    showsMyLocationButton = {true}
                    showsUserLocation = {true}
                    showsPointsOfInterest = {false}
                    zoomControlEnabled = {true}

                    
                    initialRegion = {this.state.region} 
                    style = {{flex:1}}
                >
                    <MapView.Marker image = {require('../icon/tree.png')} coordinate = {this.state.markers}/>
                    

                </MapView>

            </View>
        )
    }
}

// export async function requestLocationPermission() {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         {
//           'title': 'ACCESS_FINE_LOCATION',
//           'message': 'PERMISSIONS.ACCESS_FINE_LOCATION'
//         }
//       )
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         console.log("You can use the app")
//       } else {
//         console.log("ACCESS_FINE_LOCATION permission denied")
//       }
//     } catch (err) {
//       console.warn(err)
//     }
//   }