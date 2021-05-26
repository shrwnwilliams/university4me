import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

// import Navbar from '../../components/Navbar';
import { signin, signup } from '../../actions/auth'
import { AUTH } from '../../constants/actionTypes';

const initialState = { username: "", password: "" };

function Signup() {
  const [formData, setFormData] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)

    if (isSignup) {
      dispatch(signup(formData, history))
    } else {
      dispatch(signin(formData, history))
    }
    
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };
  // const [username, setUsername] = useState();
  // const [password, setPassword] = useState();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("user is " + username);
  //   console.log("pass is " + password);
  // };

  return (
    <div>
      <div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm-4 p-5 text-center">
          <form onSubmit={handleSubmit}>
            <div className="col-sm-12 pb-5">
              <h2>{isSignup ? "Sign Up" : "Login"}</h2>
            </div>
            <div className="row form-group justify-content-center">
              <div className="col-sm-8">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Username"
                  name="username"
                  onChange={handleChange}
                  // onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className="row form-group justify-content-center">
              <div className="col-sm-8">
                <input
                  className="form-control"
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  // onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button className="btn btn-success" type="submit">
              {isSignup ? "Sign Up" : "Login"}
            </button>
            <button onClick={switchMode}>
              {isSignup
                ? "Already have an account? Login"
                : "Don't have an account? Sign Up"}
            </button>
          </form>
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

export default Signup;
