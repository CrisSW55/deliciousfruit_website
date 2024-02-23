import {
  Router,
  Routes,
  Route
} from "react-router-dom";

import { Link } from 'react-router-dom';
import HomePage from './homepage';
import AboutPage from './aboutpage';
import SignIn from './sign_in';
import SignUp from './sign_up';



export default function NavBar2(){
    return(
      <>
      
        <div class="navbar">
         <Link to="/">Home</Link>
         <Link to="/about">About</Link>
        <div class="dropdown">
        {/* <button class="dropbtn"></button> */}
            <Link to="/signin">
                Hello, Sign In!
                <i class="fa fa-caret-down"></i>
            </Link> 
        
          
            
         
          <div class="dropdown-content">
            <Link to="/signin">SignIn</Link>
            <Link to="/signup">SignUp</Link>
          </div>
        </div> 
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}/>  
        <Route path="/about" element={<AboutPage />} />
        <Route path="/signin" element={<SignIn />} />
         <Route path="/signup" element={<SignUp />} />
      </Routes>
     
  
      
      </>
      


    );





}