import React from 'react'

function Home() {
  return (
    <div className="main-page-wrapper">

  <div className="hero-banner-one bg-pink z-1 pt-225 xl-pt-200 pb-250 xl-pb-150 lg-pb-100 position-relative">
    <div className="container position-relative">
      <div className="row">
        <div className="col-xxl-10 col-xl-9 col-lg-10 col-md-10 m-auto">
          <h1 className="hero-heading text-center wow fadeInUp">
            Get the ideal home for your{' '}
            <span className="d-inline-block position-relative">
              family{' '}
              <img
                alt=""
                className="lazy-img"
                data-nimg="1"
                decoding="async"
                height="19"
                loading="lazy"
                src="/assets/static/media/shape_01.b50482f7.svg"
                style={{
                  color: 'transparent'
                }}
                width="295"
              />
            </span>
          </h1>
          <p
            className="fs-24 color-dark text-center pt-35 pb-35 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            We’ve                            more than 745,000 apartments, place & plot.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-xxl-10 m-auto">
          <div className="search-wrapper-one layout-one bg position-relative">
            <div className="bg-wrapper">
              <form>
                <div className="row gx-0 align-items-center">
                  <div className="col-xl-3 col-lg-4">
                    <div className="input-box-one border-left">
                      <div className="label">
                        I’m looking to...
                      </div>
                      <div
                        className="nice-select form-select-lg nice-select  "
                        role="button"
                        tabIndex="0"
                      >
                        <span className="current">
                          Buy Apartments
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
                  <div className="col-xl-4 col-lg-4">
                    <div className="input-box-one border-left">
                      <div className="label">
                        Location
                      </div>
                      <div
                        className="nice-select form-select-lg nice-select location  "
                        role="button"
                        tabIndex="0"
                      >
                        <span className="current">
                          Berlin,                                                        Germany
                        </span>
                        <ul
                          className="list"
                          role="menubar"
                        >
                          <li
                            className="option selected focus"
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
                            data-value="dhaka"
                            role="menuitem"
                            style={{
                              fontSize: '14px'
                            }}
                          >
                            Dhanmondi, Dhaka
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
                  <div className="col-xl-3 col-lg-4">
                    <div className="input-box-one border-left border-lg-0">
                      <div className="label">
                        Price Range
                      </div>
                      <div
                        className="nice-select form-select-lg nice-select  "
                        role="button"
                        tabIndex="0"
                      >
                        <span className="current">
                          $10,000 - $200,000
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
                            $10,000 - $200,000
                          </li>
                          <li
                            className="option "
                            data-value="2"
                            role="menuitem"
                            style={{
                              fontSize: '14px'
                            }}
                          >
                            $20,000 - $300,000
                          </li>
                          <li
                            className="option "
                            data-value="3"
                            role="menuitem"
                            style={{
                              fontSize: '14px'
                            }}
                          >
                            $30,000 - $400,000
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-2">
                    <div className="input-box-one lg-mt-10">
                      <button className="fw-500 tran3s text-uppercase search-btn">
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img
      alt=""
      className="lazy-img shapes w-100 illustration"
      data-nimg="1"
      decoding="async"
      height="778"
      loading="lazy"
      src="/assets/static/media/ils_01.cffd5363.svg"
      style={{
        color: 'transparent'
      }}
      width="1800"
    />
  </div>
  {/* <div className="feedback-section-one position-relative z-1 pt-70 md-pt-50 pb-80 md-pb-60">
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
                          Milan,                                                        Itlay
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
                          Dhaka,                                                        BD
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
  </div> */}
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
  <div className="block-feature-two mt-150 xl-mt-110">
    <div className="wrapper">
      <div className="row gx-xl-5">
        <div className="col-xxl-7 col-md-6 d-flex wow fadeInLeft">
          <div className="block-one w-100 h-100">
            <div className="position-relative z-1 h-100">
              <h3 className="mb-55">
                Secure your family's dream home.
              </h3>
              <a
                className="fancybox video-icon d-flex align-items-center justify-content-center rounded-circle ms-3"
                data-fancybox=""
                style={{
                  cursor: 'pointer'
                }}
              >
                <i className="fa-solid fa-play" />
              </a>
              <div className="card-box text-center">
                <h3 className="main-count fw-500">
                  0
                  <span className="counter">
                    <span />
                    <span />
                  </span>
                  +
                </h3>
                <p className="fs-20">
                  Years Experience{' '}
                  <br />
                  with proud.
                </p>
              </div>
              <img
                alt=""
                className="lazy-img shapes screen_01"
                data-nimg="1"
                decoding="async"
                height="150"
                loading="lazy"
                src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fscreen_01.bb0246d0.png&w=640&q=75"
                srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fscreen_01.bb0246d0.png&w=384&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fscreen_01.bb0246d0.png&w=640&q=75 2x"
                style={{
                  color: 'transparent'
                }}
                width="260"
              />
            </div>
          </div>
        </div>
        <div className="col-xxl-5 col-md-6 wow fadeInRight">
          <div className="block-two">
            <div className="bg-wrapper">
              <h4>
                Who we are?
              </h4>
              <p className="fs-22 mt-20">
                Your premier partner in real estate.{' '}
                <br />
                {' '}Transforming                                    properties into dreams. Let us guide you home with expertise.
              </p>
              <div className="counter-wrapper ps-xl-3 pb-30 mt-45 mb-50">
                <div className="row">
                  <div className="col-6">
                    <div className="counter-block-one mt-20">
                      <div className="main-count fw-500 color-dark">
                        <span className="counter">
                          <span />
                          <span />
                        </span>
                        K+
                      </div>
                      <span>
                        Completed Project
                      </span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="counter-block-one mt-20">
                      <div className="main-count fw-500 color-dark">
                        <span className="counter">
                          <span />
                          <span />
                        </span>
                        mil+
                      </div>
                      <span>
                        Happy Customers
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="list-style-one fs-22 color-dark style-none">
                <li>
                  Loan & low Interest facility
                </li>
                <li>
                  Over 100k+ property & update regularly
                </li>
                <li>
                  Expert agent consultation
                </li>
              </ul>
              <div className="d-inline-flex flex-wrap align-items-center mt-15 md-mt-10">
                <a
                  className="btn-two mt-20 me-4"
                  href="/about_us_01"
                >
                  <span>
                    More Details
                  </span>
                </a>
                <a
                  className="btn-three mt-20"
                  href="/contact"
                >
                  <span>
                    Request a Callback
                  </span>
                  {' '}
                  <i className="fa-light fa-arrow-right-long" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <div className="block-feature-three mt-150 xl-mt-120">
    <div className="container">
      <div className="title-one text-center mb-75 xl-mb-50 md-mb-30 wow fadeInUp">
        <h3>
          Explore Popular{' '}
          <span>
            Location{' '}
            <img
              alt=""
              className="lazy-img"
              data-nimg="1"
              decoding="async"
              height="21"
              loading="lazy"
              src="/assets/static/media/title_shape_02.dbe4897f.svg"
              style={{
                color: 'transparent'
              }}
              width="280"
            />
          </span>
        </h3>
        <p className="fs-22">
          Explore the latest listings & projects in diverse areas
        </p>
      </div>
      <div
        className="slick-slider property-location-slider-one slick-initialized"
        dir="ltr"
      >
        <div
          className="slick-list"
          style={{
            padding: '0px 0'
          }}
        >
          <div
            className="slick-track"
            style={{
              left: '-87.5%',
              width: '375%'
            }}
          >
            <div
              aria-hidden="true"
              className="slick-slide slick-center slick-cloned"
              data-index="-5"
              style={{
                width: '6.666666666666667%'
              }}
              tabIndex="-1"
            >
              <div>
                <div
                  className="item-first"
                  style={{
                    display: 'inline-block',
                    width: '100%'
                  }}
                  tabIndex="-1"
                >
                  <div className="location-card-one position-relative z-1 d-flex align-items-end card-1">
                    <div className="content text-center w-100 tran3s">
                      <h5 className="text-white fw-normal">
                        Kelowna
                      </h5>
                      <p className="text-white fw-light">
                        1,230 Properties
                      </p>
                    </div>
                    <a
                      className="stretched-link"
                      href="/listing_01"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="slick-slide slick-cloned"
              data-index="-4"
              style={{
                width: '6.666666666666667%'
              }}
              tabIndex="-1"
            >
              <div>
                <div
                  className="item-first"
                  style={{
                    display: 'inline-block',
                    width: '100%'
                  }}
                  tabIndex="-1"
                >
                  <div className="location-card-one position-relative z-1 d-flex align-items-end card-2">
                    <div className="content text-center w-100 tran3s">
                      <h5 className="text-white fw-normal">
                        California
                      </h5>
                      <p className="text-white fw-light">
                        1190 Properties
                      </p>
                    </div>
                    <a
                      className="stretched-link"
                      href="/listing_01"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="slick-slide slick-cloned"
              data-index="-3"
              style={{
                width: '6.666666666666667%'
              }}
              tabIndex="-1"
            >
              <div>
                <div
                  className="item-first"
                  style={{
                    display: 'inline-block',
                    width: '100%'
                  }}
                  tabIndex="-1"
                >
                  <div className="location-card-one position-relative z-1 d-flex align-items-end card-3">
                    <div className="content text-center w-100 tran3s">
                      <h5 className="text-white fw-normal">
                        New York
                      </h5>
                      <p className="text-white fw-light">
                        1710 Properties
                      </p>
                    </div>
                    <a
                      className="stretched-link"
                      href="/listing_01"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              aria-hidden="false"
              className="slick-slide slick-active slick-cloned"
              data-index="-2"
              style={{
                width: '6.666666666666667%'
              }}
              tabIndex="-1"
            >
              <div>
                <div
                  className="item-first"
                  style={{
                    display: 'inline-block',
                    width: '100%'
                  }}
                  tabIndex="-1"
                >
                  <div className="location-card-one position-relative z-1 d-flex align-items-end card-5">
                    <div className="content text-center w-100 tran3s">
                      <h5 className="text-white fw-normal">
                        Miami
                      </h5>
                      <p className="text-white fw-light">
                        670 Properties
                      </p>
                    </div>
                    <a
                      className="stretched-link"
                      href="/listing_01"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              aria-hidden="false"
              className="slick-slide slick-active slick-cloned"
              data-index="-1"
              style={{
                width: '6.666666666666667%'
              }}
              tabIndex="-1"
            >
              <div>
                <div
                  className="item-first"
                  style={{
                    display: 'inline-block',
                    width: '100%'
                  }}
                  tabIndex="-1"
                >
                  <div className="location-card-one position-relative z-1 d-flex align-items-end card-5">
                    <div className="content text-center w-100 tran3s">
                      <h5 className="text-white fw-normal">
                        Dhaka
                      </h5>
                      <p className="text-white fw-light">
                        1670 Properties
                      </p>
                    </div>
                    <a
                      className="stretched-link"
                      href="/listing_01"
                    />
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
                width: '6.666666666666667%'
              }}
              tabIndex="-1"
            >
              <div>
                <div
                  className="item-first"
                  style={{
                    display: 'inline-block',
                    width: '100%'
                  }}
                  tabIndex="-1"
                >
                  <div className="location-card-one position-relative z-1 d-flex align-items-end card-1">
                    <div className="content text-center w-100 tran3s">
                      <h5 className="text-white fw-normal">
                        Kelowna
                      </h5>
                      <p className="text-white fw-light">
                        1,230 Properties
                      </p>
                    </div>
                    <a
                      className="stretched-link"
                      href="/listing_01"
                    />
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
                width: '6.666666666666667%'
              }}
              tabIndex="-1"
            >
              <div>
                <div
                  className="item-first"
                  style={{
                    display: 'inline-block',
                    width: '100%'
                  }}
                  tabIndex="-1"
                >
                  <div className="location-card-one position-relative z-1 d-flex align-items-end card-2">
                    <div className="content text-center w-100 tran3s">
                      <h5 className="text-white fw-normal">
                        California
                      </h5>
                      <p className="text-white fw-light">
                        1190 Properties
                      </p>
                    </div>
                    <a
                      className="stretched-link"
                      href="/listing_01"
                    />
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
                width: '6.666666666666667%'
              }}
              tabIndex="-1"
            >
              <div>
                <div
                  className="item-first"
                  style={{
                    display: 'inline-block',
                    width: '100%'
                  }}
                  tabIndex="-1"
                >
                  <div className="location-card-one position-relative z-1 d-flex align-items-end card-3">
                    <div className="content text-center w-100 tran3s">
                      <h5 className="text-white fw-normal">
                        New York
                      </h5>
                      <p className="text-white fw-light">
                        1710 Properties
                      </p>
                    </div>
                    <a
                      className="stretched-link"
                      href="/listing_01"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="slick-slide"
              data-index="3"
              style={{
                outline: 'none',
                width: '6.666666666666667%'
              }}
              tabIndex="-1"
            >
              <div>
                <div
                  className="item-first"
                  style={{
                    display: 'inline-block',
                    width: '100%'
                  }}
                  tabIndex="-1"
                >
                  <div className="location-card-one position-relative z-1 d-flex align-items-end card-5">
                    <div className="content text-center w-100 tran3s">
                      <h5 className="text-white fw-normal">
                        Miami
                      </h5>
                      <p className="text-white fw-light">
                        670 Properties
                      </p>
                    </div>
                    <a
                      className="stretched-link"
                      href="/listing_01"
                    />
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
                width: '6.666666666666667%'
              }}
              tabIndex="-1"
            >
              <div>
                <div
                  className="item-first"
                  style={{
                    display: 'inline-block',
                    width: '100%'
                  }}
                  tabIndex="-1"
                >
                  <div className="location-card-one position-relative z-1 d-flex align-items-end card-5">
                    <div className="content text-center w-100 tran3s">
                      <h5 className="text-white fw-normal">
                        Dhaka
                      </h5>
                      <p className="text-white fw-light">
                        1670 Properties
                      </p>
                    </div>
                    <a
                      className="stretched-link"
                      href="/listing_01"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="slick-slide slick-center slick-cloned"
              data-index="5"
              style={{
                width: '6.666666666666667%'
              }}
              tabIndex="-1"
            >
              <div>
                <div
                  className="item-first"
                  style={{
                    display: 'inline-block',
                    width: '100%'
                  }}
                  tabIndex="-1"
                >
                  <div className="location-card-one position-relative z-1 d-flex align-items-end card-1">
                    <div className="content text-center w-100 tran3s">
                      <h5 className="text-white fw-normal">
                        Kelowna
                      </h5>
                      <p className="text-white fw-light">
                        1,230 Properties
                      </p>
                    </div>
                    <a
                      className="stretched-link"
                      href="/listing_01"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="slick-slide slick-cloned"
              data-index="6"
              style={{
                width: '6.666666666666667%'
              }}
              tabIndex="-1"
            >
              <div>
                <div
                  className="item-first"
                  style={{
                    display: 'inline-block',
                    width: '100%'
                  }}
                  tabIndex="-1"
                >
                  <div className="location-card-one position-relative z-1 d-flex align-items-end card-2">
                    <div className="content text-center w-100 tran3s">
                      <h5 className="text-white fw-normal">
                        California
                      </h5>
                      <p className="text-white fw-light">
                        1190 Properties
                      </p>
                    </div>
                    <a
                      className="stretched-link"
                      href="/listing_01"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="slick-slide slick-cloned"
              data-index="7"
              style={{
                width: '6.666666666666667%'
              }}
              tabIndex="-1"
            >
              <div>
                <div
                  className="item-first"
                  style={{
                    display: 'inline-block',
                    width: '100%'
                  }}
                  tabIndex="-1"
                >
                  <div className="location-card-one position-relative z-1 d-flex align-items-end card-3">
                    <div className="content text-center w-100 tran3s">
                      <h5 className="text-white fw-normal">
                        New York
                      </h5>
                      <p className="text-white fw-light">
                        1710 Properties
                      </p>
                    </div>
                    <a
                      className="stretched-link"
                      href="/listing_01"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="slick-slide slick-cloned"
              data-index="8"
              style={{
                width: '6.666666666666667%'
              }}
              tabIndex="-1"
            >
              <div>
                <div
                  className="item-first"
                  style={{
                    display: 'inline-block',
                    width: '100%'
                  }}
                  tabIndex="-1"
                >
                  <div className="location-card-one position-relative z-1 d-flex align-items-end card-5">
                    <div className="content text-center w-100 tran3s">
                      <h5 className="text-white fw-normal">
                        Miami
                      </h5>
                      <p className="text-white fw-light">
                        670 Properties
                      </p>
                    </div>
                    <a
                      className="stretched-link"
                      href="/listing_01"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="slick-slide slick-cloned"
              data-index="9"
              style={{
                width: '6.666666666666667%'
              }}
              tabIndex="-1"
            >
              <div>
                <div
                  className="item-first"
                  style={{
                    display: 'inline-block',
                    width: '100%'
                  }}
                  tabIndex="-1"
                >
                  <div className="location-card-one position-relative z-1 d-flex align-items-end card-5">
                    <div className="content text-center w-100 tran3s">
                      <h5 className="text-white fw-normal">
                        Dhaka
                      </h5>
                      <p className="text-white fw-light">
                        1670 Properties
                      </p>
                    </div>
                    <a
                      className="stretched-link"
                      href="/listing_01"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul className="slider-arrows slick-arrow-one d-flex justify-content-between style-none position-relative">
        <li className="prev_a slick-arrow">
          <i className="fa-sharp fa-light fa-angle-left" />
        </li>
        <li className="next_a slick-arrow">
          <i className="fa-sharp fa-light fa-angle-right" />
        </li>
      </ul>
    </div>
  </div> */}
  <div className="property-listing-one bg-pink-two mt-150 xl-mt-120 pt-140 xl-pt-120 lg-pt-80 pb-180 xl-pb-120 lg-pb-100">
    <div className="container">
      <div className="position-relative">
        <div className="title-one text-center text-lg-start mb-45 xl-mb-30 lg-mb-20 wow fadeInUp">
          <h3>
            New{' '}
            <span>
              Listings{' '}
              <img
                alt=""
                className="lazy-img"
                data-nimg="1"
                decoding="async"
                height="18"
                loading="lazy"
                src="/assets/static/media/title_shape_03.87920ef9.svg"
                style={{
                  color: 'transparent'
                }}
                width="244"
              />
            </span>
          </h3>
          <p className="fs-22 mt-xs">
            Explore latest & featured properties for sale.
          </p>
        </div>
        <div className="row gx-xxl-5">
          <div className="col-lg-4 col-md-6 d-flex mt-40 wow fadeInUp">
            <div className="listing-card-one border-25 h-100 w-100">
              <div className="img-gallery p-15">
                <div className="position-relative border-25 overflow-hidden">
                  <div className="tag border-25 undefined">
                    FOR RENT
                  </div>
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
                  Blueberry                                        villa
                </a>
                <div className="address">
                  Mirpur 10, Stadium dhaka 1208
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
                      3 bed
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
                      2 bath
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
          <div
            className="col-lg-4 col-md-6 d-flex mt-40 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="listing-card-one border-25 h-100 w-100">
              <div className="img-gallery p-15">
                <div className="position-relative border-25 overflow-hidden">
                  <div className="tag border-25 sale">
                    FOR SELL
                  </div>
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
                  White                                        House villa
                </a>
                <div className="address">
                  Muza link road, ca, usa
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
                      2 bed
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
                      2 bath
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
            className="col-lg-4 col-md-6 d-flex mt-40 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="listing-card-one border-25 h-100 w-100">
              <div className="img-gallery p-15">
                <div className="position-relative border-25 overflow-hidden">
                  <div className="tag border-25 sale">
                    FOR SELL
                  </div>
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
                  Luxury                                        villa in Dal lake.
                </a>
                <div className="address">
                  Mirpur 10, Stadium
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
                      2 bed
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
                      2 bath
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
          <div className="col-lg-4 col-md-6 d-flex mt-40 wow fadeInUp">
            <div className="listing-card-one border-25 h-100 w-100">
              <div className="img-gallery p-15">
                <div className="position-relative border-25 overflow-hidden">
                  <div className="tag border-25 undefined">
                    FOR RENT
                  </div>
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
                  Blueberry                                        villa
                </a>
                <div className="address">
                  Mirpur 10, Stadium dhaka 1208
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
                      3 bed
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
                      2 bath
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
          <div
            className="col-lg-4 col-md-6 d-flex mt-40 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="listing-card-one border-25 h-100 w-100">
              <div className="img-gallery p-15">
                <div className="position-relative border-25 overflow-hidden">
                  <div className="tag border-25 sale">
                    FOR SELL
                  </div>
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
                  White                                        House villa
                </a>
                <div className="address">
                  Muza link road, ca, usa
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
                      2 bed
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
                      2 bath
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
            className="col-lg-4 col-md-6 d-flex mt-40 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="listing-card-one border-25 h-100 w-100">
              <div className="img-gallery p-15">
                <div className="position-relative border-25 overflow-hidden">
                  <div className="tag border-25 undefined">
                    FOR RENT
                  </div>
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
                  Luxury                                        villa in Dal lake.
                </a>
                <div className="address">
                  Mirpur 10, Stadium
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
                      2 bed
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
                      2 bath
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
        </div>
      </div>
    </div>
  </div>
  <div className="fancy-banner-one position-relative z-1 pt-160 xl-pt-140 lg-pt-80 pb-140 xl-pb-120 lg-pb-100 ">
    <div className="container ">
      <div className="row">
        <div className="col-lg-6 wow fadeInLeft ">
          <div className="title-one mb-45 lg-mb-30">
            <h3 className="text-white">
              Exclusive{' '}
              <span>
                Monthly{' '}
                <img
                  alt=""
                  className="lazy-img"
                  data-nimg="1"
                  decoding="async"
                  height="18"
                  loading="lazy"
                  src="/assets/static/media/title_shape_04.fbbf0805.svg"
                  style={{
                    color: 'transparent'
                  }}
                  width="258"
                />
              </span>
              Deal for you.
            </h3>
            <p className="fs-24 text-white pe-xl-5 me-xxl-5">
              Don't miss out on this personalized                                monthly exclusive offer for you.
            </p>
          </div>
          <a
            className="btn-six"
            href="/listing_details_02"
          >
            More Details
          </a>
        </div>
        <div className="col-lg-6 wow fadeInRight ">
          <div className="property-item md-mt-60 position-relative z-1 ">
            <div className="row gx-0">
              <div className="col-md-5 d-flex">
                <div className="gutter border-right w-100 h-100">
                  <div className="tag mb-20">
                    FOR SELL
                  </div>
                  <h4 className="mb-70 sm-mb-40">
                    Luxury fisa orkit villa.
                  </h4>
                  <ul className="style-none d-flex action-icons">
                    <li>
                      <a href="#">
                        <i className="fa-light fa-heart" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-light fa-bookmark" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-light fa-circle-plus" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-7 d-flex">
                <div className="gutter w-100 h-100">
                  <p>
                    Mirpur 10, National Stadium, 1210, Dhaka, BD
                  </p>
                  <h2 className="price text-center">
                    $28,100.00
                  </h2>
                  <ul className="style-none d-flex feature">
                    <li>
                      <strong className="d-block color-dark fw-500 fs-20">
                        2137
                      </strong>
                      <span className="fs-16">
                        sqft
                      </span>
                    </li>
                    <li className="text-center">
                      <strong className="d-block color-dark fw-500 fs-20">
                        03
                      </strong>
                      <span className="fs-16">
                        bed
                      </span>
                    </li>
                    <li className="text-end">
                      <strong className="d-block color-dark fw-500 fs-20">
                        02
                      </strong>
                      <span className="fs-16">
                        bath
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="button-group gutter d-flex justify-content-between align-items-center">
              <a
                className="btn-three"
                href="/listing_details_02"
              >
                <span>
                  Check Full Details
                </span>
              </a>
              <a
                className="btn-four rounded-circle"
                href="/listing_details_02"
              >
                <i className="bi bi-arrow-up-right" />
              </a>
            </div>
          </div>
        </div>
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
  <div className="block-feature-four mt-170 xl-mt-130 md-mt-40">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 d-flex order-lg-last">
          <div className="ps-xxl-5 ms-xl-4 pt-100 xl-pt-80 pb-45 w-100 h-100 wow fadeInRight">
            <div className="title-one mb-60 lg-mb-40">
              <div className="upper-title">
                CB ESTIMATE
              </div>
              <h3>
                Get quick{' '}
                <span>
                  estimate
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
                {' '}on your                                    home.
              </h3>
              <p className="fs-24 color-dark">
                Master your property's valuation for a poised entry                                    into the real estate market, armed with self-assurance and insight.
              </p>
            </div>
            <form className="me-xl-4">
              <input
                placeholder="Your Email Address..."
                type="email"
              />
              <button>
                Find                                    out
              </button>
            </form>
            <div className="fs-16 mt-10 opacity-75">
              *For accurate info please{' '}
              <a
                className="fst-italic color-dark text-decoration-underline"
                href="/contact"
              >
                contact                                    us.
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-flex">
          <div className="img-gallery position-relative z-1 w-100 h-100 me-lg-5 wow fadeInLeft">
            <div
              className="img-bg"
              style={{
                backgroundImage: 'url(/assets/images/media/img_11.jpg)'
              }}
            />
            <div className="card-one">
              <div className="text text-center z-1">
                <h6>
                  Your estimate is in!
                </h6>
                <h3>
                  $378,30.00
                </h3>
              </div>
              <img
                alt=""
                className="lazy-img w-100"
                data-nimg="1"
                decoding="async"
                height="288"
                loading="lazy"
                src="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fscreen_12.4300d0df.png&w=828&q=75"
                srcSet="/assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fscreen_12.4300d0df.png&w=384&q=75 1x, /assets/image?url=%2Fassets%2Fstatic%2Fmedia%2Fscreen_12.4300d0df.png&w=828&q=75 2x"
                style={{
                  color: 'transparent'
                }}
                width="384"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="block-feature-five position-relative z-1 pb-130 xl-pb-100 lg-pb-80 bg-pink pt-100 lg-pt-80 mt-225 xl-mt-200 lg-mt-150">
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
  <div className="fancy-banner-three position-relative text-center z-1 pt-200 xl-pt-150 lg-pt-100 pb-250 xl-pb-200 lg-pb-120">
    <div className="container">
      <div className="row">
        <div className="col-xl-7 col-md-8 m-auto">
          <div className="title-one mb-45 md-mb-30">
            <h2>
              Any Inquiry?{' '}
              <span>
                Feel free
                <img
                  alt=""
                  className="lazy-img"
                  data-nimg="1"
                  decoding="async"
                  height="18"
                  loading="lazy"
                  src="/assets/static/media/title_shape_08.33e1b396.svg"
                  style={{
                    color: 'transparent'
                  }}
                  width="327"
                />
              </span>
              {' '}To contact Us.
            </h2>
          </div>
          <a
            className="btn-five text-uppercase"
            href="/contact"
          >
            SEND MESSAGE
          </a>
        </div>
      </div>
    </div>
    <img
      alt=""
      className="lazy-img shapes w-100 illustration"
      data-nimg="1"
      decoding="async"
      height="607"
      loading="lazy"
      src="/assets/static/media/ils_02.ddb18430.svg"
      style={{
        color: 'transparent'
      }}
      width="1800"
    />
  </div>
</div>
  )
}

export default Home