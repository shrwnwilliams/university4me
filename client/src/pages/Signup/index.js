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
    <div className='container' style={{margin: '0px', maxHeight: '100%', height:'100%', maxWidth: '100%'}}>
      <div className='h-25 d-flex align-items-center justify-content-center'>
        <div>
            <h2>Login / Signup</h2>
        </div>
        <form onSubmit={handleSubmit}>
            <div className="col-sm-6 mt-3 px-5">
            <div className="row form-group">
                <div className="col-sm-6">
                <input
                    className="form-control"
                    type="text"
                    placeholder="Username"
                    name="username"
                    onChange={(e) => setUsername(e.target.value)}
                />
                </div>
            </div>
            <div className="row form-group">
                <div className="col-sm-6">
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
            </div>
        </form>
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
