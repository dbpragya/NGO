import img2168 from '../assets/images/2168.jpg';
import aboutImg from '../assets/images/about.png';
import volunteersImg from '../assets/images/volunteers-holding.jpg';
import handsImg from '../assets/images/handss.jpg';
import loveIcon from '../assets/images/love.svg';
import certificateImg from '../assets/images/certificate.jpg';
import pancardImg from '../assets/images/pancard.jpg';
import Headers  from '../components/Headers';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function About(){
    return(
        <>
            <Headers/>
                <section class="gallery-hero">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 text-center">
                                <h1>About <span class="major-color">Us</span></h1>
                                <p>Empowering Lives, Building Futures: Learn About Our NGO's Journey and Mission</p>
                            </div>
                            <hr/>	
                        </div>
                    </div>
                </section>

                <section className="about-head">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <img className="w-100 h-100 object-fit-cover" src={img2168} alt="Image_2168" />
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div className="main-content">
                                    <div className="subhead s text-left">
                                        <h2 className="text-left mb-3">
                                        <span className="major-line">Welcome to our RightWay</span><br />
                                        <span className="major-color">We are founded to empower the humanity</span>
                                        </h2>
                                    </div>
                                    <div className="content-para mt-1">
                                        <p>
                                        At Rightway Charitable Foundation, we are dedicated to creating a lasting impact by addressing critical issues affecting vulnerable communities across various states in India...
                                        </p>
                                        <p className="mt-3"> From Bangalore, Karnataka to other regions across the country, we are united in our efforts to make a meaningful difference.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Row: Our Mission */}
                        <div className="row about-margin2 mb-5 col-rev">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div className="main-content">
                                    <div className="subhead s text-left">
                                        <h2 className="text-left mb-3">
                                        <span className="major-line">Our Mission</span><br />
                                        <span className="major-color">Nurturing Children & Driving Community Development</span>
                                        </h2>
                                    </div>
                                    <div className="content-para mt-1">
                                        <p>Our mission is to provide a nurturing home for vulnerable children while combating hunger, promoting menstrual hygiene, and driving community development.</p>
                                        <p className="mt-3">Through shelter, food, and education, we empower 84 children to break the cycle of poverty...</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <img className="w-100" src={aboutImg} alt="About" />
                            </div>
                        </div>

                        {/* Row: Our Vision */}
                        <div className="row about-margin2">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <img className="w-100 h-100 object-fit-cover" src={volunteersImg} alt="Volunteers" />
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <div className="main-content">
                                        <div className="subhead s text-left">
                                            <h2 className="text-left mb-3">
                                            <span className="major-line">Our Vision:</span><br />
                                            <span className="major-color">Building a Sustainable and Flourishing World</span>
                                            </h2>
                                    </div>
                                    <div className="content-para mt-1">
                                        <p>Our vision is to create a sustainable and thriving world...</p>
                                        <Link to="/donate" className="donate-now-btn" type="button">
                                        Donate Now <img src={loveIcon} alt="Love Icon" height="24" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Row: Sustainable Development */}
                        <div className="row about-margin2 mb-5 col-rev">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div className="main-content">
                                    <div className="subhead s text-left">
                                        <h2 className="text-left mb-3">
                                        <span className="major-line">Our Commitment to</span><br />
                                        <span className="major-color">Sustainable Development</span>
                                        </h2>
                                    </div>
                                    <div className="content-para mt-1">
                                        <p>Our vision for sustainable development centers on creating a world where every child's potential is nurtured and realized...</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <img className="w-100 h-100 object-fit-contain" src={handsImg} alt="Hands" />
                            </div>
                        </div>

                        {/* Row: Registration Section */}
                        <hr />
                        <div className="row register-sec">
                            <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12">
                                <div className="subhead">
                                    <h2>Our Charitable Foundation is registered <br />
                                        <span className="major-color">Ministry of Corporate Affairs, Government of India</span>
                                    </h2>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12 mt-4 text-justify">
                                <div className="main-content">
                                    <p>Our foundation started by providing food to poor people and offering financial support to orphanages...</p>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-6 col-sm-12 col-xs-12">
                                <div className="main-content">
                                    <ul>
                                        <li className="checkmark">Our foundation started by providing food to poor people...</li>
                                        <li className="checkmark">Gradually, we expanded our services to cater to the needs of economically disadvantaged individuals...</li>
                                        <li className="checkmark">Furthermore, we are proud to announce that we have established two children's homes...</li>
                                        <li className="checkmark">The charitable Foundation is registered under the Companies Act...</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-6 col-sm-12 col-xs-12">
                                <div className="main-content">
                                    <div className="tile">
                                        <div className="tile-content">
                                            <img className="w-100" src={certificateImg} alt="Certificate" />
                                            <img className="w-100" src={pancardImg} alt="Pancard" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            <Footer/>
        </>
    )
}
export default About