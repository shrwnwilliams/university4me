import React, { useState } from "react";

import { render } from "react-dom";
import style from "./user.css";

const initialState = {
  act: [{ math: "", english: "", writing: "", cumulative: "" }],
  sat: [{ math: "", english: "", writing: "" }],
};

function User() {
  const [testData, setTestData] = useState(initialState);
  const [isAct, setIsAct] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // if(isACT) {
    //   dispatch(actScore(testData, history))
    // } else {
    //   dispatch(satScore(testData, history))
    // }
  };

  const handleChange = (e) => {
    setTestData({ ...testData, [e.target.name]: e.target.value });
    console.log(setTestData)
  };
  const switchMode = () => {
    console.log(isAct);
    setIsAct((prevIsAct) => !prevIsAct);
    console.log(isAct);
  };
  return (
    <div>
      <div className="backdrop">
        <div className="overlay">
          <div className="userinfo">
            <div className="col-sm-6">
              <h3>Username: {User.username}</h3>
              {/* <h4>User-Id: {User.userid}</h4> */}
            </div>
            <div className="col-sm-6">
            <h5>{isAct ? "ACT" : "SAT"}</h5>
              <div>
                <form onSubmit={handleSubmit}>
                  <label>
                    Math:
                    <input
                      className="form-control"
                      type="text"
                      placeholder="math"
                      name="math"
                      // value={this.state.satMath}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    Reading:
                    <input
                      className="form-control"
                      type="text"
                      placeholder="reading"
                      name="reading"
                      // value={this.state.satReading}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    Writing:
                    <input
                      className="form-control"
                      type="text"
                      placeholder="writing"
                      name="writing"
                      // value={this.state.satWriting}
                      onChange={handleChange}
                    />
                  </label>

                  {isAct && (
                    <label>
                      Cumulative:
                      <input
                        className="form-control"
                        type="text"
                        placeholder="cumulative"
                        name="cumulative"
                        // value={this.state.actCum}
                        onChange={handleChange}
                      />
                    </label>
                  )}
                  <button className="btn btn-success float-right" type="submit">
                    Submit
                  </button>
                  <button onClick={switchMode}>
              {isAct
                ? "Have ACT scores? Click Here."
                : "Have SAT scores? Click Here."}
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
    </div>
  );
}

export default User;
