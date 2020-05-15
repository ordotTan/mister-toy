import React, { Component } from 'react'
import MapContainer from '../cmps/MapContainer'



export default class About extends Component {
    state = {
        name: '',
        loc: {}
    }

    setLocation = (city) => {
        let loc = {}
        let name = ''
        if (city === 'tlv') {
            loc = { lat: 32.0853, lng: 34.7818 }
            name = 'Tel Aviv'
        }
        if (city === 'london') {
            loc = { lat: 51.5074, lng: -0.1278 }
            name = 'London'
        }
        if (city === 'tokyo') {
            loc = { lat: 35.6762, lng: 139.6503 }
            name = 'Tokyo'
        }
        this.setState(() => {
            return {
                name,
                loc
            }
        })
    }

    render() {
        return (
            <div>
                <h2>Where do you want to get your toy from?</h2>
                <button onClick={() => { this.setLocation('tlv') }}>Tel-Aviv</button>
                <button onClick={() => { this.setLocation('london') }}>London</button>
                <button onClick={() => { this.setLocation('tokyo') }}>Tokyo</button>
                {this.state.name && <MapContainer loc={this.state.loc} name={this.state.name} />}
            </div>
        )
    }
}
