import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="college">College</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="college"
          list="colleges"
          type="text"
          className="form-control"
          placeholder="Type in the name of the college"
          id="college"
        />
        <datalist id="colleges">
          {props.colleges.map(college => (
            <option value={college} key={college} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;