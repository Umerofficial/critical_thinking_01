import React, { useState } from "react";

function Header() {
  const currentTheme = localStorage.getItem('theme');
    
  if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);
  }

  const [checked, setChecked] = useState(currentTheme === 'dark')
  
  function changeTheme(e){   
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      setChecked(true)
  }
  else {       
     document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        setChecked(false)
  }     
    
  }
  return (
    <div>  <header className="theme-main-menu menu-overlay menu-style-one sticky-menu ">
    <div className="inner-content gap-one">
      <div className="top-header position-relative">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo order-lg-0">
            <a
              className="d-flex align-items-center"
              href="/"
            >
              <img
                alt=""
                data-nimg="1"
                decoding="async"
                height="50"
                loading="lazy"
                src="/assets/static/media/logo_01.03026861.svg"
                style={{
                  color: 'transparent'
                }}
                width="130"
              />
            </a>
          </div>
          <div className="right-widget ms-auto ms-lg-0 me-3 me-lg-0 order-lg-3">
            <ul className="d-flex align-items-center style-none">
              <li>
                <a
                  className="btn-one"
                  data-bs-target="#loginModal"
                  data-bs-toggle="modal"
                  href="#"
                >
                  <i className="fa-regular fa-lock" />
                  {' '}
                  <span>
                    Login
                  </span>
                </a>
              </li>
              {/* <li className="d-none d-md-inline-block ms-3">
                <a
                  className="btn-two"
                  href="/dashboard/add-property"
                  target="_blank"
                >
                  <span>
                    Add Listing
                  </span>
                  {' '}
                  <i className="fa-thin fa-arrow-up-right" />
                </a>
              </li> */}
            </ul>
          </div>
          <nav className="navbar navbar-expand-lg p0 order-lg-2">
            <button
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              className="navbar-toggler d-block d-lg-none"
              data-bs-target="#navbarNav"
              data-bs-toggle="collapse"
              type="button"
            >
              <span />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarNav"
            >
              <ul className="navbar-nav align-items-lg-center">
                <li className="d-block d-lg-none">
                  <div className="logo">
                    <a
                      className="d-block"
                      href="/"
                    >
                      <img
                        alt=""
                        data-nimg="1"
                        decoding="async"
                        height="50"
                        loading="lazy"
                        src="/assets/static/media/logo_01.03026861.svg"
                        style={{
                          color: 'transparent'
                        }}
                        width="130"
                      />
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown undefined">
                  <a
                    className="nav-link                                                   "
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item  ">
                  <a
                    className="nav-link                                                           "
                    href="/market-analysis"
                  >
                    Maps
                  </a>
                </li>
                <li className="nav-item dropdown undefined">
                  <a
                    className="nav-link                                        "
                    href="./about"
                  >
                    About us{' '}
                  </a>
                </li>
                <li className="nav-item dropdown undefined">
                  <a
                    className="nav-link                                        "
                    href="./service"
                  >
                    Service
                  </a>
                </li>
                <li className="nav-item dropdown undefined">
                  <a
                    className="nav-link                                        "
                    href="./contact"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
  </div>
  );
}

export default Header;
