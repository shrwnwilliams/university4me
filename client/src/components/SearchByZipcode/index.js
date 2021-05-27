import React from "react";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchByZipcode(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="zipcode">Enter Zipcode</label>
        <input
          value={props.search}
          onChange={props.handleInputChangeForZip}
          name="zipcode"
          list="zipcodes"
          type="text"
          className="form-control"
          placeholder="Type in a zipcode"
          id="zipcode"
        />
        <button type="submit" onClick={props.handleFormSubmitForZip} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchByZipcode;