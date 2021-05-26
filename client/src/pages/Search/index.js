import React, { Component } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
import SearchForm from "../../components/SearchForm";
import SearchByCity from "../../components/SearchByCity";
import SearchByStates from "../../components/SearchByStates";
// import SearchResults from "../components/SearchResults";
import { Card } from "react-bootstrap";
import CollegeCard from "../../components/CollegeCard";

class Search extends Component {
  state = {
    search: "",
    cities: [],
    states: [],
    colleges: [],
    results: [],
    error: "",
  };

  componentDidMount() {
    API.getAll()
      .then((res) => {
        // console.log(res.data);
        this.setState({ colleges: res.data.results });
      })
      .catch((err) => console.log(err));
  }

  // SearchByName -- of college
  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.getByName(this.state.search)
      .then((res) => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        // console.log(res.data);
        this.setState({ results: res.data.results, error: "" });
        console.log(this.state.results);
      })
      .catch((err) => this.setState({ error: err.message }));
  };

  // SearchByStates
  handleInputChangeForStates = (event) => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmitForStates = (event) => {
    event.preventDefault();
    API.getByState(this.state.search)
      .then((res) => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        console.log(res.data);
        this.setState({ results: res.data.results, error: "" });
      })
      .catch((err) => this.setState({ error: err.message }));
  };

  // SearchByCity
  handleInputChangeForCity = (event) => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmitForCity = (event) => {
    event.preventDefault();
    API.getByCity(this.state.search)
      .then((res) => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        console.log(res.data);
        this.setState({ results: res.data.results, error: "" });
      })
      .catch((err) => this.setState({ error: err.message }));
  };

  render() {
    return (
      // <div>
      //   <Container style={{ minHeight: "80%" }}>
      //     <h1 className="text-center">Search University</h1>
      //     <SearchForm
      //       handleFormSubmit={this.handleFormSubmit}
      //       handleInputChange={this.handleInputChange}
      //       colleges={this.state.colleges}
      //     />
      //     <SearchByStates
      //       handleFormSubmit={this.handleFormSubmitForStates}
      //       handleInputChange={this.handleInputChangeForStates}
      //       states={this.state.states}
      //     />
      //   </Container>
      // </div>
      <div>
      <div className="accordion" id="accordionExample">
        <div className="card">
          <div className="card-header" id="headingOne">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-left"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Search by College Name
              </button>
            </h2>
          </div>

          <div
            id="collapseOne"
            className="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div className="card-body">
              <div>
                <Container style={{ minHeight: "80%" }}>
                  <SearchForm
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                    colleges={this.state.colleges}
                  />
                </Container>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingTwo">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-left collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Search College by State
              </button>
            </h2>
          </div>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionExample"
          >
            <div className="card-body">
              <div>
                <Container style={{ minHeight: "80%" }}>
                  <SearchByStates
                    handleFormSubmit={this.handleFormSubmitForStates}
                    handleInputChange={this.handleInputChangeForStates}
                    states={this.state.states}
                  />
                </Container>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingThree">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-left collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Search College by City
              </button>
            </h2>
          </div>
          <div
            id="collapseThree"
            className="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordionExample"
          >
            <div className="card-body">
              <div>
                <Container style={{ minHeight: "80%" }}>
                  <SearchByCity
                    handleFormSubmitForCity={this.handleFormSubmitForCity}
                    handleInputChangeForCity={this.handleInputChangeForCity}
                    cities={this.state.cities}
                  />
                </Container>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingThree">
            <h2 className="mb-0">
              <button
                className="btn btn-link btn-block text-left collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Search College by Zipcode
              </button>
            </h2>
          </div>
          <div
            id="collapseThree"
            className="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordionExample"
          >
            <div className="card-body">
              And lastly, the placeholder content for the third and final
              accordion panel. This panel is hidden by default.
            </div>
          </div>
        </div>
      </div>
      <CollegeCard colleges={this.state.results} />
      </div>
    );
  }
}

export default Search;
