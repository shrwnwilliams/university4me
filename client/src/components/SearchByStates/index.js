import React from "react";

function SearchByStates(props) {
  return (
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <label class="input-group-text" for="inputGroupSelect01">
          State:
        </label>
      </div>
      <select class="custom-select" id="inputGroupSelect01" onChange={props.handleInputChange}>
        <option selected>Choose...</option>
        <option value="AK">AK</option>
        <option value="AL">AL</option>
        <option value="AR">AR</option>
      </select>
      <button onClick={props.handleFormSubmit}>Submit</button>
    </div>
  );
}

export default SearchByStates;
