import React from 'react';
import Home from'./Home';
import Signup from './Signup';
import SignIn from './SignIn';
import Dashboard from './Dashboard'
//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';




function App() {
  return (
    
    <Router>
    
    <div className="App">
    
        <header>
            <h1>
              JD
            </h1>

        </header>
        
        <Route path="/Dashboard" component={Dashboard}/>

        <div className="mainMainClass">
        
              <main className="mainClass">         
                      <Switch>
                          
                          <Route path="/" exact component={Home}/>
                      
                          <Route path="/Signup" component={Signup}/>

                          <Route path="/SignIn" component={SignIn}/>

                          

                      </Switch>

              </main>

        </div>

        <div className= "MiL">
                
                  <p>
                    Made with  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-heart-fill" fill="#26a65b" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                  </svg> in Lagos
                  </p>
                  
                  <h6>Contact our Support    |    Privacy Terms</h6>
          </div>

        
    </div>

    </Router>


    
  );
  
}



export default App;
