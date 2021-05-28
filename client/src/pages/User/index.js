import React, { useState } from "react";
import { render } from "react-dom";
import style from "./user.css";

const User = () => {
  const [state, setState] = React.useState({
    actMath: "",
    actEnglish: "",
    actWriting: "",
    actCum: "",
  });
  const handler = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  return (
    <div className="backdrop">
      <div className="overlay">
        <div className="userinfo">
          <div className="col-sm-6">
            <h3>Username: {User.username}</h3>
            <h4>User-Id: {User._id}</h4>
          </div>
          <div className="col-sm-6">
            <select name="selectList" id="selectList">
              <option value="ACT">ACT</option>
              <option value="SAT">SAT</option>
            </select>
            <div className="visible1">
              <form onSubmit={handler}>
                <label>
                  Math:
                  <input
                    className="form-control"
                    type="text"
                    placeholder=""
                    name="actMath"
                    value={state.actMath}
                    onChange={handler}
                  />
                </label>
                <label>
                  English:
                  <input
                    className="form-control"
                    type="text"
                    placeholder=""
                    name="actEnglish"
                    value={state.actEnglish}
                    onChange={handler}
                  />
                </label>
                <label>
                  Writing:
                  <input
                    className="form-control"
                    type="text"
                    placeholder=""
                    name="actWriting"
                    value={state.actWriting}
                    onChange={handler}
                  />
                </label>
                <label>
                  Cumulative:
                  <input
                    className="form-control"
                    type="text"
                    placeholder=""
                    name="actCum"
                    value={state.actCum}
                    onChange={handler}
                  />
                </label>
                <button className="btn btn-success float-right" type="submit">
                  Submit
                </button>
              </form>
            </div>
            <div className="visible2">
              <form onSubmit={handler}>
                <input
                  className="form-control"
                  type="choice"
                  placeholder=""
                  name="act"
                  onChange={handler}
                />
                <button className="btn btn-success float-right" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div></div>
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

export default User;
