import React, { Component } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
import SearchForm from "../../components/SearchForm";
import SearchByCity from "../../components/SearchByCity";
import SearchByStates from "../../components/SearchByStates";
import SearchByDistance from "../../components/SearchByDistance";
import SearchByZipcode from "../../components/SearchByZipcode";
// import SearchResults from "../components/SearchResults";
import { Accordion, Button, Card } from "react-bootstrap";
import CollegeCard from "../../components/CollegeCard";

class Search extends Component {
  state = {
    search: "",
    cities: [],
    states: [],
    distances: [],
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

  // SearchByDistance
  handleInputChangeForDist = (event) => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmitForDist = (event) => {
    event.preventDefault();
    API.getByDistance(this.state.search)
      .then((res) => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        console.log(res.data);
        this.setState({ results: res.data.results, error: "" });
      })
      .catch((err) => this.setState({ error: err.message }));
  };

    // SearchByZipcode
    handleInputChangeForZip = (event) => {
      this.setState({ search: event.target.value });
    };
  
    handleFormSubmitForZip = (event) => {
      event.preventDefault();
      API.getByDistance(this.state.search)
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
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <h2 className="mb-0">
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Search by College Name
              </Accordion.Toggle>
            </h2>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <div>
                <Container style={{ minHeight: "80%" }}>
                  <SearchForm
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                    colleges={this.state.colleges}
                  />
                </Container>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header id="headingOne">
            <h2 className="mb-0">
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Search College by State
              </Accordion.Toggle>
            </h2>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <div>
                <Container style={{ minHeight: "80%" }}>
                  <SearchByStates
                    handleFormSubmit={this.handleFormSubmitForStates}
                    handleInputChange={this.handleInputChangeForStates}
                    states={this.state.states}
                  />
                </Container>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header id="headingOne">
            <h2 className="mb-0">
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
                Search College by City
              </Accordion.Toggle>
            </h2>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <div>
                <Container style={{ minHeight: "80%" }}>
                  <SearchByCity
                    handleFormSubmitForCity={this.handleFormSubmitForCity}
                    handleInputChangeForCity={this.handleInputChangeForCity}
                    cities={this.state.cities}
                  />
                </Container>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header id="headingOne">
            <h2 className="mb-0">
              <Accordion.Toggle as={Button} variant="link" eventKey="3">
                Search College by Distance
              </Accordion.Toggle>
            </h2>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <div>
                <Container style={{ minHeight: "80%" }}>
                  <SearchByDistance
                    handleFormSubmitForDist={this.handleFormSubmitForDist}
                    handleInputChangeForDist={this.handleInputChangeForDist}
                    distances={this.state.distances}
                  />
                </Container>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card><Card>
          <Card.Header id="headingOne">
            <h2 className="mb-0">
              <Accordion.Toggle as={Button} variant="link" eventKey="4">
                Search College by Zipcode
              </Accordion.Toggle>
            </h2>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              <div>
                <Container style={{ minHeight: "80%" }}>
                  <SearchByZipcode
                    handleFormSubmitForZip={this.handleFormSubmitForZip}
                    handleInputChangeForZip={this.handleInputChangeForZip}
                    zipcodes={this.state.zipcodes}
                  />
                </Container>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <CollegeCard colleges={this.state.results} />
      </Accordion>
    );
  }
}

export default Search;
