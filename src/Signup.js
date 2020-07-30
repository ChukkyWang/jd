import React from 'react';
import { Link } from 'react-router-dom';
//import logo from './logo.svg';
import './signInComp/signIn.css'
//import './signUpComp/signUp.css';
import CreateForm from './signUpComp/SignUpHome';
import UserDetails from './signUpComp/contactDetails';
import verifyEmail from './signUpComp/verifyEmail';
import UserBioData from './signUpComp/UserBioData';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function SignUpForm() {
  return (
  
            <div className="Dashboard">
            <section>
              <div className="allDashBoard">

                  
                      <div className="productDetails">
                        <Router>
                                <div className="productName">
                                <p>Package</p>
                                <h2 className = "signIn">JD Benefit Plan</h2>
                              </div>
                              <div className="line"></div>
                                    <Switch>
                                        <Route path="/Signup/" exact component={UserDetails}/>
                                        <Route path="/Signup/verifyEmail" component={verifyEmail}/>
                                        <Route path="/Signup/BVNPage" component={UserBioData}/>
                                    </Switch>
                            

                          </Router> 
                              
                              <p className="recover">
                                      <Link to= '/SignIn'>Log In</Link> Instead | <Link to= '/'>See our Offer</Link>
                              </p>
                                              
                        
                             
                      </div>

                  
                  
                  <div className="productPay">
                      {/*<svg width="1.8em" height="1.8em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
                        <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
                  </svg>*/}
                  </div>

              
              </div>
            
            </section>
                  

  </div>
    
    
    );

}

export default SignUpForm;