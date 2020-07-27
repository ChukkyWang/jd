import React, {Component} from "react";
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { render } from "react-dom";
//import './signInComp/signIn.css';
//import * as EmailValidator from "email-validator";
//import * as Yup from "yup";





function SignUpMainForm() {
    function continue (e) {
            e.preventDefault();
            this.nextStep();
          };
    
    const formik = useFormik({
        initialValues: {
            email: '',
            phone: '',
        },

        
        onSubmit: values => {
            console.log('form value', formik.values);
            //window.location.href ="/SignUpForm2";
        
        },



        validate: value => {
            let errors = {}
            if(!value.email) {
                errors.email= 'Your email is required to continue'
            }

            if(!value.phone) {
                errors.phone = 'Your phone number is required to continue'
            }
           
            return errors
        },

    });
    


    return(
        <div className= "leftClass">
                                
                    
                        <form onSubmit={formik.handleSubmit}>
                                
                                <div>   
                                        <input
                                            name="email"
                                            type="text"
                                            {...formik.getFieldProps('email')}
                                            required
                                        />
                                     
                                        
                                        {formik.touched.email && formik.errors.email ? <div className = "errorMessage">{formik.errors.email}</div> : null}
                                        <label htmlFor="email">Email</label>
                                
                                </div>
                                

                                <div>
                                            <input
                                                name="phone"
                                                type="phone"
                                                {...formik.getFieldProps('phone')}
                                                required
                                                
                                            />
                                            {formik.touched.phone && formik.errors.phone ? <div className = "errorMessage">{formik.errors.phone}</div> : null}
                                            <label htmlFor="phone">Phone Number</label>

                                            
                                </div>
                                <button type="submit" onClick={continue} disabled={formik.isSubmitting}>
                                    Proceed
                                </button>

                                <p className="recover">
                                <Link to= '/SignIn'>Log In</Link> Instead | <Link to= '/'>See our Offer</Link>
                                </p>
                        </form>


                        
                    
                    </div>
    )


    };

export default SignUpMainForm;
