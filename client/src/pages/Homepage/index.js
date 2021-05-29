import React, { useState } from "react";
import { render } from "react-dom";
import "./style.css";
import background from "../../img/image1.jpg";

const Homepage = () => {
  //   const {imgClassList} = props;
  //   const {activeImgClass} = state;
  return (
    <div className="page">
      <div className="header-container">
        {/* {imgClassList.map(imgClass => {
              return (
                <div className={`header ${(imgClass === activeImgClass)? 'active' : ''}`} />
              )
          })} */}
      </div>
      <div className="row">
        <div className="col-sm-5 ml-5">
          <div className="d-flex flex-column bd-highlight col-sm-12">
            <div className="tags text-center">
              <a href="/search">Search for Schools!</a>
            </div>
            <div className="tags text-center">
              <a>View Your Favorites</a>
            </div>
            <div className="tags text-center">
              <a>Learn About Us</a>
            </div>
            <div className="tags text-center">
              <a>Contact Us</a>
            </div>
          </div>
        </div>
        <div className="para col-sm-6 ml-4">
          <h3>Planning for college doesn't have to be stressful.</h3>
          <p>
          Your mind is probably reeling from all of the college options. Beginning your 
          college search can be daunting so to make it easier we help guide you on searching 
          for colleges based of your criteria. At [educateMahSelf] you can search through 
          colleges with ease. Customize your search and create a personalized profile with your 
          ACT and SAT scores to compare colleges that are right for you. 
          </p>
        </div>
      </div>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
        crossOrigin="anonymous"
      />
    </div>
  );
};

export default Homepage;
