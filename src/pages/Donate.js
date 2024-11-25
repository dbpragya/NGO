import React, { useState } from 'react';
import Headers from '../components/Headers';
import Footer from '../components/Footer';
import SIBQR from '../assets/images/SIBQR.jpg';
import PAYTMQR from '../assets/images/PAYTMQR.jpg';

function Donate() {
    // State to manage the total amount and selected items
    const [totalAmount, setTotalAmount] = useState(0);

    // Function to handle checkbox change and calculate total
    const handleCheckboxChange = (event) => {
        const amount = parseInt(event.target.value);
        if (event.target.checked) {
            setTotalAmount(prevTotal => prevTotal + amount);
        } else {
            setTotalAmount(prevTotal => prevTotal - amount);
        }
    };

    return (
        <>
        <Headers />
            <section className="gallery-hero">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h1>Support Our Mission:<span className="major-color">Donate Now</span></h1>
                            <p>Giving is the greatest act of grace</p>
                        </div>
                        <hr />
                    </div>
                </div>
            </section>

            <section className="account-details">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 acc-padd">
                            <h2 className="mb-4">Account Details</h2>
                            <div className="acc-text d-flex">
                                <span className="acc-name">Account Name :</span>
                                <span className="fw-semibold">
                                    RIGHTWAY CHARITABLE<br className="brk-v" /> FOUNDATION
                                </span>
                            </div>
                            <div className="acc-text d-flex">
                                <span className="acc-name">IFSC Code :</span>
                                <span className="fw-semibold">SIBL0000486</span>
                            </div>
                            <div className="acc-text d-flex">
                                <span className="acc-name">Bank Name :</span>
                                <span className="fw-semibold">SOUTH INDIAN BANK LTD</span>
                            </div>
                            <div className="acc-text d-flex">
                                <span className="acc-name">UPI ID :</span>
                                <span className="fw-semibold">qr.right321@sib</span>
                            </div>
                            <div className="acc-text d-flex">
                                <span className="acc-name">Account Number :</span>
                                <span className="fw-semibold">0486073000000962</span>
                            </div>
                            <div className="acc-text d-flex">
                                <span className="acc-name">Account Type :</span>
                                <span className="fw-semibold">Current Account</span>
                            </div>
                            <div className="acc-text d-flex">
                                <span className="acc-name">Branch Name :</span>
                                <span className="fw-semibold">KOTHANUR, Bangalore</span>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <h2 className="mb-4">Scan and Donate here</h2>
                            <div className="barcodes d-flex justify-content-around">
                                <img src={ SIBQR } alt="SIB QR" />
                                <img src={ PAYTMQR } alt="PAYTM QR" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* payments cards */}
            <section className="payment-cards mb-4">
                <div className="container">
                    <h2 className="text-center">
                        Choose Your Impact: Select a Cause to <span className="major-color">Donate</span> Towards
                    </h2>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="pay-card">
                                <h4 className="color-line">Medical & Menstrual Hygiene</h4>
                                <div className="pay-select-box">
                                    <input className="check-un" type="checkbox" name="m7" id="m7" value="6000" onChange={handleCheckboxChange} />
                                    <label htmlFor="m7">Sanitary Napkin for 100 Women Rs.6000/-</label>
                                </div>
                                <div className="pay-select-box">
                                    <input className="check-un" type="checkbox" name="m8" id="m8" value="12000" onChange={handleCheckboxChange} />
                                    <label htmlFor="m8">Menstrual Cup & Hygiene kit For 10 Girl Child Rs.12000/-</label>
                                </div>
                                <div className="pay-select-box">
                                    <input className="check-un" type="checkbox" name="m9" id="m9" value="10000" onChange={handleCheckboxChange} />
                                    <label htmlFor="m9">Medical Camp in Slum Areas Rs.10,000/-</label>
                                </div>
                                <div className="pay-select-box">
                                    <input className="check-un" type="checkbox" name="m10" id="m10" value="6000" onChange={handleCheckboxChange} />
                                    <label htmlFor="m10">Care For One Old Age Person Rs.6000/-</label>
                                </div>
                                <div className="pay-select-box">
                                    <input className="check-un" type="checkbox" name="m15" id="m15" value="6000" onChange={handleCheckboxChange} />
                                    <label htmlFor="m15">Care For One Old Age Person Rs.6000/-</label>
                                </div>
                            </div>
                            <div className="pay-card">
                                <h4 className="color-line">Community</h4>
                                <div className="pay-select-box">
                                    <input className="check-un" type="checkbox" name="m11" id="m11" value="7750" onChange={handleCheckboxChange} />
                                    <label htmlFor="m11">School Bag, notebooks, Shoes, Uniforms and Stationery per Child Rs.7750/-</label>
                                </div>
                                <div className="pay-select-box">
                                    <input className="check-un" type="checkbox" name="m12" id="m12" value="7500" onChange={handleCheckboxChange} />
                                    <label htmlFor="m12">Children’s birthday Celebrations in Slum Area with photo Album Rs.7500/-</label>
                                </div>
                                <div className="pay-select-box">
                                    <input className="check-un" type="checkbox" name="m13" id="m13" value="6000" onChange={handleCheckboxChange} />
                                    <label htmlFor="m13">One family monthly support Rs.6000/-</label>
                                </div>
                                <div className="pay-select-box">
                                    <input className="check-un" type="checkbox" name="m14" id="m14" value="12000" onChange={handleCheckboxChange} />
                                    <label htmlFor="m14">Skill Development Program Per Person Rs.12000/-</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="pay-card">
                                <h4 className="color-line">Food and Grocery Kit</h4>
                                <div className="pay-select-box">
                                    <input className="check-un" type="checkbox" name="m1" id="m1" value="8000" onChange={handleCheckboxChange} />
                                    <label htmlFor="m1">One month Grocery Kit For 5 Families Rs.8000/-</label>
                                </div>
                                <div className="pay-select-box">
                                    <input className="check-un" type="checkbox" name="m2" id="m2" value="6000" onChange={handleCheckboxChange} />
                                    <label htmlFor="m2">Mid Day Meal For 100 Roadside People Rs.6000/-</label>
                                </div>
                            </div>
                            <div className="pay-card">
                                <h4 className="color-line">Children Home (84 Children)</h4>
                                <div className="pay-select-box">
                                    <input className="check-un" type="checkbox" name="m3" id="m3" value="5000" onChange={handleCheckboxChange} />
                                    <label htmlFor="m3">Weekly Fruits and Snacks Rs.5000/-</label>
                                </div>
                                <div className="pay-select-box">
                                    <input className="check-un" type="checkbox" name="m4" id="m4" value="7000" onChange={handleCheckboxChange} />
                                    <label htmlFor="m4">Special Veg Meal for Children’s Rs.7000/-</label>
                                </div>
                                <div className="pay-select-box">
                                    <input className="check-un" type="checkbox" name="m5" id="m5" value="10000" onChange={handleCheckboxChange} />
                                    <label htmlFor="m5">Toothbrushes, Toothpaste, Soap, and Sanitary Napkins Rs.10000/-</label>
                                </div>
                                <div className="pay-select-box">
                                    <input className="check-un" type="checkbox" name="m6" id="m6" value="9000" onChange={handleCheckboxChange} />
                                    <label htmlFor="m6">Support for Staff for a Month Rs.9000/-</label>
                                </div>
                            </div>
                            <div class="pay-card">
                                <h4 class="color-line">Please enter amount</h4>
                                <div class="custom-amt">
                                    <input id="n1" type="number" placeholder="Enter amount"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-lg-4">
                            <div class="pay-card">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <h4 class="color-line">Total amount:</h4>
                                        <span id="targer">₹{totalAmount}</span>
                                    </div>
                                    <button href="#">Proceed to pay <img src="assets/images/arrow.svg" alt="" height="30"   style={{ paddingBottom: '2px' }} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        <Footer />
    </>
    );
}
export default Donate;
