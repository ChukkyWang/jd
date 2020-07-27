import React from 'react';
//import logo from './logo.svg';
import LoginForm from './signInComp/LoginForm'
import './signInComp/signIn.css';

function SignInForm() {
  return (
    <div className="Dashboard">
        <section>
          <div className="allDashBoard">

              <div className="productDetails">
                <div className="productName">
                  <h2 className = "signIn">Sign In</h2>
                  <p className="subnote">Continue to Dashboard</p>
                </div>
                <div className="line"></div>
                <LoginForm />

                
              </div>

              <div className="FormProp">
              </div>


              

         
          </div>
        
        </section>
                      

    </div>
  );
}

export default SignInForm;