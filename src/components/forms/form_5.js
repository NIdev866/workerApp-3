import React, { Component } from "react"
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import Maps from "./Maps"
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import RaisedButton from 'material-ui/RaisedButton'
import styles from './form_material_styles'
import { Grid, Row, Col } from 'react-flexbox-grid';
import MapsAutocomplete from "./mapsAutocomplete"

class FormFive extends Component {

  constructor(props){
    super(props)

    this.state = {
      markerOn: false,
      workMarkers: [
        {
          position: {   //UB6-8UH, ADD EXTRA TO THIS ARRAY
            lat: 51.54318,
            lng: -0.359016
          }
        }
      ]
    }
  }

  render(){

    const inputStyling = {
      position: "absolute", 
      top: "80", 
      marginLeft: "4"
    }

    const { handleSubmit, previousPage } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <Row style={{height: 360}}>
          <Field 
            workMarkers={this.state.workMarkers}
            userMarker={this.props.userMarker}
            component={Maps} 
            zoom={8}
            center={{ lat: 51.537452, lng: -0.497681}} //VIEW BOX ONLY
            containerElement={<div style={{height: 100+"%"}} />}
            mapElement={<div style={{height: 100+"%"}} />}
          />
        <div style={inputStyling}>
          <Field 
            name="address"
            type="text"
            component={MapsAutocomplete}
            updateMarker={this.props.updateMarker} //CAN DEFFO PASS TO FIELD!!
          />
        </div>
      </Row>
      <Row center="xs">
        <Col xs={12} sm={6} md={3} lg={5}>
          <RaisedButton
            type="button"
            label="Prev"
            primary={true}
            onClick={previousPage}
            style={styles.raisedButtonStyle}
          />
          <RaisedButton
            type="submit"
            label="Next"
            primary={true}
            style={styles.raisedButtonStyle}
          />
        </Col>
      </Row>
    </form>
  )}
}

export default reduxForm({
  form: 'wizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(FormFive)
