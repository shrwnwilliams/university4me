// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Search from "./pages/Search";
import User from "./pages/User";
import Signup from "./pages/Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import OneSchool from "./components/OneSchool";
import Redirect from "./pages/Redirect";

function App() {
  return (
    <Router>
      <div>
          <Navbar />
          <Wrapper>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/home" component={Homepage} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/profile" component={User} />
              <Route path="/login" component={Signup} />
              <Route path="/redirect/:url" component={Redirect} />
              <Route path="/:id">
                <OneSchool />
              </Route>
              {/* <Route exact path="/login" component={Login} /> */}
            </Switch>
          </Wrapper>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
