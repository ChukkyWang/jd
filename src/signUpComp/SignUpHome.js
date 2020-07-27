import React, {Component} from "react";
import UserDetails from './contactDetails';
import VerifyEmail from './verifyEmail';
import UserBioData from './UserBioData'
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
        firstName: '',
        lastName:'',
        DoB: '',
        BVNumber: '',

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
        
        const {step, email, phone, confirmCode, firstName, lastName, DoB, BVNumber} = this.state;
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
                    //prevStep = {this.prevStep}
                    handleChange = {this.handleChange}
                    email={email}  
                    confirmCode={confirmCode}
                     
                />);

        if(step === 3)
                return (<UserBioData
                    nextStep = {this.nextStep} 
                    prevStep = {this.prevStep}
                    handleChange = {this.handleChange}
                    firstName={firstName}  
                    lastName={lastName}
                    DoB={DoB}
                    BVNumber={BVNumber}
                     
                />);

    }

    render(){
        const {step} = this.state;

        return(
            <div>
                {this.showStep()}
        {/*<h5>Step {step} of 3</h5>*/}
            </div>
        );
    }

}

export default CreateForm
