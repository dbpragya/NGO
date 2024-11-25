import NewLogo from "../assets/images/New Logo with Tagline (3).png";
import menuImg from "../assets/images/menu.svg";
import loveImg from "../assets/images/love.svg";
import { Link } from 'react-router-dom';

function Headers() {
  return (
    <>
    <header id="header">
      <div class="nav-wrapper">
        <nav class="navbar navbar-expand-lg"
          aria-label="Offcanvas navbar large">
          <div class="container">
            <a class="navbar-brand" href="/rightway/"><img
                src={NewLogo} alt="logo"
                height="70px"></img></a>
            <button class="navbar-toggler" type="button"
              data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2"
              aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
              <span><img src={menuImg} height="24px" alt="menn"></img></span>
            </button>
            <div class="offcanvas offcanvas-end text-bg-light" tabindex="-1"
              id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title"
                  id="offcanvasNavbar2Label">Menu</h5>
                <button type="button" class="btn-close btn-close-dark"
                  data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                <ul class="navbar-nav nav-gap" id="myDIV">
                  <li class="nav-item">
                  <Link className="nav-link head-hov" to="/">Home</Link>
                  </li>
                  <li class="nav-item">
                  <Link className="nav-link head-hov" to="/about">About Us</Link>
                  </li>
                  <li class="nav-item">
                    <Link className="nav-link head-hov" to="/whatwedo">What We Do</Link>
                  </li>
                  <li class="nav-item">
                    <Link className="nav-link head-hov" to="/gallery">Gallery</Link>
                  </li>
                  <li class="nav-item">
                    <Link className="nav-link head-hov" to="/campaign">Campaign</Link>
                  </li> 
                  <li class="nav-item">
                    <Link className="nav-link head-hov" to="/connect">Connect</Link>
                  </li>
                </ul>
                <div class="search-box d-flex mt-3 mt-lg-0 second-nav gap-4">
            
                <div className="search-box d-flex mt-3 mt-lg-0 second-nav gap-4">
                  <Link className="nav-btn" to="/donate">
                    Donate <img src={loveImg} alt="" height="17" />
                  </Link>
                </div>
                
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

    </header>
    </>
  )
}

export default Headers
