import React, {Component} from "react";
import ReactDOM from "react-dom";
import { Formik, Form, Field, useFormik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from 'react-router-dom';
import { queryByDisplayValue } from "@testing-library/react";
//import { useForm } from 'react-hook-form';
//import {useFormik} from 'formik';
//import SignUpMainForm from './signUpForm'

//import './signInComp/signIn.css';
//import * as EmailValidator from "email-validator";
//import * as Yup from "yup";
const UserBioDataSchema = Yup.object().shape({
  /*firstName: Yup.string()
    .min(2, "First Name should be two alphabets or more")
    .required("Required"),

  lastName: Yup.string()
    .min(2, "Last Name should be two alphabets or more")
  .required("Required"),*/


  //DoB: Yup.string().date.min(01-01-2002, "You must be 18 years to proceed").required("Date of Birth is Required"),

  BVNumber: Yup.string().min(14, "Bank Verification Number is Incomplete")
    .max(14, "Bank Verification Number is Incorrect")
    .required("Bank Verification Number is required"),

   
});







class UserBioData extends Component{
    
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render(){


        
        const { email, phone, check, firstName, lastName, DoB, BVNumber, handleChange} = this.props;
        return(
              <div className= "leftClass">
                        <p></p>
                        <Formik
                        onSubmit={this.continue} 
                        initialValues={{}}
                        validationSchema={UserBioDataSchema}
                        onSubmit={(values, { setSubmitting, isValidating }) => {
                              setTimeout(() => {
                                console.log(JSON.stringify(values, null, 2));
                                setSubmitting(true);
                              }, 400);
                              
                          } 
              
                        }
                        

                          
                        >
                                {({ touched, errors, getFieldProps, isSubmitting, handleChange }) => (<Form props={this.props}>
                                        
                                {/*<div className="userNames">
                                    <div className="firstName">   
                                        <Field
                                            //useRef = {register}
                                            name="firstName"
                                            type="name"
                                            value={firstName}
                                            onChange={handleChange('firstName')}
                                            {...getFieldProps('firstName')}
                                            
                                            //{...formik.getFieldProps('email')}
                                            required
                                        />
                                        <label htmlFor="firstName">First Name</label>
                                        {touched.firstName && errors.firstName ? <div className = "errorMessage">{errors.firstName}</div> : null}
                                    </div>
                                    <div className="lastName">
                                          <Field
                                          //useRef = {register}
                                          name="lastName"
                                          type="name"
                                          value={lastName}
                                          onChange={handleChange('lastName')}
                                          {...getFieldProps('lastName')}
                                          
                                          //{...formik.getFieldProps('email')}
                                          required
                                      />
                                      <label htmlFor="lastName">Last Name</label>
                                      {touched.lastName && errors.lastName ? <div className = "errorMessage">{errors.lastName}</div> : null}

                                    </div>
                                </div>
                                 

                                <div className="DateofBirth">
                                    <input  name="date"
                                            type="date" 
                                            id="start" 
                                            value={DoB}
                                            placeholder=" "
                                            onChange={handleChange('DoB')}
                                                {...getFieldProps('DoB')}
                                                required
                                          />
                                    <label htmlFor="start">Date of Birth</label>
                                    <p className="BVNinfo">Please ensure the birth date provided is same as what's captured at your bank. This is required for verification.</p>
                                    
                                </div>
                                */}
                                <div>
                                            <Field
                                                //useRef = {register}
                                                name="BVNumber"
                                                type="BVNumber"
                                                inputMode="numeric"
                                                value={BVNumber}
                                                helptext="Must be 8-20 characters and cannot contain special characters."
                                                onChange={handleChange('BVNumber')}
                                                {...getFieldProps('BVNumber')}
                                                required
                                                
                                            />
                                            <label htmlFor="BVNumber">Bank Verification Number</label>
                                            
                                            {touched.BVNumber && errors.BVNumber ? <div className = "errorMessage">{errors.BVNumber}</div> : null}
                                            
                                </div>

                                
                                <button type="submit" className="Next" onClick={this.continue} disabled={isSubmitting}>
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




export default UserBioData;
