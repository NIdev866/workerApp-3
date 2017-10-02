import React, { Component } from "react"
import Paper from 'material-ui/Paper';
import AddressComponent from './myProfileComponents/addressComponent'
import BankDetailsComponent from './myProfileComponents/bankDetailsComponent'
import TaxComponent from './myProfileComponents/taxComponent'
import PersonalDetailsComponent from './myProfileComponents/personalDetailsComponent'


class MyProfileParent extends Component{
  render(){
    const style = {
      height: 'calc(50vh - 45px)',
      width: "calc(50% - 40px)",
      margin: '10px 20px',
      textAlign: 'center',
      display: 'inline-block',
      position: 'relative',
      overflow: 'hidden'
    };

    return(
      <div style={{overflow: 'hidden', margin: '0', width: '100vw', height: 'calc(100vh - 45px'}}>
        <div>
          <Paper style={style} zDepth={2} rounded={false}>
            <PersonalDetailsComponent />
          </Paper>        
          <Paper style={style} zDepth={2} rounded={false}>
            <AddressComponent />
          </Paper>        
        </div>        
        <div>
          <Paper style={style} zDepth={2} rounded={false}>
            <BankDetailsComponent />
          </Paper>        
          <Paper style={style} zDepth={2} rounded={false}>
            <TaxComponent />
          </Paper>        
        </div>
      </div>
    )
  }
}

export default MyProfileParent
