import React, {Component} from "react";
import axios from "axios";
//import ReactDOM from "react-dom";
import { Formik, Form, Field, useFormik, ErrorMessage } from "formik";
import * as Yup from "yup";
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
  phone: Yup.string()
    .max(14, "Incorrect Phone Number")
    .required("Your Phone Number is required to continue")
});




class UserDetails extends Component{
    
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    

    render(){


        
        const { email, phone, handleChange, handleSubmit } = this.props;
        return(
              <div className= "leftClass">
                        <Formik
                        //onSubmit={this.continue} 
                        initialValues={{ email: "", phone: "" }}
                        validationSchema={LoginSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                              console.log(JSON.stringify(values, null, 2));
                              setSubmitting(true);
                            }, 400);
                            
                        } 
            
                      }
              
                        
                        >
                                {({ touched, errors, getFieldProps, isSubmitting, validateForm}) => (<Form>
                                        
                                <div>   
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
                                                name="phone"
                                                type="tel"
                                                value={phone}
                                                onChange={handleChange('phone')}
                                                {...getFieldProps('phone')}
                                                required
                                                
                                            />
                                            <label htmlFor="phone">Phone Number</label>
                                            {touched.phone && errors.phone ? <div className = "errorMessage">{errors.phone}</div> : null}
                                            
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
