import React from "react";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchByDistance(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="distance">Enter Distance</label>
        <input
          value={props.distance}
          onChange={props.handleInputChangeForDist}
          name="distance"
          type="text"
          className="form-control"
          placeholder="Type in a distance"
          id="distance"
        />
        <label htmlFor="zipcode">Enter Zipcode</label>
        <input
          value={props.zipcode}
          onChange={props.handleInputChangeForZip}
          name="zipcode"
          type="text"
          className="form-control"
          placeholder="Type in a zipcode"
          id="zipcode"
        />
        <button type="submit" onClick={props.handleFormSubmitForDist} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchByDistance;