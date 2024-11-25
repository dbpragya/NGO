import certificateDummy from "../assets/images/certificatedummy.jpg";
import bannerVideo from "../assets/images/banner_video.mp4";
import loveImg from "../assets/images/love.svg";
import iconizerImg from "../assets/images/iconizer-arrow-down-line.svg";
import heartSvg from "../assets/images/heart.svg";
import donote from "../assets/images/donate.svg";
import sponserImg from "../assets/images/sponsor-a-child.svg";
import volunterImg from "../assets/images/become-a-volunteer.svg";
import indianKids from "../assets/images/portrait-indian-kids-bazaar.jpg";
import arrowLine from "../assets/images/arrow-down-line.svg";
import story1Img from "../assets/images/story1.jpg";
import arrowDown from "../assets/images/arrow-down-line.svg";
import oldMan from "../assets/images/oldman.jpg";
import { Link } from 'react-router-dom';
import Testimonial from "./Testimonial";

function Index() {
  return (
    <>
      {/* Hero Banner */}
      <section className="hero-banner">
        <video className="background-video" autoPlay loop muted poster="">
          <source src={bannerVideo } type="video/mp4" />
        </video>
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-12 d-flex flex-column hero-text">
              <div className="banner-text-card">
                <h1>
                  A <span className="major-color">world</span> where no child's <br /> life is torn apart by war.
                </h1>
                <p>
                  Figma ipsum component variant main layer. Shadow slice select <br className="brk" /> library scrolling flows. Rectangle plugin stroke follower asset group.
                </p>
                <div className="hero-buttons d-flex gap-3">             
                  <Link className="hero-btn"  to="/donate"> Donate now<img  src={loveImg} alt="" height="20"/></Link>
                  <Link className="hero-btn2"  to="/about">
                    Discover <img src={iconizerImg } alt="" height="17" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Banner Ends */}

      {/* <!-- certificates --> */}
    <section class="certificates">
      <div class="container d-flex justify-content-between">
      <div className="certificate-heading">
        <h1>
          Awards & <br className="brk" />
          <span className="major-color">Recognition</span>
        </h1>
      </div>

      <div class="slider">
        <div class="slide-track">
          <div class="slide">
            <img src={ certificateDummy} height="150" width="150" alt="" />
          </div>
          <div class="slide">
            <img src={ certificateDummy } height="150" width="150" alt="" />
          </div>
          <div class="slide">
            <img src={ certificateDummy } height="150" width="150" alt="" />
          </div>
          <div class="slide">
            <img src={ certificateDummy } height="150" width="150" alt="" />
          </div>
          <div class="slide">
            <img src={ certificateDummy } height="150" width="150" alt="" />
          </div>
          <div class="slide">
            <img src={ certificateDummy} height="150" width="150" alt="" />
          </div>
          <div class="slide">
            <img src={ certificateDummy} height="150" width="150" alt="" />
          </div>
          <div class="slide">
            <img src={ certificateDummy} height="150" width="150" alt="" />
          </div>
          <div class="slide">
            <img src={ certificateDummy } height="150" width="150" alt="" />
          </div>
          <div class="slide">
            <img src={ certificateDummy} height="150" width="150" alt="" />
          </div>
          <div class="slide">
            <img src={certificateDummy} height="150" width="150" alt="" />
          </div>
          <div class="slide">
            <img src={certificateDummy } height="150" width="150" alt="" />
          </div>
          <div class="slide">
            <img src={certificateDummy} height="150" width="150" alt="" />
          </div>
       
        </div>
      </div>
    </div>
    </section>
    {/* <!-- certificates --> */}

    {/* <!-- WHAT TO DO  --> */}

    <section className="whatWeDo">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 d-flex flex-column mb-5">
            <h1>
              Welcome to <br />
              <span className="major-color">Rightway Charitable Foundation</span>
            </h1>
            <p>
              At Rightway Charitable Foundation, we are dedicated to creating
              <br className="brk" />
              a lasting impact by addressing critical issues affecting vulnerable
              <br className="brk" />
              communities across various states in India.
              <br className="brk" />
              Our mission is to uplift the underserved by providing essential
              <br className="brk" />
              support and resources in areas that matter the most.
            </p>
         
            <Link to="/about" className="know-more" target="_blank" rel="noopener noreferrer">
              Know More
            </Link>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="row row-cols-2">
              <div className="col mb-5">
                <div className="whatWeDo-content">
                  <div className="img-box">
                    <img src={ heartSvg } alt="" />
                  </div>
                  <h5>Leave a Legacy</h5>
                  <p>Forge a Lasting Legacy Through Your Actions</p>
                </div>
              </div>

              <div className="col mb-5">
                <div className="whatWeDo-content">
                  <div className="img-box">
                    <img src={donote} alt="" />
                  </div>
                  <h5>Make Donation</h5>
                  <p>Support Our Cause Through Giving</p>
                </div>
              </div>

              <div className="col">
                <div className="whatWeDo-content">
                  <div className="img-box">
                    <img src={ sponserImg } alt="" />
                  </div>
                  <h5>Become a Fundraiser</h5>
                  <p>Join Our Team of Changemakers</p>
                </div>
              </div>

              <div className="col">
                <div className="whatWeDo-content">
                  <div className="img-box">
                    <img src={ volunterImg } alt="" />
                  </div>
                  <h5>Become A Volunteer</h5>
                  <p>Become Volunteer and Make an Impact Today!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


   {/* <!-- STORIES --> */}
    <section class="stories">
      <div class="container">
        <h1>Learn the stories of those<br/>
          <span class="major-color">we've already helped</span>
        </h1>
        <div class="row gy-4 mb-5">
            
            {/* <!--card 01--> */}
          <div class="col-lg-4 col-md-12">
            <div class="story-card">
              <img class="story-img" src={indianKids} alt="kids"/>
              <div class="story-text">
                <h4> Continuous Support for Over 200 Children</h4>
                {/* <!--<span class="fw-semibold">8 years</span>--> */}
                <p>
                 We are proud to provide ongoing support to more than 200
                 children across various states in India. Through our dedicated programs,
                 these children receive not only basic necessities like food 
                 and shelter but also educational resources and emotional ... 
                </p>
                <Link class="story-btn mt-2" to="/stories" target="_blank">Read more <img
                    src={ arrowLine} alt="arrow-line" height="17"/></Link>
              </div>
            </div>
          </div>
          
          {/* <!--card 02--> */}
          <div class="col-lg-4 col-md-12">
            <div class="story-card">
              <img class="story-img" src={ story1Img } alt="story1"/>
              <div class="story-text">
                <h4>Shelter, Food, and Education for Orphaned Children</h4>
                {/* <!--<span class="fw-semibold">8 years</span>--> */}
                <p>
                 Among the 200 children we support, 70 are orphaned and receive
                 comprehensive care including shelter, food, and education.
                 These children are provided with a safe and nurturing environment 
                 where they can grow and thrive.We ensure they have access to quality ...
                </p>
                <Link class="story-btn mt-2" to="/stories" target="_blank">Read more <img
                    src={ arrowDown } alt="arrow-down" height="17" /></Link>
              </div>
            </div>
          </div>
          {/* <!--card 03--> */}
          <div class="col-lg-4 col-md-12">
            <div class="story-card">
              <img class="story-img" src={ oldMan } alt="oldman"/>
              <div class="story-text">
                <h4> Transformative Surgery Support: Mr. Anu's Story</h4>
                {/* <!--<span class="fw-semibold">8 years</span>--> */}
                <p>
                  One of our most heartwarming success stories is that of Mr. Anu. 
                  After a severe fall, Mr. Anu was rushed to the hospital where he 
                  was diagnosed with a subarachnoid hemorrhage, a life-threatening condition.
                  The necessary surgery at First Neuro Hospital in Mangalore cost 9 ...
                </p>
                <Link class="story-btn mt-2" to="/stories" target="_blank">Read more <img
                    src={ arrowDown } alt="arrow-down" height="17" /></Link>
              </div>
            </div>
          </div>

        </div>
                  
          {/* <!--view more button--> */}
          <div class="v-m-btn text-center mt-3 pt-3">
              <Link class="view-more-btt" to="/stories">View More Stories</Link>
          </div>
          {/* <!--view more button end here--> */}
      </div>
      
    </section>

    <Testimonial/>

    <section className="newsletter">
      <div className="container rounded-4">
        <div className="row">
          <div className="col-lg-12 d-flex flex-column justify-content-center align-items-center">
            <h2>Subscribe to our newsletter</h2>
            <p>Keep up with our latest news and events. Subscribe to our newsletter</p>
            <form action="/" className="news-email">
              <input type="email" placeholder="Email" />
              <button type="submit" className="subscribe">
                Join us <span className="now">now</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Index;
