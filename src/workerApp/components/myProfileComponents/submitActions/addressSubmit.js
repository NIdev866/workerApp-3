import {SubmissionError} from 'redux-form'
import axios from 'axios'
import React, { Component } from 'react'
import { Route, Redirect } from 'react-router'


function AddressSubmit(values){

      //document.write(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)

      console.log('ONBLURSUBIT_WORKSS!')


	//axios.post(`http://localhost:3000/jobseeker/signup`, values)
		//.then(response => {
          //window.location.replace("/submittionSuccess");
	      //})
	    //.catch((err)=>{
        //window.location.replace("/submittionFailure");
	    //})
}


export default AddressSubmit