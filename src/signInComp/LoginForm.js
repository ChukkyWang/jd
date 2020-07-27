import React from "react";
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
//import './signInComp/signIn.css';
import * as EmailValidator from "email-validator";
import * as Yup from "yup";



const LoginForm = () => {
    const formik = useFormik({
            initialValues: {
                email: '',
                password: '',
            },

            
            onSubmit: values => {
                console.log('form value', formik.values);
                window.location.href ="/Dashboard";
            },

            validate: value => {
                let errors = {}
                if(!value.email) {
                    errors.email= 'Your email is required to continue'
                }

                if(!value.password) {
                    errors.password= 'Your password is required to continue'
                }
               
                return errors
            },

            
          
    });

    

    //console.log('Visited fields', formik.touched)

        return (
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
                                                name="password"
                                                type="password"
                                                {...formik.getFieldProps('password')}
                                                required
                                                
                                            />
                                            {formik.touched.password && formik.errors.password ? <div className = "errorMessage">{formik.errors.password}</div> : null}
                                            <label htmlFor="email">Password</label>

                                            
                                </div>
                                <button type="submit" disabled={formik.isSubmitting}>
                                    Continue to Dashboard
                                </button>

                                <p className="recover">
                                <Link to= '/'>Recover Account</Link> Instead | <Link to= '/SignUp'>See our Offer</Link>
                                </p>
                        </form>


                        
                    
                    </div>
                );
 }

export default LoginForm;


       