import React, { useState } from "react";
import { render } from "react-dom";
import { Component } from "react";
import style from "./user.css";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = this.handleChangeSat.bind(this);
    this.state = this.handleChangeAct.bind(this);
    this.handler = this.handler.bind(this);
    this.state = { mode: "act" };
  }

  handleChangeSat = () => {
    console.log('SAT Mode');
    this.setState({
      mode: "sat",
    });
  };

  handleChangeAct = () => {
    console.log('ACT Mode');
    this.setState({
      mode: "act",
    });
  };

  handler = (e) => {
    e.preventDefault();
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: value,
    });
  };

  render = () => {
    if (this.state.mode == "act") {
      return (
        <div className="backdrop">
          <div className="overlay">
            <div className="userinfo">
              <div className="col-sm-6">
                <h3>Username: {User.username}</h3>
                <h4>User-Id: {User.userid}</h4>
              </div>
              <div className="col-sm-6">
                <select name="selectList" id="selectList">
                  <option
                    value="ACT"
                    type="submit"
                    onChange={this.handleChangeAct}
                  >
                    ACT
                  </option>
                  <option
                    value="SAT"
                    type="submit"
                    onChange={this.handleChangeSat}
                  >
                    SAT
                  </option>
                </select>
                <div>
                  <form onSubmit={this.handler}>
                    <label>
                      Math:
                      <input
                        className="form-control"
                        type="text"
                        placeholder=""
                        name="actMath"
                        value={this.state.actMath}
                        onChange={this.handler}
                      />
                    </label>
                    <label>
                      English:
                      <input
                        className="form-control"
                        type="text"
                        placeholder=""
                        name="actEnglish"
                        value={this.state.actEnglish}
                        onChange={this.handler}
                      />
                    </label>
                    <label>
                      Writing:
                      <input
                        className="form-control"
                        type="text"
                        placeholder=""
                        name="actWriting"
                        value={this.state.actWriting}
                        onChange={this.handler}
                      />
                    </label>
                    <label>
                      Cumulative:
                      <input
                        className="form-control"
                        type="text"
                        placeholder=""
                        name="actCum"
                        value={this.state.actCum}
                        onChange={this.handler}
                      />
                    </label>
                    <button
                      className="btn btn-success float-right"
                      type="submit"
                    >
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
            crossorigin="anonymous"
          />
        </div>
      );
    } else if (this.state.mode == "sat") {
      return (
        <div className="backdrop">
          <div className="overlay">
            <div className="userinfo">
              <div className="col-sm-6">
                <h3>Username: {User.username}</h3>
                <h4>User-Id: {User.userid}</h4>
              </div>
              <div className="col-sm-6">
                <select name="selectList" id="selectList">
                  <option
                    value="ACT"
                    type="submit"
                    onClick={this.handleChangeAct}
                  >
                    ACT
                  </option>
                  <option
                    value="SAT"
                    type="submit"
                    onClick={this.handleChangeSat}
                  >
                    SAT
                  </option>
                </select>
                <div>
                  <form onSubmit={this.handler}>
                    <label>
                      Math:
                      <input
                        className="form-control"
                        type="text"
                        placeholder=""
                        name="satMath"
                        value={this.state.satMath}
                        onChange={this.handler}
                      />
                    </label>
                    <label>
                      Reading:
                      <input
                        className="form-control"
                        type="text"
                        placeholder=""
                        name="satReading"
                        value={this.state.satReading}
                        onChange={this.handler}
                      />
                    </label>
                    <label>
                      Writing:
                      <input
                        className="form-control"
                        type="text"
                        placeholder=""
                        name="satWriting"
                        value={this.state.satWriting}
                        onChange={this.handler}
                      />
                    </label>
                    <button
                      className="btn btn-success float-right"
                      type="submit"
                    >
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
            crossorigin="anonymous"
          />
        </div>
      );
    }
  };
}

export default User;
