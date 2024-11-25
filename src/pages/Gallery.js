import React, { useState } from 'react';

import Testimonial from './Testimonial';
import Footer from "../components/Footer";
import Headers from "../components/Headers";
import gal1 from  '../assets/images/gal1.jpg';
import gal2 from '../assets/images/gal2.jpg';
import gal3 from '../assets/images/gal3.jpg';
import gal4 from '../assets/images/gal4.jpg';
import gal5 from '../assets/images/gal5.jpg';
import gal6 from '../assets/images/gal6.jpg';
import img2 from '../assets/images/ngo/img2.jpeg';
import img3 from '../assets/images/ngo/img3.jpeg';
import img4 from '../assets/images/ngo/img4.jpeg';
import img7 from '../assets/images/ngo/img7.jpeg';
import img8 from '../assets/images/ngo/img8.jpeg';
import img9 from '../assets/images/ngo/img9.jpeg';
import img10 from '../assets/images/ngo/img10.jpeg';
import img11 from '../assets/images/ngo/img11.jpeg';
import img12 from '../assets/images/ngo/img12.jpeg';
import img13 from '../assets/images/ngo/img13.jpeg';
import img15 from '../assets/images/ngo/img15.jpeg';

function Gallery(){

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };

    const accordionItems = [
      {
        title: "How do airplanes stay up?",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti."
      },
      {
        title: "Why do birds migrate?",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti."
      },
      {
        title: "What is the speed of light?",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti."
      },
      {
        title: "How do rockets work?",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti."
      },
      {
        title: "What is gravity?",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti."
      }
    ];

  
  return(
    <>
    <Headers/>
    
     {/* Gallery hero section */}
     <section className="gallery-hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1>
                Our <span className="major-color">Gallery</span>
              </h1>
              <p>Here is our gallery with our achievements</p>
              <p>
                Our donations, and sponsorship bring contented smiles to these
                minds, which get reflected onto the faces.
              </p>
            </div>
            <hr />
          </div>
        </div>
      </section>
      {/* Gallery images */}

      {/* <!-- Gallery images  --> */}
      <section class="gallery-grid">
        <div class="container"  uk-lightbox="animation: slide" target="_blank" rel="noopener noreferrer">
            <div class="row">
              <div class="col-lg-8 mb-4">
                <a href={ gal1 } data-caption="Our volunteers" target="_blank" rel="noopener noreferrer">
                  <img src={gal1} alt="" />
                </a>
              </div>
              <div class="col-lg-4 mb-4">
                <a href={ gal2 } data-caption="Food distribution" target="_blank" rel="noopener noreferrer">
                  <img src={ gal2 } alt="" />
                </a>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 mb-4">
                <a href={gal3 } data-caption="Food distribution" target="_blank" rel="noopener noreferrer">
                  <img src={gal3} alt="" />
                </a>
              </div>
              <div class="col-lg-4 mb-4">
                <a href={gal4} data-caption="Food distribution" target="_blank" rel="noopener noreferrer">
                  <img src={gal4} alt="" />
                </a>
              </div>
              <div class="col-lg-4 mb-4">
                <a href={gal5} data-caption="Cuties" target="_blank" rel="noopener noreferrer">
                  <img src={gal5} alt="" />
                </a>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 mb-4">
                <a href={ gal6 } data-caption="Our children" target="_blank" rel="noopener noreferrer">
                  <img src={ gal6} alt="" />
                </a>
              </div>
              <div class="col-lg-8 mb-4">
                <a href={ img4 } data-caption="Our volunteers" target="_blank" rel="noopener noreferrer">
                  <img src={ img4 } alt="" />
                </a>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 mb-4">
                <a href={ img9 } data-caption="Our children" target="_blank" rel="noopener noreferrer">
                  <img src={ img9} alt="" />
                </a>
              </div>
              <div class="col-lg-4 mb-4">
                <a href={ img3 } data-caption="Our volunteers" target="_blank" rel="noopener noreferrer">
                  <img src={ img3 } alt="" />
                </a>
              </div>
              <div class="col-lg-4 mb-4">
                <a href={ img15 } data-caption="Our children" target="_blank" rel="noopener noreferrer">
                  <img src={ img15} alt="" />
                </a>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 mb-4">
                <a href={ img7 } data-caption="Our volunteers" target="_blank" rel="noopener noreferrer">
                  <img src={ img7 } alt="" />
                </a>
              </div>
              <div class="col-lg-8 mb-4">
                <a href={ img2 } data-caption="Our children" target="_blank" rel="noopener noreferrer">
                  <img src={ img2} alt="" />
                </a>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 mb-4">
                <a href={ img2 } data-caption="Our children" target="_blank" rel="noopener noreferrer">
                  <img src={ img2 } alt="" />
                </a>
              </div>
              <div class="col-lg-4 mb-4">
                <a href={ img10 } data-caption="Our volunteers" target="_blank" rel="noopener noreferrer">
                  <img src={ img10 } alt="" />
                </a>
              </div>
              <div class="col-lg-4 mb-4">
                <a href={ img11 } data-caption="Our volunteers" target="_blank" rel="noopener noreferrer">
                  <img src={ img11 } alt="" />
                </a>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 mb-4">
                <a href={ img8 } target="_blank" rel="noopener noreferrer" data-caption="Our volunteers" >
                  <img src={ img8 } alt="" />
                </a>
              </div>
              <div class="col-lg-4 mb-4">
                <a href={ img12 } data-caption="Our children" target="_blank" rel="noopener noreferrer">
                  <img src={ img12} alt="" />
                </a>
              </div>  
              <div class="col-lg-4 mb-4">
                <a href={ img13 } data-caption="Our volunteers" target="_blank" rel="noopener noreferrer">
                  <img src={ img13 } alt="" />
                </a>
              </div>
          </div>
        </div>
      </section>
      {/* <!-- gallery images -->*/}

      {/* faq's section*/}
      <section className="faq">
        <div className="container py-5">
          <div className="faq-section">
            <div className="faq-head">
              <h1 className="text-center">Frequently Asked Questions</h1>
              <p className="text-center">
                Here are some frequently asked questions that you might find helpful. If you don't see
                <br className="brk" /> what you're looking for, feel free to reach out to us, and we'll gladly assist you with your query!
              </p>
            </div>
            <div className="accordion">
              {accordionItems.map((item, index) => (
                <div className="accordion-item" key={index}>
                  <button
                    id={`accordion-button-${index + 1}`}
                    aria-expanded={openIndex === index}
                    onClick={() => toggleAccordion(index)}
                  >
                    <h4 className="accordion-title">{item.title}</h4>
                    <span className="icon" aria-hidden="true"></span>
                  </button>
                  {openIndex === index && (
                    <div className="accordion-content">
                      <p>{item.content}</p>
                    </div>
                  )}
                    <hr/>
                </div>
              ))}
          </div>
          </div>
        </div>
      </section>
    {/* Testimonials */}
    <Testimonial/>
    <Footer/>
    </>
   );
}
export default Gallery;