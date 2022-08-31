import React, {Link} from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import logo from "../images/icon_app.png";

function Login() {
  return (
    <body>
        <nav className="navbar sticky-top navbar-dark bg-dark navbar-expand-lg">
          <a className="navbar-brand" href="#">
            <img src={logo} className="logo" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                
                <a className="nav-link" ><Link to={'/'}>Home</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Explore
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Login
                </a>
              </li>

              <li className="nav-item farRight">
                <button className="btn btn-primary btnSignup"><Link to={"/Register"}>Sign up</Link></button>
              </li>
                   
              <li className="nav-item">
                <button className="btn btn-primary ml-2 btnRequest"><Link to={"/Login"}>Request a Demo</Link>
                  
                </button>
              </li>

             
            </ul>
          </div>
        </nav>

      <div className="container registration">
        <form>
            <h5 className="title ">SIGN IN</h5>
            <div className="form-row">
                <div className="form-group col-md-12">
                    <input type='text' placeholder="Enter Your Email" className="form-control"/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-12">
                    <input type='text' placeholder="Enter Your Password" className="form-control"/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-12">
                    <button className="btn btn-primary logButton"><Link to={"/Home"}>Sign In</Link></button>
                    
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-12">
                    <p className="account">Forgot Password?</p>
                    <p className="account">Dont have an Account?<span><Link to='/Register'>Click here</Link></span></p>
                </div>
            </div>
        </form>
      </div>
      {/* <div className="empty">
        {An empty div tag before the registration form }
      </div> */}
      
      <footer className="my-footer pt-4">
          
          <div className="futer">
            <div className="row">
            <div className="col-md-4">
              <div className="col-sm-4 pb-3 social">
            <a href="https://www.facebook.com/">
              <BsFacebook size={40} />
            </a>
            <a href="https://twitter.com/">
              <FaTwitter size={40} />
            </a>
          </div>
              </div>
              <div className="col-md-4 social">
              <ul>
              <li className="footer-item">
                <a className="footer-link" href="#">
                  Contact Us
                </a>
              </li>
              <li className="footer-item">
                <a className="footer-link" href="#">
                  About Us
                </a>
              </li>
              <li className="footer-item">
                <a className="footer-link" href="#">
                  Mission
                </a>
              </li>
              <li className="footer-item">
                <a className="footer-link" href="#">
                  FAQ
                </a>
              </li>
            </ul>

              </div>
              <div className="col-md-4 social">
              <ul>
              <li className="footer-item">
                <a className="footer-link" href="#">
                  Services
                </a>
              </li>
              <li className="footer-item">
                <a className="footer-link" href="#">
                  Privacy
                </a>
              </li>
              <li className="footer-item">
                <a className="footer-link" href="#">
                  Contacts
                </a>
              </li>
              <li className="footer-item">
                <a className="footer-link" href="#">
                  Terms
                </a>
              </li>
            </ul>

              </div>
            </div>
            </div>
        </footer>
    </body>
  )
}

export default Login