// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Search from "./pages/Search";
import User from './pages/User';
import Signup from './pages/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import OneSchool from "./components/OneSchool";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/home" component={Homepage} />
          <Route exact path="/search" component={Search} />
          <Route path="/signup" exact component={Signup} />
          <Route exact path='/profile' component={User} />
          <Route path="/college/:id" component={OneSchool} />
          {/* <Route exact path='/login' component={Signup} /> */}
          {/* <Route exact path="/login" component={Login} /> */}
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
