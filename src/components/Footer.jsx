import React from 'react';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="span4">
            <div className="widget">
              <h5>Interesting pages</h5>
              <ul className="regular">
                <li><a href="#">About our company</a></li>
                <li><a href="#">How we do all stuff</a></li>
                <li><a href="#">Our recent works</a></li>
                <li><a href="#">Press releases</a></li>
                <li><a href="#">Get in touch with us</a></li>
              </ul>
            </div>
          </div>
          <div className="span4">
            <div className="widget">
              <h5>Flickr photostream</h5>
              <div className="flickr-badge">
                <script type="text/javascript" src="http://www.flickr.com/badge_code_v2.gne?count=9&amp;display=random&amp;size=s&amp;layout=x&amp;source=user&amp;user=34178660@N03"></script>

              </div>
              <div className="clear"></div>
            </div>
          </div>
          <div className="span4">
            <div className="widget">
              <h5>How to find us</h5>
              <address>
								<i className="icon-home"></i> <strong>Lumia company, Inc.</strong><br />
								X104 Awesome ville, Suite AB12<br />
								Jakarta 12420 Indonesia
								</address>
              <p>
                <i className="icon-phone"></i> (123) 456-7890 - (123) 555-8890<br />
                <i className="icon-envelope-alt"></i> email@domainname.com
              </p>
            </div>
            <div className="widget">
              <ul className="social">
                <li><a href="#" data-placement="bottom" title="" data-original-title="Twitter"><i className="icon-twitter icon-square icon-32"></i></a></li>
                <li><a href="#" data-placement="bottom" title="" data-original-title="Facebook"><i className="icon-facebook icon-square icon-32"></i></a></li>
                <li><a href="#" data-placement="bottom" title="" data-original-title="Linkedin"><i className="icon-linkedin icon-square icon-32"></i></a></li>
                <li><a href="#" data-placement="bottom" title="" data-original-title="Pinterest"><i className="icon-pinterest icon-square icon-32"></i></a></li>
                <li><a href="#" data-placement="bottom" title="" data-original-title="Google plus"><i className="icon-google-plus icon-square icon-32"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="verybottom">
        <div className="container">
          <div className="row">
            <div className="span6">
              <p>
                © Lumia - All right reserved
              </p>
            </div>
            <div className="span6">
              <div className="pull-right">
                <div className="credits">
                  Created by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
