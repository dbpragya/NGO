import Headers from '../components/Headers';
import Footer from '../components/Footer';
import herobg1 from '../assets/images/herobg1.jpg';
import donationKid from '../assets/images/donationKids.jpg';
import kidHolding from '../assets/images/kidHoldingHouse.jpg';
import indianKids from '../assets/images/portrait-indian-kids-bazaar.jpg';

function WhatWeDo() {
    return ( 
        <>
            <Headers />
            <section className="gallery-hero">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h1>What We <span className="major-color">Do</span></h1>
                            <p>Discover How We Make a Difference in Our Community</p>
                        </div>
                        <hr />
                    </div>
                </div>
            </section>

            <section className="whatwedo">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <img className="w-100 object-fit-cover" src={indianKids} alt="" height="570" />
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                            <div className="main-content">
                                <div className="subhead s text-left">
                                    <h2 className="text-left mb-3">
                                        <span className="major-line">What We Do</span>
                                        <br />
                                        <span className="major-color">Our Initiatives for Societal Transformation</span>
                                    </h2>
                                </div>
                                <div className="content-para mt-1">
                                    <p>Rightway Charitable Foundation is a social service enterprise that brings in creative changes to society. Our mission plays an efficient part in achieving social progress while keeping up with God’s appeasement. We aim for permanent societal development by equipping talented individuals to good effect. Resources get provided to under-privileged individuals and those from backward-social-classes that result in major transformations.</p>
                                    <p className="mt-3">Rightway Charitable Foundation makes apt arrangements to make maximum use of all talents in the society that aids in the nation’s progress. Our operations focus on fastening an individual’s social, spiritual, and cultural developments. Kerala benefits from our social service activities as we guide them into a new direction that is much more effective than before.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="workswedo my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12 mb-3">
                            <div className="case_boxed_wrapper">
                                <div className="case_boxed_img">
                                    <a href="cause-details.html">
                                        <img src={kidHolding} alt="img" />
                                    </a>
                                    <span className="causes_badge bg-theme">Home</span>
                                </div>
                                <div className="causes_boxed_text">
                                    <div className="class-full causes_pro_bar progress_bar">
                                        <div className="class-full-bar-box">
                                            <h3 className="h3-title">Goal:</h3>
                                            <div className="class-full-bar-percent">
                                                <h2>
                                                    <span className="counting-data" data-count="100">100</span>
                                                    <span>%</span>
                                                </h2>
                                            </div>
                                            <div className="skill-bar class-bar" data-width="85%">
                                                <div className="skill-bar-inner class-bar-in" style={{ width: '85.0091%', overflow: 'hidden' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <h3>
                                        <a href="cause-details.html">Childrens Home</a>
                                    </h3>
                                    <p>Foundation has two children's homes sponsoring the needs and education of 30 Boys and 20 Girls. Most of them are orphans and very few have single parent. The aim is to provide them with good nutritious food, quality education and caring.</p>
                                    <div className="causes_boxed_bottom_wrapper">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div className="casuses_bottom_boxed">
                                                    <div className="casuses_bottom_icon">
                                                        <i className="fa-regular fa-calendar"></i>
                                                    </div>
                                                    <div className="casuses_bottom_content">
                                                        <p>20 Dec, 2021</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12 col-sm-12 mb-3">
                            <div className="case_boxed_wrapper">
                                <div className="case_boxed_img">
                                    <a href="cause-details.html">
                                        <img src={donationKid} alt="img" />
                                    </a>
                                    <span className="causes_badge bg-theme">Food</span>
                                </div>
                                <div className="causes_boxed_text">
                                    <div className="class-full causes_pro_bar progress_bar">
                                        <div className="class-full-bar-box">
                                            <h3 className="h3-title">Goal:</h3>
                                            <div className="class-full-bar-percent">
                                                <h2>
                                                    <span className="counting-data" data-count="100">100</span>
                                                    <span>%</span>
                                                </h2>
                                            </div>
                                            <div className="skill-bar class-bar" data-width="85%">
                                                <div className="skill-bar-inner class-bar-in" style={{ width: '85.0091%', overflow: 'hidden' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <h3>
                                        <a href="cause-details.html">Food & Food Kit Donation</a>
                                    </h3>
                                    <p>Together, we are trying to keep poverty at bay! We are regularly offering food for homeless people starving at streets. And also, we are taking care for the food requirements of migratory workers struggling hard with their livelihood expenses.</p>
                                    <div className="causes_boxed_bottom_wrapper">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div className="casuses_bottom_boxed">
                                                    <div className="casuses_bottom_icon">
                                                        <i className="fa-regular fa-calendar"></i>
                                                    </div>
                                                    <div className="casuses_bottom_content">
                                                        <p>20 Dec, 2021</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12 col-sm-12 mb-3">
                            <div className="case_boxed_wrapper">
                                <div className="case_boxed_img">
                                    <a href="cause-details.html">
                                        <img src={herobg1} alt="img" />
                                    </a>
                                    <span className="causes_badge bg-theme">Education</span>
                                </div>
                                <div className="causes_boxed_text">
                                    <div className="class-full causes_pro_bar progress_bar">
                                        <div className="class-full-bar-box">
                                            <h3 className="h3-title">Goal:</h3>
                                            <div className="class-full-bar-percent">
                                                <h2>
                                                    <span className="counting-data" data-count="100">100</span>
                                                    <span>%</span>
                                                </h2>
                                            </div>
                                            <div className="skill-bar class-bar" data-width="85%">
                                                <div className="skill-bar-inner class-bar-in" style={{ width: '85.0091%', overflow: 'hidden' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <h3>
                                        <a href="cause-details.html">Education</a>
                                    </h3>
                                    <p>Financially struggling children get provided with books, uniforms, and school fees with which they just need to focus on studies. By allowing getting educated, we make people self-sufficient for the future.</p>
                                    <div className="causes_boxed_bottom_wrapper">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                                <div className="casuses_bottom_boxed">
                                                    <div className="casuses_bottom_icon">
                                                        <i className="fa-regular fa-calendar"></i>
                                                    </div>
                                                    <div className="casuses_bottom_content">
                                                        <p>20 Dec, 2021</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
export default WhatWeDo;
