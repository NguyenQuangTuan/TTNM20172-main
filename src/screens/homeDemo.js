import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';


export default class Home extends React.Component {

    constructor(props){
        super(props)
        arrayMarker = [
            {
                latitude: 21.0048697,
                longitude: 105.8429932,
            }
        ]
        this.state={
            region: {
                latitude: 21.0048697,
                longitude: 105.8429932,
                latitudeDelta: 0.01,
                longitudeDelta: 0.005,
            },
            markers: arrayMarker, 
        }
    }

    onPress(data){
        let latitude = data.nativeEvent.coordinate.latitude
        let longitude = data.nativeEvent.coordinate.longitude
        arrayMarker.push({
            latitude: latitude,
            longitude: longitude,
        })
        this.setState({markers: arrayMarker})
    }

    renderMarkers(){
        markers = []
        for (marker of this.state.markers){
            markers.push(
                <MapView.Marker key = {marker.latitude} title = {'Toi o day' + marker.latitude} 
                    description = {'La la la'} 
                    coordinate = {marker}/>
            )
        }
        return markers
    }

    render() {
      return (
        <View style={{flex:1}}>
            <MapView 
                initialRegion = {this.state.region} 
                style = {{flex:1}}
                onPress = {this.onPress.bind(this)}
            >         
                
                {this.renderMarkers()}
            </MapView>
        </View>
      )
    }
  }
  