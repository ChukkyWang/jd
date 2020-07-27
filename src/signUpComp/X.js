import React, {Component} from "react";
import UserDetails from './contactDetails';
import VerifyEmail from './verifyEmail';
//import { useFormik } from 'formik';
//import { Link } from 'react-router-dom';
//import './signInComp/signIn.css';
//import * as EmailValidator from "email-validator";
//import * as Yup from "yup";


class CreateForm extends Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    state = {
        step: 1,

        //Step 1,
        email: '',
        phone: '',

        //Step 2
        confirmEmail: '',

        //step 3
        VerifiyIdentify: ''

    }

    //Move to Next Step 
    nextStep = () =>{
        const {step} = this.state;

        this.setState({
            step: step + 1
        });
    }


    //Move to Previous Step
    prevStep = () =>{
        const {step} = this.state;

        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        this.setState ({[input]: e.target.value})
    }

    //Show Present Step
    showStep = () => {
        
        const {step, email, phone, confirmCode} = this.state;
        if (step === 1)
            return (
                <UserDetails 
                    handleChange={this.handleChange}
                    nextStep = {this.nextStep}
                    email={email} 
                    phone={phone} 
                
                />);

        if(step === 2)
                return (<VerifyEmail 
                    nextStep = {this.nextStep} 
                    prevStep = {this.prevStep}
                    handleChange = {this.handleChange}
                    email={email}  
                    confirmCode={confirmCode}
                     
                />);

    }

    render(){
        const {step} = this.state;

        return(
            <div>
                {this.showStep()}
                <h5>Step {step} of 3</h5>
            </div>
        );
    }

}

export default CreateForm
































import { Box, Button, Card, CardContent, CircularProgress, Grid, Step, StepLabel, Stepper } from '@material-ui/core';
import { Field, Form, Formik, FormikConfig, FormikValues } from 'formik';
import { CheckboxWithLabel, TextField } from 'formik-material-ui';
import React, { useState } from 'react';
import { mixed, number, object } from 'yup';


export default function Home() {
    const formik = useFormik({
        initialValues: {
          email: '',
        },
  return (
    
            <div className ="leftClass">           
                <Form>  
                        <div>   
                                <input
                                    name="email"
                                    type="text"
                                    required
                                />
                                <label htmlFor="email">Email</label>
                        </div>
                        

                        <div>
                                    <input
                                        name="phone"
                                        type="phone"
                                        required
                                        
                                    />
                                    <label htmlFor="phone">Phone Number</label>

                                    
                        </div>
                        <button type="submit">
                            Proceed
                        </button>

                        


                        <div>
                                <p>We just sent a verification code to the email address your provide, <b>email</b>. Enter the code to continue.</p>
                                
                                <div>
                                    <input
                                        name="verify"
                                        type="text"
                                        placeholder = "Verification Code"
                                        //{...formik.getFieldProps('phone')}
                                        required
                                    />
                                </div>

                                

                                <button className="Back">
                                    Verify Email
                                </button>
                        </div>

                    {/*<Field fullWidth name="firstName" component={TextField} label="First Name" />
                    <Field fullWidth name="lastName" component={TextField} label="Last Name" />
                    <Field name="millionaire" type="checkbox" component={CheckboxWithLabel} Label={{ label: 'I am a millionaire' }}/>
                    <Field fullWidth name="money" type="number" component={TextField} label="All the money I have"/>
                    <Field fullWidth name="description" component={TextField} label="Description" />*/}
                </Form>
            </div>
    

)

