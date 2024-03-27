import React, { useState } from 'react';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    service: '',
    text: ''
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://turtltech.com/api/contactus', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Handle response from the server
      const responseData = await response.json();
      alert(responseData.message);
      console.log('Response from server:', responseData);

      // Optionally, reset the form
      setFormData({
        name: '',
        mobile: '',
        email: '',
        service: '',
        text: ''
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };



  return (
    <div>
      <section className="promo-section mt-4 mb-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
              <div className="section-heading text-center">
                <h2>Contact With Us</h2>
                <h6>Thanks for your interest in our services. Please fill
                  out the form below or e-mail us at
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='container'>
        <div className='row mt-1'>
          <div class="main">
            <section class="promo-section pt-100 ">
              <div class="container">
                <div class="row justify-content-md-center justify-content-sm-center">
                  <div class="col-md-6 col-lg-4">
                    <div class="card single-promo-card shadow-sm text-center p-3 my-3">
                      <div class="card-body">
                        <div class="pb-2">
                          <span class="fas fa-envelope icon-size-lg color-primary"></span>
                        </div>
                        <div class="pt-2 pb-3">
                          <h5>Mail Us</h5>
                          <p class="mb-0">Say something to start a live chat <a
                            href="mailto:service@turtltech.com">service@turtltech.com</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-4">
                    <div class="card single-promo-card shadow-sm text-center p-3 my-3">
                      <div class="card-body">
                        <div class="pb-2">
                          <span class="fas fa-headset icon-size-lg color-primary"></span>
                        </div>
                        <div class="pt-2 pb-3">
                          <h5>24/7 Live Chat</h5>
                          <p class="mb-0">We endeavour to answer all enquiries within 24 hours on business
                            days.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-4">
                    <div class="card single-promo-card shadow-sm text-center p-3 my-3">
                      <div class="card-body">
                        <div class="pb-2">
                          <span class="fas fa-map-marker-alt icon-size-lg color-primary"></span>
                        </div>
                        <div class="pt-2 pb-3">
                          <h5>Visit Us</h5>
                          <p class="mb-0">B-25 first floor, Block B, Sector 1, Noida, Uttar Pradesh 201301</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="contact" class="contact-us-section ptb-100">
              <div class="container">
                <div class="row justify-content-around">
                  <div class="col-12 pb-3 message-box d-none">
                    <div class="alert alert-danger"></div>
                  </div>
                  <div class="col-md-12 col-lg-5 mb-5 mb-md-5 mb-sm-5 mb-lg-0">
                    <div class="contact-us-form gray-light-bg rounded p-5">
                      <h4>Ready to get started?</h4>
                      <form onSubmit={handleSubmit} class="contact-us-form" >
                        <div class="form-row">
                          <div class="col-12">
                            <div class="form-group">
                              <input
                                class="form-control"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Username"
                                required="required"
                              />
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="form-group">
                              <input
                                class="form-control"
                                type="text"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleInputChange}
                                placeholder="User Mobile"
                                required="required"
                              />
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="form-group">
                              <input
                                class="form-control"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Enter Email"
                                required="required"
                              />
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="form-grp">
                              <input
                                class="form-control"
                                type="text"
                                name="service"
                                value={formData.service}
                                onChange={handleInputChange}
                                placeholder="Enter service"
                                required="required"
                              />
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="form-group mt-3">
                              <textarea
                                type="text"
                                name="text"
                                value={formData.text}
                                onChange={handleInputChange}
                                placeholder="Your Message"
                                class="form-control" rows="7"
                                cols="25"
                              >
                              </textarea>
                            </div>
                          </div>
                          <div class="col-sm-12 mt-3">
                            <button class="btn btn-brand-02" type="submit">Submit</button>

                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="col-md-12 col-lg-6">
                    <div class="contact-us-content">
                      <h2>Looking for a excellent Business idea?</h2>
                      <p class="lead">Give us a call or drop by anytime, we endeavour to answer all enquiries
                        within 24 hours on business days.</p>
                      <div class="btn btn-outline-brand-01 align-items-center">Get Directions <span
                        class="ti-arrow-right pl-2"></span></div>
                      <div class="my-5">
                        <div class="contact-info-list">
                          <div class="d-flex pb-3">
                            <div class="contact-icon mr-3">
                              <span class="fas fa-location-arrow color-primary rounded-circle p-3"></span>
                            </div>
                            <div class="contact-text">
                              <h5 class="mb-1">Company Location</h5>
                              <p>
                                B-25 first floor, Block B, Sector 1, Noida, Uttar Pradesh 201301
                              </p>
                            </div>
                          </div>
                          <div class="d-flex pb-3">
                            <div class="contact-icon mr-3">
                              <span class="fas fa-envelope color-primary rounded-circle p-3"></span>
                            </div>
                            <div class="contact-text">
                              <h5 class="mb-1">Email Address</h5>
                              <p>
                                service@turtltech.com
                              </p>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact