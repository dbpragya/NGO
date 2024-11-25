import Headers from "../components/Headers";
import Footer from "../components/Footer";

function Connect() {
    return (
      <>
        <Headers/>

            <section className="contact-hero">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12 text-center">
                          <h1>Connect With <span className="major-color">Us</span></h1>
                          <p>The secret to happiness lies in helping others. Never underestimate the difference YOU can make in the lives of the poor, 
                             <br className="brk" /> the abused and the helpless. Spread sunshine in their lives no matter what the weather may be.</p>
                      </div>
                      <hr />    
                  </div>
              </div>
            </section>

            <section className="contact-form">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="add-card">
                                <h5>Our Head Office</h5>
                                <div className="d-flex add-card-text">
                                    <img src="assets/images/phone-fill.svg" alt="" height="20" />
                                    <div><a href="tel:+917829982855">+91 78299 82855</a> / <a href="tel:+918495800800">+91 84958 00800</a></div>
                                </div>
                                <div className="d-flex add-card-text">
                                    <img src="assets/images/mail-fill.svg" alt="" height="20" />
                                    <a href="mailto:info@rightwaycharity.org">info@rightwaycharity.org</a>
                                </div>
                                <div className="d-flex add-card-text">
                                    <img src="assets/images/map-pin-fill.svg" alt="" height="20" />
                                    <p>Rightway Charitable Foundation No. 6 & 7 K. <br className="brk" /> No. 25/10/1, Kothanur Bengaluru Karnataka, India 560077</p>
                                </div>
                            </div>

                            <div className="add-card2">
                                <h5>Kerala Branch Office</h5>
                                <div className="d-flex add-card-text">
                                    <img src="assets/images/phone-fill.svg" alt="" height="20" />
                                    <a href="tel:+917019404759">+91 70194 04759</a>
                                </div>
                                <div className="d-flex add-card-text">
                                    <img src="assets/images/mail-fill.svg" alt="" height="20" />
                                    <a href="mailto:rightwaycharitable@gmail.com">rightwaycharitable@gmail.com</a>
                                </div>
                                <div className="d-flex add-card-text">
                                    <img src="assets/images/map-pin-fill.svg" alt="" height="20" />
                                    <p>Rightway Charitable Foundation (UDYAM-KR-03-0068200) <br className="brk" /> North Paravur, Ernakulam - 683519</p>
                                </div>
                            </div>

                            <div className="add-card3">
                                <h5>Children Home</h5>
                                <div className="d-flex add-card-text">
                                    <img src="assets/images/phone-fill.svg" alt="" height="20" />
                                    <a href="tel:+918495800800">+91 84958 00800</a>
                                </div>
                                <div className="d-flex add-card-text">
                                    <img src="assets/images/map-pin-fill.svg" alt="" height="20" />
                                    <p>3rd Cross Rd, Coconut Grove Layout, Bank Avenue Colony, <br className="brk" /> Hennur Gardens, Bengaluru, Karnataka 560043</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 d-flex justify-content-center align-items-center">
                            <form action="/blank">
                                <div className="row g-3 form-field">
                                    <h2>Get in Touch</h2>
                                    <div className="col-6">
                                        <input type="text" placeholder="First name" aria-label="First name" required />
                                    </div>
                                    <div className="col-6">
                                        <input type="text" placeholder="Last name" aria-label="Last name" required />
                                    </div>
                                    <div className="col-12">
                                        <input type="email" placeholder="Your Email" required />
                                    </div>
                                    <div className="col-12">
                                        <input type="text" placeholder="Phone Number" aria-label="Phone Number" required />
                                    </div>
                                    <div className="col-12">
                                        <textarea placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button className="form-sub">Send <img src="assets/images/arrow.svg" alt="" height="30" style={{ paddingBottom: '2px' }} /></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section className="map">
                <div className="container">
                    <hr />
                    <div className="map-wrap d-flex flex-column justify-content-center align-items-center">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.412022255124!2d77.6429862!3d13.0730536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae192d87638ff5%3A0xb99636484776a18!2zUmlnaHR3YXkgQ2hhcml0YWJsZSBGb3VuZGF0aW9uIOCysOCziOCyn-CzjeKAjOCyteCzhyDgsprgsr7gsrDgsr_gsp_gs4fgsqzgsrLgs40g4LKr4LOM4LKC4LKh4LOH4LK24LKo4LON!5e0!3m2!1sen!2sin!4v1715061328270!5m2!1sen!2sin"
                            width="100%" 
                            height="450" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade" 
                            title="Rightway Charitable Foundation Location Map"
                        />
                        <div className="map-box d-flex justify-content-center align-items-center">
                            <h3>Let Us Come Together To Make A Difference</h3>
                            <button>Donate Now <img src="assets/images/love.svg" alt="" height="20" /></button>
                        </div>
                    </div>
                </div>
            </section>
        <Footer/>
      </>
    );
}

export default Connect;
