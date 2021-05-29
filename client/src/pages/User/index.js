import React, { useState } from "react";
import { render } from "react-dom";
import style from "./user.css";

const initialState = {
  act: [{ math: "", english: "", writing: "", cumulative: "" }],
  sat: [{ math: "", english: "", writing: "" }],
};

function User() {
  const [testData, setTestData] = useState(initialState);
  const [isACT, setIsAct] = useState(true);

  const handleChange = (e) => {
    e.preventDefault();

    setIsAct((prevIsAct) => !prevIsAct);

    if(isACT) {
      dispatch(actScore(testData, history))
    } else {
      dispatch(satScore(testData, history))
    }
  };



  const handleSubmit = (e) => {
    console.log("hello");
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
              <select name="selectList" id="selectList">
                <option
                  isACT={true}
                  value="ACT"
                  type="submit"
                  onClick={handleChange}
                >
                  ACT
                </option>
                <option
                  isACT={false}
                  value="SAT"
                  type="submit"
                  onClick={handleChange}
                >
                  SAT
                </option>
              </select>
              <div>
                <form onSubmit={handleSubmit}>
                  <label>
                    Math:
                    <input
                      className="form-control"
                      type="text"
                      placeholder=""
                      name="satMath"
                      value={this.state.satMath}
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
                    />
                  </label>
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
          crossorigin="anonymous"
        />
      </div>
    </div>
  );
}

export default User;
