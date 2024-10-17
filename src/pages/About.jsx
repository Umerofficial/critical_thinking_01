import React from "react";
function About() {
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
  <div className="inner-banner-one inner-banner bg-pink text-center z-1 pt-160 lg-pt-130 pb-160 xl-pb-120 md-pb-80 position-relative">
    <div className="container">
      <h3 className="mb-35 xl-mb-20 pt-15">
        About Agency
      </h3>
      <ul className="theme-breadcrumb style-none d-inline-flex align-items-center justify-content-center position-relative z-1 bottom-line">
        <li>
          <a href="/">
            Home
          </a>
        </li>
        <li>
          /
        </li>
        <li>
          About us
        </li>
      </ul>
    </div>
    <img
      alt=""
      className="lazy-img shapes w-100 illustration"
      data-nimg="1"
      decoding="async"
      height="362"
      loading="lazy"
      src="/assets/static/media/ils_07.d461ffd0.svg"
      style={{
        color: 'transparent'
      }}
      width="1800"
    />
  </div>
  <div className="block-feature-two mt-150 xl-mt-100">
    <div className="container">
      <div className="row gx-xl-5">
        <div className="col-lg-6 wow fadeInLeft">
          <div className="me-xxl-4">
            <div className="title-one mb-60 lg-mb-40">
              <div className="upper-title">
                About us
              </div>
              <h3>
                Secure your{' '}
                <span>
                  family's
                  <img
                    alt=""
                    className="lazy-img"
                    data-nimg="1"
                    decoding="async"
                    height="18"
                    loading="lazy"
                    src="/assets/static/media/title_shape_06.81b8cc1f.svg"
                    style={{
                      color: 'transparent'
                    }}
                    width="269"
                  />
                </span>
                {' '}Dream home.
              </h3>
              <p className="fs-22">
                Our founders Dustin Moskovitz and Justin Rosenstein met while leading                                    Engineering .
              </p>
            </div>
            <a
              className="btn-two"
              href="/contact"
            >
              Contact Us
            </a>
            <div className="counter-wrapper border-top pt-40 md-pt-10 mt-65 md-mt-40">
              <div className="row">
                <div className="col-xxl-6 col-sm-5">
                  <div className="counter-block-one mt-20">
                    <div className="main-count fw-500 color-dark">
                      <span className="counter">
                        <span />
                        <span />
                      </span>
                      %
                    </div>
                    <span>
                      Low                                                interest rate
                    </span>
                  </div>
                </div>
                <div className="col-xxl-6 col-sm-7">
                  <div className="counter-block-one mt-20">
                    <div className="main-count fw-500 color-dark">
                      $
                      <span className="counter">
                        <span />
                        <span />
                      </span>
                      b+
                    </div>
                    <span>
                      Cumulative trading volume
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 wow fadeInRight">
          <div className="block-two md-mt-40">
            <div className="bg-wrapper">
              <h5>
                Who we are?
              </h5>
              <p className="fs-22 lh-lg mt-20">
                Our founders Dustin Moskovitz & Justin Rosenstein met                                    leading Engineering teams at Facebook. As operations scaled, they grew frustrated by                                    how difficult coordinate
              </p>
              <h5 className="top-line">
                Our Mission{' '}
              </h5>
              <p className="fs-22 lh-lg mt-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,                                    sed do eiusmod incididunt ut labore et dolore aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="video-banner-one mt-150 xl-mt-120 md-mt-80">
    <div className="container">
      <div
        className="bg-wrapper position-relative z-1 overflow-hidden d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: 'url(/assets/images/media/img_50.jpg)'
        }}
      >
        <a
          className="fancybox video-icon d-flex align-items-center justify-content-center rounded-circle tran3s"
          style={{
            cursor: 'pointer'
          }}
        >
          <i className="fa-solid fa-play" />
        </a>
      </div>
    </div>
  </div>
  <div className="block-feature-five position-relative z-1 pb-130 xl-pb-100 lg-pb-80  pt-170 xl-pt-120">
    <div className="container">
      <div className="row">
        <div className="col-xl-8 m-auto">
          <div className="title-one text-center mb-35 lg-mb-20">
            <h3>
              We’r here to help{' '}
              <br />
              {' '}you get your{' '}
              <span>
                dream home
                <img
                  alt=""
                  className="lazy-img"
                  data-nimg="1"
                  decoding="async"
                  height="19"
                  loading="lazy"
                  src="/assets/static/media/title_shape_07.a50f5241.svg"
                  style={{
                    color: 'transparent'
                  }}
                  width="405"
                />
              </span>
            </h3>
            <p className="fs-24 color-dark">
              It’s easy to start with us with these simple steps
            </p>
          </div>
        </div>
      </div>
      <div className="row justify-content-between">
        <div className="col-xxl-11 m-auto">
          <div className="row gx-xl-5 justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="card-style-one text-center wow fadeInUp mt-40 undefined">
                <img
                  alt=""
                  className="lazy-img m-auto icon"
                  data-nimg="1"
                  decoding="async"
                  height="220"
                  loading="lazy"
                  src="/assets/static/media/icon_07.0d2e75df.svg"
                  style={{
                    color: 'transparent'
                  }}
                  width="220"
                />
                <h5 className="mt-50 lg-mt-30 mb-15">
                  Create Account
                </h5>
                <p className="pe-xxl-4 ps-xxl-4">
                  It’s very easy to open an account and start your                                        journey.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="card-style-one text-center wow fadeInUp mt-40 arrow position-relative">
                <img
                  alt=""
                  className="lazy-img m-auto icon"
                  data-nimg="1"
                  decoding="async"
                  height="220"
                  loading="lazy"
                  src="/assets/static/media/icon_08.c4dbbad5.svg"
                  style={{
                    color: 'transparent'
                  }}
                  width="220"
                />
                <h5 className="mt-50 lg-mt-30 mb-15">
                  Find Home
                </h5>
                <p className="pe-xxl-4 ps-xxl-4">
                  Complete your profile with all the info to get                                        attention of client.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="card-style-one text-center wow fadeInUp mt-40 undefined">
                <img
                  alt=""
                  className="lazy-img m-auto icon"
                  data-nimg="1"
                  decoding="async"
                  height="220"
                  loading="lazy"
                  src="/assets/static/media/icon_09.063f8e9d.svg"
                  style={{
                    color: 'transparent'
                  }}
                  width="220"
                />
                <h5 className="mt-50 lg-mt-30 mb-15">
                  Quick Process
                </h5>
                <p className="pe-xxl-4 ps-xxl-4">
                  Apply & get your preferable jobs with all the                                        requirements and get it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img
      alt=""
      className="lazy-img shapes shape_01"
      data-nimg="1"
      decoding="async"
      height="866"
      loading="lazy"
      src="/assets/static/media/shape_07.546ad090.svg"
      style={{
        color: 'transparent'
      }}
      width="336"
    />
    <img
      alt=""
      className="lazy-img shapes shape_02"
      data-nimg="1"
      decoding="async"
      height="870"
      loading="lazy"
      src="/assets/static/media/shape_08.ceec77d6.svg"
      style={{
        color: 'transparent'
      }}
      width="311"
    />
  </div>
  <div className="feedback-section-six bg-pink-two position-relative z-1 pt-110 xl-pt-80 pb-100 xl-pb-80 ">
    <div className="container ">
      <div className="title-one text-center mb-80 xl-mb-50 md-mb-30">
        <h3>
          Client Feedback
        </h3>
        <p className="fs-20 mt-xs">
          Client satisfaction speaks louder than our words. Hear from them.
        </p>
      </div>
      <div
        className="slick-slider feedback-slider-three slick-initialized"
        dir="ltr"
      >
        <div
          className="slick-list"
          style={{
            padding: '0px 0px'
          }}
        >
          <div
            className="slick-track"
            style={{
              left: '-124.99999999999997%',
              width: '450%'
            }}
          >
            <div
              aria-hidden="true"
              className="slick-slide slick-center slick-cloned"
              data-index="-3"
              style={{
                width: '11.11111111111111%'
              }}
              tabIndex="-1"
            >
              <div>
                <div
                  className="item"
                  style={{
                    display: 'inline-block',
                    width: '100%'
                  }}
                  tabIndex="-1"
                >
                  <div className="feedback-block-six rounded-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <ul className="rating style-none d-flex">
                        <li>
                          <span
                            className="style-module_starRatingWrap__q-lJC"
                            style={{
                              direction: 'ltr'
                            }}
                          >
                            <span
                              aria-hidden="true"
                              className="style-module_simpleStarRating__nWUxf react-simple-star-rating"
                            >
                              <span
                                className="style-module_emptyIcons__Bg-FZ empty-icons"
                                style={{
                                  color: '#cccccc'
                                }}
                              >
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                              </span>
                              <span
                                className="style-module_fillIcons__6---A filled-icons"
                                style={{
                                  color: '#ffbc0b',
                                  left: '0',
                                  width: '5%'
                                }}
                                title="0.25 out of 5"
                              >
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                              </span>
                            </span>
                          </span>
                        </li>
                      </ul>
                      <img
                        alt=""
                        className="icon"
                        data-nimg="1"
                        decoding="async"
                        height="35"
                        loading="lazy"
                        src="/assets/static/media/icon_29.bad325e5.svg"
                        style={{
                          color: 'transparent'
                        }}
                        width="36"
                      />
                    </div>
                    <blockquote>
                      Game-changer! Boosted efficiency, simplified tasks, and saved                                                time. Highly recommended!
                    </blockquote>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="fs-20 m0">
                        Rashed Kabir,
                        <span className="fw-normal opacity-50">
                          Claifornia
                        </span>
                      </h6>
                      <img
                        alt=""
                        className="rounded-circle avatar"
                        data-nimg="1"
                        decoding="async"
                        height="60"
                        loading="lazy"
                        src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_01.dba05a5b.jpg&w=128&q=75"
                        srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_01.dba05a5b.jpg&w=64&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_01.dba05a5b.jpg&w=128&q=75 2x"
                        style={{
                          color: 'transparent'
                        }}
                        width="60"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="slick-slide slick-cloned"
              data-index="-2"
              style={{
                width: '11.11111111111111%'
              }}
              tabIndex="-1"
            >
              <div>
                <div
                  className="item"
                  style={{
                    display: 'inline-block',
                    width: '100%'
                  }}
                  tabIndex="-1"
                >
                  <div className="feedback-block-six rounded-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <ul className="rating style-none d-flex">
                        <li>
                          <span
                            className="style-module_starRatingWrap__q-lJC"
                            style={{
                              direction: 'ltr'
                            }}
                          >
                            <span
                              aria-hidden="true"
                              className="style-module_simpleStarRating__nWUxf react-simple-star-rating"
                            >
                              <span
                                className="style-module_emptyIcons__Bg-FZ empty-icons"
                                style={{
                                  color: '#cccccc'
                                }}
                              >
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                              </span>
                              <span
                                className="style-module_fillIcons__6---A filled-icons"
                                style={{
                                  color: '#ffbc0b',
                                  left: '0',
                                  width: '5%'
                                }}
                                title="0.25 out of 5"
                              >
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                              </span>
                            </span>
                          </span>
                        </li>
                      </ul>
                      <img
                        alt=""
                        className="icon"
                        data-nimg="1"
                        decoding="async"
                        height="35"
                        loading="lazy"
                        src="/assets/static/media/icon_29.bad325e5.svg"
                        style={{
                          color: 'transparent'
                        }}
                        width="36"
                      />
                    </div>
                    <blockquote>
                      Found our dream home. Great Business with them. simplified                                                tasks, and saved time. Thank You
                    </blockquote>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="fs-20 m0">
                        Jannat Ferdu,
                        <span className="fw-normal opacity-50">
                          Claifornia
                        </span>
                      </h6>
                      <img
                        alt=""
                        className="rounded-circle avatar"
                        data-nimg="1"
                        decoding="async"
                        height="60"
                        loading="lazy"
                        src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_02.f395a74d.jpg&w=128&q=75"
                        srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_02.f395a74d.jpg&w=64&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_02.f395a74d.jpg&w=128&q=75 2x"
                        style={{
                          color: 'transparent'
                        }}
                        width="60"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              aria-hidden="false"
              className="slick-slide slick-active slick-cloned"
              data-index="-1"
              style={{
                width: '11.11111111111111%'
              }}
              tabIndex="-1"
            >
              <div>
                <div
                  className="item"
                  style={{
                    display: 'inline-block',
                    width: '100%'
                  }}
                  tabIndex="-1"
                >
                  <div className="feedback-block-six rounded-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <ul className="rating style-none d-flex">
                        <li>
                          <span
                            className="style-module_starRatingWrap__q-lJC"
                            style={{
                              direction: 'ltr'
                            }}
                          >
                            <span
                              aria-hidden="true"
                              className="style-module_simpleStarRating__nWUxf react-simple-star-rating"
                            >
                              <span
                                className="style-module_emptyIcons__Bg-FZ empty-icons"
                                style={{
                                  color: '#cccccc'
                                }}
                              >
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                              </span>
                              <span
                                className="style-module_fillIcons__6---A filled-icons"
                                style={{
                                  color: '#ffbc0b',
                                  left: '0',
                                  width: '5%'
                                }}
                                title="0.25 out of 5"
                              >
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                              </span>
                            </span>
                          </span>
                        </li>
                      </ul>
                      <img
                        alt=""
                        className="icon"
                        data-nimg="1"
                        decoding="async"
                        height="35"
                        loading="lazy"
                        src="/assets/static/media/icon_29.bad325e5.svg"
                        style={{
                          color: 'transparent'
                        }}
                        width="36"
                      />
                    </div>
                    <blockquote>
                      Efficient and friendly service, guided us perfectly. Satisfied                                                with our new home. Thank you!
                    </blockquote>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="fs-20 m0">
                        Jubayer Hasan,
                        <span className="fw-normal opacity-50">
                          Claifornia
                        </span>
                      </h6>
                      <img
                        alt=""
                        className="rounded-circle avatar"
                        data-nimg="1"
                        decoding="async"
                        height="60"
                        loading="lazy"
                        src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_03.ce67483e.jpg&w=128&q=75"
                        srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_03.ce67483e.jpg&w=64&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_03.ce67483e.jpg&w=128&q=75 2x"
                        style={{
                          color: 'transparent'
                        }}
                        width="60"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              aria-hidden="false"
              className="slick-slide slick-active slick-center slick-current"
              data-index="0"
              style={{
                outline: 'none',
                width: '11.11111111111111%'
              }}
              tabIndex="-1"
            >
              <div>
                <div
                  className="item"
                  style={{
                    display: 'inline-block',
                    width: '100%'
                  }}
                  tabIndex="-1"
                >
                  <div className="feedback-block-six rounded-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <ul className="rating style-none d-flex">
                        <li>
                          <span
                            className="style-module_starRatingWrap__q-lJC"
                            style={{
                              direction: 'ltr'
                            }}
                          >
                            <span
                              aria-hidden="true"
                              className="style-module_simpleStarRating__nWUxf react-simple-star-rating"
                            >
                              <span
                                className="style-module_emptyIcons__Bg-FZ empty-icons"
                                style={{
                                  color: '#cccccc'
                                }}
                              >
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                              </span>
                              <span
                                className="style-module_fillIcons__6---A filled-icons"
                                style={{
                                  color: '#ffbc0b',
                                  left: '0',
                                  width: '5%'
                                }}
                                title="0.25 out of 5"
                              >
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                              </span>
                            </span>
                          </span>
                        </li>
                      </ul>
                      <img
                        alt=""
                        className="icon"
                        data-nimg="1"
                        decoding="async"
                        height="35"
                        loading="lazy"
                        src="/assets/static/media/icon_29.bad325e5.svg"
                        style={{
                          color: 'transparent'
                        }}
                        width="36"
                      />
                    </div>
                    <blockquote>
                      Game-changer! Boosted efficiency, simplified tasks, and saved                                                time. Highly recommended!
                    </blockquote>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="fs-20 m0">
                        Rashed Kabir,
                        <span className="fw-normal opacity-50">
                          Claifornia
                        </span>
                      </h6>
                      <img
                        alt=""
                        className="rounded-circle avatar"
                        data-nimg="1"
                        decoding="async"
                        height="60"
                        loading="lazy"
                        src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_01.dba05a5b.jpg&w=128&q=75"
                        srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_01.dba05a5b.jpg&w=64&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_01.dba05a5b.jpg&w=128&q=75 2x"
                        style={{
                          color: 'transparent'
                        }}
                        width="60"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              aria-hidden="false"
              className="slick-slide slick-active"
              data-index="1"
              style={{
                outline: 'none',
                width: '11.11111111111111%'
              }}
              tabIndex="-1"
            >
              <div>
                <div
                  className="item"
                  style={{
                    display: 'inline-block',
                    width: '100%'
                  }}
                  tabIndex="-1"
                >
                  <div className="feedback-block-six rounded-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <ul className="rating style-none d-flex">
                        <li>
                          <span
                            className="style-module_starRatingWrap__q-lJC"
                            style={{
                              direction: 'ltr'
                            }}
                          >
                            <span
                              aria-hidden="true"
                              className="style-module_simpleStarRating__nWUxf react-simple-star-rating"
                            >
                              <span
                                className="style-module_emptyIcons__Bg-FZ empty-icons"
                                style={{
                                  color: '#cccccc'
                                }}
                              >
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                              </span>
                              <span
                                className="style-module_fillIcons__6---A filled-icons"
                                style={{
                                  color: '#ffbc0b',
                                  left: '0',
                                  width: '5%'
                                }}
                                title="0.25 out of 5"
                              >
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                              </span>
                            </span>
                          </span>
                        </li>
                      </ul>
                      <img
                        alt=""
                        className="icon"
                        data-nimg="1"
                        decoding="async"
                        height="35"
                        loading="lazy"
                        src="/assets/static/media/icon_29.bad325e5.svg"
                        style={{
                          color: 'transparent'
                        }}
                        width="36"
                      />
                    </div>
                    <blockquote>
                      Found our dream home. Great Business with them. simplified                                                tasks, and saved time. Thank You
                    </blockquote>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="fs-20 m0">
                        Jannat Ferdu,
                        <span className="fw-normal opacity-50">
                          Claifornia
                        </span>
                      </h6>
                      <img
                        alt=""
                        className="rounded-circle avatar"
                        data-nimg="1"
                        decoding="async"
                        height="60"
                        loading="lazy"
                        src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_02.f395a74d.jpg&w=128&q=75"
                        srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_02.f395a74d.jpg&w=64&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_02.f395a74d.jpg&w=128&q=75 2x"
                        style={{
                          color: 'transparent'
                        }}
                        width="60"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="slick-slide"
              data-index="2"
              style={{
                outline: 'none',
                width: '11.11111111111111%'
              }}
              tabIndex="-1"
            >
              <div>
                <div
                  className="item"
                  style={{
                    display: 'inline-block',
                    width: '100%'
                  }}
                  tabIndex="-1"
                >
                  <div className="feedback-block-six rounded-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <ul className="rating style-none d-flex">
                        <li>
                          <span
                            className="style-module_starRatingWrap__q-lJC"
                            style={{
                              direction: 'ltr'
                            }}
                          >
                            <span
                              aria-hidden="true"
                              className="style-module_simpleStarRating__nWUxf react-simple-star-rating"
                            >
                              <span
                                className="style-module_emptyIcons__Bg-FZ empty-icons"
                                style={{
                                  color: '#cccccc'
                                }}
                              >
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                              </span>
                              <span
                                className="style-module_fillIcons__6---A filled-icons"
                                style={{
                                  color: '#ffbc0b',
                                  left: '0',
                                  width: '5%'
                                }}
                                title="0.25 out of 5"
                              >
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                              </span>
                            </span>
                          </span>
                        </li>
                      </ul>
                      <img
                        alt=""
                        className="icon"
                        data-nimg="1"
                        decoding="async"
                        height="35"
                        loading="lazy"
                        src="/assets/static/media/icon_29.bad325e5.svg"
                        style={{
                          color: 'transparent'
                        }}
                        width="36"
                      />
                    </div>
                    <blockquote>
                      Efficient and friendly service, guided us perfectly. Satisfied                                                with our new home. Thank you!
                    </blockquote>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="fs-20 m0">
                        Jubayer Hasan,
                        <span className="fw-normal opacity-50">
                          Claifornia
                        </span>
                      </h6>
                      <img
                        alt=""
                        className="rounded-circle avatar"
                        data-nimg="1"
                        decoding="async"
                        height="60"
                        loading="lazy"
                        src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_03.ce67483e.jpg&w=128&q=75"
                        srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_03.ce67483e.jpg&w=64&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_03.ce67483e.jpg&w=128&q=75 2x"
                        style={{
                          color: 'transparent'
                        }}
                        width="60"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="slick-slide slick-center slick-cloned"
              data-index="3"
              style={{
                width: '11.11111111111111%'
              }}
              tabIndex="-1"
            >
              <div>
                <div
                  className="item"
                  style={{
                    display: 'inline-block',
                    width: '100%'
                  }}
                  tabIndex="-1"
                >
                  <div className="feedback-block-six rounded-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <ul className="rating style-none d-flex">
                        <li>
                          <span
                            className="style-module_starRatingWrap__q-lJC"
                            style={{
                              direction: 'ltr'
                            }}
                          >
                            <span
                              aria-hidden="true"
                              className="style-module_simpleStarRating__nWUxf react-simple-star-rating"
                            >
                              <span
                                className="style-module_emptyIcons__Bg-FZ empty-icons"
                                style={{
                                  color: '#cccccc'
                                }}
                              >
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                              </span>
                              <span
                                className="style-module_fillIcons__6---A filled-icons"
                                style={{
                                  color: '#ffbc0b',
                                  left: '0',
                                  width: '5%'
                                }}
                                title="0.25 out of 5"
                              >
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                              </span>
                            </span>
                          </span>
                        </li>
                      </ul>
                      <img
                        alt=""
                        className="icon"
                        data-nimg="1"
                        decoding="async"
                        height="35"
                        loading="lazy"
                        src="/assets/static/media/icon_29.bad325e5.svg"
                        style={{
                          color: 'transparent'
                        }}
                        width="36"
                      />
                    </div>
                    <blockquote>
                      Game-changer! Boosted efficiency, simplified tasks, and saved                                                time. Highly recommended!
                    </blockquote>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="fs-20 m0">
                        Rashed Kabir,
                        <span className="fw-normal opacity-50">
                          Claifornia
                        </span>
                      </h6>
                      <img
                        alt=""
                        className="rounded-circle avatar"
                        data-nimg="1"
                        decoding="async"
                        height="60"
                        loading="lazy"
                        src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_01.dba05a5b.jpg&w=128&q=75"
                        srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_01.dba05a5b.jpg&w=64&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_01.dba05a5b.jpg&w=128&q=75 2x"
                        style={{
                          color: 'transparent'
                        }}
                        width="60"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="slick-slide slick-cloned"
              data-index="4"
              style={{
                width: '11.11111111111111%'
              }}
              tabIndex="-1"
            >
              <div>
                <div
                  className="item"
                  style={{
                    display: 'inline-block',
                    width: '100%'
                  }}
                  tabIndex="-1"
                >
                  <div className="feedback-block-six rounded-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <ul className="rating style-none d-flex">
                        <li>
                          <span
                            className="style-module_starRatingWrap__q-lJC"
                            style={{
                              direction: 'ltr'
                            }}
                          >
                            <span
                              aria-hidden="true"
                              className="style-module_simpleStarRating__nWUxf react-simple-star-rating"
                            >
                              <span
                                className="style-module_emptyIcons__Bg-FZ empty-icons"
                                style={{
                                  color: '#cccccc'
                                }}
                              >
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                              </span>
                              <span
                                className="style-module_fillIcons__6---A filled-icons"
                                style={{
                                  color: '#ffbc0b',
                                  left: '0',
                                  width: '5%'
                                }}
                                title="0.25 out of 5"
                              >
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                              </span>
                            </span>
                          </span>
                        </li>
                      </ul>
                      <img
                        alt=""
                        className="icon"
                        data-nimg="1"
                        decoding="async"
                        height="35"
                        loading="lazy"
                        src="/assets/static/media/icon_29.bad325e5.svg"
                        style={{
                          color: 'transparent'
                        }}
                        width="36"
                      />
                    </div>
                    <blockquote>
                      Found our dream home. Great Business with them. simplified                                                tasks, and saved time. Thank You
                    </blockquote>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="fs-20 m0">
                        Jannat Ferdu,
                        <span className="fw-normal opacity-50">
                          Claifornia
                        </span>
                      </h6>
                      <img
                        alt=""
                        className="rounded-circle avatar"
                        data-nimg="1"
                        decoding="async"
                        height="60"
                        loading="lazy"
                        src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_02.f395a74d.jpg&w=128&q=75"
                        srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_02.f395a74d.jpg&w=64&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_02.f395a74d.jpg&w=128&q=75 2x"
                        style={{
                          color: 'transparent'
                        }}
                        width="60"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="slick-slide slick-cloned"
              data-index="5"
              style={{
                width: '11.11111111111111%'
              }}
              tabIndex="-1"
            >
              <div>
                <div
                  className="item"
                  style={{
                    display: 'inline-block',
                    width: '100%'
                  }}
                  tabIndex="-1"
                >
                  <div className="feedback-block-six rounded-4">
                    <div className="d-flex justify-content-between align-items-center">
                      <ul className="rating style-none d-flex">
                        <li>
                          <span
                            className="style-module_starRatingWrap__q-lJC"
                            style={{
                              direction: 'ltr'
                            }}
                          >
                            <span
                              aria-hidden="true"
                              className="style-module_simpleStarRating__nWUxf react-simple-star-rating"
                            >
                              <span
                                className="style-module_emptyIcons__Bg-FZ empty-icons"
                                style={{
                                  color: '#cccccc'
                                }}
                              >
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                              </span>
                              <span
                                className="style-module_fillIcons__6---A filled-icons"
                                style={{
                                  color: '#ffbc0b',
                                  left: '0',
                                  width: '5%'
                                }}
                                title="0.25 out of 5"
                              >
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                                <svg
                                  className="star-svg"
                                  fill="currentColor"
                                  height="25"
                                  stroke="currentColor"
                                  strokeWidth="0"
                                  viewBox="0 0 24 24"
                                  width="25"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                                  </path>
                                </svg>
                              </span>
                            </span>
                          </span>
                        </li>
                      </ul>
                      <img
                        alt=""
                        className="icon"
                        data-nimg="1"
                        decoding="async"
                        height="35"
                        loading="lazy"
                        src="/assets/static/media/icon_29.bad325e5.svg"
                        style={{
                          color: 'transparent'
                        }}
                        width="36"
                      />
                    </div>
                    <blockquote>
                      Efficient and friendly service, guided us perfectly. Satisfied                                                with our new home. Thank you!
                    </blockquote>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6 className="fs-20 m0">
                        Jubayer Hasan,
                        <span className="fw-normal opacity-50">
                          Claifornia
                        </span>
                      </h6>
                      <img
                        alt=""
                        className="rounded-circle avatar"
                        data-nimg="1"
                        decoding="async"
                        height="60"
                        loading="lazy"
                        src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_03.ce67483e.jpg&w=128&q=75"
                        srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_03.ce67483e.jpg&w=64&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_03.ce67483e.jpg&w=128&q=75 2x"
                        style={{
                          color: 'transparent'
                        }}
                        width="60"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul
          className="slick-dots"
          style={{
            display: 'block'
          }}
        >
          <li className="slick-active">
            <button>
              1
            </button>
          </li>
          <li className="">
            <button>
              2
            </button>
          </li>
          <li className="">
            <button>
              3
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="agent-section-one position-relative z-1 xl-mt-120 mt-150">
    <div className="container ">
      <div className="position-relative">
        <div className="title-one mb-85 lg-mb-50 wow fadeInLeft">
          <h3>
            Our{' '}
            <span>
              Agents
              <img
                alt=""
                className="lazy-img"
                data-nimg="1"
                decoding="async"
                height="18"
                loading="lazy"
                src="/assets/static/media/title_shape_05.0fcc1421.svg"
                style={{
                  color: 'transparent'
                }}
                width="231"
              />
            </span>
          </h3>
          <p className="fs-22 mt-xs">
            Lorem is placeholder text commonly used graphic{' '}
          </p>
        </div>
        <div className="wrapper position-relative z-1">
          <div
            className="slick-slider agent-slider-one slick-initialized"
            dir="ltr"
          >
            <div className="slick-list">
              <div
                className="slick-track"
                style={{
                  left: '-100%',
                  width: '350%'
                }}
              >
                <div
                  aria-hidden="true"
                  className="slick-slide slick-cloned"
                  data-index="-4"
                  style={{
                    width: '7.142857142857143%'
                  }}
                  tabIndex="-1"
                >
                  <div>
                    <div
                      className="item"
                      style={{
                        display: 'inline-block',
                        width: '100%'
                      }}
                      tabIndex="-1"
                    >
                      <div className="agent-card-one position-relative">
                        <div className="img border-20">
                          <img
                            alt=""
                            className="w-100 tran5s"
                            data-nimg="1"
                            decoding="async"
                            height="400"
                            loading="lazy"
                            src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_02.e5e232ea.jpg&w=750&q=75"
                            srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_02.e5e232ea.jpg&w=384&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_02.e5e232ea.jpg&w=750&q=75 2x"
                            style={{
                              color: 'transparent'
                            }}
                            width="330"
                          />
                        </div>
                        <div className="text-center">
                          <h6>
                            Chris Matial
                          </h6>
                          <a
                            className="stretched-link"
                            href="/agent_details"
                          >
                            Retailer
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  className="slick-slide slick-cloned"
                  data-index="-3"
                  style={{
                    width: '7.142857142857143%'
                  }}
                  tabIndex="-1"
                >
                  <div>
                    <div
                      className="item"
                      style={{
                        display: 'inline-block',
                        width: '100%'
                      }}
                      tabIndex="-1"
                    >
                      <div className="agent-card-one position-relative">
                        <div className="img border-20">
                          <img
                            alt=""
                            className="w-100 tran5s"
                            data-nimg="1"
                            decoding="async"
                            height="400"
                            loading="lazy"
                            src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_03.92ffc8ed.jpg&w=750&q=75"
                            srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_03.92ffc8ed.jpg&w=384&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_03.92ffc8ed.jpg&w=750&q=75 2x"
                            style={{
                              color: 'transparent'
                            }}
                            width="330"
                          />
                        </div>
                        <div className="text-center">
                          <h6>
                            Jubayer Al Hasan
                          </h6>
                          <a
                            className="stretched-link"
                            href="/agent_details"
                          >
                            Marketing Expert
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  className="slick-slide slick-cloned"
                  data-index="-2"
                  style={{
                    width: '7.142857142857143%'
                  }}
                  tabIndex="-1"
                >
                  <div>
                    <div
                      className="item"
                      style={{
                        display: 'inline-block',
                        width: '100%'
                      }}
                      tabIndex="-1"
                    >
                      <div className="agent-card-one position-relative">
                        <div className="img border-20">
                          <img
                            alt=""
                            className="w-100 tran5s"
                            data-nimg="1"
                            decoding="async"
                            height="400"
                            loading="lazy"
                            src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_04.baddfb45.jpg&w=750&q=75"
                            srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_04.baddfb45.jpg&w=384&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_04.baddfb45.jpg&w=750&q=75 2x"
                            style={{
                              color: 'transparent'
                            }}
                            width="330"
                          />
                        </div>
                        <div className="text-center">
                          <h6>
                            Jannatul Ferdaus
                          </h6>
                          <a
                            className="stretched-link"
                            href="/agent_details"
                          >
                            Broker
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  className="slick-slide slick-cloned"
                  data-index="-1"
                  style={{
                    width: '7.142857142857143%'
                  }}
                  tabIndex="-1"
                >
                  <div>
                    <div
                      className="item"
                      style={{
                        display: 'inline-block',
                        width: '100%'
                      }}
                      tabIndex="-1"
                    >
                      <div className="agent-card-one position-relative">
                        <div className="img border-20">
                          <img
                            alt=""
                            className="w-100 tran5s"
                            data-nimg="1"
                            decoding="async"
                            height="400"
                            loading="lazy"
                            src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_05.5cb43cd4.jpg&w=750&q=75"
                            srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_05.5cb43cd4.jpg&w=384&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_05.5cb43cd4.jpg&w=750&q=75 2x"
                            style={{
                              color: 'transparent'
                            }}
                            width="330"
                          />
                        </div>
                        <div className="text-center">
                          <h6>
                            Chris Matial
                          </h6>
                          <a
                            className="stretched-link"
                            href="/agent_details"
                          >
                            Broker
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  aria-hidden="false"
                  className="slick-slide slick-active slick-current"
                  data-index="0"
                  style={{
                    outline: 'none',
                    width: '7.142857142857143%'
                  }}
                  tabIndex="-1"
                >
                  <div>
                    <div
                      className="item"
                      style={{
                        display: 'inline-block',
                        width: '100%'
                      }}
                      tabIndex="-1"
                    >
                      <div className="agent-card-one position-relative">
                        <div className="img border-20">
                          <img
                            alt=""
                            className="w-100 tran5s"
                            data-nimg="1"
                            decoding="async"
                            height="400"
                            loading="lazy"
                            src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_01.d7744e58.jpg&w=750&q=75"
                            srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_01.d7744e58.jpg&w=384&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_01.d7744e58.jpg&w=750&q=75 2x"
                            style={{
                              color: 'transparent'
                            }}
                            width="330"
                          />
                        </div>
                        <div className="text-center">
                          <h6>
                            Mark Filo
                          </h6>
                          <a
                            className="stretched-link"
                            href="/agent_details"
                          >
                            CEO & Founder
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  aria-hidden="false"
                  className="slick-slide slick-active"
                  data-index="1"
                  style={{
                    outline: 'none',
                    width: '7.142857142857143%'
                  }}
                  tabIndex="-1"
                >
                  <div>
                    <div
                      className="item"
                      style={{
                        display: 'inline-block',
                        width: '100%'
                      }}
                      tabIndex="-1"
                    >
                      <div className="agent-card-one position-relative">
                        <div className="img border-20">
                          <img
                            alt=""
                            className="w-100 tran5s"
                            data-nimg="1"
                            decoding="async"
                            height="400"
                            loading="lazy"
                            src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_02.e5e232ea.jpg&w=750&q=75"
                            srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_02.e5e232ea.jpg&w=384&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_02.e5e232ea.jpg&w=750&q=75 2x"
                            style={{
                              color: 'transparent'
                            }}
                            width="330"
                          />
                        </div>
                        <div className="text-center">
                          <h6>
                            Chris Matial
                          </h6>
                          <a
                            className="stretched-link"
                            href="/agent_details"
                          >
                            Retailer
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  aria-hidden="false"
                  className="slick-slide slick-active"
                  data-index="2"
                  style={{
                    outline: 'none',
                    width: '7.142857142857143%'
                  }}
                  tabIndex="-1"
                >
                  <div>
                    <div
                      className="item"
                      style={{
                        display: 'inline-block',
                        width: '100%'
                      }}
                      tabIndex="-1"
                    >
                      <div className="agent-card-one position-relative">
                        <div className="img border-20">
                          <img
                            alt=""
                            className="w-100 tran5s"
                            data-nimg="1"
                            decoding="async"
                            height="400"
                            loading="lazy"
                            src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_03.92ffc8ed.jpg&w=750&q=75"
                            srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_03.92ffc8ed.jpg&w=384&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_03.92ffc8ed.jpg&w=750&q=75 2x"
                            style={{
                              color: 'transparent'
                            }}
                            width="330"
                          />
                        </div>
                        <div className="text-center">
                          <h6>
                            Jubayer Al Hasan
                          </h6>
                          <a
                            className="stretched-link"
                            href="/agent_details"
                          >
                            Marketing Expert
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  aria-hidden="false"
                  className="slick-slide slick-active"
                  data-index="3"
                  style={{
                    outline: 'none',
                    width: '7.142857142857143%'
                  }}
                  tabIndex="-1"
                >
                  <div>
                    <div
                      className="item"
                      style={{
                        display: 'inline-block',
                        width: '100%'
                      }}
                      tabIndex="-1"
                    >
                      <div className="agent-card-one position-relative">
                        <div className="img border-20">
                          <img
                            alt=""
                            className="w-100 tran5s"
                            data-nimg="1"
                            decoding="async"
                            height="400"
                            loading="lazy"
                            src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_04.baddfb45.jpg&w=750&q=75"
                            srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_04.baddfb45.jpg&w=384&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_04.baddfb45.jpg&w=750&q=75 2x"
                            style={{
                              color: 'transparent'
                            }}
                            width="330"
                          />
                        </div>
                        <div className="text-center">
                          <h6>
                            Jannatul Ferdaus
                          </h6>
                          <a
                            className="stretched-link"
                            href="/agent_details"
                          >
                            Broker
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  className="slick-slide"
                  data-index="4"
                  style={{
                    outline: 'none',
                    width: '7.142857142857143%'
                  }}
                  tabIndex="-1"
                >
                  <div>
                    <div
                      className="item"
                      style={{
                        display: 'inline-block',
                        width: '100%'
                      }}
                      tabIndex="-1"
                    >
                      <div className="agent-card-one position-relative">
                        <div className="img border-20">
                          <img
                            alt=""
                            className="w-100 tran5s"
                            data-nimg="1"
                            decoding="async"
                            height="400"
                            loading="lazy"
                            src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_05.5cb43cd4.jpg&w=750&q=75"
                            srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_05.5cb43cd4.jpg&w=384&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_05.5cb43cd4.jpg&w=750&q=75 2x"
                            style={{
                              color: 'transparent'
                            }}
                            width="330"
                          />
                        </div>
                        <div className="text-center">
                          <h6>
                            Chris Matial
                          </h6>
                          <a
                            className="stretched-link"
                            href="/agent_details"
                          >
                            Broker
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  className="slick-slide slick-cloned"
                  data-index="5"
                  style={{
                    width: '7.142857142857143%'
                  }}
                  tabIndex="-1"
                >
                  <div>
                    <div
                      className="item"
                      style={{
                        display: 'inline-block',
                        width: '100%'
                      }}
                      tabIndex="-1"
                    >
                      <div className="agent-card-one position-relative">
                        <div className="img border-20">
                          <img
                            alt=""
                            className="w-100 tran5s"
                            data-nimg="1"
                            decoding="async"
                            height="400"
                            loading="lazy"
                            src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_01.d7744e58.jpg&w=750&q=75"
                            srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_01.d7744e58.jpg&w=384&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_01.d7744e58.jpg&w=750&q=75 2x"
                            style={{
                              color: 'transparent'
                            }}
                            width="330"
                          />
                        </div>
                        <div className="text-center">
                          <h6>
                            Mark Filo
                          </h6>
                          <a
                            className="stretched-link"
                            href="/agent_details"
                          >
                            CEO & Founder
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  className="slick-slide slick-cloned"
                  data-index="6"
                  style={{
                    width: '7.142857142857143%'
                  }}
                  tabIndex="-1"
                >
                  <div>
                    <div
                      className="item"
                      style={{
                        display: 'inline-block',
                        width: '100%'
                      }}
                      tabIndex="-1"
                    >
                      <div className="agent-card-one position-relative">
                        <div className="img border-20">
                          <img
                            alt=""
                            className="w-100 tran5s"
                            data-nimg="1"
                            decoding="async"
                            height="400"
                            loading="lazy"
                            src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_02.e5e232ea.jpg&w=750&q=75"
                            srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_02.e5e232ea.jpg&w=384&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_02.e5e232ea.jpg&w=750&q=75 2x"
                            style={{
                              color: 'transparent'
                            }}
                            width="330"
                          />
                        </div>
                        <div className="text-center">
                          <h6>
                            Chris Matial
                          </h6>
                          <a
                            className="stretched-link"
                            href="/agent_details"
                          >
                            Retailer
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  className="slick-slide slick-cloned"
                  data-index="7"
                  style={{
                    width: '7.142857142857143%'
                  }}
                  tabIndex="-1"
                >
                  <div>
                    <div
                      className="item"
                      style={{
                        display: 'inline-block',
                        width: '100%'
                      }}
                      tabIndex="-1"
                    >
                      <div className="agent-card-one position-relative">
                        <div className="img border-20">
                          <img
                            alt=""
                            className="w-100 tran5s"
                            data-nimg="1"
                            decoding="async"
                            height="400"
                            loading="lazy"
                            src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_03.92ffc8ed.jpg&w=750&q=75"
                            srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_03.92ffc8ed.jpg&w=384&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_03.92ffc8ed.jpg&w=750&q=75 2x"
                            style={{
                              color: 'transparent'
                            }}
                            width="330"
                          />
                        </div>
                        <div className="text-center">
                          <h6>
                            Jubayer Al Hasan
                          </h6>
                          <a
                            className="stretched-link"
                            href="/agent_details"
                          >
                            Marketing Expert
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  className="slick-slide slick-cloned"
                  data-index="8"
                  style={{
                    width: '7.142857142857143%'
                  }}
                  tabIndex="-1"
                >
                  <div>
                    <div
                      className="item"
                      style={{
                        display: 'inline-block',
                        width: '100%'
                      }}
                      tabIndex="-1"
                    >
                      <div className="agent-card-one position-relative">
                        <div className="img border-20">
                          <img
                            alt=""
                            className="w-100 tran5s"
                            data-nimg="1"
                            decoding="async"
                            height="400"
                            loading="lazy"
                            src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_04.baddfb45.jpg&w=750&q=75"
                            srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_04.baddfb45.jpg&w=384&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_04.baddfb45.jpg&w=750&q=75 2x"
                            style={{
                              color: 'transparent'
                            }}
                            width="330"
                          />
                        </div>
                        <div className="text-center">
                          <h6>
                            Jannatul Ferdaus
                          </h6>
                          <a
                            className="stretched-link"
                            href="/agent_details"
                          >
                            Broker
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  className="slick-slide slick-cloned"
                  data-index="9"
                  style={{
                    width: '7.142857142857143%'
                  }}
                  tabIndex="-1"
                >
                  <div>
                    <div
                      className="item"
                      style={{
                        display: 'inline-block',
                        width: '100%'
                      }}
                      tabIndex="-1"
                    >
                      <div className="agent-card-one position-relative">
                        <div className="img border-20">
                          <img
                            alt=""
                            className="w-100 tran5s"
                            data-nimg="1"
                            decoding="async"
                            height="400"
                            loading="lazy"
                            src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_05.5cb43cd4.jpg&w=750&q=75"
                            srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_05.5cb43cd4.jpg&w=384&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_05.5cb43cd4.jpg&w=750&q=75 2x"
                            style={{
                              color: 'transparent'
                            }}
                            width="330"
                          />
                        </div>
                        <div className="text-center">
                          <h6>
                            Chris Matial
                          </h6>
                          <a
                            className="stretched-link"
                            href="/agent_details"
                          >
                            Broker
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul
              className="slick-dots"
              style={{
                display: 'block'
              }}
            >
              <li className="slick-active">
                <button>
                  1
                </button>
              </li>
              <li className="">
                <button>
                  2
                </button>
              </li>
              <li className="">
                <button>
                  3
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="section-btn text-center md-mt-60">
          <a
            className=" btn-one fw-normal"
            href="agent"
          >
            Meet Entire                            Team
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="partner-section-one mt-150 xl-mt-120 lg-mt-100 mb-130 xl-mb-100 lg-mb-60">
    <div className="container">
      <h6 className="text-center fs-20 mb-50 lg-mb-20">
        100+ Company trusted by us.
      </h6>
    </div>
    <div className="bg-wrapper bg-white">
      <div className="container">
        <div
          className="slick-slider partner-logo-one slick-initialized"
          dir="ltr"
        >
          <div className="slick-list">
            <div
              className="slick-track"
              style={{
                left: '-100.00000000000001%',
                width: '333.33333333333337%'
              }}
            >
              <div
                aria-hidden="true"
                className="slick-slide slick-cloned"
                data-index="-6"
                style={{
                  width: '5%'
                }}
                tabIndex="-1"
              >
                <div>
                  <div
                    className="item"
                    style={{
                      display: 'inline-block',
                      width: '100%'
                    }}
                    tabIndex="-1"
                  >
                    <img
                      alt=""
                      data-nimg="1"
                      decoding="async"
                      height="55"
                      loading="lazy"
                      src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_08.24ecd003.png&w=256&q=75"
                      srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_08.24ecd003.png&w=96&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_08.24ecd003.png&w=256&q=75 2x"
                      style={{
                        color: 'transparent'
                      }}
                      width="91"
                    />
                  </div>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="slick-slide slick-cloned"
                data-index="-5"
                style={{
                  width: '5%'
                }}
                tabIndex="-1"
              >
                <div>
                  <div
                    className="item"
                    style={{
                      display: 'inline-block',
                      width: '100%'
                    }}
                    tabIndex="-1"
                  >
                    <img
                      alt=""
                      data-nimg="1"
                      decoding="async"
                      height="55"
                      loading="lazy"
                      src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_09.d5663a02.png&w=256&q=75"
                      srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_09.d5663a02.png&w=128&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_09.d5663a02.png&w=256&q=75 2x"
                      style={{
                        color: 'transparent'
                      }}
                      width="114"
                    />
                  </div>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="slick-slide slick-cloned"
                data-index="-4"
                style={{
                  width: '5%'
                }}
                tabIndex="-1"
              >
                <div>
                  <div
                    className="item"
                    style={{
                      display: 'inline-block',
                      width: '100%'
                    }}
                    tabIndex="-1"
                  >
                    <img
                      alt=""
                      data-nimg="1"
                      decoding="async"
                      height="55"
                      loading="lazy"
                      src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_10.d2cecc43.png&w=256&q=75"
                      srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_10.d2cecc43.png&w=128&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_10.d2cecc43.png&w=256&q=75 2x"
                      style={{
                        color: 'transparent'
                      }}
                      width="102"
                    />
                  </div>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="slick-slide slick-cloned"
                data-index="-3"
                style={{
                  width: '5%'
                }}
                tabIndex="-1"
              >
                <div>
                  <div
                    className="item"
                    style={{
                      display: 'inline-block',
                      width: '100%'
                    }}
                    tabIndex="-1"
                  >
                    <img
                      alt=""
                      data-nimg="1"
                      decoding="async"
                      height="55"
                      loading="lazy"
                      src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_11.8b89508c.png&w=384&q=75"
                      srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_11.8b89508c.png&w=256&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_11.8b89508c.png&w=384&q=75 2x"
                      style={{
                        color: 'transparent'
                      }}
                      width="136"
                    />
                  </div>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="slick-slide slick-cloned"
                data-index="-2"
                style={{
                  width: '5%'
                }}
                tabIndex="-1"
              >
                <div>
                  <div
                    className="item"
                    style={{
                      display: 'inline-block',
                      width: '100%'
                    }}
                    tabIndex="-1"
                  >
                    <img
                      alt=""
                      data-nimg="1"
                      decoding="async"
                      height="55"
                      loading="lazy"
                      src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_12.443c8c95.png&w=384&q=75"
                      srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_12.443c8c95.png&w=256&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_12.443c8c95.png&w=384&q=75 2x"
                      style={{
                        color: 'transparent'
                      }}
                      width="149"
                    />
                  </div>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="slick-slide slick-cloned"
                data-index="-1"
                style={{
                  width: '5%'
                }}
                tabIndex="-1"
              >
                <div>
                  <div
                    className="item"
                    style={{
                      display: 'inline-block',
                      width: '100%'
                    }}
                    tabIndex="-1"
                  >
                    <img
                      alt=""
                      data-nimg="1"
                      decoding="async"
                      height="55"
                      loading="lazy"
                      src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_09.d5663a02.png&w=256&q=75"
                      srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_09.d5663a02.png&w=128&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_09.d5663a02.png&w=256&q=75 2x"
                      style={{
                        color: 'transparent'
                      }}
                      width="114"
                    />
                  </div>
                </div>
              </div>
              <div
                aria-hidden="false"
                className="slick-slide slick-active slick-current"
                data-index="0"
                style={{
                  outline: 'none',
                  width: '5%'
                }}
                tabIndex="-1"
              >
                <div>
                  <div
                    className="item"
                    style={{
                      display: 'inline-block',
                      width: '100%'
                    }}
                    tabIndex="-1"
                  >
                    <img
                      alt=""
                      data-nimg="1"
                      decoding="async"
                      height="55"
                      loading="lazy"
                      src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_07.1fd5d505.png&w=384&q=75"
                      srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_07.1fd5d505.png&w=256&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_07.1fd5d505.png&w=384&q=75 2x"
                      style={{
                        color: 'transparent'
                      }}
                      width="133"
                    />
                  </div>
                </div>
              </div>
              <div
                aria-hidden="false"
                className="slick-slide slick-active"
                data-index="1"
                style={{
                  outline: 'none',
                  width: '5%'
                }}
                tabIndex="-1"
              >
                <div>
                  <div
                    className="item"
                    style={{
                      display: 'inline-block',
                      width: '100%'
                    }}
                    tabIndex="-1"
                  >
                    <img
                      alt=""
                      data-nimg="1"
                      decoding="async"
                      height="55"
                      loading="lazy"
                      src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_08.24ecd003.png&w=256&q=75"
                      srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_08.24ecd003.png&w=96&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_08.24ecd003.png&w=256&q=75 2x"
                      style={{
                        color: 'transparent'
                      }}
                      width="91"
                    />
                  </div>
                </div>
              </div>
              <div
                aria-hidden="false"
                className="slick-slide slick-active"
                data-index="2"
                style={{
                  outline: 'none',
                  width: '5%'
                }}
                tabIndex="-1"
              >
                <div>
                  <div
                    className="item"
                    style={{
                      display: 'inline-block',
                      width: '100%'
                    }}
                    tabIndex="-1"
                  >
                    <img
                      alt=""
                      data-nimg="1"
                      decoding="async"
                      height="55"
                      loading="lazy"
                      src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_09.d5663a02.png&w=256&q=75"
                      srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_09.d5663a02.png&w=128&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_09.d5663a02.png&w=256&q=75 2x"
                      style={{
                        color: 'transparent'
                      }}
                      width="114"
                    />
                  </div>
                </div>
              </div>
              <div
                aria-hidden="false"
                className="slick-slide slick-active"
                data-index="3"
                style={{
                  outline: 'none',
                  width: '5%'
                }}
                tabIndex="-1"
              >
                <div>
                  <div
                    className="item"
                    style={{
                      display: 'inline-block',
                      width: '100%'
                    }}
                    tabIndex="-1"
                  >
                    <img
                      alt=""
                      data-nimg="1"
                      decoding="async"
                      height="55"
                      loading="lazy"
                      src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_10.d2cecc43.png&w=256&q=75"
                      srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_10.d2cecc43.png&w=128&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_10.d2cecc43.png&w=256&q=75 2x"
                      style={{
                        color: 'transparent'
                      }}
                      width="102"
                    />
                  </div>
                </div>
              </div>
              <div
                aria-hidden="false"
                className="slick-slide slick-active"
                data-index="4"
                style={{
                  outline: 'none',
                  width: '5%'
                }}
                tabIndex="-1"
              >
                <div>
                  <div
                    className="item"
                    style={{
                      display: 'inline-block',
                      width: '100%'
                    }}
                    tabIndex="-1"
                  >
                    <img
                      alt=""
                      data-nimg="1"
                      decoding="async"
                      height="55"
                      loading="lazy"
                      src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_11.8b89508c.png&w=384&q=75"
                      srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_11.8b89508c.png&w=256&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_11.8b89508c.png&w=384&q=75 2x"
                      style={{
                        color: 'transparent'
                      }}
                      width="136"
                    />
                  </div>
                </div>
              </div>
              <div
                aria-hidden="false"
                className="slick-slide slick-active"
                data-index="5"
                style={{
                  outline: 'none',
                  width: '5%'
                }}
                tabIndex="-1"
              >
                <div>
                  <div
                    className="item"
                    style={{
                      display: 'inline-block',
                      width: '100%'
                    }}
                    tabIndex="-1"
                  >
                    <img
                      alt=""
                      data-nimg="1"
                      decoding="async"
                      height="55"
                      loading="lazy"
                      src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_12.443c8c95.png&w=384&q=75"
                      srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_12.443c8c95.png&w=256&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_12.443c8c95.png&w=384&q=75 2x"
                      style={{
                        color: 'transparent'
                      }}
                      width="149"
                    />
                  </div>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="slick-slide"
                data-index="6"
                style={{
                  outline: 'none',
                  width: '5%'
                }}
                tabIndex="-1"
              >
                <div>
                  <div
                    className="item"
                    style={{
                      display: 'inline-block',
                      width: '100%'
                    }}
                    tabIndex="-1"
                  >
                    <img
                      alt=""
                      data-nimg="1"
                      decoding="async"
                      height="55"
                      loading="lazy"
                      src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_09.d5663a02.png&w=256&q=75"
                      srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_09.d5663a02.png&w=128&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_09.d5663a02.png&w=256&q=75 2x"
                      style={{
                        color: 'transparent'
                      }}
                      width="114"
                    />
                  </div>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="slick-slide slick-cloned"
                data-index="7"
                style={{
                  width: '5%'
                }}
                tabIndex="-1"
              >
                <div>
                  <div
                    className="item"
                    style={{
                      display: 'inline-block',
                      width: '100%'
                    }}
                    tabIndex="-1"
                  >
                    <img
                      alt=""
                      data-nimg="1"
                      decoding="async"
                      height="55"
                      loading="lazy"
                      src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_07.1fd5d505.png&w=384&q=75"
                      srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_07.1fd5d505.png&w=256&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_07.1fd5d505.png&w=384&q=75 2x"
                      style={{
                        color: 'transparent'
                      }}
                      width="133"
                    />
                  </div>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="slick-slide slick-cloned"
                data-index="8"
                style={{
                  width: '5%'
                }}
                tabIndex="-1"
              >
                <div>
                  <div
                    className="item"
                    style={{
                      display: 'inline-block',
                      width: '100%'
                    }}
                    tabIndex="-1"
                  >
                    <img
                      alt=""
                      data-nimg="1"
                      decoding="async"
                      height="55"
                      loading="lazy"
                      src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_08.24ecd003.png&w=256&q=75"
                      srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_08.24ecd003.png&w=96&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_08.24ecd003.png&w=256&q=75 2x"
                      style={{
                        color: 'transparent'
                      }}
                      width="91"
                    />
                  </div>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="slick-slide slick-cloned"
                data-index="9"
                style={{
                  width: '5%'
                }}
                tabIndex="-1"
              >
                <div>
                  <div
                    className="item"
                    style={{
                      display: 'inline-block',
                      width: '100%'
                    }}
                    tabIndex="-1"
                  >
                    <img
                      alt=""
                      data-nimg="1"
                      decoding="async"
                      height="55"
                      loading="lazy"
                      src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_09.d5663a02.png&w=256&q=75"
                      srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_09.d5663a02.png&w=128&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_09.d5663a02.png&w=256&q=75 2x"
                      style={{
                        color: 'transparent'
                      }}
                      width="114"
                    />
                  </div>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="slick-slide slick-cloned"
                data-index="10"
                style={{
                  width: '5%'
                }}
                tabIndex="-1"
              >
                <div>
                  <div
                    className="item"
                    style={{
                      display: 'inline-block',
                      width: '100%'
                    }}
                    tabIndex="-1"
                  >
                    <img
                      alt=""
                      data-nimg="1"
                      decoding="async"
                      height="55"
                      loading="lazy"
                      src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_10.d2cecc43.png&w=256&q=75"
                      srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_10.d2cecc43.png&w=128&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_10.d2cecc43.png&w=256&q=75 2x"
                      style={{
                        color: 'transparent'
                      }}
                      width="102"
                    />
                  </div>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="slick-slide slick-cloned"
                data-index="11"
                style={{
                  width: '5%'
                }}
                tabIndex="-1"
              >
                <div>
                  <div
                    className="item"
                    style={{
                      display: 'inline-block',
                      width: '100%'
                    }}
                    tabIndex="-1"
                  >
                    <img
                      alt=""
                      data-nimg="1"
                      decoding="async"
                      height="55"
                      loading="lazy"
                      src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_11.8b89508c.png&w=384&q=75"
                      srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_11.8b89508c.png&w=256&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_11.8b89508c.png&w=384&q=75 2x"
                      style={{
                        color: 'transparent'
                      }}
                      width="136"
                    />
                  </div>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="slick-slide slick-cloned"
                data-index="12"
                style={{
                  width: '5%'
                }}
                tabIndex="-1"
              >
                <div>
                  <div
                    className="item"
                    style={{
                      display: 'inline-block',
                      width: '100%'
                    }}
                    tabIndex="-1"
                  >
                    <img
                      alt=""
                      data-nimg="1"
                      decoding="async"
                      height="55"
                      loading="lazy"
                      src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_12.443c8c95.png&w=384&q=75"
                      srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_12.443c8c95.png&w=256&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_12.443c8c95.png&w=384&q=75 2x"
                      style={{
                        color: 'transparent'
                      }}
                      width="149"
                    />
                  </div>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="slick-slide slick-cloned"
                data-index="13"
                style={{
                  width: '5%'
                }}
                tabIndex="-1"
              >
                <div>
                  <div
                    className="item"
                    style={{
                      display: 'inline-block',
                      width: '100%'
                    }}
                    tabIndex="-1"
                  >
                    <img
                      alt=""
                      data-nimg="1"
                      decoding="async"
                      height="55"
                      loading="lazy"
                      src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_09.d5663a02.png&w=256&q=75"
                      srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_09.d5663a02.png&w=128&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fp_logo_09.d5663a02.png&w=256&q=75 2x"
                      style={{
                        color: 'transparent'
                      }}
                      width="114"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="fancy-banner-two position-relative z-1 pt-90 lg-pt-50 pb-90 lg-pb-50">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="title-one text-center text-lg-start md-mb-40 pe-xl-5">
            <h3 className="text-white m0">
              Start your{' '}
              <span>
                Journey
                <img
                  alt=""
                  className="lazy-img"
                  data-nimg="1"
                  decoding="async"
                  height="18"
                  loading="lazy"
                  src="/assets/static/media/title_shape_06.81b8cc1f.svg"
                  style={{
                    color: 'transparent'
                  }}
                  width="269"
                />
              </span>
              {' '}As a Retailer.
            </h3>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-wrapper me-auto ms-auto me-lg-0">
            <form>
              <input
                className=""
                placeholder="Email address"
                type="email"
              />
              <button className="">
                Get                                    Started
              </button>
            </form>
            <div className="fs-16 mt-10 text-white">
              Already a Agent?{' '}
              <a
                data-bs-target="#loginModal"
                data-bs-toggle="modal"
                href="#"
              >
                Sign in.
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default About;
