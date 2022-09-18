import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


const navbar = (props) => {
    return (
        <nav className={`navbar navbar-expand-lg ${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/details">{props.about}</Link>
              </li>
    
    
            </ul>

          </div>
          <div className={`form-check form-switch d-flex text-${props.mode==='light'?'dark':'light'}`}>
  <input className="mx-2 form-check-input" onClick={props.darkmode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="mx-2 form-check-label" htmlFor="flexSwitchCheckDefault">Enable Blue Darkmode</label>
  <input className="mx-2 form-check-input" onClick={props.greenmode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="mx-2 form-check-label" htmlFor="flexSwitchCheckDefault">Enable Green Darkmode</label>
  <input className="mx-2 form-check-input" onClick={props.yellowmode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="mx-2 form-check-label" htmlFor="flexSwitchCheckDefault">Enable Yellow Darkmode</label>
  <input className="mx-2 form-check-input" onClick={props.redmode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="mx-2 form-check-label" htmlFor="flexSwitchCheckDefault">Enable Red Darkmode</label>
  
</div>
        </div>
      </nav>  
    );
}


navbar.propTypes = {title: PropTypes.string, about: PropTypes.string}; 
navbar.defaultProps = {
    title: 'Angular app',
    about:'ang about'
  };
export default navbar;