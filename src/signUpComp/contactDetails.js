import React, {Component} from "react";
import axios from "axios";
//import ReactDOM from "react-dom";
import { Formik, Form, Field, useFormik, ErrorMessage } from "formik";
import * as Yup from "yup";
import verifyEmail from "./verifyEmail"
//import { Link } from 'react-router-dom';
//import { queryByDisplayValue } from "@testing-library/react";
//import { useForm } from 'react-hook-form';
//import {useFormik} from 'formik';
//import SignUpMainForm from './signUpForm'

//import './signInComp/signIn.css';
//import * as EmailValidator from "email-validator";
//import * as Yup from "yup";
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Your Email is required to continue"),
  phone_number: Yup.string()
    .max(14, "Incorrect Phone Number")
    .required("Your Phone Number is required to continue")
});




class UserDetails extends Component{
    
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    

    render(){


        
        const { email, phone_number, handleChange } = this.props;
        return(
              <div className= "leftClass">
                        <Formik
                        //onSubmit={this.continue} 
                        initialValues={{ email: "", phone_number: "" }}
                        validationSchema={LoginSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            axios.post('https://jd-backend.herokuapp.com/api/v1/register', values, {
                                headers: {
                                    'Content-Type': 'application/json;charset=UTF-8'
                                }
                            })
                                .then(response => {
                                    console.log(response)
                                })
                                .catch(error => {
                                    console.log(error.response)
                                });
                            setTimeout(() => {
                              /* console.log(JSON.stringify(values, null, 2)); */
                              //window.location.href=('Signup/verifyEmail');
                              setSubmitting(true);
                            }, 1000);                         
                        }
            
                      }
                       
                        
                        >
                                {({ error, response, touched, errors, getFieldProps, isSubmitting, handleChange, validateForm}) => (<Form>
                                        
                                <div> 
                                
                                <p>{response.data.message}</p>
                                        <Field
                                            
                                            name="email"
                                            type="email"
                                            value={email}
                                            onChange={handleChange('email')}
                                            {...getFieldProps('email')}
                                            required
                                        />
                                        <label htmlFor="email">Email</label>
                                        {touched.email && errors.email ? <div className = "errorMessage">{errors.email}</div> : null}
                                
                                </div>
                                

                                <div>
                                            <Field
                                                //useRef = {register}
                                                name="phone_number"
                                                type="tel"
                                                value={phone_number}
                                                onChange={handleChange('phone_number')}
                                                {...getFieldProps('phone_number')}
                                                required
                                                
                                            />
                                            <label htmlFor="phone_number">Phone Number</label>
                                            {touched.phone_number && errors.phone_number ? <div className = "errorMessage">{errors.phone_number}</div> : null}
                                            
                                </div>
                                <button type="submit" className="Next" disabled={isSubmitting}>
                                    {isSubmitting ? "Sending Verification Code..." : "Proceed"}
                                </button>

                                {/*<p className="recover">
                                <Link to= '/SignIn'>Log In</Link> Instead | <Link to= '/'>See our Offer</Link>
                                </p>*/}
                            </Form>)}

                        </Formik>
              </div> 
                
        )
    }
}




export default UserDetails;
