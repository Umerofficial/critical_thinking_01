import React from 'react'

function Projects() {
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
  <div className="property-listing-six bg-pink-two pt-110 md-pt-80 pb-150 xl-pb-120 mt-150 xl-mt-120">
    <div className="container container-large">
      <div className="row">
        <div className="col-lg-8">
          <div className="ps-xxl-5">
            <div className="listing-header-filter d-sm-flex justify-content-between align-items-center mb-40 lg-mb-30">
              <div>
                Showing{' '}
                <span className="color-dark fw-500">
                  1–8
                </span>
                {' '}of{' '}
                <span className="color-dark fw-500">
                  20
                </span>
                {' '}results
              </div>
              <div className="d-flex align-items-center xs-mt-20">
                <div className="short-filter d-flex align-items-center">
                  <div className="fs-16 me-2">
                    Short by:
                  </div>
                  <div
                    className="nice-select form-select-lg nice-select "
                    role="button"
                    tabIndex="0"
                  >
                    <span className="current">
                      Newest
                    </span>
                    <ul
                      className="list"
                      role="menubar"
                    >
                      <li
                        className="option selected focus"
                        data-value="newest"
                        role="menuitem"
                        style={{
                          fontSize: '14px'
                        }}
                      >
                        Newest
                      </li>
                      <li
                        className="option "
                        data-value="best_seller"
                        role="menuitem"
                        style={{
                          fontSize: '14px'
                        }}
                      >
                        Best Seller
                      </li>
                      <li
                        className="option "
                        data-value="best_match"
                        role="menuitem"
                        style={{
                          fontSize: '14px'
                        }}
                      >
                        Best Match
                      </li>
                      <li
                        className="option "
                        data-value="price_low"
                        role="menuitem"
                        style={{
                          fontSize: '14px'
                        }}
                      >
                        Price Low
                      </li>
                      <li
                        className="option "
                        data-value="price_high"
                        role="menuitem"
                        style={{
                          fontSize: '14px'
                        }}
                      >
                        Price High
                      </li>
                    </ul>
                  </div>
                </div>
                <a
                  className="tran3s layout-change rounded-circle ms-auto ms-sm-3"
                  data-bs-toggle="tooltip"
                  href="/listing_02"
                  title="Switch To List View"
                >
                  <i className="fa-regular fa-bars" />
                </a>
              </div>
            </div>
            <div className="row gx-xxl-5">
              <div className="col-md-6 d-flex mb-50 wow fadeInUp">
                <div className="listing-card-one border-25 h-100 w-100">
                  <div className="img-gallery p-15">
                    <div className="position-relative border-25 overflow-hidden">
                      <div className="tag border-25 undefined">
                        FOR RENT
                      </div>
                      <a
                        className="fav-btn tran3s"
                        href="#"
                      >
                        <i className="fa-light fa-heart" />
                      </a>
                      <div
                        className="carousel slide"
                        id="carousel1"
                      >
                        <div className="carousel-indicators">
                          <button
                            aria-current="true"
                            aria-label="Slide 1"
                            className="active"
                            data-bs-slide-to="0"
                            data-bs-target="#carousel1"
                            type="button"
                          />
                          <button
                            aria-label="Slide 2"
                            data-bs-slide-to="1"
                            data-bs-target="#carousel1"
                            type="button"
                          />
                          <button
                            aria-label="Slide 3"
                            data-bs-slide-to="2"
                            data-bs-target="#carousel1"
                            type="button"
                          />
                        </div>
                        <div className="carousel-inner">
                          <div
                            className="carousel-item active"
                            data-bs-interval="1000000"
                          >
                            <a
                              className="d-block"
                              href="/listing_details_01"
                            >
                              <img
                                alt="..."
                                className="w-100"
                                data-nimg="1"
                                decoding="async"
                                height="295"
                                loading="lazy"
                                src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_01.af4d4d1d.jpg&w=828&q=75"
                                srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_01.af4d4d1d.jpg&w=640&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_01.af4d4d1d.jpg&w=828&q=75 2x"
                                style={{
                                  color: 'transparent'
                                }}
                                width="411"
                              />
                            </a>
                          </div>
                          <div
                            className="carousel-item undefined"
                            data-bs-interval="1000000"
                          >
                            <a
                              className="d-block"
                              href="/listing_details_01"
                            >
                              <img
                                alt="..."
                                className="w-100"
                                data-nimg="1"
                                decoding="async"
                                height="295"
                                loading="lazy"
                                src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_02.b592cf16.jpg&w=828&q=75"
                                srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_02.b592cf16.jpg&w=640&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_02.b592cf16.jpg&w=828&q=75 2x"
                                style={{
                                  color: 'transparent'
                                }}
                                width="411"
                              />
                            </a>
                          </div>
                          <div
                            className="carousel-item undefined"
                            data-bs-interval="1000000"
                          >
                            <a
                              className="d-block"
                              href="/listing_details_01"
                            >
                              <img
                                alt="..."
                                className="w-100"
                                data-nimg="1"
                                decoding="async"
                                height="295"
                                loading="lazy"
                                src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_03.a0f37ee1.jpg&w=828&q=75"
                                srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_03.a0f37ee1.jpg&w=640&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_03.a0f37ee1.jpg&w=828&q=75 2x"
                                style={{
                                  color: 'transparent'
                                }}
                                width="411"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="property-info p-25">
                    <a
                      className="title tran3s"
                      href="/listing_details_01"
                    >
                      Blueberry villa
                    </a>
                    <div className="address">
                      Twin tower, Acapulco, Mexico
                    </div>
                    <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
                      <li className="d-flex align-items-center">
                        <img
                          alt=""
                          className="lazy-img icon me-2"
                          data-nimg="1"
                          decoding="async"
                          height="17"
                          loading="lazy"
                          src="/assets/static/media/icon_04.20cbbaa1.svg"
                          style={{
                            color: 'transparent'
                          }}
                          width="17"
                        />
                        <span className="fs-16">
                          1370 sqft
                        </span>
                      </li>
                      <li className="d-flex align-items-center">
                        <img
                          alt=""
                          className="lazy-img icon me-2"
                          data-nimg="1"
                          decoding="async"
                          height="19"
                          loading="lazy"
                          src="/assets/static/media/icon_05.57567837.svg"
                          style={{
                            color: 'transparent'
                          }}
                          width="28"
                        />
                        <span className="fs-16">
                          03 bed
                        </span>
                      </li>
                      <li className="d-flex align-items-center">
                        <img
                          alt=""
                          className="lazy-img icon me-2"
                          data-nimg="1"
                          decoding="async"
                          height="18"
                          loading="lazy"
                          src="/assets/static/media/icon_06.42f17dbd.svg"
                          style={{
                            color: 'transparent'
                          }}
                          width="18"
                        />
                        <span className="fs-16">
                          02 bath
                        </span>
                      </li>
                    </ul>
                    <div className="pl-footer top-border d-flex align-items-center justify-content-between">
                      <strong className="price fw-500 color-dark">
                        $3,280.00
                      </strong>
                      <a
                        className="btn-four rounded-circle"
                        href="/listing_details_01"
                      >
                        <i className="bi bi-arrow-up-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 d-flex mb-50 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="listing-card-one border-25 h-100 w-100">
                  <div className="img-gallery p-15">
                    <div className="position-relative border-25 overflow-hidden">
                      <div className="tag border-25 sale">
                        FOR SELL
                      </div>
                      <a
                        className="fav-btn tran3s"
                        href="#"
                      >
                        <i className="fa-light fa-heart" />
                      </a>
                      <div
                        className="carousel slide"
                        id="carousel2"
                      >
                        <div className="carousel-indicators">
                          <button
                            aria-current="true"
                            aria-label="Slide 1"
                            className="active"
                            data-bs-slide-to="0"
                            data-bs-target="#carousel2"
                            type="button"
                          />
                          <button
                            aria-label="Slide 2"
                            data-bs-slide-to="1"
                            data-bs-target="#carousel2"
                            type="button"
                          />
                          <button
                            aria-label="Slide 3"
                            data-bs-slide-to="2"
                            data-bs-target="#carousel2"
                            type="button"
                          />
                        </div>
                        <div className="carousel-inner">
                          <div
                            className="carousel-item active"
                            data-bs-interval="1000000"
                          >
                            <a
                              className="d-block"
                              href="/listing_details_01"
                            >
                              <img
                                alt="..."
                                className="w-100"
                                data-nimg="1"
                                decoding="async"
                                height="295"
                                loading="lazy"
                                src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_02.b592cf16.jpg&w=828&q=75"
                                srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_02.b592cf16.jpg&w=640&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_02.b592cf16.jpg&w=828&q=75 2x"
                                style={{
                                  color: 'transparent'
                                }}
                                width="411"
                              />
                            </a>
                          </div>
                          <div
                            className="carousel-item undefined"
                            data-bs-interval="1000000"
                          >
                            <a
                              className="d-block"
                              href="/listing_details_01"
                            >
                              <img
                                alt="..."
                                className="w-100"
                                data-nimg="1"
                                decoding="async"
                                height="295"
                                loading="lazy"
                                src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_03.a0f37ee1.jpg&w=828&q=75"
                                srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_03.a0f37ee1.jpg&w=640&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_03.a0f37ee1.jpg&w=828&q=75 2x"
                                style={{
                                  color: 'transparent'
                                }}
                                width="411"
                              />
                            </a>
                          </div>
                          <div
                            className="carousel-item undefined"
                            data-bs-interval="1000000"
                          >
                            <a
                              className="d-block"
                              href="/listing_details_01"
                            >
                              <img
                                alt="..."
                                className="w-100"
                                data-nimg="1"
                                decoding="async"
                                height="295"
                                loading="lazy"
                                src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_01.af4d4d1d.jpg&w=828&q=75"
                                srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_01.af4d4d1d.jpg&w=640&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_01.af4d4d1d.jpg&w=828&q=75 2x"
                                style={{
                                  color: 'transparent'
                                }}
                                width="411"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="property-info p-25">
                    <a
                      className="title tran3s"
                      href="/listing_details_01"
                    >
                      White House villa
                    </a>
                    <div className="address">
                      Issaquah, Washington DC
                    </div>
                    <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
                      <li className="d-flex align-items-center">
                        <img
                          alt=""
                          className="lazy-img icon me-2"
                          data-nimg="1"
                          decoding="async"
                          height="17"
                          loading="lazy"
                          src="/assets/static/media/icon_04.20cbbaa1.svg"
                          style={{
                            color: 'transparent'
                          }}
                          width="17"
                        />
                        <span className="fs-16">
                          1270 sqft
                        </span>
                      </li>
                      <li className="d-flex align-items-center">
                        <img
                          alt=""
                          className="lazy-img icon me-2"
                          data-nimg="1"
                          decoding="async"
                          height="19"
                          loading="lazy"
                          src="/assets/static/media/icon_05.57567837.svg"
                          style={{
                            color: 'transparent'
                          }}
                          width="28"
                        />
                        <span className="fs-16">
                          04 bed
                        </span>
                      </li>
                      <li className="d-flex align-items-center">
                        <img
                          alt=""
                          className="lazy-img icon me-2"
                          data-nimg="1"
                          decoding="async"
                          height="18"
                          loading="lazy"
                          src="/assets/static/media/icon_06.42f17dbd.svg"
                          style={{
                            color: 'transparent'
                          }}
                          width="18"
                        />
                        <span className="fs-16">
                          01 bath
                        </span>
                      </li>
                    </ul>
                    <div className="pl-footer top-border d-flex align-items-center justify-content-between">
                      <strong className="price fw-500 color-dark">
                        $28,100/
                        <sub>
                          m
                        </sub>
                      </strong>
                      <a
                        className="btn-four rounded-circle"
                        href="/listing_details_01"
                      >
                        <i className="bi bi-arrow-up-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex mb-50 wow fadeInUp">
                <div className="listing-card-one border-25 h-100 w-100">
                  <div className="img-gallery p-15">
                    <div className="position-relative border-25 overflow-hidden">
                      <div className="tag border-25 sale">
                        FOR SELL
                      </div>
                      <a
                        className="fav-btn tran3s"
                        href="#"
                      >
                        <i className="fa-light fa-heart" />
                      </a>
                      <div
                        className="carousel slide"
                        id="carousel3"
                      >
                        <div className="carousel-indicators">
                          <button
                            aria-current="true"
                            aria-label="Slide 1"
                            className="active"
                            data-bs-slide-to="0"
                            data-bs-target="#carousel3"
                            type="button"
                          />
                          <button
                            aria-label="Slide 2"
                            data-bs-slide-to="1"
                            data-bs-target="#carousel3"
                            type="button"
                          />
                          <button
                            aria-label="Slide 3"
                            data-bs-slide-to="2"
                            data-bs-target="#carousel3"
                            type="button"
                          />
                        </div>
                        <div className="carousel-inner">
                          <div
                            className="carousel-item active"
                            data-bs-interval="1000000"
                          >
                            <a
                              className="d-block"
                              href="/listing_details_01"
                            >
                              <img
                                alt="..."
                                className="w-100"
                                data-nimg="1"
                                decoding="async"
                                height="295"
                                loading="lazy"
                                src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_03.a0f37ee1.jpg&w=828&q=75"
                                srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_03.a0f37ee1.jpg&w=640&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_03.a0f37ee1.jpg&w=828&q=75 2x"
                                style={{
                                  color: 'transparent'
                                }}
                                width="411"
                              />
                            </a>
                          </div>
                          <div
                            className="carousel-item undefined"
                            data-bs-interval="1000000"
                          >
                            <a
                              className="d-block"
                              href="/listing_details_01"
                            >
                              <img
                                alt="..."
                                className="w-100"
                                data-nimg="1"
                                decoding="async"
                                height="295"
                                loading="lazy"
                                src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_02.b592cf16.jpg&w=828&q=75"
                                srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_02.b592cf16.jpg&w=640&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_02.b592cf16.jpg&w=828&q=75 2x"
                                style={{
                                  color: 'transparent'
                                }}
                                width="411"
                              />
                            </a>
                          </div>
                          <div
                            className="carousel-item undefined"
                            data-bs-interval="1000000"
                          >
                            <a
                              className="d-block"
                              href="/listing_details_01"
                            >
                              <img
                                alt="..."
                                className="w-100"
                                data-nimg="1"
                                decoding="async"
                                height="295"
                                loading="lazy"
                                src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_01.af4d4d1d.jpg&w=828&q=75"
                                srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_01.af4d4d1d.jpg&w=640&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_01.af4d4d1d.jpg&w=828&q=75 2x"
                                style={{
                                  color: 'transparent'
                                }}
                                width="411"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="property-info p-25">
                    <a
                      className="title tran3s"
                      href="/listing_details_01"
                    >
                      Luxury villa in Dal lake.
                    </a>
                    <div className="address">
                      44 Elmessaha Street Dokki, Giza,Egypt
                    </div>
                    <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
                      <li className="d-flex align-items-center">
                        <img
                          alt=""
                          className="lazy-img icon me-2"
                          data-nimg="1"
                          decoding="async"
                          height="17"
                          loading="lazy"
                          src="/assets/static/media/icon_04.20cbbaa1.svg"
                          style={{
                            color: 'transparent'
                          }}
                          width="17"
                        />
                        <span className="fs-16">
                          1170 sqft
                        </span>
                      </li>
                      <li className="d-flex align-items-center">
                        <img
                          alt=""
                          className="lazy-img icon me-2"
                          data-nimg="1"
                          decoding="async"
                          height="19"
                          loading="lazy"
                          src="/assets/static/media/icon_05.57567837.svg"
                          style={{
                            color: 'transparent'
                          }}
                          width="28"
                        />
                        <span className="fs-16">
                          01 bed
                        </span>
                      </li>
                      <li className="d-flex align-items-center">
                        <img
                          alt=""
                          className="lazy-img icon me-2"
                          data-nimg="1"
                          decoding="async"
                          height="18"
                          loading="lazy"
                          src="/assets/static/media/icon_06.42f17dbd.svg"
                          style={{
                            color: 'transparent'
                          }}
                          width="18"
                        />
                        <span className="fs-16">
                          04 bath
                        </span>
                      </li>
                    </ul>
                    <div className="pl-footer top-border d-flex align-items-center justify-content-between">
                      <strong className="price fw-500 color-dark">
                        $42,500.00
                      </strong>
                      <a
                        className="btn-four rounded-circle"
                        href="/listing_details_01"
                      >
                        <i className="bi bi-arrow-up-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 d-flex mb-50 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="listing-card-one border-25 h-100 w-100">
                  <div className="img-gallery p-15">
                    <div className="position-relative border-25 overflow-hidden">
                      <div className="tag border-25 undefined">
                        FOR RENT
                      </div>
                      <a
                        className="fav-btn tran3s"
                        href="#"
                      >
                        <i className="fa-light fa-heart" />
                      </a>
                      <div
                        className="carousel slide"
                        id="carousel4"
                      >
                        <div className="carousel-indicators">
                          <button
                            aria-current="true"
                            aria-label="Slide 1"
                            className="active"
                            data-bs-slide-to="0"
                            data-bs-target="#carousel4"
                            type="button"
                          />
                          <button
                            aria-label="Slide 2"
                            data-bs-slide-to="1"
                            data-bs-target="#carousel4"
                            type="button"
                          />
                          <button
                            aria-label="Slide 3"
                            data-bs-slide-to="2"
                            data-bs-target="#carousel4"
                            type="button"
                          />
                        </div>
                        <div className="carousel-inner">
                          <div
                            className="carousel-item active"
                            data-bs-interval="1000000"
                          >
                            <a
                              className="d-block"
                              href="/listing_details_01"
                            >
                              <img
                                alt="..."
                                className="w-100"
                                data-nimg="1"
                                decoding="async"
                                height="296"
                                loading="lazy"
                                src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_04.8935c880.jpg&w=828&q=75"
                                srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_04.8935c880.jpg&w=640&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_04.8935c880.jpg&w=828&q=75 2x"
                                style={{
                                  color: 'transparent'
                                }}
                                width="411"
                              />
                            </a>
                          </div>
                          <div
                            className="carousel-item undefined"
                            data-bs-interval="1000000"
                          >
                            <a
                              className="d-block"
                              href="/listing_details_01"
                            >
                              <img
                                alt="..."
                                className="w-100"
                                data-nimg="1"
                                decoding="async"
                                height="296"
                                loading="lazy"
                                src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_05.6e7514d4.jpg&w=828&q=75"
                                srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_05.6e7514d4.jpg&w=640&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_05.6e7514d4.jpg&w=828&q=75 2x"
                                style={{
                                  color: 'transparent'
                                }}
                                width="411"
                              />
                            </a>
                          </div>
                          <div
                            className="carousel-item undefined"
                            data-bs-interval="1000000"
                          >
                            <a
                              className="d-block"
                              href="/listing_details_01"
                            >
                              <img
                                alt="..."
                                className="w-100"
                                data-nimg="1"
                                decoding="async"
                                height="295"
                                loading="lazy"
                                src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_06.f6ae3942.jpg&w=828&q=75"
                                srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_06.f6ae3942.jpg&w=640&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_06.f6ae3942.jpg&w=828&q=75 2x"
                                style={{
                                  color: 'transparent'
                                }}
                                width="411"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="property-info p-25">
                    <a
                      className="title tran3s"
                      href="/listing_details_01"
                    >
                      Blueberry villa
                    </a>
                    <div className="address">
                      Alexanderstraße 40, Berlin, Germany.
                    </div>
                    <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
                      <li className="d-flex align-items-center">
                        <img
                          alt=""
                          className="lazy-img icon me-2"
                          data-nimg="1"
                          decoding="async"
                          height="17"
                          loading="lazy"
                          src="/assets/static/media/icon_04.20cbbaa1.svg"
                          style={{
                            color: 'transparent'
                          }}
                          width="17"
                        />
                        <span className="fs-16">
                          1470 sqft
                        </span>
                      </li>
                      <li className="d-flex align-items-center">
                        <img
                          alt=""
                          className="lazy-img icon me-2"
                          data-nimg="1"
                          decoding="async"
                          height="19"
                          loading="lazy"
                          src="/assets/static/media/icon_05.57567837.svg"
                          style={{
                            color: 'transparent'
                          }}
                          width="28"
                        />
                        <span className="fs-16">
                          02 bed
                        </span>
                      </li>
                      <li className="d-flex align-items-center">
                        <img
                          alt=""
                          className="lazy-img icon me-2"
                          data-nimg="1"
                          decoding="async"
                          height="18"
                          loading="lazy"
                          src="/assets/static/media/icon_06.42f17dbd.svg"
                          style={{
                            color: 'transparent'
                          }}
                          width="18"
                        />
                        <span className="fs-16">
                          03 bath
                        </span>
                      </li>
                    </ul>
                    <div className="pl-footer top-border d-flex align-items-center justify-content-between">
                      <strong className="price fw-500 color-dark">
                        $3,280/
                        <sub>
                          m
                        </sub>
                      </strong>
                      <a
                        className="btn-four rounded-circle"
                        href="/listing_details_01"
                      >
                        <i className="bi bi-arrow-up-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex mb-50 wow fadeInUp">
                <div className="listing-card-one border-25 h-100 w-100">
                  <div className="img-gallery p-15">
                    <div className="position-relative border-25 overflow-hidden">
                      <div className="tag border-25 sale">
                        FOR SELL
                      </div>
                      <a
                        className="fav-btn tran3s"
                        href="#"
                      >
                        <i className="fa-light fa-heart" />
                      </a>
                      <div
                        className="carousel slide"
                        id="carousel5"
                      >
                        <div className="carousel-indicators">
                          <button
                            aria-current="true"
                            aria-label="Slide 1"
                            className="active"
                            data-bs-slide-to="0"
                            data-bs-target="#carousel5"
                            type="button"
                          />
                          <button
                            aria-label="Slide 2"
                            data-bs-slide-to="1"
                            data-bs-target="#carousel5"
                            type="button"
                          />
                          <button
                            aria-label="Slide 3"
                            data-bs-slide-to="2"
                            data-bs-target="#carousel5"
                            type="button"
                          />
                        </div>
                        <div className="carousel-inner">
                          <div
                            className="carousel-item active"
                            data-bs-interval="1000000"
                          >
                            <a
                              className="d-block"
                              href="/listing_details_01"
                            >
                              <img
                                alt="..."
                                className="w-100"
                                data-nimg="1"
                                decoding="async"
                                height="296"
                                loading="lazy"
                                src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_05.6e7514d4.jpg&w=828&q=75"
                                srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_05.6e7514d4.jpg&w=640&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_05.6e7514d4.jpg&w=828&q=75 2x"
                                style={{
                                  color: 'transparent'
                                }}
                                width="411"
                              />
                            </a>
                          </div>
                          <div
                            className="carousel-item undefined"
                            data-bs-interval="1000000"
                          >
                            <a
                              className="d-block"
                              href="/listing_details_01"
                            >
                              <img
                                alt="..."
                                className="w-100"
                                data-nimg="1"
                                decoding="async"
                                height="296"
                                loading="lazy"
                                src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_04.8935c880.jpg&w=828&q=75"
                                srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_04.8935c880.jpg&w=640&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_04.8935c880.jpg&w=828&q=75 2x"
                                style={{
                                  color: 'transparent'
                                }}
                                width="411"
                              />
                            </a>
                          </div>
                          <div
                            className="carousel-item undefined"
                            data-bs-interval="1000000"
                          >
                            <a
                              className="d-block"
                              href="/listing_details_01"
                            >
                              <img
                                alt="..."
                                className="w-100"
                                data-nimg="1"
                                decoding="async"
                                height="295"
                                loading="lazy"
                                src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_06.f6ae3942.jpg&w=828&q=75"
                                srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_06.f6ae3942.jpg&w=640&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_06.f6ae3942.jpg&w=828&q=75 2x"
                                style={{
                                  color: 'transparent'
                                }}
                                width="411"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="property-info p-25">
                    <a
                      className="title tran3s"
                      href="/listing_details_01"
                    >
                      White House villa
                    </a>
                    <div className="address">
                      Boulevard d'Alsace, Cannes, France
                    </div>
                    <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
                      <li className="d-flex align-items-center">
                        <img
                          alt=""
                          className="lazy-img icon me-2"
                          data-nimg="1"
                          decoding="async"
                          height="17"
                          loading="lazy"
                          src="/assets/static/media/icon_04.20cbbaa1.svg"
                          style={{
                            color: 'transparent'
                          }}
                          width="17"
                        />
                        <span className="fs-16">
                          1570 sqft
                        </span>
                      </li>
                      <li className="d-flex align-items-center">
                        <img
                          alt=""
                          className="lazy-img icon me-2"
                          data-nimg="1"
                          decoding="async"
                          height="19"
                          loading="lazy"
                          src="/assets/static/media/icon_05.57567837.svg"
                          style={{
                            color: 'transparent'
                          }}
                          width="28"
                        />
                        <span className="fs-16">
                          01 bed
                        </span>
                      </li>
                      <li className="d-flex align-items-center">
                        <img
                          alt=""
                          className="lazy-img icon me-2"
                          data-nimg="1"
                          decoding="async"
                          height="18"
                          loading="lazy"
                          src="/assets/static/media/icon_06.42f17dbd.svg"
                          style={{
                            color: 'transparent'
                          }}
                          width="18"
                        />
                        <span className="fs-16">
                          02 bath
                        </span>
                      </li>
                    </ul>
                    <div className="pl-footer top-border d-flex align-items-center justify-content-between">
                      <strong className="price fw-500 color-dark">
                        $28,100.00
                      </strong>
                      <a
                        className="btn-four rounded-circle"
                        href="/listing_details_01"
                      >
                        <i className="bi bi-arrow-up-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 d-flex mb-50 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="listing-card-one border-25 h-100 w-100">
                  <div className="img-gallery p-15">
                    <div className="position-relative border-25 overflow-hidden">
                      <div className="tag border-25 undefined">
                        FOR RENT
                      </div>
                      <a
                        className="fav-btn tran3s"
                        href="#"
                      >
                        <i className="fa-light fa-heart" />
                      </a>
                      <div
                        className="carousel slide"
                        id="carousel6"
                      >
                        <div className="carousel-indicators">
                          <button
                            aria-current="true"
                            aria-label="Slide 1"
                            className="active"
                            data-bs-slide-to="0"
                            data-bs-target="#carousel6"
                            type="button"
                          />
                          <button
                            aria-label="Slide 2"
                            data-bs-slide-to="1"
                            data-bs-target="#carousel6"
                            type="button"
                          />
                          <button
                            aria-label="Slide 3"
                            data-bs-slide-to="2"
                            data-bs-target="#carousel6"
                            type="button"
                          />
                        </div>
                        <div className="carousel-inner">
                          <div
                            className="carousel-item active"
                            data-bs-interval="1000000"
                          >
                            <a
                              className="d-block"
                              href="/listing_details_01"
                            >
                              <img
                                alt="..."
                                className="w-100"
                                data-nimg="1"
                                decoding="async"
                                height="295"
                                loading="lazy"
                                src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_06.f6ae3942.jpg&w=828&q=75"
                                srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_06.f6ae3942.jpg&w=640&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_06.f6ae3942.jpg&w=828&q=75 2x"
                                style={{
                                  color: 'transparent'
                                }}
                                width="411"
                              />
                            </a>
                          </div>
                          <div
                            className="carousel-item undefined"
                            data-bs-interval="1000000"
                          >
                            <a
                              className="d-block"
                              href="/listing_details_01"
                            >
                              <img
                                alt="..."
                                className="w-100"
                                data-nimg="1"
                                decoding="async"
                                height="296"
                                loading="lazy"
                                src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_05.6e7514d4.jpg&w=828&q=75"
                                srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_05.6e7514d4.jpg&w=640&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_05.6e7514d4.jpg&w=828&q=75 2x"
                                style={{
                                  color: 'transparent'
                                }}
                                width="411"
                              />
                            </a>
                          </div>
                          <div
                            className="carousel-item undefined"
                            data-bs-interval="1000000"
                          >
                            <a
                              className="d-block"
                              href="/listing_details_01"
                            >
                              <img
                                alt="..."
                                className="w-100"
                                data-nimg="1"
                                decoding="async"
                                height="296"
                                loading="lazy"
                                src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_04.8935c880.jpg&w=828&q=75"
                                srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_04.8935c880.jpg&w=640&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_04.8935c880.jpg&w=828&q=75 2x"
                                style={{
                                  color: 'transparent'
                                }}
                                width="411"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="property-info p-25">
                    <a
                      className="title tran3s"
                      href="/listing_details_01"
                    >
                      Luxury villa in Dal lake.
                    </a>
                    <div className="address">
                      110015. Taluk, New Delhi, India
                    </div>
                    <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
                      <li className="d-flex align-items-center">
                        <img
                          alt=""
                          className="lazy-img icon me-2"
                          data-nimg="1"
                          decoding="async"
                          height="17"
                          loading="lazy"
                          src="/assets/static/media/icon_04.20cbbaa1.svg"
                          style={{
                            color: 'transparent'
                          }}
                          width="17"
                        />
                        <span className="fs-16">
                          1370 sqft
                        </span>
                      </li>
                      <li className="d-flex align-items-center">
                        <img
                          alt=""
                          className="lazy-img icon me-2"
                          data-nimg="1"
                          decoding="async"
                          height="19"
                          loading="lazy"
                          src="/assets/static/media/icon_05.57567837.svg"
                          style={{
                            color: 'transparent'
                          }}
                          width="28"
                        />
                        <span className="fs-16">
                          03 bed
                        </span>
                      </li>
                      <li className="d-flex align-items-center">
                        <img
                          alt=""
                          className="lazy-img icon me-2"
                          data-nimg="1"
                          decoding="async"
                          height="18"
                          loading="lazy"
                          src="/assets/static/media/icon_06.42f17dbd.svg"
                          style={{
                            color: 'transparent'
                          }}
                          width="18"
                        />
                        <span className="fs-16">
                          02 bath
                        </span>
                      </li>
                    </ul>
                    <div className="pl-footer top-border d-flex align-items-center justify-content-between">
                      <strong className="price fw-500 color-dark">
                        $42,500.00
                      </strong>
                      <a
                        className="btn-four rounded-circle"
                        href="/listing_details_01"
                      >
                        <i className="bi bi-arrow-up-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex mb-50 wow fadeInUp">
                <div className="listing-card-one border-25 h-100 w-100">
                  <div className="img-gallery p-15">
                    <div className="position-relative border-25 overflow-hidden">
                      <div className="tag border-25 sale">
                        FOR SELL
                      </div>
                      <a
                        className="fav-btn tran3s"
                        href="#"
                      >
                        <i className="fa-light fa-heart" />
                      </a>
                      <div
                        className="carousel slide"
                        id="carousel3"
                      >
                        <div className="carousel-indicators">
                          <button
                            aria-current="true"
                            aria-label="Slide 1"
                            className="active"
                            data-bs-slide-to="0"
                            data-bs-target="#carousel3"
                            type="button"
                          />
                          <button
                            aria-label="Slide 2"
                            data-bs-slide-to="1"
                            data-bs-target="#carousel3"
                            type="button"
                          />
                          <button
                            aria-label="Slide 3"
                            data-bs-slide-to="2"
                            data-bs-target="#carousel3"
                            type="button"
                          />
                        </div>
                        <div className="carousel-inner">
                          <div
                            className="carousel-item active"
                            data-bs-interval="1000000"
                          >
                            <a
                              className="d-block"
                              href="/listing_details_01"
                            >
                              <img
                                alt="..."
                                className="w-100"
                                data-nimg="1"
                                decoding="async"
                                height="312"
                                loading="lazy"
                                src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_27.311965b4.jpg&w=1080&q=75"
                                srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_27.311965b4.jpg&w=640&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_27.311965b4.jpg&w=1080&q=75 2x"
                                style={{
                                  color: 'transparent'
                                }}
                                width="435"
                              />
                            </a>
                          </div>
                          <div
                            className="carousel-item undefined"
                            data-bs-interval="1000000"
                          >
                            <a
                              className="d-block"
                              href="/listing_details_01"
                            >
                              <img
                                alt="..."
                                className="w-100"
                                data-nimg="1"
                                decoding="async"
                                height="295"
                                loading="lazy"
                                src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_02.b592cf16.jpg&w=828&q=75"
                                srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_02.b592cf16.jpg&w=640&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_02.b592cf16.jpg&w=828&q=75 2x"
                                style={{
                                  color: 'transparent'
                                }}
                                width="411"
                              />
                            </a>
                          </div>
                          <div
                            className="carousel-item undefined"
                            data-bs-interval="1000000"
                          >
                            <a
                              className="d-block"
                              href="/listing_details_01"
                            >
                              <img
                                alt="..."
                                className="w-100"
                                data-nimg="1"
                                decoding="async"
                                height="295"
                                loading="lazy"
                                src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_01.af4d4d1d.jpg&w=828&q=75"
                                srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_01.af4d4d1d.jpg&w=640&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_01.af4d4d1d.jpg&w=828&q=75 2x"
                                style={{
                                  color: 'transparent'
                                }}
                                width="411"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="property-info p-25">
                    <a
                      className="title tran3s"
                      href="/listing_details_01"
                    >
                      Luxury villa in Dal lake.
                    </a>
                    <div className="address">
                      Muza link road, Acapulco, Mexico
                    </div>
                    <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
                      <li className="d-flex align-items-center">
                        <img
                          alt=""
                          className="lazy-img icon me-2"
                          data-nimg="1"
                          decoding="async"
                          height="17"
                          loading="lazy"
                          src="/assets/static/media/icon_04.20cbbaa1.svg"
                          style={{
                            color: 'transparent'
                          }}
                          width="17"
                        />
                        <span className="fs-16">
                          1470 sqft
                        </span>
                      </li>
                      <li className="d-flex align-items-center">
                        <img
                          alt=""
                          className="lazy-img icon me-2"
                          data-nimg="1"
                          decoding="async"
                          height="19"
                          loading="lazy"
                          src="/assets/static/media/icon_05.57567837.svg"
                          style={{
                            color: 'transparent'
                          }}
                          width="28"
                        />
                        <span className="fs-16">
                          01 bed
                        </span>
                      </li>
                      <li className="d-flex align-items-center">
                        <img
                          alt=""
                          className="lazy-img icon me-2"
                          data-nimg="1"
                          decoding="async"
                          height="18"
                          loading="lazy"
                          src="/assets/static/media/icon_06.42f17dbd.svg"
                          style={{
                            color: 'transparent'
                          }}
                          width="18"
                        />
                        <span className="fs-16">
                          04 bath
                        </span>
                      </li>
                    </ul>
                    <div className="pl-footer top-border d-flex align-items-center justify-content-between">
                      <strong className="price fw-500 color-dark">
                        $42,500/
                        <sub>
                          m
                        </sub>
                      </strong>
                      <a
                        className="btn-four rounded-circle"
                        href="/listing_details_01"
                      >
                        <i className="bi bi-arrow-up-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 d-flex mb-50 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="listing-card-one border-25 h-100 w-100">
                  <div className="img-gallery p-15">
                    <div className="position-relative border-25 overflow-hidden">
                      <div className="tag border-25 undefined">
                        FOR RENT
                      </div>
                      <a
                        className="fav-btn tran3s"
                        href="#"
                      >
                        <i className="fa-light fa-heart" />
                      </a>
                      <div
                        className="carousel slide"
                        id="carousel4"
                      >
                        <div className="carousel-indicators">
                          <button
                            aria-current="true"
                            aria-label="Slide 1"
                            className="active"
                            data-bs-slide-to="0"
                            data-bs-target="#carousel4"
                            type="button"
                          />
                          <button
                            aria-label="Slide 2"
                            data-bs-slide-to="1"
                            data-bs-target="#carousel4"
                            type="button"
                          />
                          <button
                            aria-label="Slide 3"
                            data-bs-slide-to="2"
                            data-bs-target="#carousel4"
                            type="button"
                          />
                        </div>
                        <div className="carousel-inner">
                          <div
                            className="carousel-item active"
                            data-bs-interval="1000000"
                          >
                            <a
                              className="d-block"
                              href="/listing_details_01"
                            >
                              <img
                                alt="..."
                                className="w-100"
                                data-nimg="1"
                                decoding="async"
                                height="312"
                                loading="lazy"
                                src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_26.40965ea2.jpg&w=1080&q=75"
                                srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_26.40965ea2.jpg&w=640&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_26.40965ea2.jpg&w=1080&q=75 2x"
                                style={{
                                  color: 'transparent'
                                }}
                                width="435"
                              />
                            </a>
                          </div>
                          <div
                            className="carousel-item undefined"
                            data-bs-interval="1000000"
                          >
                            <a
                              className="d-block"
                              href="/listing_details_01"
                            >
                              <img
                                alt="..."
                                className="w-100"
                                data-nimg="1"
                                decoding="async"
                                height="296"
                                loading="lazy"
                                src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_05.6e7514d4.jpg&w=828&q=75"
                                srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_05.6e7514d4.jpg&w=640&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_05.6e7514d4.jpg&w=828&q=75 2x"
                                style={{
                                  color: 'transparent'
                                }}
                                width="411"
                              />
                            </a>
                          </div>
                          <div
                            className="carousel-item undefined"
                            data-bs-interval="1000000"
                          >
                            <a
                              className="d-block"
                              href="/listing_details_01"
                            >
                              <img
                                alt="..."
                                className="w-100"
                                data-nimg="1"
                                decoding="async"
                                height="295"
                                loading="lazy"
                                src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_06.f6ae3942.jpg&w=828&q=75"
                                srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_06.f6ae3942.jpg&w=640&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fimg_06.f6ae3942.jpg&w=828&q=75 2x"
                                style={{
                                  color: 'transparent'
                                }}
                                width="411"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="property-info p-25">
                    <a
                      className="title tran3s"
                      href="/listing_details_01"
                    >
                      Blueberry villa
                    </a>
                    <div className="address">
                      Miramar, Playa. Ciudad de La Habana, Cuba.
                    </div>
                    <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
                      <li className="d-flex align-items-center">
                        <img
                          alt=""
                          className="lazy-img icon me-2"
                          data-nimg="1"
                          decoding="async"
                          height="17"
                          loading="lazy"
                          src="/assets/static/media/icon_04.20cbbaa1.svg"
                          style={{
                            color: 'transparent'
                          }}
                          width="17"
                        />
                        <span className="fs-16">
                          1170 sqft
                        </span>
                      </li>
                      <li className="d-flex align-items-center">
                        <img
                          alt=""
                          className="lazy-img icon me-2"
                          data-nimg="1"
                          decoding="async"
                          height="19"
                          loading="lazy"
                          src="/assets/static/media/icon_05.57567837.svg"
                          style={{
                            color: 'transparent'
                          }}
                          width="28"
                        />
                        <span className="fs-16">
                          04 bed
                        </span>
                      </li>
                      <li className="d-flex align-items-center">
                        <img
                          alt=""
                          className="lazy-img icon me-2"
                          data-nimg="1"
                          decoding="async"
                          height="18"
                          loading="lazy"
                          src="/assets/static/media/icon_06.42f17dbd.svg"
                          style={{
                            color: 'transparent'
                          }}
                          width="18"
                        />
                        <span className="fs-16">
                          02 bath
                        </span>
                      </li>
                    </ul>
                    <div className="pl-footer top-border d-flex align-items-center justify-content-between">
                      <strong className="price fw-500 color-dark">
                        $3,280.00
                      </strong>
                      <a
                        className="btn-four rounded-circle"
                        href="/listing_details_01"
                      >
                        <i className="bi bi-arrow-up-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul
              aria-label="Pagination"
              className="pagination-one d-flex align-items-center justify-content-center justify-content-sm-start style-none pt-30"
              role="navigation"
            >
              <li className="previous disabled">
                <a
                  aria-disabled="true"
                  aria-label="Previous page"
                  className=" "
                  rel="prev"
                  role="button"
                  tabIndex="-1"
                >
                  <img
                    alt=""
                    className="ms-2"
                    data-nimg="1"
                    decoding="async"
                    height="17"
                    loading="lazy"
                    src="/assets/static/media/icon_46.b389db76.svg"
                    style={{
                      color: 'transparent'
                    }}
                    width="38"
                  />
                </a>
              </li>
              <li className="selected">
                <a
                  aria-current="page"
                  aria-label="Page 1 is your current page"
                  rel="canonical"
                  role="button"
                  tabIndex="-1"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  aria-label="Page 2"
                  rel="next"
                  role="button"
                  tabIndex="0"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  aria-label="Page 3"
                  role="button"
                  tabIndex="0"
                >
                  3
                </a>
              </li>
              <li className="next">
                <a
                  aria-disabled="false"
                  aria-label="Next page"
                  className=""
                  rel="next"
                  role="button"
                  tabIndex="0"
                >
                  <img
                    alt=""
                    className="ms-2"
                    data-nimg="1"
                    decoding="async"
                    height="17"
                    loading="lazy"
                    src="/assets/static/media/icon_46.b389db76.svg"
                    style={{
                      color: 'transparent'
                    }}
                    width="38"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 order-lg-first">
          <div className="advance-search-panel dot-bg md-mt-80">
            <div className="main-bg">
              <form>
                <div className="row gx-lg-5">
                  <div className="col-12">
                    <div className="input-box-one mb-35">
                      <div className="label">
                        I’m looking to...
                      </div>
                      <div
                        className="nice-select form-select-lg nice-select fw-normal "
                        role="button"
                        tabIndex="0"
                      >
                        <span className="current">
                          Buy                                                        Apartments
                        </span>
                        <ul
                          className="list"
                          role="menubar"
                        >
                          <li
                            className="option selected focus"
                            data-value="apartments"
                            role="menuitem"
                            style={{
                              fontSize: '14px'
                            }}
                          >
                            Buy Apartments
                          </li>
                          <li
                            className="option "
                            data-value="condos"
                            role="menuitem"
                            style={{
                              fontSize: '14px'
                            }}
                          >
                            Rent Condos
                          </li>
                          <li
                            className="option "
                            data-value="houses"
                            role="menuitem"
                            style={{
                              fontSize: '14px'
                            }}
                          >
                            Sell Houses
                          </li>
                          <li
                            className="option "
                            data-value="industrial"
                            role="menuitem"
                            style={{
                              fontSize: '14px'
                            }}
                          >
                            Rent Industrial
                          </li>
                          <li
                            className="option "
                            data-value="villas"
                            role="menuitem"
                            style={{
                              fontSize: '14px'
                            }}
                          >
                            Sell Villas
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="input-box-one mb-35">
                      <div className="label">
                        Keyword
                      </div>
                      <input
                        className="type-input"
                        placeholder="buy, home, loft, apartment"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="input-box-one mb-50">
                      <div className="label">
                        Location
                      </div>
                      <div
                        className="nice-select form-select-lg nice-select location fw-normal "
                        role="button"
                        tabIndex="0"
                      >
                        <span className="current">
                          Washington                                                        DC
                        </span>
                        <ul
                          className="list"
                          role="menubar"
                        >
                          <li
                            className="option selected focus"
                            data-value="washington"
                            role="menuitem"
                            style={{
                              fontSize: '14px'
                            }}
                          >
                            Washington DC
                          </li>
                          <li
                            className="option "
                            data-value="mexico"
                            role="menuitem"
                            style={{
                              fontSize: '14px'
                            }}
                          >
                            Acapulco, Mexico
                          </li>
                          <li
                            className="option "
                            data-value="germany"
                            role="menuitem"
                            style={{
                              fontSize: '14px'
                            }}
                          >
                            Berlin, Germany
                          </li>
                          <li
                            className="option "
                            data-value="france"
                            role="menuitem"
                            style={{
                              fontSize: '14px'
                            }}
                          >
                            Cannes, France
                          </li>
                          <li
                            className="option "
                            data-value="india"
                            role="menuitem"
                            style={{
                              fontSize: '14px'
                            }}
                          >
                            Delhi, India
                          </li>
                          <li
                            className="option "
                            data-value="giza"
                            role="menuitem"
                            style={{
                              fontSize: '14px'
                            }}
                          >
                            Giza, Egypt
                          </li>
                          <li
                            className="option "
                            data-value="cuba"
                            role="menuitem"
                            style={{
                              fontSize: '14px'
                            }}
                          >
                            Havana, Cuba
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-box-one mb-40">
                      <div className="label">
                        Bedroom
                      </div>
                      <div
                        className="nice-select form-select-lg nice-select fw-normal "
                        role="button"
                        tabIndex="0"
                      >
                        <span className="current">
                          1
                        </span>
                        <ul
                          className="list"
                          role="menubar"
                        >
                          <li
                            className="option selected focus"
                            data-value="1"
                            role="menuitem"
                            style={{
                              fontSize: '14px'
                            }}
                          >
                            1
                          </li>
                          <li
                            className="option "
                            data-value="2"
                            role="menuitem"
                            style={{
                              fontSize: '14px'
                            }}
                          >
                            2
                          </li>
                          <li
                            className="option "
                            data-value="3"
                            role="menuitem"
                            style={{
                              fontSize: '14px'
                            }}
                          >
                            3
                          </li>
                          <li
                            className="option "
                            data-value="4"
                            role="menuitem"
                            style={{
                              fontSize: '14px'
                            }}
                          >
                            4
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-box-one mb-40">
                      <div className="label">
                        Bath
                      </div>
                      <div
                        className="nice-select form-select-lg nice-select fw-normal "
                        role="button"
                        tabIndex="0"
                      >
                        <span className="current">
                          1
                        </span>
                        <ul
                          className="list"
                          role="menubar"
                        >
                          <li
                            className="option selected focus"
                            data-value="1"
                            role="menuitem"
                            style={{
                              fontSize: '14px'
                            }}
                          >
                            1
                          </li>
                          <li
                            className="option "
                            data-value="2"
                            role="menuitem"
                            style={{
                              fontSize: '14px'
                            }}
                          >
                            2
                          </li>
                          <li
                            className="option "
                            data-value="3"
                            role="menuitem"
                            style={{
                              fontSize: '14px'
                            }}
                          >
                            3
                          </li>
                          <li
                            className="option "
                            data-value="4"
                            role="menuitem"
                            style={{
                              fontSize: '14px'
                            }}
                          >
                            4
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <h6 className="block-title fw-bold mb-30">
                      Amenities
                    </h6>
                    <ul className="style-none d-flex flex-wrap justify-content-between filter-input">
                      <li>
                        <input
                          defaultValue="A/C & Heating"
                          name="Amenities"
                          type="checkbox"
                        />
                        <label>
                          A/C & Heating
                        </label>
                      </li>
                      <li>
                        <input
                          defaultValue="Garages"
                          name="Amenities"
                          type="checkbox"
                        />
                        <label>
                          Garages
                        </label>
                      </li>
                      <li>
                        <input
                          defaultValue="Garden"
                          name="Amenities"
                          type="checkbox"
                        />
                        <label>
                          Garden
                        </label>
                      </li>
                      <li>
                        <input
                          defaultValue="Disabled Access"
                          name="Amenities"
                          type="checkbox"
                        />
                        <label>
                          Disabled Access
                        </label>
                      </li>
                      <li>
                        <input
                          defaultValue="Swimming Pool"
                          name="Amenities"
                          type="checkbox"
                        />
                        <label>
                          Swimming Pool
                        </label>
                      </li>
                      <li>
                        <input
                          defaultValue="Parking"
                          name="Amenities"
                          type="checkbox"
                        />
                        <label>
                          Parking
                        </label>
                      </li>
                      <li>
                        <input
                          defaultValue="Wifi"
                          name="Amenities"
                          type="checkbox"
                        />
                        <label>
                          Wifi
                        </label>
                      </li>
                      <li>
                        <input
                          defaultValue="Pet Friendly"
                          name="Amenities"
                          type="checkbox"
                        />
                        <label>
                          Pet Friendly
                        </label>
                      </li>
                      <li>
                        <input
                          defaultValue="Ceiling Height"
                          name="Amenities"
                          type="checkbox"
                        />
                        <label>
                          Ceiling Height
                        </label>
                      </li>
                      <li>
                        <input
                          defaultValue="Fireplace"
                          name="Amenities"
                          type="checkbox"
                        />
                        <label>
                          Fireplace
                        </label>
                      </li>
                      <li>
                        <input
                          defaultValue="Play Ground"
                          name="Amenities"
                          type="checkbox"
                        />
                        <label>
                          Play Ground
                        </label>
                      </li>
                      <li>
                        <input
                          defaultValue="Elevator"
                          name="Amenities"
                          type="checkbox"
                        />
                        <label>
                          Elevator
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12">
                    <h6 className="block-title fw-bold mt-25 mb-15">
                      Price range
                    </h6>
                    <div className="price-ranger">
                      <div className="price-input d-flex align-items-center justify-content-between pt-5">
                        <div className="field d-flex align-items-center">
                          <input
                            className="input-min"
                            defaultValue="0"
                            type="number"
                          />
                        </div>
                        <div className="divider-line" />
                        <div className="field d-flex align-items-center">
                          <input
                            className="input-max"
                            defaultValue="42500"
                            type="number"
                          />
                        </div>
                        <div className="currency ps-1">
                          USD
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        background: 'linear-gradient(to right, #fff 0%, #fff 0%, #000 0%, #000 100%, #1B1819 100%, #1B1819 100%)',
                        cursor: 'inherit',
                        height: '4px',
                        transform: 'scale(1)',
                        width: '100%'
                      }}
                    >
                      <div
                        aria-valuemax="42500"
                        aria-valuemin="0"
                        aria-valuenow="0"
                        className="ui-input"
                        draggable="false"
                        role="slider"
                        style={{
                          MozUserSelect: 'none',
                          WebkitUserSelect: 'none',
                          backgroundColor: '#fff',
                          border: '2px solid #000',
                          borderRadius: '50px',
                          cursor: 'grab',
                          height: '20px',
                          msUserSelect: 'none',
                          outline: 'none',
                          position: 'absolute',
                          touchAction: 'none',
                          userSelect: 'none',
                          width: '20px',
                          zIndex: '0'
                        }}
                        tabIndex="0"
                      >
                      </div>
                      <div
                        aria-valuemax="42500"
                        aria-valuemin="0"
                        aria-valuenow="42500"
                        className="ui-input"
                        draggable="false"
                        role="slider"
                        style={{
                          MozUserSelect: 'none',
                          WebkitUserSelect: 'none',
                          backgroundColor: '#fff',
                          border: '2px solid #000',
                          borderRadius: '50px',
                          cursor: 'grab',
                          height: '20px',
                          msUserSelect: 'none',
                          outline: 'none',
                          position: 'absolute',
                          touchAction: 'none',
                          userSelect: 'none',
                          width: '20px',
                          zIndex: '1'
                        }}
                        tabIndex="0"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <h6 className="block-title fw-bold mt-45 mb-20">
                      SQFT
                    </h6>
                    <div className="d-flex align-items-center sqf-ranger">
                      <input
                        placeholder="Min"
                        type="text"
                      />
                      <div className="divider" />
                      <input
                        placeholder="Max"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="fw-500 text-uppercase tran3s apply-search w-100 mt-40 mb-25">
                      <i className="fa-light fa-magnifying-glass" />
                      <span>
                        Search
                      </span>
                    </button>
                  </div>
                  <div className="col-12">
                    <div className="d-flex justify-content-between form-widget">
                      <a
                        className="tran3s"
                        style={{
                          cursor: 'pointer'
                        }}
                      >
                        <i className="fa-regular fa-arrows-rotate" />
                        <span>
                          Reset                                                        Filter
                        </span>
                      </a>
                      <a
                        className="tran3s"
                        href="#"
                      >
                        <i className="fa-regular fa-star" />
                        <span>
                          Save Search
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </form>
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

export default Projects