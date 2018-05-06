import React, { Component } from 'react';
import {
    View,
    TouchableHighlight,
    Text,
} from 'react-native'
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 37.3318456, longitude: -122.0296002};
const GOOGLE_MAPS_APIKEY = 'AIzaSyCP-0ibKUZtY_wC4hkbUm5A47KybUQ9E-M';

export default class DemoRou extends Component{
    constructor(props){
        super(props)
        this.state={
            region: {
                latitude: 37.3318456,
                longitude: -122.0296002,
                latitudeDelta: 0.01,
                longitudeDelta: 0.005,
            },            
            markerTreeGreen: [
                {latitude: 21.0048697, longitude: 105.8429932},
            ],
            markerTreeYellow: [
                {latitude: 21.005, longitude: 105.8439932},
            ],
            markerTreeBlack: [
                {latitude: 21.0068697, longitude: 105.8449932},
            ],
            statusBarHeight: 1,
        }        
    }

    render(){
        return(
            <View style = {{flex: 1}}>
                <View style = {{flex: 8}}>
                    <MapView style = {{flex: 1}} initialRegion = {this.state.region}>
                        <MapViewDirections 
                            origin={origin}
                            destination={destination}
                            apikey={GOOGLE_MAPS_APIKEY}
                            strokeWidth={3}
                            strokeColor="hotpink"
                            mode='walking'
                        />
                        
                    </MapView>
                </View>
                <View style={{flex: 1}}>
                            <TouchableHighlight style={{alignItems: 'center',
                                justifyContent: 'center',
                                height: 40,
                                width: 80,
                                padding: 10,
                                marginBottom: 20,
                                marginLeft: 250,
                                backgroundColor: 'rgba(226,39,44,1)'}}
                                >
                                <Text>Chi duong</Text>
                            </TouchableHighlight>
                    </View>
                
            </View>
        )
    }
}