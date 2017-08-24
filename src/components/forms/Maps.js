import React, { Component } from "react"
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import _ from "lodash";

class Map extends Component {

  render(){

    const allMarkers = [
      ...this.props.workMarkers, this.props.userMarker
    ]

    const mappedMarkers = allMarkers.map((venue, i) => {
      const marker = {
        position: {
          lat: venue.position.lat,
          lng: venue.position.lng
        }
      }
      return (
        <Marker 
          key={i} 
          {...marker} 
        />
      )
    })
    return(
      <GoogleMap
        defaultZoom={this.props.zoom}
        defaultCenter={this.props.center}
        onMarkerClick={_.noop}
        options={{streetViewControl: false, mapTypeControl: false,}}>
        {mappedMarkers}
      </GoogleMap>
    )
  }
}

export default withGoogleMap(Map)