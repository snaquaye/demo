import React from 'react';

export const Carousel = () => (
  <div className="container">
    <div className="row">
      <div className="span12">
        <div id="mainslider" className="flexslider">
          <ul className="slides">
            <li data-thumb="assets/img/slides/flexslider/img1.jpg">
              <img src="assets/img/slides/flexslider/img1.jpg" alt="" />
              <div className="flex-caption primary">
                <h2>Bootstrap</h2>
                <p>
                  Lorem ipsum dolor sit amet vix ceteros noluisse intellegat
                </p>
              </div>
            </li>
            <li data-thumb="assets/img/slides/flexslider/img2.jpg">
              <img src="assets/img/slides/flexslider/img2.jpg" alt="" />
              <div className="flex-caption warning">
                <h2>Responsive layout</h2>
                <p>
                  Lorem ipsum dolor sit amet vix ceteros noluisse intellegat
                </p>
              </div>
            </li>
            <li data-thumb="assets/img/slides/flexslider/img3.jpg">
              <img src="assets/img/slides/flexslider/img3.jpg" alt="" />
              <div className="flex-caption success">
                <h2>Rich of features</h2>
                <p>
                  Lorem ipsum dolor sit amet vix ceteros noluisse intellegat
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
