import './LeftColumnstyles.css';
import {
  Link
} from "react-router-dom";
import Fade from 'react-reveal/Fade';


function LeftColumn() {
    return (
      <div className="left-column">
        <div className="header">
          <Fade left><h1>Crew Chief</h1>
          <p>Superbike Tuning Software</p>
          <button className="buttonleft"><Link to="/Home"><a>EXPLORE</a></Link></button></Fade>
          </div>
      </div>
    );
  }

  export default LeftColumn;