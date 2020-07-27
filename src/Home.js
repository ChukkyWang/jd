import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="mainHome">

          
          
          
          <h2>Welcome to the Homepage of JD</h2>
          <p>This homepage is under construction. You can create and manage your dashboard from <Link to='/Signup'>here</Link>.</p>

          <p className="SignInLink">
          <Link to= '/SignIn'>Sign In</Link> instead         
          </p>
    
    
    </div>
            
            
    
    

  );
}

export default Home;






