import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";

function Notfound() {
  return (
    <>
      <div className="mi-about-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="notfound">
                <div className="notfound-inner text-center">
                  <h1>404</h1>
                  <h3>Whoops!!! Page not found!</h3>
                  <AniLink duration={0.5} direction="left" swipe to="/" entryOffset={100} className="link" activeClassName="active">
                  <button className="mi-button">Back to Home</button>
                  </AniLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notfound;
