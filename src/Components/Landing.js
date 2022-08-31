import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import logo from "../images/icon_app.png";
import firstSlide from "../images/picture.jpg";
import thirdSlide from "../images/pic.jpg";
import "../Components/Landing.css";
import LetsTalk from "../images/LetsTalk_Branding-06.png";

function Landing() {
  return (
    <div>
      <body className="cell">
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
                   <span className="sr-only">(current)</span>
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
                <a className="nav-link"><Link to={"/Login"}>Login</Link></a> 
                  
                
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

        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src={firstSlide}
                className="d-block w-100 carousel-sliders"
                alt="First slide"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5 className="display-3 welcome pt-3">
                  Let's Talk Citizens
                </h5>
                <p className="welcome-para">
                   We improve trust between Citizens and Municipalities
                </p>
                <div className="carousel-buttons">
                  <button className="btn btn-primary">Read More</button>
                </div>
              </div>
            </div>
            {/* <div class="carousel-item">
              <img
                src={secondSlide}
                className="d-block w-100 carousel-sliders"
                alt="Second slide"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>...</h5>
                <p>...</p>
              </div>
            </div> */}
            <div class="carousel-item">
              <img
                src={thirdSlide}
                className="d-block w-100 carousel-sliders"
                alt="Third slide"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>...</h5>
                <p>...</p>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="
            #carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="container-fluid content">
              <div className="row">
                    <div className="col-md-6">
                     <img
                     className="picture"
                      src={LetsTalk} alt='' />

                    </div>
                    <div className="col-md-6">
                    <h2></h2>

                    </div>
              </div>
            </div>
          </div>
        </div>

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
    </div>
  );
}

export default Landing;
