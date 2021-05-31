import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

// import { render } from "react-dom";
import style from "./user.css";
import { actScores, satScores } from '../../actions/scores'

const initialsState = {
  math: "",
  english: "",
  writing: "",
  cumulative: ""
};

function User() {
  const [testData, setTestData] = useState(initialsState);
  const [isAct, setIsAct] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(isAct) {
      dispatch(actScores(testData, history))
    } else {
      dispatch(satScores(testData, history))
    }
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

  var getUser = JSON.parse(localStorage.getItem("profile"));
  var username = getUser.result.username;

  return (
    <div>
      <div className="backdrop">
        <div className="overlay">
          <div className="userinfo">
            <div className="col-sm-6">
              <h3>Username: {username}</h3>
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
                    {isAct ? "English:" : "Reading:"}
                    <input
                      className="form-control"
                      type="text"
                      placeholder={isAct ? "english:" : "reading:"}
                      name="english"
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
                ? "Have SAT scores? Click Here."
                : "Have ACT scores? Click Here."}
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
