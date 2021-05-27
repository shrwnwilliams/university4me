import React from "react";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchByCity(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="city">City</label>
        <input
          value={props.search}
          onChange={props.handleInputChangeForCity}
          name="city"
          list="cities"
          type="text"
          className="form-control"
          placeholder="Type in a city"
          id="city"
        />
        <button type="submit" onClick={props.handleFormSubmitForCity} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchByCity;