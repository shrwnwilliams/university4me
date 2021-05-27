import React from "react";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchByDistance(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="distance">Enter Distance</label>
        <input
          value={props.search}
          onChange={props.handleInputChangeForDist}
          name="distance"
          list="distances"
          type="text"
          className="form-control"
          placeholder="Type in a distance"
          id="distance"
        />
        <datalist id="distances">
          {props.distances.map(distance => (
            <option value={distance} key={distance} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmitForDist} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchByDistance;