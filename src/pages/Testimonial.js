import loveImg from "../assets/images/love.svg";
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import $ from 'jquery';
window.$ = window.jQuery = $;

function Testimonial(){
 
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return(
    <>
      <section className="testimonial">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 testimonial-texts">
                {/* <h5>Testimonials</h5> */}
                <h4>
                  Voices of Support <br />
                  <span>Testimonials from Our Beneficiaries</span>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br className="brk" /> Blanditiis
                  ipsum similique unde labore, dolorem nemo <br className="brk" /> dolorum. Ullam possimus, iste quo
                  expedita, iure <br className="brk" /> asperiores consequatur quae voluptate sint
                </p>
                <Link to="/donate" className="">
                  Donate now <img src={ loveImg } alt="" height="20" />
                </Link>
              </div>
              <div className="col-lg-7">
                <div className="container-testimonial">
                  <div className="gtco-testimonials">
                    <Slider {...settings}>
                        {/* Testimonial slide 1 */}
                        <div className="item">
                          <div className="card-tesimonial">
                            <div className="card-body-testimonial">
                              <img
                                className="card-img-top rounded-circle"
                                src="https://images.media.io/imgsharpen/home/banner-img-mobile-after.png"
                                alt=""
                              />
                              <h4>Ronne Galle <br /></h4>
                              <p className="card-text">
                                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Testimonial slide 2 */}
                        <div className="item">
                          <div className="card-tesimonial">
                            <div className="card-body-testimonial">
                              <img
                                className="card-img-top rounded-circle"
                                src="https://images.media.io/imgsharpen/home/banner-img-mobile-after.png"
                                alt=""
                              />
                              <h4>Ronne Galle <br /></h4>
                              <p className="card-text">
                                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Testimonial slide 3 */}
                        <div className="item">
                          <div className="card-tesimonial">
                            <div className="card-body-testimonial">
                              <img
                                className="card-img-top rounded-circle"
                                src="https://images.media.io/imgsharpen/home/banner-img-mobile-after.png"
                                alt=""
                              />
                              <h4>Ronne Galle <br /></h4>
                              <p className="card-text">
                                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.
                              </p>
                            </div>
                          </div>
                        </div>
                      </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    </>
  )
}
export default Testimonial