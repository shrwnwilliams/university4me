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

function App() {
  const getSchools = () => {
    API.getAll().then(function (res) {
      // console.log(res.json());
    });
  };

  useEffect(() => {
    getSchools();
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
