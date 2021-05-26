import React, { useState } from "react";
import { render } from "react-dom";
import style from "./style.css";
import background from '../../img/image1.jpg';

const Homepage = () => {
//   const {imgClassList} = props;
//   const {activeImgClass} = state;
  return (
    <div className='page'>
      <div className='header-container'>
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
              <a>Search for Schools!</a>
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
          <h3>Lorem Ipsum Dolor Sit</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque iaculis augue a eros rhoncus mattis. Nam mi ante,
            imperdiet et sapien non, facilisis lobortis quam. Sed tempor ante
            eget finibus eleifend. Cras vel leo sit amet libero lobortis
            vulputate. Nunc ut libero aliquet, porta ante non, pretium mauris.
            Nullam id orci vehicula, posuere risus sed, laoreet ante. Curabitur
            eu sem a metus euismod auctor nec a velit. Nunc dignissim ornare
            orci et feugiat. Morbi et eleifend lectus. Nulla in metus iaculis,
            vestibulum nisl eget, fringilla ipsum. Integer eu nulla vitae tortor
            mollis dapibus et ut leo.
          </p>
        </div>
      </div>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
        crossorigin="anonymous"
      />
    </div>
  );
};

export default Homepage;
