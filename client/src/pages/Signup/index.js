import React, { useState } from "react";
// import Navbar from '../../components/Navbar';

function Signup() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("user is " + username);
    console.log("pass is " + password);
  };

  return (
    <div>
      <div className="row">
        <div className='col-sm-4'></div>
        <div className="col-sm-4 p-5 text-center">
            <form onSubmit={handleSubmit}>
            <div className='col-sm-12 pb-5'>
                <h2>Login / Signup</h2>
            </div>
            <div className="row form-group justify-content-center">
                <div className="col-sm-8">
                <input
                    className="form-control"
                    type="text"
                    placeholder="Username"
                    name="username"
                    onChange={(e) => setUsername(e.target.value)}
                />
                </div>
            </div>
            <div className="row form-group justify-content-center">
                <div className="col-sm-8">
                <input
                    className="form-control"
                    type="text"
                    placeholder="Password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                </div>
            </div>
            <button className='btn btn-success' type='submit'>
                Submit
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
};

export default Signup;
