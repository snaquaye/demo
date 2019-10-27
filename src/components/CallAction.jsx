import React from 'react';

export const CallAction = (props) => {
  return (
    <div className="row">
      <div className="span12">
        <div className="call-action">
          <div className="text">
            <h2>{props.title}</h2>
            <p>
              {props.body}
            </p>
          </div>
          <div className="cta">
            <a className="btn btn-large btn-theme" href="#">
              <i className="icon-plane icon-white"></i> {props.btnText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
