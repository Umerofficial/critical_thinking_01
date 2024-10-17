import React from "react";

function Contact() {
  return (
    <div className="main-page-wrapper">
  <div
    aria-hidden="true"
    className="modal fade"
    id="loginModal"
    tabIndex="-1"
  >
    <div className="modal-dialog modal-fullscreen modal-dialog-centered">
      <div className="container">
        <div className="user-data-form modal-content">
          <button
            aria-label="Close"
            className="btn-close"
            data-bs-dismiss="modal"
            type="button"
          />
          <div className="form-wrapper m-auto">
            <ul className="nav nav-tabs w-100">
              <li className="nav-item">
                <button className="nav-link active">
                  Login
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link ">
                  Signup
                </button>
              </li>
            </ul>
            <div className="tab-content mt-30">
              <div className="tab-pane fade show active">
                <div className="text-center mb-20">
                  <h2>
                    Welcome Back!
                  </h2>
                  <p className="fs-20 color-dark">
                    Still don't have an account?{' '}
                    <a href="#">
                      Sign                                                up
                    </a>
                  </p>
                </div>
                <form>
                  <div className="row">
                    <div className="col-12">
                      <div className="input-group-meta position-relative mb-25">
                        <label>
                          Email*
                        </label>
                        <input
                          name="email"
                          placeholder="Youremail@gmail.com"
                          type="email"
                        />
                        <p className="form_error" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="input-group-meta position-relative mb-20">
                        <label>
                          Password*
                        </label>
                        <input
                          className="pass_log_id"
                          name="password"
                          placeholder="Enter Password"
                          type="password"
                        />
                        <span className="placeholder_icon">
                          <span className="passVicon ">
                            <img
                              alt=""
                              data-nimg="1"
                              decoding="async"
                              height="16"
                              loading="lazy"
                              src="/assets/static/media/icon_68.f3a1521f.svg"
                              style={{
                                color: 'transparent'
                              }}
                              width="24"
                            />
                          </span>
                        </span>
                        <p className="form_error" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="agreement-checkbox d-flex justify-content-between align-items-center">
                        <div>
                          <input
                            id="remember"
                            type="checkbox"
                          />
                          <label htmlFor="remember">
                            Keep me logged in
                          </label>
                        </div>
                        <a href="#">
                          Forget Password?
                        </a>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn-two w-100 text-uppercase d-block mt-20"
                        type="submit"
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="tab-pane fade ">
                <div className="text-center mb-20">
                  <h2>
                    Register
                  </h2>
                  <p className="fs-20 color-dark">
                    Already have an account?{' '}
                    <a href="#">
                      Login
                    </a>
                  </p>
                </div>
                <form>
                  <div className="row">
                    <div className="col-12">
                      <div className="input-group-meta position-relative mb-25">
                        <label>
                          Name*
                        </label>
                        <input
                          name="name"
                          placeholder="Zubayer Hasan"
                          type="text"
                        />
                        <p className="form_error" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="input-group-meta position-relative mb-25">
                        <label>
                          Email*
                        </label>
                        <input
                          name="email"
                          placeholder="Youremail@gmail.com"
                          type="email"
                        />
                        <p className="form_error" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="input-group-meta position-relative mb-20">
                        <label>
                          Password*
                        </label>
                        <input
                          className="pass_log_id"
                          name="password"
                          placeholder="Enter Password"
                          type="password"
                        />
                        <span className="placeholder_icon">
                          <span className="passVicon ">
                            <img
                              alt=""
                              data-nimg="1"
                              decoding="async"
                              height="16"
                              loading="lazy"
                              src="/assets/static/media/icon_68.f3a1521f.svg"
                              style={{
                                color: 'transparent'
                              }}
                              width="24"
                            />
                          </span>
                        </span>
                        <p className="form_error" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="agreement-checkbox d-flex justify-content-between align-items-center">
                        <div>
                          <input
                            id="remember2"
                            type="checkbox"
                          />
                          <label htmlFor="remember2">
                            By hitting the "Register" button,                                                            you agree to the{' '}
                            <a href="#">
                              Terms conditions
                            </a>
                            {' '}&{' '}
                            <a href="#">
                              Privacy Policy
                            </a>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn-two w-100 text-uppercase d-block mt-20"
                        type="submit"
                      >
                        SIGN UP
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="d-flex align-items-center mt-30 mb-10">
              <div className="line" />
              <span className="pe-3 ps-3 fs-6">
                OR
              </span>
              <div className="line" />
            </div>
            <div className="row">
              <div className="col-sm-6">
                <a
                  className="social-use-btn d-flex align-items-center justify-content-center tran3s w-100 mt-10"
                  href="#"
                >
                  <img
                    alt=""
                    data-nimg="1"
                    decoding="async"
                    height="25"
                    loading="lazy"
                    src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fgoogle.d4e9d6fc.png&w=48&q=75"
                    srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fgoogle.d4e9d6fc.png&w=32&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fgoogle.d4e9d6fc.png&w=48&q=75 2x"
                    style={{
                      color: 'transparent'
                    }}
                    width="24"
                  />
                  <span className="ps-3">
                    Signup with Google
                  </span>
                </a>
              </div>
              <div className="col-sm-6">
                <a
                  className="social-use-btn d-flex align-items-center justify-content-center tran3s w-100 mt-10"
                  href="#"
                >
                  <img
                    alt=""
                    data-nimg="1"
                    decoding="async"
                    height="23"
                    loading="lazy"
                    src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Ffacebook.41e4c86e.png&w=48&q=75"
                    srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Ffacebook.41e4c86e.png&w=32&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Ffacebook.41e4c86e.png&w=48&q=75 2x"
                    style={{
                      color: 'transparent'
                    }}
                    width="22"
                  />
                  <span className="ps-3">
                    Signup with Facebook
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="contact-us border-top mt-130 xl-mt-100 pt-80 lg-pt-60">
    <div className="container">
      <div className="row">
        <div className="col-xxl-9 col-xl-8 col-lg-10 m-auto">
          <div className="title-one text-center wow fadeInUp">
            <h3>
              Questions? Feel Free to Reach Out Via Message.
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div className="address-banner wow fadeInUp mt-60 lg-mt-40">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-center justify-content-lg-between">
          <div className="block position-relative undefined z-1 mt-25">
            <div className="d-xl-flex align-items-center">
              <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                <img
                  alt=""
                  className="lazy-img"
                  data-nimg="1"
                  decoding="async"
                  height="27"
                  loading="lazy"
                  src="/assets/static/media/icon_39.61aa071f.svg"
                  style={{
                    color: 'transparent'
                  }}
                  width="21"
                />
              </div>
              <div className="text">
                <p className="fs-22">
                  We’r always happy to help.
                </p>
                <a
                  className="tran3s"
                  href="#"
                >
                  ask@homy.com
                </a>
              </div>
            </div>
          </div>
          <div className="block position-relative skew-line z-1 mt-25">
            <div className="d-xl-flex align-items-center">
              <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                <img
                  alt=""
                  className="lazy-img"
                  data-nimg="1"
                  decoding="async"
                  height="27"
                  loading="lazy"
                  src="/assets/static/media/icon_39.61aa071f.svg"
                  style={{
                    color: 'transparent'
                  }}
                  width="21"
                />
              </div>
              <div className="text">
                <p className="fs-22">
                  Our hotline number
                </p>
                <a
                  className="tran3s"
                  href="#"
                >
                  +757 699 4478,
                </a>
                <a
                  className="tran3s"
                  href="#"
                >
                  +991 377 9731
                </a>
              </div>
            </div>
          </div>
          <div className="block position-relative undefined z-1 mt-25">
            <div className="d-xl-flex align-items-center">
              <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                <img
                  alt=""
                  className="lazy-img"
                  data-nimg="1"
                  decoding="async"
                  height="27"
                  loading="lazy"
                  src="/assets/static/media/icon_39.61aa071f.svg"
                  style={{
                    color: 'transparent'
                  }}
                  width="21"
                />
              </div>
              <div className="text">
                <p className="fs-22">
                  Live chat
                </p>
                <a
                  className="tran3s"
                  href="#"
                >
                  www.homylivechat.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-pink mt-150 xl-mt-120 md-mt-80">
      <div className="row">
        <div className="col-xl-7 col-lg-6">
          <div className="form-style-one wow fadeInUp">
            <form>
              <h3>
                Send Message
              </h3>
              <div className="messages" />
              <div className="row controls">
                <div className="col-12">
                  <div className="input-group-meta form-group mb-30">
                    <label htmlFor="">
                      Name*
                    </label>
                    <input
                      name="user_name"
                      placeholder="Your Name*"
                      type="text"
                    />
                    <p className="form_error" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="input-group-meta form-group mb-40">
                    <label htmlFor="">
                      Email*
                    </label>
                    <input
                      name="user_email"
                      placeholder="Email Address*"
                      type="email"
                    />
                    <p className="form_error" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="input-group-meta form-group mb-35">
                    <textarea
                      name="message"
                      placeholder="Your message*"
                    />
                    <p className="form_error" />
                  </div>
                </div>
                <div className="col-12">
                  <button
                    className="btn-nine text-uppercase rounded-3 fw-normal w-100"
                    type="submit"
                  >
                    Send                                            Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-xl-5 col-lg-6 d-flex order-lg-first">
          <div className="contact-map-banner w-100">
            <div className="gmap_canvas h-100 w-100">
              <iframe
                className="gmap_iframe h-100 w-100"
                src="https://maps.google.com/maps?width=600&height=400&hl=en&q=dhaka collage&t=&z=12&ie=UTF8&iwloc=B&output=embed"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default Contact;
