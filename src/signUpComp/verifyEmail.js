import React, { Component } from 'react';

class VerifyEmail extends Component {
    //continue = e => {
        //e.preventDefault();
        //this.props.nextStep();
    //}

    
    //back = e => {
     //   e.preventDefault();
       // this.props.prevStep();
    //}
    render(){
        const { email } = this.props;
        return(
            <div className="verifyEmailClass">
                <p>We just sent a verification code to the email address you provided, <b>{email}</b>. Enter the code to continue.</p>
                
                <div>
                    <input
                        name="verify"
                        type="text"
                        placeholder = "Verification Code"
                        //onChange={handleChange('email')}
                        //{...formik.getFieldProps('phone')}
                        required
                    />
                </div>

                

                <button className="Back" onClick={window.location.href=('/BVNPage')}>
                    Verify Email
                </button>
            </div>
        );
    }
}

export default VerifyEmail;