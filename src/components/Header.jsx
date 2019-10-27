import React from 'react';

const Header = () => (
  <header>
    <div className="navbar navbar-static-top">
      <div className="navbar-inner">
        <div className="container">
          <div className="logo">
            <a href="index.html">
              <img src="assets/img/logo.png" alt="" />
            </a>
          </div>

          <div className="navigation">
            <nav>
              <ul className="nav topnav">
                <li className="active">
                  <a href="index.html">
                    <i className="icon-home"></i> Home{' '}
                  </a>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <i className="icon-cog"></i> Features{' '}
                    <i className="icon-angle-down"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="media.html">Media</a>
                    </li>
                    <li>
                      <a href="color-scheme.html">10 Theme colors</a>
                    </li>
                    <li>
                      <a href="buttons.html">Buttons</a>
                    </li>
                    <li>
                      <a href="components.html">Components</a>
                    </li>
                    <li>
                      <a href="animations.html">56 Animations</a>
                    </li>
                    <li>
                      <a href="icons.html">Icons</a>
                    </li>
                    <li>
                      <a href="icon-variations.html">Icon variations</a>
                    </li>
                    <li className="dropdown">
                      <a href="#">
                        3rd level <i className="icon-angle-right"></i>
                      </a>
                      <ul className="dropdown-menu sub-menu">
                        <li>
                          <a href="#">Example menu</a>
                        </li>
                        <li>
                          <a href="#">Example menu</a>
                        </li>
                        <li>
                          <a href="#">Example menu</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <i className="icon-leaf"></i> Pages{' '}
                    <i className="icon-angle-down"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="about.html">About us</a>
                    </li>
                    <li>
                      <a href="pricingbox.html">Pricing boxes</a>
                    </li>
                    <li>
                      <a href="testimonials.html">Testimonials</a>
                    </li>
                    <li>
                      <a href="404.html">404</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <i className="icon-briefcase"></i> Portfolio{' '}
                    <i className="icon-angle-down"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="portfolio-2cols.html">Portfolio 2 columns</a>
                    </li>
                    <li>
                      <a href="portfolio-3cols.html">Portfolio 3 columns</a>
                    </li>
                    <li>
                      <a href="portfolio-4cols.html">Portfolio 4 columns</a>
                    </li>
                    <li>
                      <a href="portfolio-detail.html">Portfolio detail</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <i className="icon-book"></i> Blog{' '}
                    <i className="icon-angle-down"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="blog-left-sidebar.html">Blog left sidebar</a>
                    </li>
                    <li>
                      <a href="blog-right-sidebar.html">Blog right sidebar</a>
                    </li>
                    <li>
                      <a href="post-left-sidebar.html">Post left sidebar</a>
                    </li>
                    <li>
                      <a href="post-right-sidebar.html">Post right sidebar</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html">
                    <i className="icon-envelope-alt"></i> Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
