import './Homestyles.css';
import {
    Link
  } from "react-router-dom";

function Home() {

    return (
        <div className= "Homepage">
            <div className="containerhome">
         <Fade left>       
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3></Fade>

            
                
               
                </div>
               <Fade right> <button className="buttonhome"><Link to="/Contact"><a>CONTACT</a></Link></button></Fade>
      
        </div>
    );

}
export default Home;