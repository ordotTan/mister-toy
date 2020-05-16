import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
    
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
    };


    style = {
        width: '100%',
        height: '50%'
    }

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onMapClicked = (mapProps, map, clickEvent) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };

    render() {
        return (
            <Map
                style={this.style}
                initialCenter={this.props.loc}
                center={this.props.loc}
                zoom={13}
                google={this.props.google}
                onClick={this.onMapClicked}>
                <Marker
                    onClick={this.onMarkerClick}
                    name={this.props.name}
                    position={this.props.loc}
                    title={this.props.name}
                />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBPV258Flb5H4EElbHaNUYtZQCWnH3Y7J0')
})(MapContainer)