import React, { useEffect, useState } from 'react';
import logoImg from "../assets/images/New Logo with Tagline (3).png";
import facebookImg from "../assets/images/ant-design_facebook-filled.svg";
import icon from "../assets/images/iconoir_x.svg";
import phoneFill from "../assets/images/phone-fill.svg";
import mailFill from "../assets/images/mail-fill.svg";
import mapFill from "../assets/images/map-pin-fill.svg";
import antInstaDesign from "../assets/images/ant-design_instagram-filled.svg";
import linkedInLogo from "../assets/images/logos_linkedin-icon.svg";
import antDesignYoutube from "../assets/images/ant-design_youtube-filled.svg";

function Footer() {
  const [showScrollToTopBtn, setShowScrollToTopBtn] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollToTopBtn(true);
    } else {
      setShowScrollToTopBtn(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[]);

  return (
    <>
      <div className="footer-wrap">
        <div className="container">
          <footer className="pt-5">
            <div className="row justify-content-between">
              <div className="col-lg-3 col-md-12 mb-3">
                <a href="/">
                  <img src={logoImg} alt="Rightway Charitable Foundation Logo" height="70" />
                </a>
                <p className="my-3 foot-text" style={{ lineHeight: '25px' }}>
                  Rightway Charitable Foundation is a voluntary charitable organisation based in India, with its area of operation in the state of India.
                </p>
              </div>

              <div className="col-lg-2 col-md-4 col-sm-4 mb-3">
                <h5 className="footer-head">Company</h5>
                <ul className="nav flex-column">
                  <li className="nav-item foot-text"><a href="/" className="nav-link p-0">Home</a></li>
                  <li className="nav-item foot-text"><a href="/about" className="nav-link p-0">About Us</a></li>
                  <li className="nav-item foot-text"><a href="/stories" className="nav-link p-0">Our Impact</a></li>
                  <li className="nav-item foot-text"><a href="/" className="nav-link p-0">Blog</a></li>
                  <li className="nav-item foot-text"><a href="/gallery" className="nav-link p-0">FAQs</a></li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-4 col-sm-4 mb-3">
                <h5 className="footer-head">Section</h5>
                <ul className="nav flex-column">
                  <li className="nav-item"><a href="/" className="foot-text nav-link p-0">Home</a></li>
                  <li className="nav-item"><a href="/campaign" className="foot-text nav-link p-0">Features</a></li>
                  <li className="nav-item"><a href="/donote" className="foot-text nav-link p-0">Pricing</a></li>
                  <li className="nav-item"><a href="/gallery" className="foot-text nav-link p-0">FAQs</a></li>
                  <li className="nav-item"><a href="/about" className="foot-text nav-link p-0">About</a></li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-4 col-sm-4 mb-3">
                <h5 className="footer-head">Connect</h5>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="foot-text" href="tel:+917829982855">
                      <img src={phoneFill} alt="Phone Icon" height="18" style={{ margin: '0 5px 3px 0' }} />
                      +91 7829982855
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="foot-text" href="mailto:info@rightwaycharity.org">
                      <img src={mailFill} alt="Email Icon" height="18" style={{ margin: '0 5px 3px 0' }} />
                      info@rightwaycharity.org
                    </a>
                  </li>
                  <li className="nav-item">
                    <p className="foot-text">
                      <img src={mapFill} alt="Location Icon" height="18" style={{ margin: '0 5px 3px 0' }} />
                       No. 6 & 7 K. No. 25/10/1, Kothanur Bengaluru Karnataka, India 560077
                    </p>
                  </li>
                </ul>
                <div className="social-icons d-flex gap-2 mt-2">
                  <a href="/"><img src={facebookImg} alt="Facebook" /></a>
                  <a href="/"><img src={icon} alt="Twitter" height="20" /></a>
                  <a href="/"><img src={antInstaDesign} alt="Instagram" /></a>
                  <a href="/"><img src={linkedInLogo} alt="LinkedIn" /></a>
                  <a href="/"><img src={antDesignYoutube} alt="YouTube" /></a>
                </div>
              </div>
            </div>

            <div className="copyright d-flex flex-column flex-sm-row justify-content-center py-4 my-4 gap-3">
              <p>© 2024 Rightway Charitable Foundation, Inc. All rights reserved. | Designed & Developed by <span className="copyr-text1">Developer</span> <span className="copyr-text2">Bazaar</span> <span className="copyr-text1">Technologies</span></p>
            </div>

            {showScrollToTopBtn && (
              <button onClick={() => window.scrollTo(0, 0)} id="scrollToTopBtn" title="Go to top" style={{ position: 'fixed', bottom: '20px', right: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer' }}>
                ↑
              </button>
            )}
          </footer>
        </div>
      </div>
    </>
  );
  
}
export default Footer;
