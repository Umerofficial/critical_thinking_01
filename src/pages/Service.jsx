import React from 'react'

function Service() {
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
        Our Services
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
          Services
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
  <div className="block-feature-eight position-relative z-1 mt-170 xl-mt-120">
    <div className="container">
      <div className="position-relative">
        <div className="row">
          <div className="col-lg-6">
            <div className="pe-xl-5 wow fadeInLeft">
              <div className="row align-items-end">
                <div className="col-6">
                  <div className="media-block position-relative z-1">
                    <img
                      alt=""
                      className="lazy-img screen_03 mb-40"
                      data-nimg="1"
                      decoding="async"
                      height="150"
                      loading="lazy"
                      src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fscreen_11.7f0c2542.png&w=750&q=75"
                      srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fscreen_11.7f0c2542.png&w=384&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fscreen_11.7f0c2542.png&w=750&q=75 2x"
                      style={{
                        color: 'transparent'
                      }}
                      width="332"
                    />
                    <img
                      alt=""
                      className="lazy-img main-img w-100"
                      data-nimg="1"
                      decoding="async"
                      height="443"
                      loading="lazy"
                      src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_54.2a105c3e.jpg&w=750&q=75"
                      srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_54.2a105c3e.jpg&w=384&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_54.2a105c3e.jpg&w=750&q=75 2x"
                      style={{
                        color: 'transparent'
                      }}
                      width="333"
                    />
                    <img
                      alt=""
                      className="lazy-img shapes shape_01"
                      data-nimg="1"
                      decoding="async"
                      height="191"
                      loading="lazy"
                      src="/assets/static/media/shape_40.2df3e07d.svg"
                      style={{
                        color: 'transparent'
                      }}
                      width="124"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="media-block position-relative z-1">
                    <img
                      alt=""
                      className="lazy-img main-img w-100"
                      data-nimg="1"
                      decoding="async"
                      height="620"
                      loading="lazy"
                      src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_53.954f27f8.jpg&w=640&q=75"
                      srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_53.954f27f8.jpg&w=384&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_53.954f27f8.jpg&w=640&q=75 2x"
                      style={{
                        color: 'transparent'
                      }}
                      width="319"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="block-two ms-xxl-5 wow fadeInRight">
              <div className="bg-wrapper md-mt-60">
                <div className="title-one m0">
                  <h3>
                    120k+{' '}
                    <span>
                      Clients
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
                    Rely                                            on our Services.
                  </h3>
                </div>
                <p className="fs-22 mt-45 mb-60 xl-mb-40 pe-xxl-5">
                  Our founders Dustin Moskovitz and                                        Justin Rosenstein met while leading Engineering .
                </p>
                <ul className="list-style-one fs-22 color-dark style-none">
                  <li>
                    Loan & low Interest facility
                  </li>
                  <li>
                    100k+ Property Listing added & updated
                  </li>
                  <li>
                    Expert agent consultation
                  </li>
                </ul>
                <div className="mt-60 lg-mt-40">
                  <a
                    className="btn-two"
                    href="/contact"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="block-feature-one mt-130 xl-mt-100 lg-mt-80 mb-150 xl-mb-100 lg-mb-80">
    <div className="container">
      <div className="title-one text-center mb-50 xl-mb-30 lg-mb-20 wow fadeInUp">
        <h3>
          Unlock Homy's{' '}
          <span>
            advantages{' '}
            <img
              alt=""
              className="lazy-img"
              data-nimg="1"
              decoding="async"
              height="24"
              loading="lazy"
              src="/assets/static/media/title_shape_01.5b2611cd.svg"
              style={{
                color: 'transparent'
              }}
              width="365"
            />
          </span>
        </h3>
        <p className="fs-24">
          Your trusted real estate partner in every transaction.
        </p>
      </div>
      <div className="row gx-xl-5">
        <div className="col-md-4">
          <div className="card-style-one text-center wow fadeInUp mt-40">
            <img
              alt=""
              className="lazy-img m-auto icon"
              data-nimg="1"
              decoding="async"
              height="220"
              loading="lazy"
              src="/assets/static/media/icon_01.76e69ba4.svg"
              style={{
                color: 'transparent'
              }}
              width="220"
            />
            <div className="fs-16 text-uppercase fw-500 fs-text mt-35 md-mt-30 mb-20">
              Buy a home
            </div>
            <p className="fs-24 ps-xxl-4 pe-xxl-4">
              Explore homy’s 2 million+ homes and uncover your ideal                                living space.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-style-one text-center wow fadeInUp mt-40">
            <img
              alt=""
              className="lazy-img m-auto icon"
              data-nimg="1"
              decoding="async"
              height="220"
              loading="lazy"
              src="/assets/static/media/icon_02.e0efe402.svg"
              style={{
                color: 'transparent'
              }}
              width="220"
            />
            <div className="fs-16 text-uppercase fw-500 fs-text mt-35 md-mt-30 mb-20">
              RENT A HOME
            </div>
            <p className="fs-24 ps-xxl-4 pe-xxl-4">
              Discover a rental you'll love on homy, thanks to 35+                                filters and tailored keywords.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-style-one text-center wow fadeInUp mt-40">
            <img
              alt=""
              className="lazy-img m-auto icon"
              data-nimg="1"
              decoding="async"
              height="220"
              loading="lazy"
              src="/assets/static/media/icon_03.a4b83c0a.svg"
              style={{
                color: 'transparent'
              }}
              width="220"
            />
            <div className="fs-16 text-uppercase fw-500 fs-text mt-35 md-mt-30 mb-20">
              SELL PROPERTY
            </div>
            <p className="fs-24 ps-xxl-4 pe-xxl-4">
              List, sell, thrive – with our top-notch real estate                                agency. It’s super easy & fun.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="block-feature-seventeen bg-pink-three position-relative z-1 pt-120 xl-pt-80 pb-140 xl-pb-80">
    <div className="container">
      <div className="row">
        <div className="col-xl-8 m-auto">
          <div className="title-one text-center wow fadeInUp mb-40 lg-mb-20">
            <h3 className="">
              Core{' '}
              <span>
                Services
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
            <p className="fs-22 color-dark ">
              Over 745K listings of apartments, lots, plots - available                                today.
            </p>
          </div>
        </div>
      </div>
      <div className="row gx-xxl-5">
        <div
          className="col-lg-4 col-md-6 d-flex mt-40 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="card-style-ten d-flex align-items-start flex-column w-100 h-100">
            <div className="icon d-flex align-items-center justify-content-center rounded-circle tran3s">
              <img
                alt=""
                className="lazy-img"
                data-nimg="1"
                decoding="async"
                height="25"
                loading="lazy"
                src="/assets/static/media/icon_69.f803c2dc.svg"
                style={{
                  color: 'transparent'
                }}
                width="27"
              />
            </div>
            <h6>
              Buy a home
            </h6>
            <p>
              Explore homy’s 2 million+ homes and uncover your ideal living space.
            </p>
            <a
              className="btn-twelve sm mt-auto"
              href="/service_details"
            >
              Buy Home
            </a>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-6 d-flex mt-40 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="card-style-ten d-flex align-items-start flex-column w-100 h-100">
            <div className="icon d-flex align-items-center justify-content-center rounded-circle tran3s">
              <img
                alt=""
                className="lazy-img"
                data-nimg="1"
                decoding="async"
                height="26"
                loading="lazy"
                src="/assets/static/media/icon_70.6b5aace5.svg"
                style={{
                  color: 'transparent'
                }}
                width="30"
              />
            </div>
            <h6>
              Rent a Home
            </h6>
            <p>
              Discover a rental you'll love on homy, thanks to 35+ filters.
            </p>
            <a
              className="btn-twelve sm mt-auto"
              href="/service_details"
            >
              Rent Home
            </a>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-6 d-flex mt-40 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="card-style-ten d-flex align-items-start flex-column w-100 h-100">
            <div className="icon d-flex align-items-center justify-content-center rounded-circle tran3s">
              <img
                alt=""
                className="lazy-img"
                data-nimg="1"
                decoding="async"
                height="26"
                loading="lazy"
                src="/assets/static/media/icon_71.ffa3ab54.svg"
                style={{
                  color: 'transparent'
                }}
                width="28"
              />
            </div>
            <h6>
              Sell Home
            </h6>
            <p>
              List, sell, thrive – with our top-notch real estate agency.
            </p>
            <a
              className="btn-twelve sm mt-auto"
              href="/service_details"
            >
              Sell Home
            </a>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-6 d-flex mt-40 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="card-style-ten d-flex align-items-start flex-column w-100 h-100">
            <div className="icon d-flex align-items-center justify-content-center rounded-circle tran3s">
              <img
                alt=""
                className="lazy-img"
                data-nimg="1"
                decoding="async"
                height="25"
                loading="lazy"
                src="/assets/static/media/icon_69.f803c2dc.svg"
                style={{
                  color: 'transparent'
                }}
                width="27"
              />
            </div>
            <h6>
              Mortgage
            </h6>
            <p>
              Explore homy’s 2 million+ homes and uncover your ideal living space.
            </p>
            <a
              className="btn-twelve sm mt-auto"
              href="/service_details"
            >
              Buy Home
            </a>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-6 d-flex mt-40 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="card-style-ten d-flex align-items-start flex-column w-100 h-100">
            <div className="icon d-flex align-items-center justify-content-center rounded-circle tran3s">
              <img
                alt=""
                className="lazy-img"
                data-nimg="1"
                decoding="async"
                height="26"
                loading="lazy"
                src="/assets/static/media/icon_70.6b5aace5.svg"
                style={{
                  color: 'transparent'
                }}
                width="30"
              />
            </div>
            <h6>
              Consulting
            </h6>
            <p>
              Discover a rental you'll love on homy, thanks to 35+ filters.
            </p>
            <a
              className="btn-twelve sm mt-auto"
              href="/service_details"
            >
              Rent Home
            </a>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-6 d-flex mt-40 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="card-style-ten d-flex align-items-start flex-column w-100 h-100">
            <div className="icon d-flex align-items-center justify-content-center rounded-circle tran3s">
              <img
                alt=""
                className="lazy-img"
                data-nimg="1"
                decoding="async"
                height="26"
                loading="lazy"
                src="/assets/static/media/icon_71.ffa3ab54.svg"
                style={{
                  color: 'transparent'
                }}
                width="28"
              />
            </div>
            <h6>
              Property Managements
            </h6>
            <p>
              List, sell, thrive – with our top-notch real estate agency.
            </p>
            <a
              className="btn-twelve sm mt-auto"
              href="/service_details"
            >
              Sell Home
            </a>
          </div>
        </div>
      </div>
    </div>
    <img
      alt=""
      className="lazy-img shapes shape_01"
      data-nimg="1"
      decoding="async"
      height="732"
      loading="lazy"
      src="/assets/static/media/shape_73.5d0852ad.svg"
      style={{
        color: 'transparent'
      }}
      width="254"
    />
    <img
      alt=""
      className="lazy-img shapes shape_02"
      data-nimg="1"
      decoding="async"
      height="901"
      loading="lazy"
      src="/assets/static/media/shape_74.0693f9fa.svg"
      style={{
        color: 'transparent'
      }}
      width="236"
    />
  </div>
  <div className="fancy-banner-two position-relative z-1 pt-90 lg-pt-70 pb-90 lg-pb-70">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-8 m-auto text-center">
          <div className="title-one mb-50 lg-mb-40">
            <h2 className="text-white fs-lg">
              Apply for loan with low interest.
            </h2>
            <p className="fs-24 text-white">
              Apply for loan & get up to $20million with low interest
            </p>
          </div>
          <a
            className="btn-six"
            href="contact"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="feedback-section-one position-relative z-1 pt-70 md-pt-50 pb-80 md-pb-60">
    <div className="main-content m-auto">
      <div
        className="slick-slider feedback-slider-one position-static slick-initialized"
        dir="ltr"
      >
        <div className="slick-list">
          <div
            className="slick-track"
            style={{
              left: '-100%',
              width: '700%'
            }}
          >
            <div
              aria-hidden="false"
              className="slick-slide slick-active slick-current"
              data-index="0"
              style={{
                left: '0',
                opacity: '1',
                outline: 'none',
                position: 'relative',
                transition: 'opacity 500ms ease, visibility 500ms ease',
                width: '14.285714285714286%'
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
                  <div className="feedback-block-one text-center">
                    <div className="row align-items-center">
                      <div className="col-md-3">
                        <img
                          alt=""
                          className="rounded-circle m-auto avatar"
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
                        <h6 className="fs-20 m0 pt-10">
                          Jonathan Harry
                        </h6>
                        <span className="fs-16">
                          Milan, Itlay
                        </span>
                      </div>
                      <div className="col-md-6">
                        <blockquote>
                          Efficient, knowledgeable, & made our home search a                                                        smooth experience. Highly recommended agency!
                        </blockquote>
                      </div>
                      <div className="col-md-3">
                        <img
                          alt=""
                          className="lazy-img m-auto"
                          data-nimg="1"
                          decoding="async"
                          height="77"
                          loading="lazy"
                          src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Frating_01.8b042ad5.png&w=384&q=75"
                          srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Frating_01.8b042ad5.png&w=256&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Frating_01.8b042ad5.png&w=384&q=75 2x"
                          style={{
                            color: 'transparent'
                          }}
                          width="151"
                        />
                        <p className="text-center m0 pt-10">
                          <span className="fw-500 color-dark">
                            13k rating
                          </span>
                          (4.7 Rating)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="slick-slide"
              data-index="1"
              style={{
                left: '-14px',
                opacity: '0',
                outline: 'none',
                position: 'relative',
                transition: 'opacity 500ms ease, visibility 500ms ease',
                width: '14.285714285714286%'
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
                  <div className="feedback-block-one text-center">
                    <div className="row align-items-center">
                      <div className="col-md-3">
                        <img
                          alt=""
                          className="rounded-circle m-auto avatar"
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
                        <h6 className="fs-20 m0 pt-10">
                          Sofia Rena
                        </h6>
                        <span className="fs-16">
                          New                                                        York, USA
                        </span>
                      </div>
                      <div className="col-md-6">
                        <blockquote>
                          Efficient, knowledgeable, & made our home search a                                                        smooth experience. Highly recommended agency!
                        </blockquote>
                      </div>
                      <div className="col-md-3">
                        <img
                          alt=""
                          className="lazy-img m-auto"
                          data-nimg="1"
                          decoding="async"
                          height="77"
                          loading="lazy"
                          src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Frating_01.8b042ad5.png&w=384&q=75"
                          srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Frating_01.8b042ad5.png&w=256&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Frating_01.8b042ad5.png&w=384&q=75 2x"
                          style={{
                            color: 'transparent'
                          }}
                          width="151"
                        />
                        <p className="text-center m0 pt-10">
                          <span className="fw-500 color-dark">
                            10k rating
                          </span>
                          (4.5 Rating)
                        </p>
                      </div>
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
                left: '-28px',
                opacity: '0',
                outline: 'none',
                position: 'relative',
                transition: 'opacity 500ms ease, visibility 500ms ease',
                width: '14.285714285714286%'
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
                  <div className="feedback-block-one text-center">
                    <div className="row align-items-center">
                      <div className="col-md-3">
                        <img
                          alt=""
                          className="rounded-circle m-auto avatar"
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
                        <h6 className="fs-20 m0 pt-10">
                          Rashed Kabir
                        </h6>
                        <span className="fs-16">
                          Dhaka, BD
                        </span>
                      </div>
                      <div className="col-md-6">
                        <blockquote>
                          Efficient, knowledgeable, & made our home search a                                                        smooth experience. Highly recommended agency!
                        </blockquote>
                      </div>
                      <div className="col-md-3">
                        <img
                          alt=""
                          className="lazy-img m-auto"
                          data-nimg="1"
                          decoding="async"
                          height="77"
                          loading="lazy"
                          src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Frating_01.8b042ad5.png&w=384&q=75"
                          srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Frating_01.8b042ad5.png&w=256&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Frating_01.8b042ad5.png&w=384&q=75 2x"
                          style={{
                            color: 'transparent'
                          }}
                          width="151"
                        />
                        <p className="text-center m0 pt-10">
                          <span className="fw-500 color-dark">
                            11k rating
                          </span>
                          (4.8 Rating)
                        </p>
                      </div>
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
  <div className="block-feature-ten md-mt-100  mt-170 xl-mt-120 mb-150 xl-mb-100">
    <div className="container container-large">
      <div className="row">
        <div className="col-xxl-5 col-lg-6 ms-auto order-lg-last wow fadeInRight">
          <div className="pt-40 xl-pt-20 pb-110 xl-pb-60">
            <div className="title-one mb-45 lg-mb-20">
              <h3>
                Find Your Perfect Match Easily.
              </h3>
            </div>
            <p className="fs-24 mb-45">
              Browse 745,000+ homes for purchase, rent, and mortgage options in our                                listings.
            </p>
            <form className="email-form position-relative z-1">
              <input
                placeholder="Your Email Address..."
                type="email"
              />
              <button className="btn-two">
                Find out
              </button>
            </form>
            <p className="fs-16 mt-10">
              For more details please{' '}
              <a
                className="color-dark text-decoration-underline fst-italic"
                href="#"
              >
                contact us
              </a>
            </p>
            <div className="counter-wrapper pt-15 pe-xl-5">
              <div className="row">
                <div className="col-xxl-6 col-sm-5">
                  <div className="counter-block-one mt-20">
                    <div className="main-count fw-500 color-dark">
                      <span className="counter">
                        <span />
                        <span />
                      </span>
                      x
                    </div>
                    <span>
                      Fast                                                search engine
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
                      Property listing sold last year
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="media-gallery position-relative z-1 h-100 wow fadeInLeft">
            <div className="bg bg_2">
              <div className="card-style-three p0">
                <div className="bg-wrapper text-center">
                  <h3>
                    0
                    <span />
                    <span />
                    +
                  </h3>
                  <p>
                    Years Experience{' '}
                    <br />
                    with proud.
                  </p>
                </div>
              </div>
              <img
                alt=""
                className="lazy-img screen_01"
                data-nimg="1"
                decoding="async"
                height="150"
                loading="lazy"
                src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fscreen_05.0e879bde.jpg&w=640&q=75"
                srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fscreen_05.0e879bde.jpg&w=384&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fscreen_05.0e879bde.jpg&w=640&q=75 2x"
                style={{
                  color: 'transparent'
                }}
                width="318"
              />
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
  )
}

export default Service