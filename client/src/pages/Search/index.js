import React, { Component } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
import SearchForm from "../../components/SearchForm";
import SearchByStates from "../../components/SearchByStates";
// import SearchResults from "../components/SearchResults";

class Search extends Component {
  state = {
    search: "",
    states: [],
    colleges: [],
    results: [],
    error: "",
  };

  componentDidMount() {
    API.getAll()
      .then(res =>{
        console.log(res.data);
        this.setState({ colleges: res.data.results })})
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getByState(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        console.log(res.data);
        this.setState({ results: res.data.results, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };

  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search University</h1>
          <SearchByStates 
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          states={this.state.states}
          />
          {/* <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            colleges={this.state.colleges}
          /> */}
        </Container>
      </div>
    );
  }
}

export default Search;
