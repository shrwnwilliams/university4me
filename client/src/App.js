// import logo from './logo.svg';
import "./App.css";
import API from "./utils/API";
import { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Search from "./pages/Search";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const getAllSchools = () => {
    API.getAll(0)
      .then(function (res) {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    };

  const getByState = () => {
    API.getByState("NY")
      .then(function (res) {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getByCity = () => {
    API.getByCity("Syracuse")
      .then(function (res) {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getByName = () => {
    API.getByName("syr")
      .then(function (res) {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getById = () => {
    API.getById(196413)
      .then(function (res) {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getByDistance = () => {
    API.getByDistance(13214, 10)
      .then(function (res) {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  useEffect(() => {
    getAllSchools();
    // getByState();
    // getByCity();
    // getByName();
    // getById();
    // getByDistance();
  }, []);



  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/home" component={Homepage} />
          <Route exact path="/search" component={Search} />
          {/* <Route exact path="/login" component={Login} /> */}
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
