import React from "react";

function Footer() {
  // function topFunction() {
  //   document.body.scrollTop = 0;
  //   document.documentElement.scrollTop = 0;
  // }
  return (
    <div>
      
  <div className="footer-four position-relative z-1">
    <div className="container container-large">
      <div className="bg-wrapper position-relative z-1">
        <div className="row">
          <div className="col-xxl-3 col-lg-4 mb-60">
            <div className="footer-intro">
              <div className="logo mb-20">
                <a href="/">
                  <img
                    alt=""
                    data-nimg="1"
                    decoding="async"
                    height="50"
                    loading="lazy"
                    src="/assets/static/media/logo_06.34e68bfb.svg"
                    style={{
                      color: 'transparent'
                    }}
                    width="50"
                  />
                </a>
              </div>
              <p className="mb-30 xs-mb-20">
                11910 Clyde Rapid Suite 210, Willyand, Virginia, United States
              </p>
              <a
                className="email tran3s mb-60 md-mb-30"
                href="/"
              >
                homyreal@demo.com
              </a>
              <ul className="style-none d-flex align-items-center social-icon">
                <li>
                  <a href="/">
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa-brands fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa-brands fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4 mb-30 col-lg-3 ms-auto">
            <div className="footer-nav ps-xl-5">
              <h5 className="footer-title">
                Links
              </h5>
              <ul className="footer-nav-link style-none">
                <li>
                  <a href="/">
                    Home
                  </a>
                </li>
                <li>
                {/* dashboard/membership */}
                  <a href="#"> 
                    Membership
                  </a>
                </li>
                <li>
                  <a href="/about">
                    About Company
                  </a>
                </li>
                <li>
                  <a href="#">
                    Blog
                  </a>
                </li>
                <li>
                {/* /blog_02 */}
                  <a href="#">
                    Explore Careers
                  </a>
                </li>
                <li>
                {/* /pricing_02 */}
                  <a href="#">
                    Pricing
                  </a>
                </li>
                <li>
                {/* /dashboard/dashboard-index */}
                  <a href="#">
                    Dashboard
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4 mb-30 col-lg-3">
            <div className="footer-nav undefined">
              <h5 className="footer-title">
                Legal
              </h5>
              <ul className="footer-nav-link style-none">
                <li>
                  <a href="#">
                    Terms & conditions
                  </a>
                </li>
                <li>
                  <a href="#">
                    Cookie
                  </a>
                </li>
                <li>
                  <a href="#">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href="#">
                    Faq’s
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4 mb-30 col-lg-2">
            <div className="footer-nav undefined">
              <h5 className="footer-title">
                New Listing
              </h5>
              <ul className="footer-nav-link style-none">
                <li>
                {/* /listing_01 */}
                  <a href="#">
                    ​Buy Apartments
                  </a>
                </li>
                <li>
                {/* /listing_02 */}
                  <a href="#">
                    Buy Condos
                  </a>
                </li>
                <li>
                {/* listing_03 */}
                  <a href="#">
                    Rent Houses
                  </a>
                </li>
                <li>
                {/* listing_04 */}
                  <a href="#">
                    Rent Industrial
                  </a>
                </li>
                <li>
                {/* /listing_05 */}
                  <a href="#">
                    Buy Villas
                  </a>
                </li>
                <li>
                {/* /listing_06 */}
                  <a href="#">
                    Rent Office
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <p className="m0 text-center fs-16">
          Copyright @2024 Homy inc.
        </p>
      </div>
    </div>
    <img
      alt=""
      className="lazy-img shapes shape_01"
      data-nimg="1"
      decoding="async"
      height="681"
      loading="lazy"
      src="/assets/static/media/ils_06.34a18c29.svg"
      style={{
        color: 'transparent'
      }}
      width="1800"
    />
  </div>
  <div className="scroll-top ">
    <i className="bi bi-arrow-up-short" />
  </div>
  <div className="Toastify" />
    </div>
  );
}

export default Footer;
